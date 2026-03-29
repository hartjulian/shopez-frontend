export function mapProductToCartItem(product) {
 if (!product) return null;

 const { id, name, price, image_url, category } = product;
 return { id, name, price, image_url, category };
}