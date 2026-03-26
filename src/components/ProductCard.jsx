import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart/useCart";

import defaultImage from '/src/assets/ShopEZ_logo_plain.png';

export default function ProductCard({ product }) {
    const { dispatch } = useCart();

    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6
                }
            }}
        >
            <CardActionArea
                component={Link}
                to={`/products/${product.id}`}
            >
                <Box sx={{ overflow: "hidden" }}>
                    <CardMedia
                        component="img"
                        image={(product.image_url ? product.image_url : defaultImage)}
                        onError={(e) => {
                            e.target.src = defaultImage;
                        }}
                        alt={product.name}
                        sx={{
                            aspectRatio: "1 / 1",
                            objectFit: "scale-down",
                            transition: "transform 0.4s ease",
                            "&:hover": {
                                transform: "scale(1.15)"
                            }
                        }}
                    />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={"bold"} textTransform={"uppercase"}>{product.brand}</Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "3.2em"
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mt: 1 }}
                        color="text.secondary"
                    >
                        ${(product.price / 100).toFixed(2)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box sx={{ p: 2, pt: 0, mt: "auto" }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: {id: product.id, name: product.name, price: product.price, image_url: product.image_url}
                        });
                    }
                    }
                >
                    Add to Cart
                </Button>
            </Box>
        </Card>
    );
}