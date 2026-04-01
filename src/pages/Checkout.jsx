import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CheckoutForm from "../components/CheckoutForm";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart/useCart";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
    const navigate = useNavigate();
    const { dispatch, state } = useCart();

    const handleCheckout = (formData) => {
        // Do Stuff
        dispatch({ type: "CLEAR_CART" });
        navigate("/confirmation", { state: formData });
    };

    if (state.items.length === 0) {
        return (
            <Box textAlign="center">
                <Typography variant="h4" gutterBottom>Your cart is empty</Typography>
                <Button
                    variant="text"
                    component={Link}
                    to="/products"
                    sx={{ mt: 1 }}
                >
                    Continue Shopping
                </Button>
            </Box>
        )
    }
    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
                <CheckoutForm onSubmit={handleCheckout} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    Order Summary
                </Typography>
                <Paper sx={{ p: 3, position: { md: "sticky" }, top: { md: 100 } }}>
                    <OrderSummary />
                </Paper>
            </Grid>
        </Grid>
    );
};