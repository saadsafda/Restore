import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map((e, i) => {
        return (
          <Grid item key={i} xs={3}>
            <ProductCard elem={e} />
          </Grid>
        );
      })}
    </Grid>
  );
}
