import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                // background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
                backgroundColor: 'primary.main',
                color: "white",
                py: 10
            }}
        >
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
                <Typography variant="h2" gutterBottom fontWeight="bold">
                    Welcome to ShopEZ
                </Typography>

                <Typography variant="h6" sx={{ mb: 4 }}>
                    Easy Shopping, Smart Choices!
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={() => navigate("/products")}
                >
                    Browse Products
                </Button>
            </Container>
        </Box>
    );
}