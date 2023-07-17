/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "orange": "hsl(25, 97%, 53%)",
                "light-gray": "hsl(217, 12%, 54%)",
                "medium-gray": "hsl(215, 12%, 54%)",
                "dark-blue": "hsl(213, 19%, 18%)",
                "darker-blue": "hsl(216, 12%, 8%)",
            },
            fontFamily: {
                overpass: ["Overpass", "sans-serif"],
            }
        },
    },
    plugins: [],
}

