import { Box } from '@mui/material'
import React from 'react'
import AboutTitle from './AboutTitle'
import AboutSubTitle from './AboutSubTitle'
import AboutDescription from './AboutDescription'
import AboutImage from '../assets/AboutImage'

const About = () => {
  return (
    <Box sx={{display: "flex", flexDirection: {xs: "column", md:"row"}, justifyContent: "space-around", padding: {xs: 0, md: "0 15px"} }}>

    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start",
     width: {xs: "50%", md:"30%"}, height: "100%" ,
     marginLeft: 5, marginTop: 20
     }}>
      <AboutTitle />
      <AboutSubTitle />
      <AboutDescription />
    </Box>
    <AboutImage />
    </Box>
  )
}

export default About