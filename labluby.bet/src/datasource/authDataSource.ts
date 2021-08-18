import User from "../models/User";
import ApiDatasource from "./apiDatasource";

export const loginInAPI = async (email: string, password: string) => {
  return new Promise<{ data: User }>(async (resolve) => {
    var apiUtils = ApiDatasource.Instance;
    const response = await apiUtils.Axios.post("/sessions", {
      email: email,
      password: password,
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
      }
    });
    console.log(response);
    resolve({
      data: new User(Math.random().toString(), "Teste", email, password),
    });
  }).catch((error) => {
    console.log(error);
  });
};

export const registerUserInAPI = async (
  name: string,
  email: string,
  password: string
) => {
  return new Promise<{ data: User }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: new User(Math.random().toString(), name, email, password),
        }),
      500
    )
  );
};

export const resetPasswordInAPI = async (email: string) => {
  return new Promise<{ data: User }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: new User(Math.random().toString(), "Teste", email, "password"),
        }),
      500
    )
  );
};
