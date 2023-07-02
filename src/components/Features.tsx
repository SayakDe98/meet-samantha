import { Box } from "@mui/material";
import FeaturesTitle from "./FeaturesTitle";
import FeaturesSubTitle from "./FeaturesSubTitle";
import FeaturesDescription from "./FeaturesDescription";
import FeaturesImage from "../assets/FeaturesImage";
import { useQueryClient } from "react-query";



const Features = () => {
  


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs:"column", md: "row"},
        flexFlow: {xs: "column-reverse", md: "nowrap"},
        justifyContent: "space-around"
        , padding: {xs: 0, md: "0 15px"}
      }}
    >
      <FeaturesImage />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: {xs: "50%", md: "30%"},
          height: "100%",
          marginLeft: 5,
          marginTop: 20,
        }}
      >
        <FeaturesTitle />
        <FeaturesSubTitle />
        <FeaturesDescription />
      </Box>
    </Box>
  );
};

export default Features;
