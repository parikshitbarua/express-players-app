export interface Player {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: {
    picture: string;
    code: string;
  };
  picture: string;
  data: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
    last: number[];
  };
}

export interface PlayersDataResponse {
  message: string;
  players?: Player[];
  errorMessage?: string;
}

export interface PlayerByIdResponse {
  message: string;
  player?: Player;
  errorMessage?: string;
}

export interface PlayerResponseFromAPI {
  players: Player[];
}
