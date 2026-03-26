import { useCart } from "../context/cart/useCart";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

export default function CartSummary() {
    const { state } = useCart();

    const subtotal = state.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <Paper sx={{ p: 2, boxShadow: 1 }}>
            <Typography variant="h6" gutterBottom>
                Order Summary
            </Typography>
            <Stack spacing={1}>
                <Box display="flex" justifyContent="space-between">
                    <Typography>Subtotal</Typography>
                    <Typography color="text.secondary">${(subtotal/100).toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography>Shipping</Typography>
                    <Typography textAlign="right">Calculated at checkout</Typography>
                </Box>
                <Divider />
                <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography textAlign="right" fontWeight={600} color="text.secondary">
                        ${(subtotal/100).toFixed(2)} + shipping
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}