import React, { useEffect, useState } from "react";
import api from "../libs/axios";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { toast } from "react-hot-toast";
import NotFound from "../components/NotFound";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        if (res.data.success) {
          setIsRateLimited(false);
          setNotes(res.data.notes);
        }
      } catch (error) {
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Faild to load data");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length === 0 && !isRateLimited && <NotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
