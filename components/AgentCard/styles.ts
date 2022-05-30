import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #EAEFED;
  @media(max-width: 800px) {
    height: 400px;
    padding: 24px 16px;
    flex-wrap: wrap;
    border: 2px solid #B5F1DD;
    border-radius: 8px;
    margin-bottom: 8px;
  };
`;
export const AgentItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media(max-width: 800px) {
    justify-content: space-between;
  };
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
  padding: 0;
  @media(max-width: 800px) {
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 16px;
  };
`;
export const MainAreaLeftSide = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 800px) {
    justify-content: flex-start;
    width: auto;
    position: relative;
  };
`;
export const MainAreaRightSide = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CardItemTitle = styled.span`
  font-size: 12px;
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-green);
  @media(min-width: 800px) {
    display: none;
  };
  @media(max-width: 800px) {
    justify-content: flex-start;
    position: absolute;
    top: 0px;
    width: 120px;
    text-align: center;
  };
`

export const AgentItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.more {
    justify-content: flex-end;
  };
  @media(max-width: 800px) {
    width: 50%;
    position: relative;
    &.more {
      width: 100vw;
      justify-content: center;
      border: 2px solid #B5F1DD;
      border-radius: 8px;
      height: 52px;
      padding: 14px 24px 14px 24px;
      align-self: flex-end;
    }
  };
`;
export const AgentItemText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  font-size: 12px;
  &.mainName{
    font-weight: var(--bold);
  }
`;
export const AgentStatus = styled.div``;
export const OptionsLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`
