import { getCategoryImage } from "./getCategoryImage";

export function getImageUrl(product) {
    if (product.image_url) return product.image_url;
    if (product.category) return getCategoryImage(product.category);
    return "src/assets/ShopEZ_logo_plain.png"
}