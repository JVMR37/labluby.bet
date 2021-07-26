import styled from "styled-components";

const InputField: React.FC = (props) => {
  const Label = styled.label`
    position: relative;
  `;

  const Input = styled.input`
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid currentColor;
    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
    color: currentColor;
    background: transparent;
    border-radius: 15px;

    &:focus,
    &:not(&:placeholder-shown) {
      & + .input__label {
        transform: translate(0.25rem, -65%) scale(0.8);
        color: red;
      }
    }
  `;

  const Span = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * 0.5);
    margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);
    background: pink;
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    background: #f7f7f7;
    transition: transform 120ms ease-in;
    font-weight: bold;
    line-height: 1.2;
  `;

  return (
    <Label>
      <Input type="text"></Input>
      <Span>Aloha InputField</Span>
    </Label>
  );
};

export default InputField;
