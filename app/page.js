"use client";

import { useState } from "react";
import Hamburger from "./ui/Hamburger";
import Xmark from "./ui/XMark";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex flex-col h-screen">
        <nav className="mx-3 my-4 flex justify-between items-center">
          <span>Logo</span>

          <span onClick={handleMenuClick}>
            {isMenuOpen ? (
              <Xmark className="w-8" />
            ) : (
              <Hamburger className="w-8" />
            )}
          </span>
        </nav>
        <div className="flex-1 bg-teal-600">Hero</div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default Home;
