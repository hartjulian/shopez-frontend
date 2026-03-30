import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, CardMedia, Container, Fade, Grid, Typography } from "@mui/material";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import { getProductById } from "../api/products";
import { useCart } from "../context/cart/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import { mapProductToCartItem } from "../utils/cartUtils";

import ProductImage from "../components/ProductImage";


export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { dispatch } = useCart();

    useEffect(() => {
        getProductById(id)
            .then(data => setProduct(data))
            .catch(err => {
                setError(err.message);
                setLoading(false);
            })
            .then(() => setLoading(false));
    }, [id, loading]);
    // Error case - e.g. API unavailable
    if (error) return (
        <Container sx={{ py: 10 }} align="center">
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Oops! Something went wrong</Typography>
        </Container>
    );
    // Valid non-error case where product isn't found. Perhaps user has copied or modified a link incorrectly
    if (!product && !loading) {
        return (
            <Container sx={{ py: 10 }} align="center">
                <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Oops! Product not found</Typography>
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    component={Link}
                    to="/products"
                >
                    Back to Products
                </Button>
            </Container>
        )
    };
    // Happy path
    return (
        <Box sx={{ position: "relative" }}>
            {/* Skeleton */}
            <Fade in={loading} timeout={300}>
                <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
                    <ProductDetailsSkeleton />
                </Box>
            </Fade>
            {/* Real Content */}
            <Fade in={!loading} timeout={500}>
                <Box sx={{ visibility: loading ? "hidden" : "visible" }}>
                    {product && (
                        <>
                            <Button
                                color="text.primary"

                                component={Link}
                                to="/products"
                                sx={{ mb: 2 }}
                            >
                                ← Continue Shopping
                            </Button>
                            <Grid container spacing={8} justifyContent={"center"}>
                                {/* Image */}
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            maxWidth: 500,
                                            margin: "0 auto",
                                            borderRadius: 2,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <ProductImage
                                            product={product}
                                        />
                                    </Box>
                                </Grid>
                                {/* Details */}
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ maxWidth: 500 }}>
                                        <Typography variant="h6" textTransform="uppercase" gutterBottom>{product.brand}</Typography>
                                        <Typography variant="h4" gutterBottom sx={{ textWrap: "balance" }}>
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="text.secondary"
                                            sx={{ fontWeight: 600, mb: 2 }}
                                        >
                                            {formatCurrency(product.price)}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{ minWidth: 200, mb: 3 }}
                                            onClick={() => {
                                                dispatch({
                                                    type: "ADD_TO_CART",
                                                    payload: mapProductToCartItem(product)
                                                });
                                            }
                                            }
                                        >
                                            Add to Cart
                                        </Button>
                                        <Typography sx={{ whiteSpace: "pre-line", mb: 3 }}>
                                            {product.description}
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </>
                    )}
                </Box>
            </Fade>
        </Box>
    );
}