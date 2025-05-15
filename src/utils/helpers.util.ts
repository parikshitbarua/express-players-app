import { HttpMethod } from "../models/http.model";
import { Player } from "../models/players.model";

export const sortPlayersByIdHelperUtil = (players: Player[]): Player[] => {
  if (players.length === 0 || !players) return [];
  return players.sort((a, b) => a.id - b.id);
};

export const findPlayerByIdHelperUtil = (players: Player[], id: number): Player => {
  if (players.length === 0 || !players) return {} as Player;
  return players.find((player) => player.id === id) as Player;
};

export async function httpRequest<T>(url: string, method: HttpMethod): Promise<T> {
  try {
    const response = await fetch(url, { method });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }

    return (await response.json()) as T;
  } catch (err) {
    throw new Error((err as Error).message || 'Unknown error occurred');
  }
}

