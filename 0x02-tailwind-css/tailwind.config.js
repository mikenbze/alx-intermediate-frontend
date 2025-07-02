/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./0x02-tailwind-css/1-index.html"
  ],
  safelist: [
    "text-red-500",
    "text-green-500",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "grid",
    "grid-cols-3",
    "gap-4",
    "p-4",
    "text-4xl"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
