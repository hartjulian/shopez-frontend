import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import { Container, List, ListItem, Typography } from "@mui/material";


export default function Cart() {
    const { state } = useContext(CartContext);

    return (
        <Layout>
            <Container maxWidth="md">
                <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
                {state.items.length === 0 ? (
                    <Typography>Your cart is empty</Typography>
                ) : (
                    <List>
                        {state.items.map(item => (
                            <ListItem key={item.id} divider sx={{ py: 2 }}> 
                                <CartItem item={item} />
                            </ListItem>
                        ))}
                    </List>
                )
                }
            </Container>
        </Layout>
    )
};