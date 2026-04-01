import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function CheckoutForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        postcode: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const isFormValid = Object.values(errors).every((e) => !e) &&
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.email.trim() &&
        formData.address.trim();

    const validateField = (name, value) => {
        switch (name) {
            case "firstName":
                return value.trim() ? "" : "First name is required";
            case "lastName":
                return value.trim() ? "" : "Last name is required";
            case "email":
                if (!value.trim()) return "Email is required";
                return isEmail(value) ? "" : "Invalid email";
            case "address":
                return value.trim() ? "" : "Address is required";
            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (touched[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: validateField(name, value)
            }))
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        setTouched((prev) => ({
            ...prev,
            [name]: true
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // re-validate before submit
        const newErrors = {};
        ["firstName", "lastName", "email", "address"].forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        })
        setErrors(newErrors);
        // ensure all fields marked as touched so UI errors are displayed correctly
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            address: true
        });

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        onSubmit(formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Shipping Details
            </Typography>

            <Stack spacing={2}>
                <TextField
                    label="First Name *"
                    name="firstName"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                />
                <TextField
                    label="Last Name *"
                    name="lastName"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                />

                <TextField
                    label="Email *"
                    name="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.email}
                    helperText={errors.email}
                />

                <TextField
                    label="Address *"
                    name="address"
                    fullWidth
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    disabled={!isFormValid}
                >
                    Place Order
                </Button>
            </Stack>
        </Box>
    );

};