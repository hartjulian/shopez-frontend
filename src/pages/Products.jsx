import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Container, Typography } from "@mui/material";


export default function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
      .then(() => setLoading(false));
  }, []);

  if (error) return (
    <Layout>
      <Container sx={{ py: 10 }} align="center">
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Oops! Something went wrong</Typography>
      </Container>
    </Layout>
  )
  return (
    <Layout>
      <ProductGrid
        products={loading ? Array.from(new Array(8)) : products}
        isLoading={loading}
      />
    </Layout>
  );
}