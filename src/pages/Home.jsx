import Layout from "../components/Layout";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        Welcome to ShopEZ
      </Typography>

      <Typography>
        Easy Shopping, Smart Choices!
      </Typography>
    </Layout>
  );
}