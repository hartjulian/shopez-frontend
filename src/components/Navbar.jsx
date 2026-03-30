import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { Image } from 'mui-image';
import { Link } from "react-router-dom";
import { useCart } from "../context/cart/useCart";

import logoPlain from "/src/assets/ShopEZ_logo_plain.png"

export default function Navbar() {
    const { state } = useCart();
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton >
                    <Menu />
                </IconButton>
                <Box 
                    margin={"auto"}
                    component={Link}
                    to="/"
                >
                        <Image src={logoPlain} height="64px" fit="contain" duration="0" sx={{ cursor: "pointer" }} />
                </Box>
                <IconButton component={Link} to="/cart">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}