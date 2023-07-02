import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react'

const SuccessMessage = () => {
    useEffect(() => {
        throw new Error("Api did not respond!");
    })
    
  return (
    <Box>
        <Typography>Your account has been created successfully!</Typography>
        <Button>Go to Account</Button>
    </Box>
  )
}

export default SuccessMessage