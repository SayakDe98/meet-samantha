import axios from "axios";

const getFeatures = async() => {

  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data.data;

};

export default getFeatures;
