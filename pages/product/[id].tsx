import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import { BuyProductCard } from 'ui/card/buycard'
const Product: NextPage = () => {
  
  return (
    <Layout>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <h3 style={{fontSize:"38px", textAlign:"center"}}>Producto seleccionado.</h3>
      <BuyProductCard></BuyProductCard>
      </div>
    </Layout>
  )
}

export default Product
