import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";


export default function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <Layout>
      <ProductGrid products={products} />
    </Layout>
  );
}