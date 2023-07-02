import TopBar from "../components/TopBar";
import MeetSamantha from "../components/MeetSamantha";
import SeeInAction from "../components/SeeInAction";
import About from "../components/About";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import { Box } from "@mui/material";
import Waves from "../assets/Waves";
import Footer from "../components/Footer";
import PricingDetails from "../components/PricingDetails";
import Loader from "../assets/Loader";

const home = () => {

  return (
    <>
        <TopBar />
        <Box sx={{display: "flex", flexDirection: "column"}}> 
            <MeetSamantha />
            <Waves />
            <SeeInAction />
            <About />
            <Features />
            <Pricing />
            <PricingDetails />
            <Footer />
        </Box>
    </>
  )
}

export default home