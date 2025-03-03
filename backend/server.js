import express from "express";
import { config } from "dotenv";
config();
import { DbConnect } from "./config/db.js"; 

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;

DbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});
