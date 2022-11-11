import { useSearchProducts } from "lib/hooks";
import { ProductCard } from "ui/card/card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export const ProductsList = ({ query }) => {
  const products = useSearchProducts(query.query);

  const [pageValue, setPageValue] = useState(1);
  let productsPages = [] as any;

  if (products?.data?.pagination?.total > 6) {
    const array = products?.data?.results[0];

    for (let index = 0; index < array.length; index += 6) {
      const num = 6;
      const prueba = array.slice(index, num + index);
      productsPages.push(prueba);
    }
  }

  if (products?.data?.results) {
    if (products.data.pagination.total >= 6) {
      return (
        <Stack style={{display:"flex", alignItems:"center", backgroundColor:"white"}} spacing={2}>
          <h5 style={{textAlign:"center", color:"black"}}>Productos encontrados: {products?.data?.results[0].length}</h5>
          <Pagination
            count={productsPages.length}
            onChange={(event, value) => {
              setPageValue(value);
            }}
          />
          <Grid container spacing={2}>
            {productsPages[pageValue - 1].map((product) => {
              return (
                <Grid
                  key={product.objectID}
                  item
                  lg={4}
                  sm={6}               
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProductCard product={product}></ProductCard>
                </Grid>
              );
            })}
          </Grid>
          <Pagination
            count={productsPages.length}
            onChange={(event, value) => {
              setPageValue(value);
            }}
            style={{marginBottom:"10px"}}
          />
        </Stack>
      );
    } else {
      return (
        <div>
          <h5 style={{textAlign:"center"}}>Productos encontrados: {products?.data?.results[0].length}</h5>

          <Grid container spacing={3}>
            {products?.data?.results[0].map((product) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Grid
                  key={product.objectID}
                  item
                  lg={4}
                  sm={6}               
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ProductCard product={product}></ProductCard>
                </Grid>
              );
            })}
          </Grid>
        </div>
      );
    }
  } else {
    return (
      <h3
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          fontSize: "34px",
        }}
      >
        No encontramos ningun producto.
      </h3>
    );
  }
};
