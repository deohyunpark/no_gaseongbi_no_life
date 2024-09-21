import type { Config } from "tailwindcss"
const colors = require("tailwindcss/colors")

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gray: {
          ...colors.neutral,
        },
      },
      transitionDuration: {
        "1200": "1200ms",
        "1500": "1500ms",
      },
      keyframes: {
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        shimmer: "shimmer 2s ease-in-out infinite",
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config


// import type { Config } from "tailwindcss"
// const colors = require("tailwindcss/colors")

// const config: Config = {
//   darkMode: ["class"],
//   content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
//   future: {
//     hoverOnlyWhenSupported: true,
//   },
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         gray: {
//           ...colors.neutral,
//         },
//       },
//       transitionDuration: {
//         "1200": "1200ms",
//         "1500": "1500ms",
//       },
//       keyframes: {
//         shimmer: {
//           "0%": {
//             transform: "translateX(-100%)",
//           },
//           "100%": {
//             transform: "translateX(100%)",
//           },
//         },
//       },
//       animation: {
//         shimmer: "shimmer 2s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }

// export default config
