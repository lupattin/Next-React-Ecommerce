import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetOrder } from 'lib/hooks';
import { useEffect, useState } from 'react';
import { token } from 'lib/atoms';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router'
import { useGetOneProduct } from 'lib/hooks';


export const BuyProductCard = () => {

    const router = useRouter()    

    const product = useGetOneProduct(router.query.id) as any    

    const getToken = useRecoilValue(token)

    let stock;
    if(product?.data?.["In stock"] == true){
        stock = "Yes"
    }else{
        stock = "No"
    }

    const [shouldFetch, setShouldFetch] = useState(null);

    const getOrder = useGetOrder(shouldFetch, getToken)

    useEffect(()=>{

        if(getOrder?.data?.url){
            router.push(getOrder.data.url)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[getOrder])
    

    function handleClick(){
 
        setShouldFetch(product.data.objectID)
       
    }
    
    return (
        <div style={{display:"flex"}}>
            <Box    
              component="img"
              sx={{
              width: 600,
              height: 470,
            }}
              src={product?.data?.Images?.[0]?.url}
          />
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant='h2' sx={{ fontSize: 40, textAlign:"center", fontWeight:"600" }} gutterBottom>
                 {product?.data?.Name}
                </Typography>
                <Typography variant="body2">
                {product?.data?.Description}
                </Typography>
                <Typography style={{display:"flex", alignItems:"center", justifyContent: "space-evenly", margin:"10px 10px"}} variant="h5" component="div">
                colors: {product?.data?.Color?.map((color)=>{ return <Box key={color} sx={{width:20, height:20 }} style={{backgroundColor:color, border:"solid black 1px", marginLeft:"10px"}}/>})}
                </Typography>
                <Typography sx={{ margin:"10px 10px"}} variant="h5">
                Stock: {stock}
                </Typography>
                <Typography sx={{ margin:"10px 10px" }} variant="h5">
                Precio: {product?.data?.["Unit cost"]}
                </Typography>
            </CardContent>
            <CardActions >
                <Button onClick={handleClick} style={{margin:"auto", background:"#aeaeae"}} size="large">Comprar</Button>
            </CardActions>
          </Card>
        </div>
    );
  };