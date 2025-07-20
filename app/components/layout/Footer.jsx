import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      className="text-white px-4 py-8 md:py-12"
      style={{ backgroundColor: "#09090D" }}
    >
      {/* Orange Gradient Bar */}
      <div
        className="w-full mb-8 md:mb-12"
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, transparent 30%, #FF6E1F 50%, transparent 70%, transparent 100%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto">
        {/* Top Row - Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12">
          {/* Logo Section */}
          <div className="mb-6 lg:mb-0">
            <Link to="/">
              <img
                src="/icons/logo.svg"
                alt="Company Logo"
                className="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            <Link
              to="/"
              className="text-white hover:text-orange-500 transition-colors duration-200 text-sm md:text-base"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-orange-500 transition-colors duration-200 text-sm md:text-base"
            >
              About Us
            </Link>
            <Link
              to="/effort"
              className="text-white hover:text-orange-500 transition-colors duration-200 text-sm md:text-base"
            >
              Our Effort
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-orange-500 transition-colors duration-200 text-sm md:text-base"
            >
              Services
            </Link>
            <Link
              to="/privacy"
              className="text-white hover:text-orange-500 transition-colors duration-200 text-sm md:text-base"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-white hover:text-orange-500 transition-colors duration-200 text-sm md:text-base"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>

        {/* Bottom Row - Contact Info with Dividers */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-6 lg:gap-0">
          {/* Follow Us Section */}
          <div className="lg:pr-8 xl:pr-12">
            <h3
              className="text-gray-600 text-xs font-normal tracking-wider uppercase mb-3 lg:mb-4"
              style={{
                fontSize: "10px",
                lineHeight: "160%",
                letterSpacing: "4%",
                fontFamily: "Gilroy-Medium, Arial, sans-serif",
              }}
            >
              FOLLOW US
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6">
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                Telegram
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                Whatsapp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors duration-200 text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-gray-700 mx-8 xl:mx-12"></div>

          {/* Contact Us Section */}
          <div className="lg:pr-8 xl:pr-12">
            <h3
              className="text-gray-600 text-xs font-normal tracking-wider uppercase mb-3 lg:mb-4"
              style={{
                fontSize: "10px",
                lineHeight: "160%",
                letterSpacing: "4%",
                fontFamily: "Gilroy-Medium, Arial, sans-serif",
              }}
            >
              CONTACT US
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6">
              <a
                href="tel:+18919891191"
                className="text-white hover:text-orange-500 transition-colors duration-200 text-sm whitespace-nowrap"
              >
                +1 891 989-11-91
              </a>
              <a
                href="mailto:info@visionexdigital.com.au"
                className="text-white hover:text-orange-500 transition-colors duration-200 text-sm break-all"
              >
                info@visionexdigital.com.au
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-gray-700 mx-8 xl:mx-12"></div>

          {/* Location Section */}
          <div>
            <h3
              className="text-gray-600 text-xs font-normal tracking-wider uppercase mb-3 lg:mb-4"
              style={{
                fontSize: "10px",
                lineHeight: "160%",
                letterSpacing: "4%",
                fontFamily: "Gilroy-Medium, Arial, sans-serif",
              }}
            >
              LOCATION
            </h3>
            <div className="text-white text-sm leading-relaxed">
              <span className="block sm:inline">
                Suite 536, Waterman Caribbean Park,
              </span>
              <span className="block sm:inline sm:ml-1">
                44 Lakeview Drive, Scoresby,
              </span>
              <span className="block sm:inline sm:ml-1">Victoria 3179</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
