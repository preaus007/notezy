import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import NoteDetailsPage from "./Pages/NoteDetailsPage";
import NoteUpdatePage from "./Pages/NoteUpdatePage";

function App() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black [background-image:radial-gradient(#ffffff33_1px,#000000_1px)] [background-size:20px_20px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailsPage />} />
          <Route path="/note/edit/:id" element={<NoteUpdatePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
