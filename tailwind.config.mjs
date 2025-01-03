/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: "0px 4px 16px rgba(92, 245, 115, 0.123), 0px 8px 32px rgba(17, 17, 26, 0.05)",
      },
    },
  },
  plugins: [],
};
