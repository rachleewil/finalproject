import express from "express";

const routes = express.Router();
routes.get("/", async (req, res) => {
  //const client = await getClient();
  res.send("hello");
});


// routes.get('/', (req, res) => {
//     res.send("hello");
// });

export default routes;