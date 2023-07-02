import axios from "axios";

const getSolutions = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/albums");

    return result.data;
}

export default getSolutions;