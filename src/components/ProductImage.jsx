import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getImageUrl } from "../utils/getImageUrl";

export default function ProductImage({
    product,
    alt,
    sx = {},
    ...props
}) {
    const [src, setSrc] = useState(getImageUrl(product));
    const defaultImage = "/src/assets/ShopEZ_logo_plain.jpg"
    const isFallback = !product.image_url;

    useEffect(() => {
        setSrc(getImageUrl(product));  
    }, [product])

    const handleError = () => {
        if (src !== defaultImage) {
            setSrc(defaultImage);
        }
    };

    return (
        <Box
            component="img"
            src={src}
            alt={alt || product.name}
            onError={handleError}
            sx={{
                width: "100%",
                objectFit: "cover",
                aspectRatio: "1 / 1",
                opacity: isFallback ? 0.85 : 1,
                filter: isFallback ? "grayscale(20%)" : "none",
                ...sx
            }}
            {...props}
        />
    )
}