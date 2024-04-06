import { Request, Response } from "express";
import app from "./app";

app.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hello World!" });
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
