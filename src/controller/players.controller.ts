import { Request, Response } from "express";
import PLAYERS_DATA_JSON from "../utils/data.utils.json";
import { PLAYERS_DATA_URL } from "../config/app.config";
import { sortPlayersByIdHelperUtil, findPlayerByIdHelperUtil, httpRequest } from "../utils/helpers.util";
import { PlayerByIdResponse, PlayersDataResponse, PlayerResponseFromAPI } from "../models/players.model";

export const getDataFromJSONPlayerController = (
  _: Request,
  res: Response<PlayersDataResponse>
): void => {
  try {
    const allPlayersData = sortPlayersByIdHelperUtil(PLAYERS_DATA_JSON.players);
    res.status(200).send({
      message: "Players data fetched successfully from JSON",
      players: allPlayersData
    });
  } catch (err: unknown) {
    console.log("Error fetching players from JSON ", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    res.status(500).send({
      message: "Error fetching players from JSON",
      errorMessage
    });
  }
};

export const findByIdFromJSONPlayerController = (
  req: Request<{ id: number }, unknown, unknown, unknown>,
  res: Response<PlayerByIdResponse>
): void => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).send({ message: "Invalid player id" });
      return;
    }
    const player = findPlayerByIdHelperUtil(PLAYERS_DATA_JSON.players, id);
    if (!player) {
      res.status(404).send({ message: "Player not found" });
      return;
    }
    res.status(200).send({
      message: "Player data fetched successfully from JSON",
      player: player
    });
  } catch (err: unknown) {
    console.log("Error fetching player", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    res.status(500).send({
      message: "Error fetching player",
      errorMessage
    });
  }
};

export const gatDataFromAPIPlayerController = async (
  _: Request,
  res: Response<PlayersDataResponse>
) => {
  try {
    const data = await httpRequest<PlayerResponseFromAPI>(PLAYERS_DATA_URL, "GET");
    const allPlayersData = sortPlayersByIdHelperUtil(data.players);
    res.status(200).send({
      message: "Players data fetched successfully from API",
      players: allPlayersData
    });
  } catch(err: unknown) {
    console.log("Error fetching players from API ", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    res.status(500).send({
      message: "Error fetching players from API",
      errorMessage
    });
  }
}

export const findByIdFromAPIPlayerController = async (
    req: Request,
    res: Response<PlayerByIdResponse>
) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).send({ message: "Invalid player id" });
      return;
    }
    const data = await httpRequest<PlayerResponseFromAPI>(PLAYERS_DATA_URL, "GET");
    const player = findPlayerByIdHelperUtil(data.players, id);
    if (!player) {
      res.status(404).send({ message: "Player not found" });
      return;
    }
    res.status(200).send({
      message: "Player data fetched successfully from API",
      player: player
    });
  } catch (err: unknown) {
    console.log("Error fetching player", err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    res.status(500).send({
      message: "Error fetching player",
      errorMessage
    });
  }
}
