import axios from "axios";
import { API_URL } from "../lib/constant";

export const updateSucculentById = async (succulentData) => {
  try {
    await axios.put(`${API_URL}/succulent/${succulentData.id}`, {
      name: succulentData.name,
      genus: succulentData.genus,
      family: succulentData.family,
    });

    console.log({updateSucculentById})
  } catch (err) {
    console.log(err);
  }
};