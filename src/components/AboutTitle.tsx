import { Box } from '@mui/material'
import React from 'react'

const AboutTitle = () => {
  return (
    <Box sx={{display: "flex",alignItems: "center", gap: 2, justifyContent: "flex-start", alignSelf: "flex-start"}}>
      <span
        style={{
          width: 25,
          height: 5,
          backgroundColor: "red",
          display: "inline-block",
          marginBottom: 4
        }}
      ></span>
      <span
        style={{
          fontSize: 20,
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "#828282",
        }}
      >
        ABOUT
      </span>
    </Box>
  );
}

export default AboutTitle