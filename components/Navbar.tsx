"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full bg-white">
      <div className="max-container padding-container">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-xl font-bold text-white">
              H
            </div>

            <span className="text-2xl font-bold text-green-90">
              HILINK
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={`relative py-2 text-[16px] font-semibold transition-all duration-300 ${isActive
                      ? "text-green-90"
                      : "text-gray-600 hover:text-green-90"
                      }`}
                  >
                    {link.label}

                    {/* ACTIVE INDICATOR */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-green-50" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* DESKTOP CTA */}


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-green-90 text-white transition-all duration-300 hover:bg-black lg:hidden"
          >
            {isMenuOpen ? (
              // X ICON
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // HAMBURGER ICON
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${isMenuOpen
            ? "max-h-[500px] pb-6 opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col gap-2 border-t border-gray-100 pt-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl px-5 py-4 text-[16px] font-semibold transition-all duration-300 ${isActive
                      ? "bg-green-90 text-white"
                      : "text-gray-700 hover:bg-green-50 hover:text-white"
                      }`}
                  >
                    {link.label}

                    <span className="text-lg">→</span>
                  </Link>
                </li>
              );
            })}

            {/* MOBILE CTA */}
            <li className="mt-2">
              <Link
                href="/sign-up"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl bg-green-50 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-90"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;