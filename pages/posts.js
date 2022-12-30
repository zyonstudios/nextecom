import { gql } from '@apollo/client'
import React from 'react'
import Postcard from '../src/components/Postcard'
import { client } from '../src/apollo/apollo'
import styles from '../styles/Posts.module.css'

  
  const posts = ({posts}) => {
    return (
      
      <div className={styles.myposts}>
         
       {
              posts.map((post) => {
                return (
                  <Postcard key={post.uri} post={post}></Postcard>
                )
              })
            }
      </div>
    )
  }
  
  export default posts

  export async function getStaticProps(){
  
    const GET_POSTS = gql`
      query GetAllPosts {
        posts {
          nodes {
            date
            title
            uri
            link
            content
            postId
          }
        }
      }
    `
    const response = await client.query({
      query:GET_POSTS
    })
    const posts = response?.data?.posts?.nodes
    return {
      props: {
        posts
      }
    }
  }