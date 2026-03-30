import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import { Box, Typography } from "@mui/material";

export default function Home() {
  const { products, loading, error } = useOutletContext();
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