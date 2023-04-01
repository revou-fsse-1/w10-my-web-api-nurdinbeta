import axios from "axios";
import { API_URL } from "../lib/constant";

export const deleteSucculentById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_URL}/succulent/${id}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};