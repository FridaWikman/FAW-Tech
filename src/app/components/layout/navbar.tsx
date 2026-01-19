"use client";
import Link from "next/link";
import UiButton from "../ui/UiButton";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);

  const links = [
    // { name: "Projekt", to: "/projects" },
    { name: "Tjänster", to: "/services" },
    { name: "Om oss", to: "/about" },
    { name: "Kontakt", to: "/contact" },
  ];

  return (
    <>
      <div className="border-b border-gray-300 h-[10vh] flex items-center justify-between p-7 font-bold ">
        <div>
          <Link href="/" className="text-orange-400">
            FAW Tech
          </Link>
        </div>
        <div className="hidden md:flex justify-end gap-5 text-gray-400 hover:cursor-pointer">
          {links.map((link, index) => {
            return (
              <Link href={link.to} key={index}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex">
          <UiButton buttonName="Få offert" />
        </div>

        <div className="flex md:hidden justify-end">
          {!showBurger && (
            <button
              className=" cursor-pointer"
              onClick={() => setShowBurger(true)}
              aria-label="Öppna meny"
            >
              <Icon icon="material-symbols:menu" width="32" height="32" />
            </button>
          )}
        </div>
        {showBurger && (
          <div
            className={`fixed top-0 right-0 h-full w-[50%] sm:w-[30%] bg-theme-white shadow-lg transition-transform duration-300 z-60 ${
              showBurger ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative h-full w-full px-6 pt-6 flex flex-col items-end">
              <button
                onClick={() => setShowBurger(false)}
                className="mb-8 cursor-pointer"
                aria-label="Stäng meny"
              >
                <Icon
                  icon="material-symbols:close-rounded"
                  width="32"
                  height="32"
                />
              </button>
              <nav className="flex flex-col items-end gap-6 text-2xl w-full">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.to}
                    onClick={() => setShowBurger(false)}
                    className="accent-hover transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
