import { Box } from '@mui/material'

const AboutImage = () => {
  return (
    <Box
      component="img"
      sx={{
        marginTop: 20,
        // display: { xs: "none", sm: "none" },
        content: {
          xs: `url(https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80)`,
          sm: `url(https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80)`,
          md: `url(https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)`,
        },
        padding: {
            xs: 5,
            md: 0
        }
      }}
      //   src="https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    >
      {/* <img src="https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" /> */}
    </Box>
  );
}

export default AboutImage