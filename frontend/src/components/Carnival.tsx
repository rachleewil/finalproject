import React, { FormEvent, useEffect, useState } from "react";
import FortuneCookie from "../models/Fortune";
import { fetchFortunes } from "../services/Fortunes";
import { Link } from "react-router-dom";

export default function ViewFortunes() {
  const [fortunes, setFortunes] = useState<FortuneCookie[]>([]);
  //   const [to, setTo] = useState("");
  //   const [from, setFrom] = useState("");
  //   const [message, setMsg] = useState("");

  function getFortunes() {
    fetchFortunes().then((data) => {
      setFortunes(data);
    });
  }
  useEffect(() => {
    getFortunes();
  }, []);

  //   function handleSubmit(e: FormEvent) {
  //     e.preventDefault();
  //     sendLove({ to, from, message });
  //   }

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>
        {fortunes.map((fortune) => (
          <ol>
            <p style={{ fontWeight: "bold" }}>
              Your Fortune is {fortune.fortune}
            </p>
            <p>color: {fortune.color}</p>
            <p>number: {fortune.number}</p>
          </ol>
        ))}
      </div>
    </div>
  );
}
