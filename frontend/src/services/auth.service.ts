import axios from "axios";

//const API_URL = "http://localhost:8080/api/auth/";
const baseUrl = "https://us-central1-carnival-app-b84f4.cloudfunctions.net/api";

export const login = (username: string, password: string) => {
  return axios
    .post(baseUrl + "user", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("/user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};