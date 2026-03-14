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
            default: "#F8FAFC",
            paper: "#FFFFFF"
        },
        text: {
            primary: "#374151"
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