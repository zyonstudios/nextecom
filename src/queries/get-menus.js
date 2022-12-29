import { gql } from "@apollo/client";


export const GET_HOME_PAGE_QUERIES =gql`
query DevMenuQuery {
    menuItems(where: {location: HEADER, parentId: "0"}) {
    edges {
        node {
        id
        label
        url
        path
        childItems {
            edges {
            node {
                id
                label
                url
                path
            }
            }
        }
        }
    }
    }

    mediaItems(where: {title: "site_logo"}) {
        edges {
          node {
            id
            sourceUrl
            altText
          }
        }
      }
    
      posts(where: {categoryName: "desktop_slider"}) {
        nodes {
          title
          dtSlider {
            button1Name
            button2Name
            button3Name
            sliderImage {
              altText
              sourceUrl
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