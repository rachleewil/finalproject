import axios from "axios";
import { Users } from "../models/Users";

const baseUrl = "https://us-central1-carnival-app-b84f4.cloudfunctions.net/api";
// const baseUrl = "http://localhost:5001/carnival-app-b84f4/us-central1/api";

export async function fetchUser(): Promise<Users[]> {
  //hit our /topicsFortuneCookie
  const res = await axios.get(`${baseUrl}/users`);
  return res.data;
  // return the promise with the topics
}

export async function fetchUserByCred(
  username: string,
  password: string
): Promise<Users> {
  const res = await axios.get(`${baseUrl}/users`, {
    params: { username: username, password: password },
  });
  return res.data;
}

export async function createUser(post: Users): Promise<Users> {
  const res = await axios.post(`${baseUrl}/users`, post);
  return res.data;
}
