import React, { FormEvent, useEffect, useState } from "react";
import FortuneCookie from "../models/Fortune";
import { fetchFortunes, createFortune } from "../services/Fortunes";
import { Link } from "react-router-dom";
import "./FortuneList.css";
/* import './ShoutOutList.css'; */

interface Props {
  shoutOuts: FortuneCookie[];
}

function FortuneList({ shoutOuts }: Props) {
  return (
    <div className="ShoutOutList">
      <ul>
        {shoutOuts.map((shout) => (
          <li key={shout._id}>
            <h3>Predictions from the Orcale</h3>
            <p className="ShoutOutList__from">{shout.fortune}</p>
            <p className="ShoutOutList__text">{shout.color}</p>
            <p className="ShoutOutList__text">{shout.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FortuneList;
