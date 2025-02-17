"use client";

import { useState } from "react";
import Hamburger from "./ui/Hamburger";
import Xmark from "./ui/XMark";
import MobileMenu from "./ui/MenuMobile";
import DesktopNavigation from "./ui/DesktopNavigation";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex flex-col h-screen">
        <nav className="static px-3 py-4 flex justify-between items-center shadow">
          <span>Logo</span>
          <MobileMenu />
          <DesktopNavigation />
        </nav>
        <div className="flex-1 flex">
          <h1>Hero</h1>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default Home;
