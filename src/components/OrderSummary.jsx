import { Box, Divider, Stack, Typography } from "@mui/material";
import { useCart } from "../context/cart/useCart";
import { formatCurrency } from "../utils/formatCurrency";
import { calculateSubtotal } from "../utils/cartUtils";

export default function OrderSummary() {
    const { state } = useCart();
    const { items } = state;

    const subtotal = calculateSubtotal(items);

    if (items.length === 0) {
        return (
            <Typography color="text.secondary">
                Your cart is empty
            </Typography>
        );
    }

    return (
        <Box>
            {/* Items */}
            <Stack spacing={2}>
                {items.map((item) => (
                    <Box key={item.id}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="body2">
                                {item.name} x {item.quantity}
                            </Typography>
                            <Typography variant="body2">
                                {formatCurrency(item.price * item.quantity)}
                            </Typography>
                        </Stack>
                    </Box>
                ))}

                <Divider />
                {/* Totals */}
                <Stack direction="row" justifyContent="space-between">
                    <Typography>Subtotal</Typography>
                    <Typography>{formatCurrency(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography>Shipping</Typography>
                    <Typography>Free</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={600}>Total</Typography>
                    <Typography fontWeight={600}>{formatCurrency(subtotal)}</Typography>
                </Stack>
            </Stack>
        </Box>
    );
};