import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: { "2xl": "1400px" },
        },
        extend: {
            colors: {
                codo: {
                    blue: "#00203F",  // Official CODO Blue
                    green: "#008764", // Official CODO Green
                    aqua: "#F0F3FF",  // Official CODO Aqua
                },
                border: "hsl(var(--border))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            fontFamily: {
                sans: ["var(--font-font-dm-sans)", "system-ui", "sans-serif"],
            },
            borderRadius: {
                codo: "14px", // SOP: "Codo Corner"
            },
            boxShadow: {
                codo: "0 10px 30px -15px rgb(0 32 63 / 0.15)", // SOP: Soft ambient shadows
            }
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
};
export default config;
