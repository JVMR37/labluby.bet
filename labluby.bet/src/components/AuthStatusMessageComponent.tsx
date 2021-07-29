import { AuthStatus } from "../store/authSlice";

const AuthStatusMessage: React.FC<{
  status: AuthStatus;
}> = (props) => {
  return <span>${props.children}</span>;
};

export default AuthStatusMessage;
