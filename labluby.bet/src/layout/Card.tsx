import { StyledCard } from "../styles/card.style";

const Card: React.FC = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
