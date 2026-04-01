import CartItem from "../components/CartItem";
import { Button, Container, Grid, List, ListItem, Typography } from "@mui/material";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart/useCart";


export default function Cart() {
    const { state } = useCart();

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
            <Button
                color="inherit"
                component={Link}
                to="/products"
                sx={{ mb: 2 }}
            >
                ← Continue Shopping
            </Button>
            {state.items.length === 0 ? (
                <Typography>Your cart is empty</Typography>
            ) : (
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <List>
                            {state.items.map(item => (
                                <ListItem key={item.id} divider sx={{ py: 2 }}>
                                    <CartItem item={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <CartSummary />
                    </Grid>
                </Grid>
            )
            }
        </Container>
    )
};