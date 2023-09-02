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
          p1: "20px",
          p2: "16px",
          p3: "14px",
        },

        fontWeight: {
          pr: "400",
          pb: "500",
          h: "600",
          h1: "700",
        }
      },
  },
  plugins: [],
}
