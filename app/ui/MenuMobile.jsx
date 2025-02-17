import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { menuItems } from "../utils/constances";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Empêcher le défilement du body quand le menu est ouvert
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="lg:hidden">
      {/* Bouton hamburger */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg  hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Menu principal */}
      <men
        className={`fixed right-0 top-0 w-5/6 h-screen bg-teal-400 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-4 px-6 text-gray-800 hover:bg-teal-300 transition-colors duration-200"
              onClick={() => {
                toggleMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </men>
    </div>
  );
};

export default MobileMenu;
