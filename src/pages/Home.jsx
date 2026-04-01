import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  const { products, loading, error } = useOutletContext();
    // Error case - e.g. API unavailable
    if (error) return (
        <Container sx={{ py: 10 }} align="center">
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Oops! Something went wrong</Typography>
        </Container>
    );  
  return (
    <>
      <Hero />
      <Box sx={{ mt: 4 }}>
        <FeaturedProducts
          products={loading ? Array.from(new Array(8)) : products}
          isLoading={loading}
        />
      </Box>
    </>
  );
}