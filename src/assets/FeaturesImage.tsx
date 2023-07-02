import { Box } from '@mui/material'

const FeaturesImage = () => {
  return (
    <Box
      component="img"
      sx={{
        marginTop: 20,
        content: {
          xs: `url(https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80)`,
          sm: `url(https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80)`,
          md: `url(https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)`,
        },
        padding: {
            xs: 5,
            md: 0
        }
      }}
    >
      {/* <img src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
    </Box>
  );
}

export default FeaturesImage