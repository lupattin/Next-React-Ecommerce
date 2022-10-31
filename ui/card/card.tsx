import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'
import { productData } from 'lib/atoms';
import { useSetRecoilState } from 'recoil';

export const ProductCard = ({product}) => {

    const seter = useSetRecoilState(productData)
    const router = useRouter()  

    
   function handleClick(){
    router.push("/product/" + product.objectID)
    seter(product)
   }
    
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image= {product.Images[0].url}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {product.Description}
            </Typography>
            <Typography style={{marginTop:"10px"}} gutterBottom variant="h5" component="div">
            Precio: {product["Unit cost"]}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClick}>Ver más.</Button>
        </CardActions>
    </Card>
    );
  };