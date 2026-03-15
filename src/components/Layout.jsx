import Navbar from "./Navbar";
// import Footer from "./Footer";
import { Box, Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 4 }}>{children}</Container>
      {/* <Footer /> */}
    </Box>
  );
}