import InfiniteScroll from "react-infinite-scroller"
import { useInfiniteQuery } from "react-query";

import { Species } from "../components/Species";
import getInfiniteSpecies from "../utils/api/getInfiniteSpecies";
import Loader from "../assets/Loader";
import TopBar from "../components/TopBar";
import { Box, Card, CardContent, Typography } from "@mui/material";

const initialUrl = process.env.REACT_APP_GET_INFINITE_SPECIES;

const InfiniteSpecies = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    "sw-species",
    ({ pageParam = initialUrl }) => getInfiniteSpecies(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );
  const loadMore = () => fetchNextPage();
  if (isLoading) return <Loader />;
  if (isError) return <div>Error! {(error as any).toString()}</div>;
  console.log("data!!",data)

  return (
    <>
      {isFetching && <Loader />}
      <TopBar />
      <InfiniteScroll
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasNextPage}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          >
          <Typography 
                 sx={{
                   fontSize: { xs: 40, sm: 60, md: 80 },
                   mt: 15,
                   textAlign: "center",
                   color: "#ee3e01",
                   fontWeight: "bold"
                  }}
                  >Infinite Species</Typography>
          <Card
            sx={{
              padding: 5,
              m: "2rem 0"
            }}
          >
            {(data as any).pages.map((pageData: any) => {
              return pageData.results.map((species: any) => {
                return (
                  <Species
                    key={species.name}
                    name={species.name}
                    language={species.language}
                    averageLifespan={species.average_lifespan}
                  />
                );
              });
            })}
          </Card>
        </Box>
      </InfiniteScroll>
    </>
  );
};

export default InfiniteSpecies;
