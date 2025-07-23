import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    flowbiteReact(),
    {
      name: "Startup",
      configureServer() {
        console.log(`
          ----------------------------------------------------
         |    _______                                         |
         |    |     __|.-----.-----.-----.-----.----.         |
         |    |__     ||  -__|     |__ --|  _  |   _|         |
         |    |_______||_____|__|__|_____|_____|__|           |
         |                                                    |
         |     _______               __ __                    |
         |    |   |   |.-----.-----.|__|  |_.-----.----.      |
         |    |       ||  _  |     ||  |   _|  _  |   _|      |
         |    |__|_|__||_____|__|__||__|____|_____|__|        |
         |                                                    |
         |                                                    |
         |         By: Adán Sánchez - adansanchez.dev         |
          ----------------------------------------------------`);
      },
    },
  ],
  server: {
    allowedHosts: ["movielist.adansanchez.dev"],
  },
});
