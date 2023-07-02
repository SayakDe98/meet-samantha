import { QueryCache, useQueryClient } from "react-query";

const QueryKeyExist = (page: number, rowsPerPage: number) => {
    const queryClient = useQueryClient();

  const queryCache = queryClient.getQueryCache();
  const queries = queryCache.findAll({queryKey: ["photos"]});
  console.log("queries",queries)
  if(!queries) {
    return false;
  }
  const queryKeys = queries.map(query => query.queryKey);  
  
  for (const key of queryKeys) {
    const [, queryPage, queryRowsPerPage] = key as [string, number, number];
    if (queryPage * queryRowsPerPage > page * rowsPerPage) {
      console.log("qc", key)
      return key;
    }
  }

return false;
}

export default QueryKeyExist;