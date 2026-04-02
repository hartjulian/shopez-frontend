import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart/useCart";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { AppBar, Badge, Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { Image } from 'mui-image';

import logoPlain from "/src/assets/ShopEZ_logo_plain.png"

export default function Navbar() {
    const { state } = useCart();
    const [open, setOpen] = useState(false);

    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

    const toggleDrawer = (drawerState) => {
        setOpen(drawerState);
    };

    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton edge="start" onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => toggleDrawer(false)}
                    >
                        <List>
                            <ListItemButton component={Link} to="/">
                                <HomeIcon sx={{ mr: 2 }} />
                                <ListItemText primary="Home" />
                            </ListItemButton>
                            <ListItemButton component={Link} to="/products">
                                <ShoppingBagIcon sx={{ mr: 2 }} />
                                <ListItemText primary="Products" />
                            </ListItemButton>
                            <ListItemButton component={Link} to="/cart" >
                                <ShoppingCartIcon sx={{ mr: 2 }} />
                                <ListItemText primary={`Cart (${totalItems})`} />
                            </ListItemButton>
                            <ListItemButton component={Link} to="/checkout" disabled={ totalItems < 1 }>
                                <ShoppingCartIcon sx={{ mr: 2 }} />
                                <ListItemText primary="Checkout" />
                            </ListItemButton>
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
                <Box
                    margin={"auto"}
                    component={Link}
                    to="/"
                >
                    <Image src={logoPlain} height="64px" fit="contain" duration="0" sx={{ cursor: "pointer" }} />
                </Box>
                <IconButton component={Link} to="/cart">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}