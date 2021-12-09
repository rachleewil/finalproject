import axios from "axios";
import FortuneCookie from "../models/Fortune";

const baseUrl = "https://us-central1-carnival-app-b84f4.cloudfunctions.net/api";
//const baseUrl = "http://localhost:5001/carnival-app-b84f4/us-central1/api";

export async function fetchFortunes(): Promise<FortuneCookie[]> {
  //hit our /topicsFortuneCookie
  const res = await axios.get(`${baseUrl}/fortunecookie`);
  return res.data;
  // return the promise with the topics
}

export async function fetchFortuneById(id: string): Promise<FortuneCookie> {
  const res = await axios.get(`${baseUrl}/fortunecookie`, {
    params: { id: id },
  });
  return res.data;
}

export async function createFortune(
  post: FortuneCookie
): Promise<FortuneCookie> {
  const res = await axios.post(`${baseUrl}/fortunecookie`, post);
  return res.data;
}

/* //Setup similar to MK
export async function getCallOut(): Promise<FortuneCookie[]> {
  const response = await axios.get<LoveResult>(`${baseUrl}/fortunecookie`);
  return response.data.results;
} */
