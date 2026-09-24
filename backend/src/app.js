import express from "express";
import personRoutes from "./routes/person.routes.js";

const app = express();

app.use(express.json());
app.use(personRoutes);

export default app;
