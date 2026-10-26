import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { brand: "#014AAC", mist: "#D5E3F5", amber: "#FFBF00" }, boxShadow: { soft: "0 12px 40px rgba(1,74,172,.08)" } } }, plugins: [] };
export default config;