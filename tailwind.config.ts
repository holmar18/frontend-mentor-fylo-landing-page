import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(var(--dark-gray))",
        desaturatedBlue: "hsl(var(--desaturated-blue))",
        brightBlue: "hsl(var(--bright-blue))",
        moderateGreen: "hsl(var(--moderate-green))",
        lightGrayBlue: "hsl(var(--light-gray-blue))",
        lightGray: "hsl(var(--light-gray))",
        btnActiveBlue: "hsl(var(--btn-active-blue))",
      },
      screens: {
        xs: {min: "275px", max: "639px"},
        sm: {min: "640px", max: "767px"},
        md: {min: "768px", max: "897px"},
        mdx: {min: "898px", max: "1023px"},
        lg: {min: "1024px", max: "1279px"},
        xl: {min: "1280px"},
      },
      fontWeight: {
        sm: "var(--weight-light)",
        md: "var(--weight-medium)",
        xl: "var(--weight-heavy)",
      },
      fontFamily: {
        headers: "var(--heading-font)",
        body: "var(--body-font)",
      },
      maxWidth: {
        xs: "375px",
        sm: "640px",
        md: "760px",
        lg: "64rem",
        xl: "1280px",
        "2xl": "1536px",
      },
      minWidth: {
        xs: "475px",
        sm: "640px",
        md: "760px",
        lg: "64rem",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        scaleRotate: {
          "0%": {transform: "scale(1) rotate(0)"},
          "25%": {transform: "scale(1.02) rotate(0)"},
          "50%": {transform: "scale(1) rotate(1deg)"},
          "75%": {transform: "scale(1.01) rotate(-0.5deg)"},
          "100%": {transform: "scale(1) rotate(0deg)"},
        },
        fade: {
          "0%": {opacity: "0"},
          "10%": {opacity: ".1"},
          "20%": {opacity: ".2"},
          "30%": {opacity: ".3"},
          "40%": {opacity: ".4"},
          "50%": {opacity: ".5"},
          "60%": {opacity: ".6"},
          "70%": {opacity: ".7"},
          "80%": {opacity: ".8"},
          "90%": {opacity: ".9"},
          "100%": {opacity: "1"},
        },
      },
      animation: {
        scaleRotate: "scaleRotate 2.5s ease-in-out 2",
        fade: "fade 3s ease-in-out 1",
      },
      backgroundImage: {
        blueCurveTopDesktop: "url(/assets/bg-curve-desktop.svg)",
        blueCurveTopMobile: "url(/assets/bg-curve-mobile.svg)",
        testiMonial: "url(/assets/avatar-testimonial.jpg)",
      },
      fontSize: {
        p: "var(--para-fs)",
      },
    },
  },
  plugins: [],
};
export default config;

