import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { Image } from 'mui-image';

export default function Navbar() {
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton >
                    <Menu />
                </IconButton>
                <Image src="/src/assets/ShopEZ_logo_plain.png" height="64px" fit="contain" position="left"/>
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