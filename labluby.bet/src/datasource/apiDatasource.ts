import { AxiosInstance } from "axios";
import Game from "../models/Game";

const axios = require("axios").default;

export default class ApiDatasource {
  private static _instance: ApiDatasource;

  public baseURL = "http://192.168.1.10:3333";
  public token?: string;

  private constructor() {
    axios.defaults.baseURL = this.baseURL;
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public get Axios(): AxiosInstance {
    return axios;
  }

  public setToken(token: string) {
    this.token = token;
    axios.defaults.headers.common["Authorization"] = "bearer " + this.token;
  }

  public clearToken() {
    // TODO: Implementar, chamado no Logout 
  }

  public async loadGames(): Promise<{ data: Game[] } | Error> {
    return new Promise<{ data: Game[] }>((resolve, reject) => {
      this.Axios.get<Game[]>("/types")
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
  }
}
