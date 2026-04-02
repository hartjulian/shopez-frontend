import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <Fab
            color="secondary"
            onClick={scrollToTop}
            sx={{
                position: "fixed",
                bottom: 24,
                right: 24
            }}
        >
            <KeyboardArrowUpIcon />
        </Fab>
    )
}