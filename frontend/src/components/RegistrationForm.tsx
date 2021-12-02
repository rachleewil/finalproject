import { FormEvent, useEffect, useState } from "react";
import { Users } from "../models/Users";
import { fetchUser } from "../services/Users";
import FormInput from "./FormInput";

interface Props {
  initialTo?: string;
  onAdd?: (user: Users) => void
}