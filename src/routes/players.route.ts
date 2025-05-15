import { Router } from "express";
import {
  getDataFromJSONPlayerController,
  findByIdFromJSONPlayerController,
  gatDataFromAPIPlayerController, findByIdFromAPIPlayerController
} from "../controller/players.controller";

const router = Router();

/**
 * Task 1
 * Create a GET /players endpoint returning all the players (by requiring the headtohead.json listed above).
 * The list must be sorted by player id.
 */
router.get("/json", getDataFromJSONPlayerController);

/**
 * Task 2
 * Create a GET /players/<id> endpoint to return a single player matching id <id>.
 * Return a 404 if no player is matching.
 */
router.get("/json/:id", findByIdFromJSONPlayerController);

/**
 * Task 3
 * As the players data changes from time to time, change your code so that
 * the players are fetched from the following end point for every API call:
 */
router.get("/", gatDataFromAPIPlayerController);
router.get("/:id", findByIdFromAPIPlayerController);

export default router;
