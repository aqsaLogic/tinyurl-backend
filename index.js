import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongodb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

ConnectMongodb();

app.use("/", URLRoute);

app.listen(PORT, "0.0.0.0", () => {
    console.log("I am working on port", PORT);
});
