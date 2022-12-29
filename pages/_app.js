import { ApolloProvider } from '@apollo/client';
import { client } from '../src/apollo/apollo';
import styles from '../src/components/styles/globals.css';




export default function App({ Component, pageProps }) {
  
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} /> 
  </ApolloProvider>
  )

}