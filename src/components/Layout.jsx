import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Alert, Box, Button, Container, Snackbar } from "@mui/material";
import { getProducts } from "../api/products";
import BackToTop from "./BackToTop";


export default function Layout() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: ""
  });

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => {
        setError(err.message)
      })
      .finally(() => setLoading(false));
  }, []);

  const showSnackBar = (message) => {
    setSnackBar({ open: true, message });
  };

  const handleCloseSnackBar = () => {
    setSnackBar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Outlet context={{ products, loading, error, showSnackBar }} />
      </Container>
      <Snackbar
        open={snackBar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackBar} severity="success" variant="filled" action={
          <Button color="inherit" size="small" component={Link} to="/cart">
            VIEW CART
          </Button>
        }>
          {snackBar.message}
        </Alert>
      </Snackbar>
      <BackToTop />
    </Box>
  );
}