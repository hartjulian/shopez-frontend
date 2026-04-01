import { useCart } from "../context/cart/useCart";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { formatCurrency } from "../utils/formatCurrency";
import { calculateSubtotal } from "../utils/cartUtils";
import { Link } from "react-router-dom";

export default function CartSummary() {
    const { state } = useCart();

    const subtotal = calculateSubtotal(state.items);


    return (
        <Paper sx={{ p: 2, boxShadow: 1 }}>
            <Typography variant="h6" gutterBottom>
                Order Summary
            </Typography>
            <Stack spacing={1}>
                <Box display="flex" justifyContent="space-between">
                    <Typography>Subtotal</Typography>
                    <Typography color="text.secondary">{formatCurrency(subtotal)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography>Shipping</Typography>
                    <Typography textAlign="right">Calculated at checkout</Typography>
                </Box>
                <Divider />
                <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography textAlign="right" fontWeight={600} color="text.secondary">
                        {formatCurrency(subtotal)} + shipping
                    </Typography>
                </Box>
            </Stack>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                component={Link}
                to="/checkout"
                sx={{ mt: 2 }}
            >
                Proceed to Checkout
            </Button>
            <Button
                variant="text"
                component={Link}
                to="/products"
                fullWidth
                sx={{ mt: 1 }}
            >
                Continue Shopping
            </Button>
        </Paper>
    );
}