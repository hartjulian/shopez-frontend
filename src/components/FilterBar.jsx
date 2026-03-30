import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";

export default function FilterBar({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption
}) {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            maxWidth={"1200px"}
            width={"100%"}

            spacing={2}
            sx={{ mb: 1 }}
        >
            {/* Search */}
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Category filter */}
            <FormControl sx={{ minWidth: 160 }}>
                <InputLabel>Category</InputLabel>
                <Select
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <MenuItem value="all">All Categories</MenuItem>
                    <MenuItem value="accessories">Accessories</MenuItem>
                    <MenuItem value="clothing">Clothing</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="home">Home & Living</MenuItem>
                    <MenuItem value="sports">Sports</MenuItem>
                </Select>
            </FormControl>
            {/* Sort by */}
            <FormControl sx={{ minWidth: 180 }}>
                <InputLabel>Sort</InputLabel>
                <Select
                    value={sortOption}
                    label="Sort"
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <MenuItem value="price-asc">Price: Low to High</MenuItem>
                    <MenuItem value="price-desc">Price: High to Low</MenuItem>
                    <MenuItem value="rating-desc">Highest Rated</MenuItem>
                </Select>
            </FormControl>
            <Button
                onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSortOption("rating-desc");
                }}
            >
                Reset
            </Button>
        </Stack>
    )
};