import axios from "axios";

import { API_URL } from "../lib/constant";

export const addSucculent = async (newSucculentData) => {
  try {
    await axios.post(`${API_URL}/succulents`, {
      name: newSucculentData.name,
      genus: newSucculentData.genus,
      family: newSucculentData.family,
    });
  } catch (err) {
    console.log(err);
  }
};