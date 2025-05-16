import express, { Express } from "express";
import PlayersRoute from "./routes/players.route";
import { errorHandlerMiddleware } from "./middleware/error-handler.middleware";

const app: Express = express();

app.use(express.json());

// Routes
app.use("/players", PlayersRoute);
app.use("/", (_, res) => {
  res.status(200).send({
    message: "Welcome to Tennis Player API"
  });
});

// Global error handler
app.use(errorHandlerMiddleware);

export default app;
