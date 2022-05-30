import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  isDisabled?: boolean;
}

export const AgentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;
export const Container = styled.div`
`
export const MoreOptions = styled.ul`
`;
export const MoreOptionsItem = styled.li`
`;
export const Options = styled.a<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 200px;

  ${({ isDisabled }) => isDisabled && css`
    color: #CCC;
    cursor: default;
  &:hover {
    background: #fff;
    color: #ccc;
  }
  `};

`
export const OptionsIcon = styled.div`
  padding-right: 10px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OptionsText = styled.div`
  width: 80%;
  font-family: var(--font);
  color: var(--color-green);
  font-size: 16px;
`
export const OptionsLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`