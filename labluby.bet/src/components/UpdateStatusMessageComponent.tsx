import { UpdateStatus } from "../store/authSlice";
import { appTheme } from "../utils/appTheme";
import { AuthStatusStyledSpan } from "../styles/authStatusMessage.style";

const UpdateStatusMessage: React.FC<{
  status: UpdateStatus;
}> = (props) => {
  let color: string;
  switch (props.status) {
    case UpdateStatus.Loading:
      color = appTheme.colors.secondary;
      break;

    case UpdateStatus.Success:
      color = appTheme.colors.main;
      break;

    case UpdateStatus.Error:
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

export default UpdateStatusMessage;
