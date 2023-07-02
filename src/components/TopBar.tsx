import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TopBarIcon from "../assets/TopBarIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./TopBar.module.css";
import { useQuery, useQueryClient } from "react-query";
// import getFeatures from "../utils/api/getFeatures";
import getFeatures from "../utils/api/getFeatures";
import getSolutions from "../utils/api/getSolutions";
import getCountries from "../utils/api/getCountries";
import { useNavigate } from "react-router-dom";


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

// const drawerWidth = 240;
const navItems = ["About", "Features", "Pricing", "Solutions"];

export default function TopBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [features, setFeatures] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


    const queryClient = useQueryClient();
    const onHoverGetFeatures = () => {
      if(!queryClient.getQueryData("features")) {
        console.log("done")
        queryClient.prefetchQuery({
          queryKey: ["features"],
          // queryFn: async() => await axios.get("https://jsonplaceholder.typicode.com/posts"),
          queryFn: () => getFeatures,
        });
      }
    };

   useQuery({
     queryKey: ["pricing"],
     queryFn: getCountries,
     enabled: clicked,
     refetchInterval: 60000,
     keepPreviousData: true,
     onSuccess: () => {
      queryClient.invalidateQueries(["features"]);
      queryClient.refetchQueries("features");
     }
   });

   clicked && console.log("Pricing", queryClient.getQueryData("pricing"))

   const getFeaturesData = async() => {
      console.log(await queryClient.getQueryData("features"))};
    
    const { isError, isSuccess, isLoading, data, error } = useQuery(["solutions"], getSolutions,{ staleTime: 60000 });

    if(isLoading) {
      console.log("Loading...");
    }
    
    if(isSuccess) {
      console.log("Success", data);
    }
    if(isError) {
      console.log("Error", error);
    }

     
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "1rem",
          marginBottom: 0,
        }}
      >
        <TopBarIcon />
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.closeButton}
          style={{ padding: "1rem", fontSize: "2rem" }}
          onClick={() => handleDrawerToggle}
        />
      </Box>

      {/* <Divider /> */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "start", fontFamily: "Poppins", fontSize: 16 }}
            >
              <ListItemText
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar
          sx={{
            justifyContent: "space-around",
            width: { xs: "100%", md: "80%" },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <TopBarIcon />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 0, display: { sm: "none" } }}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <TopBarIcon />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: 0, md: 3 },
            }}
          >
            {navItems.map((item) =>
              item === "Features" ? (
                <Button
                  key={item}
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "#333333",
                    textTransform: "none",
                  }}
                  onMouseEnter={onHoverGetFeatures}
                  onClick={getFeaturesData}
                >
                  {item}
                </Button>
              ) : item === "Pricing" ? (
                <Button
                  key={item}
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "#333333",
                    textTransform: "none",
                  }}
                  onClick={() => setClicked(true)}
                >
                  {item}
                </Button>
              ) : (
                <Button
                  key={item}
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "#333333",
                    textTransform: "none",
                  }}
                >
                  {item}
                </Button>
              )
            )}
            <Button
              sx={{
                color: "#333333",
                border: "1px solid black",
                borderRadius: 150,
                textTransform: "none",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                ":hover": {
                  bgcolor: "#333333", // theme.palette.primary.main
                  color: "white",
                },
              }}
              onClick={() => navigate("/infinite-species")}
            >
              Getting Started
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              // width: drawerWidth,
              width: "100%",
            },
            color: "black",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
