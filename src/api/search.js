import axios from "axios";

export async function fetchSearch(searchParams) {
    return await axios.get(`http://localhost:3000/search?q=${searchParams}`, {});
}