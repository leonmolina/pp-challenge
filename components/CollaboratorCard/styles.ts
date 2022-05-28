import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  isDisabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
export const AgentItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const AgentAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 5px;
`;
export const AgentMainArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
`;
export const MainAreaLeftSide = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainAreaRightSide = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const AgentItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.more {
    justify-content: flex-end;
  }
`;
export const AgentItemText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  font-size: 12px;
`;
export const AgentStatus = styled.div``;
export const AgentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;
export const OptionsDropdown = styled.div`
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
`
export const OptionsText = styled.div`
  width: 80%;
`