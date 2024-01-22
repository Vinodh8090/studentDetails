import express from "express";
import mongoose from "mongoose";
import { appRoutes } from "./routes";
import dotenv from "dotenv";

async function startServer() {
   const app = express();
   const port: Number = 8080;

   dotenv.config();

   mongoose.connect(process.env.MONGO_URL || "");

   app.use("/api", appRoutes);

   app.listen(port, () => console.log(`server is listening in port ${port}`));
}

startServer();
