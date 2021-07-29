import { AuthStatus } from "../store/authSlice";
import { appTheme } from "../utils/appTheme";
import { AuthStatusStyledSpan } from "../styles/authStatusMessage.style";
const AuthStatusMessage: React.FC<{
  status: AuthStatus;
}> = (props) => {
  let color: string;
  switch (props.status) {
    case AuthStatus.Loading:
      color = appTheme.colors.secondary;
      break;

    case AuthStatus.Success:
      color = appTheme.colors.main;
      break;

    case AuthStatus.Error:
      color = appTheme.colors.error;
      break;

    default:
      color = appTheme.colors.secondary;
      break;
  }

  return (
    <AuthStatusStyledSpan color={color}>{props.children}</AuthStatusStyledSpan>
  );
};

export default AuthStatusMessage;
