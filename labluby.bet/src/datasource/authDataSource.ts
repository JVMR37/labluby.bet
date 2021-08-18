import User from "../models/User";
import ApiDatasource from "./apiDatasource";

export const loginInAPI = async (email: string, password: string) => {
  return new Promise<{ data: User } | Error>(async (resolve) => {
    var apiUtils = ApiDatasource.Instance;
    apiUtils.Axios.post("/sessions", {
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response);

        apiUtils.setToken(response.data.token);

        resolve({
          data: User.fromJSON(response!.data.user),
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          resolve(Error(error.response.error));
        }
      });
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
