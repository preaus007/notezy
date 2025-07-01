import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="max-w-6xl mx-auto p-4">
        <nav className="flex justify-between text-center">
          <h1 className="text-3xl font-mono font-bold tracking-tight text-primary">
            Notezy
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
