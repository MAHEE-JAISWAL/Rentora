import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
  const dropdownRef = useRef(null);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-black flex items-center gap-2">
          Rentora
        </a>

        {/* Nav Links */}
        <ul
  className={`${
    menuOpen ? "block" : "hidden"
  } md:flex items-center gap-6 text-gray-700 font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none`}
>
  <li>
    <a href="/#Home" className="block px-4 py-2 md:p-0 hover:text-black">
      Home
    </a>
  </li>
  <li>
    <a href="/#featured-categories" className="block px-4 py-2 md:p-0 hover:text-black">
      Categories
    </a>
  </li>
  <li>
    <a href="/#how-it-works" className="block px-4 py-2 md:p-0 hover:text-black">
      How it Works
    </a>
  </li>
  <li>
    <a href="/contact" className="block px-4 py-2 md:p-0 hover:text-black">
      Contact
    </a>
  </li>
</ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Auth Buttons */}
          {!loggedIn ? (
            <a
              href="/register"
              className="border px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100"
            >
              Sign Up
            </a>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setShowDropdown(!showDropdown)}>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  👤
                </div>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow">
                  <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </a>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.href = "/login";
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;