import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex gap-44 justify-center p-4 bg-sky-600">
      <Link to="/store">
        <h1 className="">Home</h1>
      </Link>
      <Link to="/products">
        <h1 className="">Products</h1>
      </Link>
      <Link to="/sale">
        <h1 className="">Sale</h1>
      </Link>
    </nav>
  );
}
