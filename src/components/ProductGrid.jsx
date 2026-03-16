import { Grid, Box } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Grid container spacing={3} sx={{maxWidth: 1200}}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: "flex", justifyContent: "center"}} >
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}