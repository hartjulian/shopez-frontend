import { Box, Button, Fade, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Link } from "react-router-dom";

export default function FeaturedProducts({ products, isLoading }) {

    const featuredProducts = isLoading ? products : products
        .filter(p => p.featured)
        .filter(p => p.image_url !== null)
        .sort((a, b) => b.rating - a.rating)
        .splice(0, 8);

    if (featuredProducts.length === 0) return null;


    return (
        <><Box sx={{ mt: 6 }} textAlign="center">
            <Typography variant="h4" fontWeight={600}>
                Featured Products
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                Hand-picked products we think you'll love
            </Typography>
            <Grid container spacing={3}>
                {featuredProducts.map((product, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <Box sx={{ position: "relative", height: "100%", minHeight: 512 }}>
                            {/* Skeleton */}
                            <Fade in={isLoading} timeout={300}>
                                <Box sx={{ position: "absolute", inset: 0 }} >
                                    <ProductCardSkeleton />
                                </Box>
                            </Fade>
                            {/* Retreived content */}
                            <Fade in={!isLoading} timeout={500 + index * 50}>
                                <Box sx={{ inset: 0 }}>
                                    {!isLoading && <ProductCard product={product} />}
                                </Box>
                            </Fade>
                        </Box>
                    </Grid>
                ))}

            </Grid>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                to="/products"
                sx={{ my: 3 }}
            >
                View All Products
            </Button>
        </Box>
        </>
    )
};