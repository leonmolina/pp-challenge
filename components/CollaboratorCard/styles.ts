import styled from "@emotion/styled";

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
  width: 30px;
  height: 30px;
  border-radius: 15px;
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
  justify-content: flex-end;
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
  font-family: Roboto;
  font-size: 14px;
`;
export const AgentStatus = styled.div``;
export const AgentStatusText = styled.span``;
export const AgentOptions = styled.div``;
