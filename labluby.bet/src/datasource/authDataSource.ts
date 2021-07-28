import User from "../models/User";

export const loginInAPI = async (email: string, password: string) => {
  return new Promise<{ data: User }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: new User(Math.random().toString(), "Teste", email, password),
        }),
      500
    )
  );
};
