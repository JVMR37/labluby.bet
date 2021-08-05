import { TitlePageSpan } from "../styles/titlePageComponent.style";

const TitlePageComponent: React.FC<{ title: string }> = (props) => {
  return <TitlePageSpan key={props.title}>{props.title}</TitlePageSpan>;
};

export default TitlePageComponent;
