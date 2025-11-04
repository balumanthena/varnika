/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
      extend: {
        colors: {
          ivory: "#FAF6EF",
          linen: "#F3EDE1",
          champagne: "#C8A96A",
          champagneSoft: "#E7D7B9",
          charcoal: "#2B2A28",
          warmgray: "#6B675F",
          white80: "rgba(255,255,255,0.8)"
        },
        boxShadow: {
          soft: "0 10px 30px rgba(0,0,0,0.06)"
        },
        borderRadius: {
          xl2: "1.25rem"
        }
      }
    },
    plugins: []
  };
  