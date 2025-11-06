"use client";

import { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  //VERIFICACION DEL COMPONENTE EN BASE EN LOCALSTORE O EN EL DISPOSITIVO
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  //BlOQUEAR EL SCROLL CUANDO EL MENU ESTE ABIERTO
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  //FUNCION CAMBIAR EL TEMA Y GUARDARLO EN LOCAL STORAGE
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  //FUNCION MENU HAMBURGUESA
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav
        className="relative z-50 border-gray-200 transition-colors duration-200"
        style={{
          backgroundColor: "var(--navBackground)",
        }}
      >
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/">
            <Image src={Logo} className="w-24" alt="Logo" />
          </a>

          {/* Botón Dark/Light Mode */}
          <div className="flex md:hidden items-center md:order-2 space-x-2">
            <button
              onClick={toggleDarkMode}
              type="button"
              className={`inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm ${
                isDarkMode
                  ? "text-yellow-500 hover:bg-gray-100 ring-gray-200"
                  : "text-blue-500 hover:bg-gray-700 ring-gray-600"
              } rounded-lg  focus:outline-none focus:ring-2 transition-colors`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                // Icono de Luna (para cambiar a Dark Mode)
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            {/* Botón Hamburguesa */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Menú Desktop */}
          <div
            className="hidden w-full md:block md:w-auto md:order-1"
            id="navbar-default"
          >
            <ul className="justify-center items-start md:items-center font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm md:p-0 dark:text-white"
                  aria-current="page"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Contact
                </a>
              </li>
              <button
                onClick={toggleDarkMode}
                type="button"
                className={`hidden md:inline-block items-center p-2 w-10 h-10 justify-center text-sm ${
                  isDarkMode
                    ? "text-yellow-500 hover:bg-gray-100 ring-gray-200"
                    : "text-blue-500 hover:bg-gray-700 ring-gray-600"
                } rounded-lg  focus:outline-none focus:ring-2 transition-colors`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  // Icono de Luna (para cambiar a Dark Mode)
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </ul>
          </div>
        </div>
      </nav>

      {/*OVERLAY OSCURO*/}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      {/*MENU MOBILE LATERAL*/}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 md:hidden transform transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "var(--navBackground)" }}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2
              className="text-lg font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Menu
            </h2>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links del menú */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
