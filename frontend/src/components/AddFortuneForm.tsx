import "./AddFortuneForm.css";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FortuneCookie from "../models/Fortune";
import { createFortune } from "../services/Fortunes";
import FormInput from "./FormInputFortunes";

interface Props {
  initialTo?: string;
  onAdd?: (shoutout: FortuneCookie) => void;
}

function AddShoutOutForm({ initialTo = "", onAdd }: Props) {
  const [fortune, setFortune] = useState(initialTo);
  const [color, setColor] = useState("");
  const [message, setMsg] = useState("");

  useEffect(() => setFortune(initialTo), [initialTo]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createFortune({
      fortune,
      color,
      message,
    }).then(onAdd);
    setFortune(initialTo);
    setColor("");
    setMsg("");
  }

  return (
    <>
      <form className="AddShoutOutForm" onSubmit={handleSubmit}>
        <h2>Create a Fortune</h2>
        <p>Someone's fate is in your hands. You are in control now.</p>
        <FormInput
          label="Fortune"
          id="AddShoutOutForm__to"
          value={fortune}
          onChange={setFortune}
          required
          minLength={2}
        />
        <FormInput
          label="Color"
          id="AddShoutOutForm__from"
          value={color}
          onChange={setColor}
          required
          minLength={1}
        />
        <p className="FormInput">
          <label htmlFor="AddShoutOutForm__shoutout">Message</label>
          <textarea
            id="AddShoutOutForm__shoutout"
            value={message}
            onChange={(e) => setMsg(e.target.value)}
            minLength={2}
            rows={3}
          />
        </p>
        <p>
          <button id="submitbutton">Submit Fortune</button>
        </p>
      </form>
    </>
  );
}

export default AddShoutOutForm;
