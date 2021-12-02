import express from "express";
import { getClient } from "../db/db";
import { ObjectId } from "mongodb";
import { Users } from "../models/Users"
// import { Fortunes, Colors, Users } from "../models/Fortunes";

const routes = express.Router();

routes.get("/test", async (req, res) => {
  //const client = await getClient();
  res.send("hello taylor");
});
//http://localhost:5001/carnival-app-b84f4/us-central1/api/users
routes.get("/users", async (req, res) => {
  const username = req.query.username as string;

  const mongoQuery: any = {};
  // if a year was specified, add it to the mongo query
  if (username) {
    mongoQuery.username = username; // { fortune: "you will be wealthy today" }
  }

  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<Users>("users")
      .find(mongoQuery)
      .toArray();
    if (results.length === 0) {
      res.json({ message: "No user found" });
    }
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "N" });
  }
});
//localhost:5001/carnival-app-b84f4/us-central1/api/users?id=61a30a8c220033503f65a2
//http://localhost:5001/carnival-app-b84f4/us-central1/api/users/61a30a8c220033503f65a2f6
http: routes.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const checkUser = await client
      .db()
      .collection<Users>("users")
      .findOne({ _id: new ObjectId(id) });
    if (checkUser) {
      res.json(checkUser);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//{"fortune": "It's snowing in MI", "lucky color": "maize", "lucky number": 18}//
routes.post("/users", async (req, res) => {
  const newUser = req.body as Users;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Users>("users")
      .insertOne(newUser);
    newUser._id = result.insertedId;
    res.status(201).json(newUser);
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "User not created -___-" });
  }
});
//need to fix the put - cannot get by id for some reason//
routes.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updateUser = req.body as Users;
  delete updateUser._id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Users>("users")
      .replaceOne({ _id: new ObjectId(id) }, updateUser);
    if (result.modifiedCount === 0) {
      res.status(404).json({ message: "User not found (╯°□°)╯︵ ┻━┻" });
    } else {
      updateUser._id = new ObjectId(id);
      res.json(updateUser);
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "User not updated (╯°□°)╯︵ ┻━┻" });
  }
});

routes.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Users>("users")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "User not found (╯°□°)╯︵ ┻━┻" });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    console.error("FAIL", err);
    res
      .status(500)
      .json({ message: "User not deleted at all; Sorry Charlie" });
  }
});

export default routes;
