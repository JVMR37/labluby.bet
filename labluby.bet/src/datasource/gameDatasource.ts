import { AxiosResponse } from "axios";
import Game from "../models/Game";
import SavedGame from "../models/SavedGame";
import ApiDatasource from "./apiDatasource";

export const fetchGames = async () => {
  return new Promise<{ data: Game[] }>((resolve, reject) => {
    ApiDatasource.Instance.Axios.get<Game[]>("/types")
      .then((response) => {
        console.log(response.data);
        resolve({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  }).catch((error) => {
    return Error(error.message);
  });
};

export const fetchSavedBets = async (page: number = 1, filter?: string) => {
  return new Promise<{ data: SavedGame[] }>((resolve, reject) => {
    ApiDatasource.Instance.Axios.get(
      `/bets?page=${page}${filter ? "&filter=" + filter : ""}`
    )
      .then((response) => {
        console.log(response.data);
        resolve({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  }).catch((error) => {
    return Error(error.message);
  });
};

export const saveBetsInDB = async (
  bets: SavedGame[]
): Promise<AxiosResponse | Error> => {
  return new Promise<AxiosResponse | Error>((resolve, reject) => {
    ApiDatasource.Instance.Axios.post("/bets", {
      bets: bets,
    })
      .then((response) => {
        console.log(response.data);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  }).catch((error) => {
    return Error(error.message);
  });
};
