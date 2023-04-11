import express from "express";
import dotEnv from "dotenv";
import router from "./route/routes.js";
import { join } from "path";
import { log } from "console";

// Environment Variable Setup
dotEnv.config();

// Express App Instance
const app = express();

// Routes
app.use(router);

// Template Engine
app.set("view engine", "ejs");

// Introduce public dir to your app
app.use(express.static("public"));

// Local server listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("=-=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=");
  console.log(`Local Server: http://localhost:${PORT}/`);
  console.log("=-=-=-=-=-=-=--=-=-=-=-=--=-=-=-=-=-=-=");
});
