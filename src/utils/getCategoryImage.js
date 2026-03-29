const categoryImages = {
    accessories: "/images/categories/accessories.jpg",
    clothing: "/images/categories/clothing.jpg",
    electronics: "/images/categories/electronics.jpg",
    home: "/images/categories/home.jpg",
    sports: "/images/categories/sports.jpg"
};

export function getCategoryImage(category) {
    return categoryImages[category];
};