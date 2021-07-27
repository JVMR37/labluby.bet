import { CenteredDiv } from "../GlobalStyles";
import {
  TitleSpan,
  GreenDiv,
  LotterySpan,
} from "../styles/titleAppComponent.style";

const TitleAppComponent: React.FC = (props) => {
  return (
    <div>
      <CenteredDiv>
        <TitleSpan>The Greatest App</TitleSpan>
      </CenteredDiv>
      <CenteredDiv>
        <GreenDiv>for</GreenDiv>
      </CenteredDiv>
      <CenteredDiv>
        <LotterySpan>LOTERRY</LotterySpan>
      </CenteredDiv>
    </div>
  );
};

export default TitleAppComponent;
