import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";

const mockProducts = [
  {
    id: 1,
    name: "Running Shoes",
    price: 120,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Training Shorts",
    price: 45,
    image: "https://images.unsplash.com/photo-1696536823512-79d724454616?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function Products() {
  return (
    <Layout>
      <ProductGrid products={mockProducts} />
    </Layout>
  );
}