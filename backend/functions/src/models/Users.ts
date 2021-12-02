import { ObjectId } from "mongodb";

export interface Users {
  _id?: ObjectId;
  username: string;
  password: string;
  over21: boolean;
  token: number;
  fortune: string;
}
