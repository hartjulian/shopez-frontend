import { Box, Grid, Skeleton } from "@mui/material";
import Layout from "./Layout";

export default function ProductDetailsSkeleton() {
    return (
        <Layout>
            <Grid container spacing={8}>
                {/* Image */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Skeleton
                        variant="rectangular"
                        animation="wave"
                        sx={{
                            width: "100%",
                            maxWidth: 500,
                            height: "100%",
                            aspectRatio: "1 / 1",
                            margin: "0 auto",
                            borderRadius: 2
                        }}
                    />
                </Grid>
                {/* Details */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 500 }}>
                        <Skeleton variant="text" height={32} width="40%" sx={{ mb: 7/8 }}/>
                        <Skeleton variant="text" height={42} width="40%" sx={{ mb: 12/8 }}/>
                        <Skeleton variant="text" height={32} width="40%" sx={{ mb: 12/8 }} />
                        <Skeleton variant="rectangular" height={50} width="40%" sx={{ mb: 3 }} />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" width="90%" />
                    </Box>
                </Grid>

            </Grid>
        </Layout>
    )
}