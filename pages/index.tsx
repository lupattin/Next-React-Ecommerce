import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import { Search } from 'components/searchComp/search'
import {Slyder} from "components/slyder/slyder"
import { useProducts } from 'lib/hooks'
const Home: NextPage = () => {

  const data = useProducts()  
  
  return (
    <Layout>
      <div style={{height: "90vh"}}>
        <Search></Search>
        <Slyder data={data}></Slyder>
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