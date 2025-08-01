import React, { useState, useEffect, useRef } from "react";

const FloatingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: 0,
    width: 0,
  });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  // Update current path when component mounts and on route changes
  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };

    // Set initial path
    updatePath();

    // Listen for navigation changes (for SPAs)
    window.addEventListener("popstate", updatePath);

    // Also listen for pushstate/replacestate (for programmatic navigation)
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      updatePath();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      updatePath();
    };

    return () => {
      window.removeEventListener("popstate", updatePath);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  // Update spotlight position based on active link
  useEffect(() => {
    const updateSpotlight = () => {
      const activeRef = linkRefs.current[currentPath];
      const navElement = navRef.current;

      if (activeRef && navElement) {
        const navRect = navElement.getBoundingClientRect();
        const linkRect = activeRef.getBoundingClientRect();

        const relativeX = linkRect.left - navRect.left;
        const centerX = relativeX + linkRect.width / 2;

        setSpotlightPosition({
          x: centerX,
          width: linkRect.width + 40, // Add some padding around the link
        });
      }
    };

    // Small delay to ensure elements are rendered
    setTimeout(updateSpotlight, 100);

    // Update on window resize
    window.addEventListener("resize", updateSpotlight);
    return () => window.removeEventListener("resize", updateSpotlight);
  }, [currentPath]);

  const isActiveLink = (path) => {
    return currentPath === path;
  };

  const getLinkStyles = (path) => {
    const isActive = isActiveLink(path);

    return {
      color: "#FCFDF2",
      fontSize: "16px",
      lineHeight: "27.2px",
      opacity: isActive ? 1 : 0.8,
      transform: isActive ? "scale(1.05)" : "scale(1)",
      transition: "all 0.2s ease",
      textShadow: isActive ? "0 0 8px rgba(252, 253, 242, 0.3)" : "none",
    };
  };

  const getMobileLinkStyles = (path) => {
    const isActive = isActiveLink(path);

    return {
      color: "#FCFDF2",
      backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
      borderRadius: "8px",
      textShadow: isActive ? "0 0 8px rgba(252, 253, 242, 0.3)" : "none",
    };
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        ref={navRef}
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
        {/* Spotlight Effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(${spotlightPosition.width}px circle at ${spotlightPosition.x}px center, 
              rgba(255, 255, 255, 0.15) 0%, 
              rgba(255, 255, 255, 0.08) 30%, 
              rgba(255, 255, 255, 0.02) 60%, 
              transparent 100%)`,
            borderRadius: "100px",
            opacity: spotlightPosition.x > 0 ? 1 : 0,
          }}
        />

        {/* Enhanced glow effect for active link area */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(${
              spotlightPosition.width * 0.6
            }px circle at ${spotlightPosition.x}px center, 
              rgba(252, 253, 242, 0.1) 0%, 
              transparent 70%)`,
            borderRadius: "100px",
            opacity: spotlightPosition.x > 0 ? 1 : 0,
          }}
        />
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/icons/logo.png"
            alt="Logo"
            className="w-8 h-5 sm:w-11 sm:h-7"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-5">
          <a
            ref={(el) => (linkRefs.current["/"] = el)}
            href="/"
            className="flex items-center hover:opacity-80 transition-all duration-200 px-2 py-1 font-gilroy-medium whitespace-nowrap"
            style={getLinkStyles("/")}
          >
            Home
          </a>
          <a
            ref={(el) => (linkRefs.current["/about"] = el)}
            href="/about"
            className="flex items-center hover:opacity-80 transition-all duration-200 px-2 py-1 font-gilroy-medium whitespace-nowrap"
            style={getLinkStyles("/about")}
          >
            About Us
          </a>
          <a
            ref={(el) => (linkRefs.current["/our-effort"] = el)}
            href="/our-effort"
            className="flex items-center hover:opacity-80 transition-all duration-200 px-2 py-1 font-gilroy-medium whitespace-nowrap"
            style={getLinkStyles("/our-effort")}
          >
            Our Effort
          </a>
        </div>

        {/* Desktop Book Appointment Button */}
        <a
          ref={(el) => (linkRefs.current["/booking"] = el)}
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
            transform: isActiveLink("/booking") ? "scale(1.05)" : "scale(1)",
            boxShadow: isActiveLink("/booking")
              ? "0 0 15px rgba(255, 255, 255, 0.3)"
              : "none",
            transition: "all 0.2s ease",
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
            xmlns="http://www.w3.org/2000/png"
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
                className="flex items-center hover:opacity-80 transition-all duration-200 px-3 py-2 font-gilroy-bold text-body rounded-lg hover:bg-white/5"
                style={getMobileLinkStyles("/")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="flex items-center hover:opacity-80 transition-all duration-200 px-3 py-2 font-gilroy-medium text-body rounded-lg hover:bg-white/5"
                style={getMobileLinkStyles("/about")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="/our-effort"
                className="flex items-center hover:opacity-80 transition-all duration-200 px-3 py-2 font-gilroy-medium text-body rounded-lg hover:bg-white/5"
                style={getMobileLinkStyles("/our-effort")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Effort
              </a>
            </div>

            {/* Mobile Book Appointment Button */}
            <div className="pt-2 border-t border-white/10">
              <a
                href="/booking"
                className="w-full flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 px-4 py-3"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #FFFFFF",
                  borderRadius: "58px",
                  boxSizing: "border-box",
                  transform: isActiveLink("/booking")
                    ? "scale(1.02)"
                    : "scale(1)",
                  boxShadow: isActiveLink("/booking")
                    ? "0 0 15px rgba(255, 255, 255, 0.3)"
                    : "none",
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
