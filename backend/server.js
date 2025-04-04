import express from "express";
import { config } from "dotenv";
config();
import cookieParser from "cookie-parser";
import { DbConnect } from "./config/db.js"; 

import UserRoutes from "./routes/user.js";
const app = express();
app.use(cookieParser());

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//routes
app.use('/api/auth', UserRoutes)

const PORT = process.env.PORT || 3000;
DbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});
