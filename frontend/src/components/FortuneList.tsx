import React, { FormEvent, useEffect, useState } from "react";
import FortuneCookie from "../models/Fortune";
import { fetchFortunes, createFortune } from "../services/Fortunes";
import { Link } from "react-router-dom";
import "./FortuneList.css";

interface Props {
  shoutOuts: FortuneCookie[];
}

function FortuneList({ shoutOuts }: Props) {
  return (
    <div className="ShoutOutList">
      <ul>
        {shoutOuts.map((shout) => (
          <li key={shout._id}>
            <h3 id="fortunes">Prediction from the Orcale</h3>
            <p className="ShoutOutList__from"><b>Fortune: </b>{shout.fortune}</p>
            <p className="ShoutOutList__text"><b>Lucky Color: </b>{shout.color}</p>
            <p className="ShoutOutList__text"><b>Message: </b>{shout.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FortuneList;
