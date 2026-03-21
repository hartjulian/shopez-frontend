import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Image } from 'mui-image';
import { useNavigate } from "react-router-dom";

import logoPlain from "/src/assets/ShopEZ_logo_plain.png"

export default function Navbar() {
    const navigate = useNavigate();
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
                    <ShoppingCart />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}