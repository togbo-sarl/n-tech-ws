import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DesktopNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
      submenu: [
        { label: "Consultation", href: "/services/consultation" },
        { label: "Développement", href: "/services/development" },
        { label: "Design", href: "/services/design" },
      ],
    },
    {
      label: "À propos",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="hidden lg:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Navigation principale */}
          <div className="flex space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 hover:text-yellow-600 transition-colors"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>

                {/* Sous-menu */}
                {item.submenu && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                          role="menuitem"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-yellow-600 transition-colors">
              Se connecter
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
