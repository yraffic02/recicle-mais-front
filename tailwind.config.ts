import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["var(--font-WorkSans)"],
      },
      fontWeight: {
        title: "600",
        sub: "600",
        body: "500",
        legenda: "500"
      },
      fontSize: {
        title: "1.5rem",
        secondtitle: "1.25rem",
        subtile: "1rem",
        body: "1rem",
        legenda: "0.875rem",
      },
      colors: {
        "verdeFloresta": "#2A6E26",
        "verdeEscuro": "#1F491E",
        "menta": "#C8EDC5",
        "cinzaClaro": "#888888",
        "cinzaEscuro": "#4F4F4F",
        "cinzaClaroSec": "#E7E7E7",
        "brancoAbsoluto": "#FFFFFF",
        "pretoAbsoluto": "#4F4F4F",
        "offWihte": "#F4F9F6",
        "vermelhoErro": "#A81212",
        "laranjaAtencao": "#F1821B",
        "verdeSucesso": "#7ECB2A",
        "verdeClaro": "#C8EDC5",
      },

      plugins: [],
    },
  },
}
export default config;
