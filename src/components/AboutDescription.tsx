import { Typography } from '@mui/material';
import React from 'react'

const AboutDescription = () => {
  return (
    <Typography
      sx={{
        color: "#4c4c4c",
        fontWeight: 400,
        lineHeight: "1.875rem",
        letterSpacing: ".04375rem",
        fontSize: {xs: "1rem", md:"15pt"}
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacinia
      ex. Pellentesque et augue interdum, efficitur neque a, convallis odio.
      Aenean pellentesque nunc mattis nunc tincidunt fermentum vitae quis quam.
      Duis scelerisque lectus quis tellus volutpat, a volutpat est placerat.
      Aliquam cursus quam at aliquet vestibulum. Mauris pellentesque lorem eget
      facilisis porttitor. Etiam ac gravida nibh, at vestibulum libero.
    </Typography>
  );
}

export default AboutDescription