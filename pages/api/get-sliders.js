import { gql } from "@apollo/client";


export const GET_HOME_SLIDES =gql`
query GetHomepageSlides {
    posts(where: {categoryName: "desktop_slider"}) {
      nodes {
        title
        dtSlider {
          button1Name
          button2Name
          button3Name
          sliderImage {
            altText
            uri
          }
          button1Link {
            url
          }
          button2Link {
            url
          }
          button3Link {
            url
          }
        }
      }
    }
  }
`