import axios from "axios";

interface pageParams {
    size?: number;
    page? : number;
}

const getPhotos = async (pageParams : pageParams) => {
    const result = await axios.get(process.env.REACT_APP_GET_PHOTOS_URL, { params: pageParams });
    return result.data;
}

export default getPhotos;