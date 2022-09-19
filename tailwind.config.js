/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      gridTemplateColumns:{
        '3-auto-col': 'repeat(3, auto)',
        '2-auto-col': 'repeat(2, auto)'
      },
      gridTemplateRows:{
        '4-auto-row': 'repeat(4, auto)',
        '2-auto-row': 'repeat(2, auto)'
      },
      boxShadow:{
        'box-shadow': "inset 0 0 0 1000px rgb(17 16 19 / 45%)"
      },
      colors:{
        "v-dark-blue": "hsl(225, 13%, 12%)",
        "dark-grey": "hsl(226,6%,40%)",
        "med-grey": "hsl(223, 7%, 53%)",//hover
        "light-grey": "hsl(225, 17%, 82%)",//active
        "v-light-grey": "hsl(230, 21%, 95%)",
        errors: "hsl(0, 68%, 61%)",
        "about-bg-hover": "hsla(225, 13%, 12%, 0.45)"
      },
      fontFamily:{
        "league-spartan": ['League Spartan', 'sans-serif']
      },
      width:{
        'btn-width': "252px",
        'nav-desktop-width': "40%",
        '80-width': "80%",
        'welcome-desktop-width': "32%",
        '90-width': "90%",
        '95-width': "95%",
        '70-width': "70%",
        'rectangle-width': "18%",
        '56-width': "56%",
        '40-width': "40%"
      },
      height:{
        'btn-height': "72px",
        'paramour-height': "560px"
      },
      margin:{
        'paramour-margin-top': "116px",
        'paramour-margin-bottom': "110px"
      },
      backgroundImage:{
        'paramour-hero-desktop': "url('/assets/home/desktop/image-hero-paramour.jpg')",
        'paramour-hero-tablet': "url('/assets/home/tablet/image-hero-paramour.jpg')",
        'paramour-hero-mobile': "url('/assets/home/mobile/image-hero-paramour.jpg')",
        'seraph-hero-desktop': "url('/assets/home/desktop/image-hero-seraph.jpg')",
        'seraph-hero-tablet': "url('/assets/home/tablet/image-hero-seraph.jpg')",
        'seraph-hero-mobile': "url('/assets/home/mobile/image-hero-seraph.jpg')",
        'federal-hero-desktop': "url('/assets/home/desktop/image-hero-federal.jpg')",
        'federal-hero-tablet': "url('/assets/home/tablet/image-hero-federal.jpg')",
        'federal-hero-mobile': "url('/assets/home/mobile/image-hero-federal.jpg')",
        'trinity-hero-desktop': "url('/assets/home/desktop/image-hero-trinity.jpg')",
        'trinity-hero-tablet': "url('/assets/home/tablet/image-hero-trinity.jpg')",
        'trinity-hero-mobile': "url('/assets/home/mobile/image-hero-trinity.jpg')",
        'about-us': "url('/assets/home/mobile/image-small-team.jpg')",
        'del-sol-mobile': "url('/assets/portfolio/mobile/image-del-sol.jpg')",
        '228B-mobile': "url('/assets/portfolio/mobile/image-228b.jpg')",
        'prototype-mobile': "url('/assets/portfolio/mobile/image-prototype.jpg')"
      },
    },
  },
  plugins: [],
}
