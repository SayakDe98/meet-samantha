import axios from "axios";

interface pageParams {
  size?: number;
  page?: number;
}

const getAirlines = async (pageParams: pageParams) => {
    console.log("airlines", process.env.REACT_APP_GET_AIRLINES_URL);
    const result = await axios.get(process.env.REACT_APP_GET_AIRLINES_URL, {
      params: pageParams,
    });
    console.log("res",result.data);
    return result.data;
}

export default getAirlines;