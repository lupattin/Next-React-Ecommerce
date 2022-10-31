import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import { useRouter } from 'next/router'
import { ProductsList } from 'components/products/productslist'
import { Search } from 'components/searchComp/search'

const Products: NextPage = () => {
    
    const router = useRouter()    
  
  return (
    <Layout>
      <div style={{height: "180vh"}}>
       <Search></Search>
       <ProductsList query={router.query}></ProductsList>
      </div>
    </Layout>
  )
}

export default Products
