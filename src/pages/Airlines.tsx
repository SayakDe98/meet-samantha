import { QueryCache, QueryClient, useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Loader from "../assets/Loader";
import getAirlines from "../utils/api/getAirlines";
import TopBar from "../components/TopBar";
import AirlinesTable from "../components/AirlinesTable";
import QueryKeyExist from "../utils/QueryKeyExists";

interface pageParams {
    size: number;
    page: number;
}

const Airlines = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [open, setOpen] = useState(false);
    const queryCache = new QueryCache();
    const queryClient = new QueryClient();

      const handleChangePage = (
        // event: React.ChangeEvent<HTMLInputElement>,
        newPage: number
      ) => {
        setPage(newPage);
      };

      const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        console.log("CHANGED",event)
        setRowsPerPage(+event);
        setPage(0);
      };

    const pageParams: pageParams = {
      page,
        size: rowsPerPage
    }
    const prefetchPageParams: pageParams = {
      page: page + 1,
      size: rowsPerPage
    }

   
    const existingKey = QueryKeyExist(page + 1, rowsPerPage);
    // const prefetchExistingKey = QueryKeyExist(page + 4, rowsPerPage);
    console.log("existing data", existingKey)
    console.log("here",existingKey !== false &&  queryClient.getQueryData(existingKey));
      //  useEffect(() => {
      //    if (
      //      data &&
      //      data.totalPassengers &&
      //      page < data.totalPassengers / rowsPerPage
      //    ) {
      //      console.log("Here total passengers");
      //      const nextPage = page + 1;
      //      const prefetchPageParams = {
      //        page: nextPage,
      //        size: rowsPerPage,
      //      };
      //      queryClient.prefetchQuery(
      //        ["photos", nextPage + 1, rowsPerPage],
      //        () => getAirlines(prefetchPageParams)
      //      );
      //    }
      //  }, [page]);
    const { isLoading, isError, error, data, isFetching, isPreviousData } =
      useQuery({
        queryKey: ["photos", page + 1, rowsPerPage],
        // queryKey: ["photos"],
        queryFn: () => getAirlines(pageParams),
        initialData:
          existingKey !== false
            ? queryClient.getQueriesData(existingKey)
            : undefined,
        keepPreviousData: true,
      });

    // useEffect(() => {
      // console.log("IT RAN")
      useQuery({
        queryKey: ["photos", page + 2, rowsPerPage],
        queryFn: () => getAirlines(prefetchPageParams),
        keepPreviousData: true
      })
    // }, [page])
 

    // const prefetchData = () => queryClient.prefetchQuery({
    //   queryKey: ["photos", page + 4, rowsPerPage],
    //   queryFn: () => getAirlines(prefetchPageParams),
      // initialData:
      //   prefetchExistingKey !== false
      //     ? queryClient.getQueriesData(prefetchExistingKey)
      //     : undefined,
    // });


    // const { data: prefetchData, isPrefetchError: isError, prefetchError: error, isPrefetchLoading :isLoading } = useQuery(["photos",page, ]);

    console.log("data", data);
       return (
         <Box>
           {isLoading ? (
             <Loader />
           ) : (
             <>
               <TopBar />
               <Typography
                 sx={{
                   fontSize: { xs: 40, sm: 60, md: 80 },
                   mt: 15,
                   textAlign: "center",
                   color: "#ee3e01",
                   fontWeight: "bold"
                 }}
               >
                 Airline Users
               </Typography>
               <AirlinesTable
                 airlineRow={data.data}
                 totalNumberOfRows={data.totalPassengers}
                 handleChangePage={handleChangePage}
                 handleChangeRowsPerPage={handleChangeRowsPerPage}
                //  prefetchData={prefetchData}
               />
             </>
           )}
         </Box>
       );
}

export default Airlines;