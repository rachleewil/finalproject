export default interface FortuneCookie {
  _id?: string;
  fortune: string;
  color: string;
  number: number;
}

export default interface Fortunes {
  _id?: string;
  fortune: string;
}

export default interface Colors {
  _id?: string;
  color: string;
}

export default interface Users {
  _id?: string;
  username: string;
  fortune: string;
  color: string;
  number: number;
}
