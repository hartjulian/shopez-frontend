import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import { useCart } from "../context/cart/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import { mapProductToCartItem } from "../utils/cartUtils";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
    const { dispatch } = useCart();
    const { showSnackBar } = useOutletContext();

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
                <ProductImage 
                    product={product}
                    sx={{
                        transition: "transform 0.4s ease",
                        "&:hover": {
                            transform: "scale(1.15)"
                        }
                    }}
                />
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
                            minHeight: "3.2em",
                            textWrap: "balance"
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mt: 1 }}
                        color="text.secondary"
                    >
                        {formatCurrency(product.price)}
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
                            payload: mapProductToCartItem(product)
                        });
                        showSnackBar(`${product.name} added to cart`);
                    }
                    }
                >
                    Add to Cart
                </Button>
            </Box>
        </Card>
    );
}