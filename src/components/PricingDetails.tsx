import { Box } from '@mui/material'
import SelfHosted from './SelfHosted'
import Pro from './Pro'
import Enterprise from './Enterprise'

const PricingDetails = () => {
  return (
    <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "center", alignItems: "center", gap: 15, marginTop: "1rem"}}>
        <SelfHosted />
        <Pro />
        <Enterprise />
    </Box>
  )
}

export default PricingDetails