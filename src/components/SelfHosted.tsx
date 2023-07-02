import { Box, Button } from "@mui/material";

const SelfHosted = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(0,0,0,.05)",
        padding: "1rem 0",
        ":hover": {
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          transform: "scale(1.09)",
          transition: "transform .5s",
        },
      }}
    >
      <span
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          borderBottom: "5px red solid",
          padding: "0 2rem",
        }}
      >
        Self-hosted
      </span>
      <Box sx={{ bgcolor: "#f7f7f7", padding: "1rem 2rem" }}>
        <span style={{ fontSize: 30, fontWeight: "bold", marginLeft: 3 }}>
          $0
        </span>
        <p style={{ marginLeft: 3, fontSize: 16 }}>Per Month</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "rgba(55, 53, 47, 0.6)",
          padding: "0 1rem",
        }}
      >
        <p>&#10003;Unlimited Updates</p>
        <p>&#10003;100GB Storage</p>
        <p>&#10003;Limited API Quota</p>
        <p>&#10003;Limited Support</p>
      </Box>
      <Button
        sx={{
          border: "1px solid red",
          borderRadius: "2em",
          color: "red",
          margin: "1rem",
          textTransform: "none",
          ":hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        Choose Free
      </Button>
    </Box>
  );
};

export default SelfHosted;
