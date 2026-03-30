import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGrid({ products, isLoading }) {
    if (products.length === 0) {
        return (
            <Container sx={{ py: 10 }} align="center">
                <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>No products found</Typography>
            </Container>
        )
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container spacing={3} sx={{ maxWidth: 1200, width: "100%" }}>
                {products.map((product, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
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
        </Box>
    );
}