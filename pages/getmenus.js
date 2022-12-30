import { gql } from '@apollo/client';
import React from 'react';
import { client } from '../src/apollo/apollo';



const getmenus = ({menuItems}) => {

  return (
        <div>
         
       {
              menuItems.map((menuItem) => {
                return (
                    <div>{menuItem.label}</div>                
                )
              })
            }
      </div>
  )
}

export default getmenus



export const GET_DEV_MENUS =gql`
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
        }
`

  export async function getStaticProps(context) {
    const {data, loading, networkStatus} = await client.query({
      query:GET_DEV_MENUS
    });
   
    return {
      props: {
        menuItems: data?.menuItems?.edges
      }, // will be passed to the page component as props
    }
  }