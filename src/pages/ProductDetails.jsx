import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";

// Remove this mock data after the express backend is wired up.
import mockProducts from "../mocks/mockData";

export default function ProductDetails() {
    const { id } = useParams();
    const product = mockProducts.find(p => p.id === Number(id));
    const navigate = useNavigate();

    if (!product) {
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
    return (
        <Layout>
            <Grid container spacing={8} justifyContent={"center"}>
                {/* Image */}
                <Grid item xs={12} md={6}>
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
                            image={product.image}
                            alt={product.name}
                            sx={{
                                width: "100%",
                                aspectRatio: "1 / 1",
                                objectFit: "cover"
                            }}
                        />
                    </Box>
                </Grid>
                {/* Details */}
                <Grid item xs={12} md={6}>
                    <Box sx={{maxWidth: 500}}>
                        <Typography variant="h6" textTransform="uppercase" gutterBottom>{product.brand}</Typography>
                        <Typography variant="h4" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography
                            variant="h5"
                            color="primary"
                            sx={{ fontWeight: 600, mb: 2 }}
                        >
                            ${product.price}
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ minWidth: 200, mb: 3 }}
                            onClick={() => console.log("Add to cart", product.id)}
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
    );
}