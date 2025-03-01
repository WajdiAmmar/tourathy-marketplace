import axios from "axios";

const API_URL = "http://localhost:8080/users"; // URL du backend Quarkus

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs", error);
    return [];
  }
};
