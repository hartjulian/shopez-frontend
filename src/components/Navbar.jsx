import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Image } from 'mui-image';

export default function Navbar() {
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton >
                    <Menu />
                </IconButton>
                    <Image src="/src/assets/ShopEZ_logo_plain.png" height="64px" fit="contain" duration="0"/>
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