import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import { BuyProductCard } from 'ui/card/buycard'
const Product: NextPage = () => {
  
  return (
    <Layout>
      <div style={{height: "80vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <BuyProductCard></BuyProductCard>
      </div>
    </Layout>
  )
}

export default Product
