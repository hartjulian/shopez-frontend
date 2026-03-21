import { Box, Card, Skeleton } from "@mui/material";

export default function ProductCardSkeleton() {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}
    >
      {/* Image */}
      <Skeleton
        variant="rectangular"
        height={"100%"}
        animation={"wave"}
      />
      {/* Content */}
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Skeleton variant="text" height={28} animation={"wave"} />
        <Skeleton variant="text" height={28} width="80%" animation={"wave"} />
        <Skeleton variant="text" height={24} width="40%" sx={{ mt: 1 }} animation={"wave"} />
      </Box>
      {/* Button */}
      <Box sx={{ p: 2, pt: 0 }}>
        <Skeleton variant="rectangular" height={36} animation={"wave"} />
      </Box>
    </Card>
  );
}