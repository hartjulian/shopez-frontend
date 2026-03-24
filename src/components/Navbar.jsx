import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Toolbar } from "@mui/material";
import { Image } from 'mui-image';
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart/useCart";

import logoPlain from "/src/assets/ShopEZ_logo_plain.png"

export default function Navbar() {
    const navigate = useNavigate();
    const { state } = useCart();
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton >
                    <Menu />
                </IconButton>
                <Image src={logoPlain} height="64px" fit="contain" duration="0" onClick={() => navigate("/")} sx={{cursor: "pointer"}}/>
                <IconButton >
                    <Search />
                </IconButton>
                <IconButton>
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}