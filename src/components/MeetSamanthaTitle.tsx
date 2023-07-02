import { Typography } from '@mui/material'

const MeetSamanthaTitle = () => {
  return (
      // <span style={{color: "white", fontSize: 80, fontWeight:"bold" }}>Meet Samantha</span>
      <Typography sx={{color: "white", fontWeight: "bold", fontSize: { xs: "10vmin", md: 80}, mt: {xs: 10}}}>
        Meet Samantha
      </Typography>
  );
}

export default MeetSamanthaTitle