import React from "react";
import { toast } from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-purple-500">Home Page</h2>
      <button
        className="btn btn-soft btn-warning"
        onClick={() => toast.success("Alart")}
      >
        Click
      </button>
    </div>
  );
};

export default HomePage;
