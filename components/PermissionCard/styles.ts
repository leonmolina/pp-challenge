import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  isDisabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #EAEFED;
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
export const AgentItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &.roleName {
    justify-content: flex-start;
  }
`;
export const AgentItemText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  font-size: 12px;
`;
export const AgentCheckbox = styled.div`
`