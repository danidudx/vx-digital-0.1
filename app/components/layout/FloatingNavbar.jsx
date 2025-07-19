import React, { useState } from "react";

const FloatingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="fixed left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 mx-4 sm:mx-0"
        style={{
          top: "16px",
          width: "calc(100% - 32px)",
          maxWidth: "661.88px",
          height: "auto",
          minHeight: "64px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "100px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/icons/logo.svg"
            alt="Logo"
            className="w-8 h-5 sm:w-11 sm:h-7"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-200 px-2 py-1 font-gilroy-medium whitespace-nowrap"
            style={{
              color: "#FCFDF2",
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            Home
          </a>
          <a
            href="/about"
            className="flex items-center hover:opacity-80 transition-opacity duration-200 px-2 py-1 font-gilroy-medium whitespace-nowrap"
            style={{
              color: "#FCFDF2",
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            About Us
          </a>
          <a
            href="/our-effort"
            className="flex items-center hover:opacity-80 transition-opacity duration-200 px-2 py-1 font-gilroy-medium whitespace-nowrap"
            style={{
              background:
                "linear-gradient(102.19deg, #FF6E1F 43.05%, #FFFFFF 203.16%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            Our Effort
          </a>
        </div>

        {/* Desktop Book Appointment Button */}
        <a
          href="/booking"
          className="hidden sm:flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200 px-3 lg:px-4 flex-shrink-0"
          style={{
            minWidth: "160px",
            width: "auto",
            height: "40px",
            background: "#FFFFFF",
            border: "1px solid #FFFFFF",
            borderRadius: "58px",
            boxSizing: "border-box",
          }}
        >
          <span
            className="flex items-center text-nowrap font-gilroy-semibold text-black"
            style={{
              fontSize: "16px",
              lineHeight: "27.2px",
            }}
          >
            Book Appointment
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-1 flex-shrink-0"
          >
            <path
              d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
              stroke="#000000"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="fixed left-1/2 transform -translate-x-1/2 z-40 lg:hidden mx-4"
          style={{
            top: "88px",
            width: "calc(100% - 32px)",
            maxWidth: "661.88px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "24px",
            boxSizing: "border-box",
          }}
        >
          <div className="flex flex-col p-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className="flex items-center hover:opacity-80 transition-opacity duration-200 px-3 py-2 font-gilroy-bold text-body rounded-lg hover:bg-white/5"
                style={{ color: "#FCFDF2" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="flex items-center hover:opacity-80 transition-opacity duration-200 px-3 py-2 font-gilroy-medium text-body rounded-lg hover:bg-white/5"
                style={{ color: "#FCFDF2" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="/our-effort"
                className="flex items-center hover:opacity-80 transition-opacity duration-200 px-3 py-2 font-gilroy-medium text-body rounded-lg hover:bg-white/5"
                style={{
                  background:
                    "linear-gradient(102.19deg, #FF6E1F 43.05%, #FFFFFF 203.16%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Effort
              </a>
            </div>

            {/* Mobile Book Appointment Button */}
            <div className="pt-2 border-t border-white/10">
              <a
                href="/booking"
                className="w-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200 px-4 py-3"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  borderRadius: "58px",
                  boxSizing: "border-box",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-gilroy-semibold text-body text-black">
                  Book an Appointment
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667"
                    stroke="#000000"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingNavbar;
