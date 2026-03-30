import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Box, Container, Paper, Typography } from "@mui/material";
import FilterBar from "../components/FilterBar";


export default function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("rating-desc");

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
      .then(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "rating-desc") return b.rating - a.rating;
    return 0;
  });

  if (error) return (
    <Layout>
      <Container sx={{ py: 10 }} align="center">
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>Oops! Something went wrong</Typography>
      </Container>
    </Layout>
  )
  return (
    <Layout>
      <Paper sx={{ p: 2, mb: 3, maxWidth: "1200px", justifySelf: {sm: "center"}, width: "100%" }}>
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <Box>
          <Typography>
            {filteredProducts.length} products found
          </Typography>
        </Box>
      </Paper>
      <ProductGrid
        products={loading ? Array.from(new Array(8)) : filteredProducts}
        isLoading={loading}
      />
    </Layout>
  );
}