import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      className="relative z-[9999] text-white px-4  pb-8 md:pb-12"
      style={{ backgroundColor: "#09090D" }}
    >
      <div className="absolute top-0 left-0 w-full -translate-y-full z-10">
        <img
          src="/gradients/half-ellipse.svg"
          alt=""
          className="w-full h-auto block opacity-50"
          style={{ display: "block" }}
        />
      </div>

      {/* Orange Gradient Bar */}
      <div
        className="w-full mb-8 md:mb-12"
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, transparent 30%, #FF6E1F 50%, transparent 70%, transparent 100%)",
        }}
      ></div>

      <div className="max-w-screen-3xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Row - Logo and Navigation */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-start lg:text-left mb-8 lg:mb-12">
          {/* Logo Section */}
          <div className="mb-6 lg:mb-0 flex justify-center lg:justify-start">
            <Link to="/">
              <img
                src="/icons/logo.svg"
                alt="Company Logo"
                className="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 lg:items-start">
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
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:items-center lg:justify-center lg:text-left gap-6 lg:gap-0">
          {/* Follow Us Section */}
          <div className="lg:pr-8 xl:pr-12">
            <h3
              className="text-gray-600 font-gilroy-medium uppercase mb-3 lg:mb-4"
              style={{
                fontSize: "10px",
                lineHeight: "160%",
                letterSpacing: "4%",
              }}
            >
              FOLLOW US
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6">
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-gilroy-medium hover:text-orange-500 transition-colors duration-200"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                Telegram
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-gilroy-medium hover:text-orange-500 transition-colors duration-200"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                Whatsapp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-gilroy-medium hover:text-orange-500 transition-colors duration-200"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="w-full h-px bg-white lg:hidden"></div>
          <div className="hidden lg:block w-px h-16 bg-white mx-8 xl:mx-12"></div>

          {/* Contact Us Section */}
          <div className="lg:pr-8 xl:pr-12">
            <h3
              className="text-gray-600 font-gilroy-medium uppercase mb-3 lg:mb-4"
              style={{
                fontSize: "10px",
                lineHeight: "160%",
                letterSpacing: "4%",
              }}
            >
              CONTACT US
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6">
              <a
                href="tel:+18919891191"
                className="font-gilroy-medium hover:text-orange-500 transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                +1 891 989-11-91
              </a>
              <a
                href="mailto:info@visionexdigital.com.au"
                className="font-gilroy-medium hover:text-orange-500 transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                info@visionexdigital.com.au
              </a>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="w-full h-px bg-white lg:hidden"></div>
          <div className="hidden lg:block w-px h-16 bg-white mx-8 xl:mx-12"></div>

          {/* Location Section */}
          <div className="min-w-0 flex-shrink">
            <h3
              className="text-gray-600 font-gilroy-medium uppercase mb-3 lg:mb-4"
              style={{
                fontSize: "10px",
                lineHeight: "160%",
                letterSpacing: "4%",
              }}
            >
              LOCATION
            </h3>
            <div className="leading-relaxed">
              <span
                className="font-gilroy-medium block sm:hidden"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                Suite 536, Waterman Caribbean Park,
                <br />
                44 Lakeview Drive, Scoresby,
                <br />
                Victoria 3179
              </span>
              <span
                className="font-gilroy-medium hidden sm:block lg:hidden"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                Suite 536, Waterman Caribbean Park,
                <br />
                44 Lakeview Drive, Scoresby, Victoria 3179
              </span>
              <span
                className="font-gilroy-medium hidden lg:block"
                style={{
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#CAC9C4",
                }}
              >
                Suite 536, Waterman Caribbean Park, 44 Lakeview Drive, Scoresby,
                Victoria 3179
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
