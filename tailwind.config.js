module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Tambahkan warna dari nes.css di sini
        "nes-red": "#ff4136",
        "nes-blue": "#0074d9",
        "nes-yellow": "#ffdc00",
        // Dan sebagainya...
      },
    },
  },
};
