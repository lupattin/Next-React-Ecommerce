import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import { useRecoilValue } from 'recoil'
import { productData } from 'lib/atoms'
import { BuyProductCard } from 'ui/card/buycard'
const Product: NextPage = () => {
  const product = useRecoilValue(productData)
  
  return (
    <Layout>
      <div style={{height: "80vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <BuyProductCard product={product}></BuyProductCard>
      </div>
    </Layout>
  )
}

export default Product
