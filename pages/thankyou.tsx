import type { NextPage } from 'next'
import { Layout } from 'components/layout/layout'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import Head from 'next/head'

const ThankYou: NextPage = () => {

  const router = useRouter()


  function handleClick(){
    router.push("/")
  }
  
  return (
    <Layout>
      <Head>
        <title>ThankYou!</title>
      </Head>
      <div style={{height: "50vh", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h2 style={{color:"black"}}> ¡Tu compra fue realizada con exito!</h2>
          <h3 style={{color:"black"}}>¡Gracias por comprar con nosotros!</h3>
          <Button onClick={handleClick} size='large' variant="contained">Seguir comprando</Button>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYou
