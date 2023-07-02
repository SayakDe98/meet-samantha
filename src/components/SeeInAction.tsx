import { Box } from "@mui/material"
import SeeInActionTitle from "./SeeInActionTitle"
import StoryOfTheodore from "./StoryOfTheodore"
import StoryOfTheodoreVideo from "./StoryOfTheodoreVideo"
import SeeInActionThreeDots from "./SeeInActionThreeDots"

const SeeInAction = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SeeInActionTitle />
      <StoryOfTheodore />
      <StoryOfTheodoreVideo />
      <SeeInActionThreeDots />
    </Box>
  );
}

export default SeeInAction