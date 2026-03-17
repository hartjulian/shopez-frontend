import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                width: "100%",
                maxWidth: 300,
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
            <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
                <Box sx={{ overflow: "hidden" }}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{
                            aspectRatio: "1 / 1",
                            objectFit: "cover",
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
                            overflow: "hidden"
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600 }}
                        color="primary"
                    >
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box sx={{ p:2, pt: 0 }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => console.log("Add to card", product.id)}
                >
                    Add to Cart
                </Button>
            </Box>
        </Card>
    );
}