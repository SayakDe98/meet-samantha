import axios from "axios";

const getCountries = async () => {
    const url = "https://countries.trevorblades.com/graphql";

    const query = {
        query: `query {
            countries {
                code
                name
                emoji
            }
        }`
    };
    const result = await axios.get(url, {
        params: query
    });

    return result.data.data.countries;
};

export default getCountries;