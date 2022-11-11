import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import { Search } from 'components/searchComp/search'
import SwipeableTextMobileStepper from 'components/slyder/slyderMUI'
import { useProducts } from 'lib/hooks'
import Head from 'next/head'
const Home: NextPage = () => {

  const data = useProducts()  
  
  return (
    <Layout>
       <Head>
        <title>BuYiT</title>
      </Head>
      <div style={{height: "84vh", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", backgroundColor:"white"}}>
        <Search></Search>
        <h2 style={{color:"black"}}>Productos Destacados</h2>
        <SwipeableTextMobileStepper products={data}></SwipeableTextMobileStepper>
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}