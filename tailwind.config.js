export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
      extend: {
        colors: {
          main1: "#4B86BC",
          main2: "#629AC2",
          main3: "#CFEBF5",
          neutral1: "#141924",
          neutral2: "#303238",
          neutral3: "#454647",
          neutral4: "#747578",
          neutral5: "#949699",
          neutral6: "#B0B1B4",
          neutral7: "#DCE1F1",
          neutral8: "#E6E6E6",
          neutral9: "#E5E5EE",      
        },

        fontFamily: {
          montserrat: ['Montserrat'],
          redhatdisplay: ['Red Hat Display']
        },

        fontSize: {
          h1: "62px",
          h2: "45px",
          h3: "32px",
          h4: "24px",
          h5: "18px",
          p1: "25px",
          p2: "20px",
          p3: "16px",
        },

        fontWeight: {
          pr: "400",
          pb: "700",
          h: "600",
          h1: "700",
        },

        backgroundImage: {
          "hero" : "url(../src/assets/bg/HERO.png)",
          "bluee" : "url(../src/assets/bg/BLUE.png)",
          "blackk" : "url(../src/assets/bg/BLACK.png)",
          "mixed" : "url(../src/assets/bg/MIXED.png)",
        }
      },
  },
  plugins: [],
}
