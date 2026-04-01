import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Confirmation() {
    const location = useLocation();
    const order = location.state;

    return (
        <Box textAlign="center" sx={{ mt: 6 }}>
            <Stack spacing={2} alignItems="center">
                <Typography variant="h4" fontWeight={600}>
                    Thank you for shopping with ShopEZ {order.firstName}!
                </Typography>
                <CheckCircleOutline sx={{ fontSize: 60, color: "success.main" }} />
                <Typography color="text.secondary">
                    Your order has been placed successfully.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/products"
                >
                    Continue Shopping
                </Button>
            </Stack>
        </Box>
    )
};