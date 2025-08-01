/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-semibold": ["Gilroy-SemiBold", "sans-serif"],
        "gilroy-extrabold": ["Gilroy-ExtraBold", "sans-serif"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "127%" }],
        h2: ["47.44px", { lineHeight: "62.4px", letterSpacing: "-1.2px" }],
        h3: ["24px", { lineHeight: "30.04px" }],
        body: ["16px", { lineHeight: "140%" }],
        quote: ["32px", { lineHeight: "140%" }], // Optional: add this for the quote
      },
      colors: {
        primary: {
          DEFAULT: "#FF6E1F",
          50: "#FFF4EF",
          100: "#FFE8DB",
          500: "#FF6E1F",
          600: "#E55A0C",
          900: "#B8460A",
        },
        dark: {
          DEFAULT: "#1E1E1E",
          50: "#F5F5F5",
          100: "#E0E0E0",
          500: "#1E1E1E",
          900: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
