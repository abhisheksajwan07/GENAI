import express from "express";
import cors from "cors";
import { loadEnv } from "./env";
import { askStructured } from "./ask-core";
import { json } from "zod";

loadEnv();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "OPTIONS", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json()); //parse json

app.post("/ask", async (req, res) => {
  try {
    const { query } = req.body ?? {};
    if (!query || !String(query).trim()) {
      return res.status(400).json({
        error: "field query is requred",
      });
    }
    const out = await askStructured(query);
    return res.status(200).json(out);
  } catch (err: any) {
    return res.status(500).json({
      error: "failed to answer",
    });
  }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`api listening to the port ${PORT}`);
});
