export function mapProductToCartItem(product) {
 if (!product) return null;

 const { id, name, price, image_url, category } = product;
 return { id, name, price, image_url, category };
};

export function calculateSubtotal(items) {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};