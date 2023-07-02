import { Box } from "@mui/material";

const FeaturesTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
        alignSelf: 'flex-start'
      }}
    >
      <span
        style={{
          width: 25,
          height: 5,
          backgroundColor: "red",
          display: "inline-block",
          marginLeft: "auto",
          marginBottom: 4
        }}
      ></span>
      <span
        style={{
          fontSize: 20,
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "#828282",
        }}
      >
        FEATURES
      </span>
    </Box>
  );
};

export default FeaturesTitle;
