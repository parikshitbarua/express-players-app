import express from "express";
import PlayersRoute from "./routes/players.route";
import { errorHandlerMiddleware } from "./middleware/error-handler.middleware";

const app = express();

app.use(express.json());

// Routes
app.use("/players", PlayersRoute);
app.use("/", (_, res) => {
  res.status(200).send({
    message: "Boilerplate code for ExpressJS + TS"
  });
});

// Global error handler
app.use(errorHandlerMiddleware);

export default app;
