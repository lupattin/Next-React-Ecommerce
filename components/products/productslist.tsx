import { useSearchProducts } from "lib/hooks";
import { ProductCard } from "ui/card/card";
import Grid from '@mui/material/Grid';
import { useEffect} from "react";

export const ProductsList = ({query}) => {
        
    const products = useSearchProducts(query.query);
  
    if(products?.data?.results){
        return (
        <div>
           <h5>Productos encontrados: {products?.data?.results[0].length}</h5>
            <Grid container spacing={2}>
                {products?.data?.results[0].map((product)=>{
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <Grid key={product.objectID} item xs={6} style={{display:"flex", justifyContent:"center"}}>
                            <ProductCard product={product}></ProductCard>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
        );
    }else{
        return (
            <h3 style={{marginTop:"100px", display: "flex",justifyContent: "center", fontSize:"34px"}}>No encontramos ningun producto.</h3>
        )
    }
    
  };