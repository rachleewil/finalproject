import { FormEvent, useEffect, useState } from "react";
import { Users } from "../models/Users";
import { fetchUser } from "../services/Users";

interface Props {
  initialTo?: string;
  //onAdd?: (user: Users) => void
}

function LoginForm({ initialTo = "" }: Props) {
  const [ username, setUsername ] = useState(initialTo);
  const [ password, setPassword ] = useState("");
  const [ legal, setLegal ] = useState(true);

  useEffect(() => setUsername(initialTo), [initialTo]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetchUser().then();
    setUsername(initialTo);
    setPassword("");
    setLegal(true);
  }

  const handleChange = () => {
    setLegal(!legal);
  };

  return (
    <form className="SignInForm" onSubmit={handleSubmit}>
      <h2>Time to Sign In</h2>
     
      <p className="FormInput">
        <label htmlFor="checkbox">Are you over the age of 21</label>
        <input type="checkbox" id="checkbox" checked={legal}  onChange={handleChange}/>
      </p>
      <p>
        <button>Sign In</button>
      </p>
    </form>
  );
}

export default LoginForm;


