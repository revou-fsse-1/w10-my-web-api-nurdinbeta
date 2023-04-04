import axios from "axios";
import { API_URL } from "../lib/constant.js";

export const getAllSucculents = async () => {
 try {
    const response = await axios.get(
        `${API_URL}/succulent`
);

    return response.data;
 } catch (err) {
    console.log(err);
 }
 };   