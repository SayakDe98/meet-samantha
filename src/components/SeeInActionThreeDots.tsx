import React from 'react'
import Circle from './Circle'
import { Box } from '@mui/material';

const SeeInActionThreeDots = () => {
  return (
<Box sx={{display: "flex", gap: "10px", marginTop: "1rem"}}>
    <Circle />
      <Circle />
      <Circle />
</Box>
  );
}

export default SeeInActionThreeDots