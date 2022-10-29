import tailwind from "tailwindcss";
import config from "./tailwind.config.cjs";
import autoprefixer from "autoprefixer";

module.exports = {
  plugins: [
    tailwind(config),
    autoprefixer
  ],
}
