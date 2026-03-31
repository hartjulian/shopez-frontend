import { Grid, Paper } from "@mui/material";
import CheckoutForm from "../components/CheckoutForm";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
    const navigate = useNavigate();

    const handleCheckout = (formData) => {
        // Do Stuff
        // Clear Cart
        navigate("/confirmation");
    }
    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
                <CheckoutForm onSubmit={handleCheckout} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>

                <Paper sx={{ p: 3, position: { md: "sticky" }, top: { md: 100 } }}>
                    <OrderSummary />
                </Paper>
            </Grid>
        </Grid>
    );
};