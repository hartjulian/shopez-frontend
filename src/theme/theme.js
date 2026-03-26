import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1E5AAA"
        },
        secondary: {
            main: "#F59E0B"
        },
        background: {
            default: "#F9FAFB",
            paper: "#FFFFFF"
        },
        text: {
            primary: "#374151",
            secondary: "#6B7280"
        },
        divider: "#E5E7EB"
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: "Roboto, sans-serif"
    }
});

export default theme;