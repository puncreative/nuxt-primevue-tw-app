import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { iconsPlugin, getIconCollections }  from "@egoist/tailwindcss-icons"
// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    }
  },plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["mdi", "uil"]),
    }),
  ]
}
