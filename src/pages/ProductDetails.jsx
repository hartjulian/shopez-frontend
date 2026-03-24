import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, CardMedia, Container, Fade, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import { getProductById } from "../api/products";
import { useCart } from "../context/CartContext";

import defaultImage from '/src/assets/ShopEZ_logo_plain.png';


export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
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
        <Layout>
            <Container sx={{ py: 10 }} align="center">
                <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Oops! Something went wrong</Typography>
            </Container>
        </Layout>
    );
    // Valid non-error case where product isn't found. Perhaps user has copied or modified a link incorrectly
    if (!product && !loading) {
        return (
            <Layout>
                <Container sx={{ py: 10 }} align="center">
                    <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Oops! Product not found</Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        onClick={() => navigate("/products")}
                    >
                        Back to Products
                    </Button>
                </Container>

            </Layout>
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
                        <Layout>
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
                                        <CardMedia
                                            component="img"
                                            image={product.image_url ? product.image_url : defaultImage}
                                            onError={(e) => {
                                                e.target.src = defaultImage;
                                            }}
                                            alt={product.name}
                                            sx={{
                                                width: "100%",
                                                aspectRatio: "1 / 1",
                                                objectFit: "scale-down"
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                {/* Details */}
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Box sx={{ maxWidth: 500 }}>
                                        <Typography variant="h6" textTransform="uppercase" gutterBottom>{product.brand}</Typography>
                                        <Typography variant="h4" gutterBottom>
                                            {product.name}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="primary"
                                            sx={{ fontWeight: 600, mb: 2 }}
                                        >
                                            ${(product.price / 100).toFixed(2)}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{ minWidth: 200, mb: 3 }}
                                            onClick={() => {
                                                dispatch({
                                                    type: "ADD_TO_CART",
                                                    payload: { id: product.id, name: product.name, price: product.price, image_url: product.image_url }
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
                        </Layout>
                    )}
                </Box>
            </Fade>
        </Box>
    );
}