import express from "express";
import { getClient } from "../db/db";
import { ObjectId } from "mongodb";
import FortuneCookie from "../models/Fortunes";
// import { Fortunes, Colors, Users } from "../models/Fortunes";

const routes = express.Router();

routes.get("/", async (req, res) => {
  //const client = await getClient();
  res.send("hello");
});
//http://localhost:5001/carnival-app-b84f4/us-central1/api/fortunecookie
routes.get("/fortunecookie", async (req, res) => {
  const fortune = req.query.fortune as string;

  const mongoQuery: any = {};
  // if a year was specified, add it to the mongo query
  if (fortune) {
    mongoQuery.fortune = fortune; // { fortune: "you will be wealthy today" }
  }

  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<FortuneCookie>("fortunecookie")
      .find(mongoQuery)
      .toArray();
    if (results.length === 0) {
      res.json({ message: "No fortunes" });
    }
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "The future looks bleak x__x" });
  }
});
//localhost:5001/carnival-app-b84f4/us-central1/api/fortunecookie?id=61a30a8c220033503f65a2

http: routes.get("/fortunecookie/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const checkFortune = await client
      .db()
      .collection<FortuneCookie>("shoutouts")
      .findOne({ _id: new ObjectId(id) });
    if (checkFortune) {
      res.json(checkFortune);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//{"fortune": "It's snowing in MI", "lucky color": "maize", "lucky number": 18}//
routes.post("/fortunecookie", async (req, res) => {
  const newFortune = req.body as FortuneCookie;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<FortuneCookie>("fortunecookie")
      .insertOne(newFortune);
    newFortune._id = result.insertedId;
    res.status(201).json(newFortune);
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Fortune not posted -___-" });
  }
});
//need to fix the put - cannot get by id for some reason//
routes.put("/fortunecookie/:id", async (req, res) => {
  const id = req.params.id;
  const updateFortune = req.body as FortuneCookie;
  delete updateFortune._id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<FortuneCookie>("shoutouts")
      .replaceOne({ _id: new ObjectId(id) }, updateFortune);
    if (result.modifiedCount === 0) {
      res.status(404).json({ message: "Fortune not found (╯°□°)╯︵ ┻━┻" });
    } else {
      updateFortune._id = new ObjectId(id);
      res.json(updateFortune);
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Fortune not updated at all .__. FAIL" });
  }
});

routes.delete("/fortunecookie/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<FortuneCookie>("fortunecookie")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Fortune not found (╯°□°)╯︵ ┻━┻" });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    console.error("FAIL", err);
    res
      .status(500)
      .json({ message: "Fortune not deleted at all; Sorry Charlie" });
  }
});

export default routes;
