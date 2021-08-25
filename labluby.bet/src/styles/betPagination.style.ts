import styled from "styled-components";

export const PaginationDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const PaginationActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.main};
  font-size: 2rem;
  font-family: Helvetica;
  cursor: pointer;

  padding: 5px;

  outline: none;
  background-color: transparent;
  border: none;

  transition: all 0.5s ease;

  & svg {
    margin-left: 5px;
    margin-right: 5px;
  }

  &:disabled,
  &[disabled] {
    filter: brightness(0.6);
  }

  &:not(&[disabled]):hover {
    filter: "brightness(0.9)";
    transform: traslateY(-3rem);
    transform: scale(1.02);
  }

  &:active {
    transform: traslateY(3rem);
    filter: "brightness(0.9)";
  }
`;

export const PaginationItemButton = styled.button`
  background: #fff;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px 15px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  position: relative;
  margin: 0 5px;
  cursor: pointer;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
    pointer-events: none;
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
