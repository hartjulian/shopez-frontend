import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CheckoutForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        postcode: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.address) newErrors.address = "Address is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return
        }

        setErrors({});
        onSubmit(formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Shipping Details
            </Typography>

            <Stack spacing={2}>
                <TextField 
                    label="Full Name"
                    name="name"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                />

                <TextField 
                    label="Email"
                    name="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />

                <TextField 
                    label="Address"
                    name="address"
                    fullWidth
                    value={formData.address}
                    onChange={handleChange}
                    error={!!errors.address}
                    helperText={errors.address}
                />

                <TextField
                    label="City"
                    name="city"
                    fullWidth
                    value={formData.city}
                    onChange={handleChange}
                />

                <TextField
                    label="Postcode"
                    name="postcode"
                    fullWidth
                    value={formData.postcode}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                >
                    Place Order
                </Button>
            </Stack>
        </Box>
    );

};