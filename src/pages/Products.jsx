import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";

import mockProducts from "../mocks/mockData";


export default function Products() {
  return (
    <Layout>
      <ProductGrid products={mockProducts} />
    </Layout>
  );
}