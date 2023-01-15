import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import { GET_HEADER_QUERIES } from '../src/queries/header-queries'
import { client } from '../src/apollo/apollo';

const posts = ({menuItems, siteLogo}) => {
  return (
    
    <>
        <Header headerMenus={menuItems} logo={siteLogo}/>
        <div>posts</div>
    </>
  )
}

export default posts

export async function getStaticProps(context) {
  const {data, loading, networkStatus} = await client.query({
  query:GET_HEADER_QUERIES
  });
 
  return {
    props: {
    menuItems: data?.menuItems?.edges,
    siteLogo:data?.mediaItems?.edges,   
    }, // will be passed to the page component as props
    }
    }
