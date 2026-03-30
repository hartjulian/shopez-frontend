import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function FeaturedProducts({ products, isLoading }) {
    
    const featuredProducts = isLoading ? products : products
    .filter(p => p.featured)
    .filter(p => p.image_url !== null)
    .sort((a, b) => b.rating - a.rating)
    .splice(0, 8);

    if (featuredProducts.length === 0) return null;


    return (
        <>
            <Typography variant="h4" fontWeight={600} sx={{ mb: 2}}>
                Featured Products
            </Typography>
            <Grid container spacing={3}>
                {featuredProducts.map((product, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        {!isLoading && <ProductCard product={product} />}
                        {isLoading && <ProductCardSkeleton />}
                    </Grid>
                ))}
            </Grid>
        </>
    )
};