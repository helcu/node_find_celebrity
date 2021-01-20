import express from "express";

//People endpoint https://60085fa0309f8b0017ee5e8a.mockapi.io/api/v1/people

const app = express();

app.get("/health", (req, res) => res.send("Ok"));

app.listen(3000, () => console.log("Server is Up"));
