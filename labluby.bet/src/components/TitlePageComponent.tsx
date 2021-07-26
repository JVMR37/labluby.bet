import { TitlePageSpan } from "../styles/titlePageComponent.style";

const TitlePageComponent: React.FC<{ title: string }> = (props) => {
  return <TitlePageSpan>{props.title}</TitlePageSpan>;
};

export default TitlePageComponent;
