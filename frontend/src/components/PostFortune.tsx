import React, { FormEvent, useEffect, useState } from "react";
import FortuneCookie from "../models/Fortune";
import { fetchFortunes, createFortune } from "../services/Fortunes";
import { Link } from "react-router-dom";

export default function PostFortunes() {
  const [future, setFuture] = useState<FortuneCookie[]>([]);
  const [fortune, setFortune] = useState("");
  const [color, setColor] = useState("");
  const [message, setMsg] = useState("");

  function getFortunes() {
    fetchFortunes().then((data) => {
      setFuture(data);
    });
  }
  useEffect(() => {
    getFortunes();
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createFortune({ fortune, color, message });
  }

  return (
    <div className="outer">
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <div>
        {future.map((future, index) => (
          <ol>
            <p style={{ fontWeight: "bold" }}>
              Cosmic Prediction: {future.fortune}
            </p>
            <p>Lucky Color: {future.color}</p>
            <p>Cosmic Action: {future.message}</p>
          </ol>
        ))}
      </div>
      <div className="FortuneForm">
        <p style={{ fontWeight: "bold" }}>Write Fortune</p>
        <div className="PostShout">
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="PostForm__to">Write Fortune:</label>
              <input
                id="PostForm__to"
                required
                value={fortune}
                onChange={(e) => setFortune(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="PostForm__from">Color:</label>
              <input
                id="PostForm_from"
                required
                value={color}
                onChange={(e) => setColor(e.target.value)}
              ></input>
            </p>
            <p>
              <label htmlFor="PostForm__msg">Call to Action:</label>
            </p>
            <textarea
              id="PostForm__msg"
              rows={5}
              required
              value={message}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <p>
              <button type="submit">Submit</button>
              {/* <button onClick={handleReset}>Reset</button> */}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
