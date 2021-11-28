import { ObjectId } from "mongodb";

export default interface FortuneCookie {
  _id?: ObjectId;
  fortune: string;
  color: string;
  number: number;
}

export interface Fortunes {
  _id?: ObjectId;
  fortune: string;
}

export interface Colors {
  _id?: ObjectId;
  color: string;
}

export interface Users {
  _id?: ObjectId;
  username: string;
  fortune: string;
  color: string;
  number: number;
}
