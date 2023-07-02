import axios from "axios";

export default async function getInfiniteSpecies (url: string) {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.log((error as any).message);
    }
}