module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom palette
        card: "#161925",            // very dark card background
        section: "#232947",         // slightly lighter for sections
        text: "#f8fafc",            // light text for contrast
        subtext: "#b3b9c5",         // secondary text (light blue-gray)
        accent: "#fff",
        accent2: "#fff",
        primary: "#3a52ee",
        border: "#262a36",          // Card border in dark
        gradientfrom: "#3a52ee",
        gradientvia: "#5a83f5",
        gradientto: "#0f172a",
      },
      boxShadow: {
        soft: "0 4px 32px rgba(30,49,99,0.15)",
        accent: "0 2px 16px 0 rgba(245,158,66,0.11)",
      },
    },
  },
  plugins: [],
};
