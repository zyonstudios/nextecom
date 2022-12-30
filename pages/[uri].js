import { gql } from '@apollo/client';
import { client } from '../src/apollo/apollo';
import styles from '../src/components/styles/Posts.module.css';



const SlugPage = ({post}) => {
  return (
    <div className={styles.postcontainer}>
      <h1>{post.title}</h1>            
      <p>✍️  &nbsp;&nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</p>
      
      <img src={post.featuredImage.node.mediaItemUrl} />
      <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>     
    </div>
  )
}

export default SlugPage

export async function getStaticProps({ params }){
    const GET_POST_BY_URI =gql`
        query NewQuery($id: ID!) {
          post(id: $id, idType: URI) {
            content
            title
            date
            uri
            author {
              node {
                firstName
                lastName
              }
            }
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
    `
    const response = await client.query({
      query:GET_POST_BY_URI,
      variables:{
        id: params.uri
      }
    })
    const post = response?.data?.post
    return {
      props: {
        post
      }
    }
  }
  
  export async function getStaticPaths(){
      const paths = []
      return {
          paths,
          fallback: 'blocking'
      }
  }