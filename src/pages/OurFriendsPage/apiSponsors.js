import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001"
export const getAllSponsors = async () => {
    const { data } = await axios.get('/info/sponsors');
    return data;
};