import axios from "axios"
import { API_URL } from "../lib/constant"

export const getSucculentById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/succulent/${id}`);
    return response.data;
    } catch (err) {
        console.log(err);
    }
}