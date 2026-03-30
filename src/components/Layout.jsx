import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";
import { getProducts } from "../api/products";


export default function Layout() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => {
        setError(err.message)
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Outlet context={{ products, loading, error }} />
      </Container>
    </Box>
  );
}