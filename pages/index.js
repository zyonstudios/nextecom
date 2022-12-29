import Head from 'next/head';
import { Inter } from '@next/font/google';
import { GET_DEV_MENUS, GET_HOME_PAGE_QUERIES } from '../src/queries/get-menus';
import { client } from '../src/apollo/apollo';
import Layout from '../src/components/layouts';




const inter = Inter({ subsets: ['latin'] })

export default function Home({menuItems,siteLogo,slides}) {
 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout data={menuItems} logo={siteLogo} slides={slides}>
        content
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {
  const {data, loading, networkStatus} = await client.query({
  query:GET_HOME_PAGE_QUERIES
  });
 
  return {
  props: {
  menuItems: data?.menuItems?.edges,
  siteLogo:data?.mediaItems?.edges,
  slides: data?.posts?.nodes
  }, // will be passed to the page component as props
  }
  }