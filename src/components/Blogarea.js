import React from "react";
import Blog from "./Blog";

export default function blogarea() {
  return (
    <div className="container">
      <div className="links">
        <a href="/">
          Recommended
        </a>
        <a href="/">
          Top picks
        </a>
      </div>
      <Blog />
    </div>
  );
}
