import { useCart } from "../context/cart/useCart";
import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import defaultImage from '/src/assets/ShopEZ_logo_plain.png';

export default function CartItem({ item }) {
    const { dispatch } = useCart();

    const handleIncrease = () => {
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: {
                id: item.id,
                quantity: item.quantity + 1
            }
        });
    };

    const handleDecrease = () => {
        if (item.quantity === 1) {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: { id: item.id }
            });
            return;
        }
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: {
                id: item.id,
                quantity: item.quantity - 1
            }
        });
    }

    const handleRemove = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: { id: item.id }
        });
    }

    return (
        <Grid container alignItems="center" spacing={2} width="100%" sx={{ py: 1 }}>
            {/* FAR LEFT: Image */}
            <Grid size={{ xs: 3, sm: 2 }}>
                <Box
                    component="img"
                    src={item.image_url ? item.image_url : defaultImage}
                    onError={(e) => {
                        e.target.src = defaultImage;
                    }}
                    alt={item.name}
                    sx={{
                        width: "100%",
                        maxHeight: 80,
                        aspectRatio: "1 / 1",
                        objectFit: "contain"
                    }}
                />
            </Grid>
            {/* LEFT: Product Info */}
            <Grid size={{ xs: 9, sm: 4 }}>
                <Typography variant="subtitle1" fontWeight={500} sx={{ textWrap: "balance"}} textAlign={{ xs: "right", sm: "left" }} mb={ 1 }>{item.name} </Typography>
                <Typography textAlign={{ xs: "right", sm: "left" }}>${(item.price / 100).toFixed(2)}</Typography>
            </Grid>
            {/* MIDDLE: Quantity controls */}
            <Grid size={{ xs: 9, sm: 3 }} display="flex" flexDirection="column">
                <Stack direction="row" spacing={1} alignItems="center" mb={ 1 }>
                    <Button size="small" variant="outlined" onClick={handleDecrease} disabled={item.quantity === 1}>
                        -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button size="small" variant="outlined" onClick={handleIncrease}>
                        +
                    </Button>
                </Stack>
                <Typography noWrap fontWeight="bold">Total: ${(item.price*item.quantity/100).toFixed(2)}</Typography>
            </Grid>
            {/* RIGHT: Remove */}
            <Grid size={{ xs: 3, sm: 3 }} display="flex" justifyContent="flex-end">
            <IconButton onClick={handleRemove}>
                <Delete />
            </IconButton>
            </Grid>
        </Grid>
    );
};