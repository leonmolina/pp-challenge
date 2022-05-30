import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  show: string;
};

export const Container = styled.div<Props>`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #eaefed;
  @media (max-width: 800px) {
    height: ${props => props.show == "none" ? '90px' : "400px"};
    flex-wrap: wrap;
    border: 2px solid ${props => props.show == "none" ? 'var(--color-grey)' : "var(--color-blue)"};;
    border-radius: 8px;
    margin-bottom: 12px;
    margin-top: 12px;
    padding:  ${props => props.show == "none" ? '16px 16px' : "16px 24px"};

  }
`;
export const AgentItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 800px) {
    justify-content: space-between;
  } ;
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
  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  } ;
`;
export const MainHeader = styled.div`
  @media (min-width: 800px) {
    display: none;
  } ;

  @media (max-width: 800px) {
    position: relative;
  } ;
`
export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
  height: 100%;
  width: 100%;
  justify-content: space-between;
  };

`
export const MainAreaLeftSide = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 800px) {
    justify-content: flex-start;
    width: 100%;
    position: relative;
  } ;
  @media (max-width: 800px) {
    justify-content: flex-start;
    width: auto;
    position: relative;
  } ;
`;
export const MainAreaRightSide = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 800px) {
    justify-content: space-between;
  } ;
`;
export const AgentExpandButton = styled.div`
  @media (min-width: 800px) {
    display: none;
  } ;
`;

export const CardItemTitle = styled.span<Props>`
  font-size: 12px;
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-green);
  @media (min-width: 800px) {
    display: none;
  }
  @media (max-width: 800px) {
    justify-content: flex-start;
    position: ${props => props.show == "none" ? 'absolute' : "static"};
    background-color: #fff;
    top: ${props => props.show == "none" ? '-52px' : "-66px"};
    width: 120px;
    text-align: center;
    &.main{
      position: absolute;
    }
  } ;
`;

export const AgentItemArea = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.more {
    justify-content: center;
  }
  @media (max-width: 800px) {
    width: 50%;
    position: relative;
    justify-content: center;
    display: ${props => props.show == "none" ? "none" : "flex"};
    
    &.more {
      width: 100vw;
      justify-content: center;
      border: 2px solid #b5f1dd;
      border-radius: 8px;
      height: 52px;
      padding: 14px 24px 14px 24px;
      align-self: flex-end;
    };
  };
`;

export const AgentItemText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  text-align: center;
  font-size: 12px;
  &.mainName {
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
`;
export const FooterMobileText = styled.span`
  font-family: (--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 16px;
  padding-left: 8px;
`
export const OptionsWeb = styled.div`
@media (max-width: 800px) {
      display: none;
    } ;
`
export const OptionsMobile = styled.div`

  @media (min-width: 800px) {
      display: none;
    } ;
`