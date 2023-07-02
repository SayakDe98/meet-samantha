import React from 'react'
import MeetSamanthaIcon from '../assets/MeetSamanthaIcon';
import { Box, Button } from '@mui/material';
import MeetSamanthaTitle from './MeetSamanthaTitle';
import MeetSamanthaDescription from './MeetSamanthaDescription';
import { useInfiniteQuery } from 'react-query';
import getAirlines from '../utils/api/getAirlines';
import { useNavigate } from 'react-router-dom';

// interface data {
//   id: string;
//   name: string;
//   trips: number;
//   airline: string;
//   country: string;
//   logo: string;
//   slogan: string;
//   head_quaters: string; 
//   website: string;
//   established: string;
//   __v: number;
// }


const MeetSamantha = () => {
  const navigate = useNavigate();
  // const {
  //   status,
  //   error,
  //   data,
  //   isFetchingNextPage,
  //   hasNextPage,
  //   fetchNextPage
  // } = useInfiniteQuery({
  //   queryKey: ["photos", "infinite"],
  //   getNextPageParam: page => page + 1,
  //   queryFn: ({ page = 0, size = 5 }: any) => getAirlines(page, size),
  // })
  return (
    <Box
      sx={{
        bgcolor: "#ee3e01",
        display: "flex",
        flexFlow: {
          xs: 'column-reverse',
          md: 'row'
        },
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: {xs: "center", md:"flex-start"},
          width: {xs: "75%",md:"35%"},
          margin:"auto",
        }}
      >
        <MeetSamanthaTitle />
        <MeetSamanthaDescription />
        <Button
        onClick={() => navigate("/airlines")}
        sx={{ bgcolor: "white", color: "black", mt: 5,fontSize: 25, textTransform: "none",
        ":hover": {
          bgcolor: "black",
          color: "white"
        }}}>
          Try For Free
        </Button>
      </Box>
      <MeetSamanthaIcon />
    </Box>
  );
}

export default MeetSamantha