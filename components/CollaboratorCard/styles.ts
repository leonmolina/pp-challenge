import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #CCC;
 `;
export const AgentItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const AgentAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 5px;
`
export const AgentMainArea = styled.div`
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
`
export const AgentItemArea = styled.div`
  border: 1px solid #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.more{
    justify-content: flex-end;
  }
`
export const AgentItemText = styled.span`
  font-family: Roboto;
  font-size: 14px;
`
export const AgentStatus = styled.div`
`
export const AgentStatusText = styled.span`
`
export const AgentOptions = styled.div`
`