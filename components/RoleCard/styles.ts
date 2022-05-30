import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  isDisabled?: boolean;
  show?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #EAEFED;
  @media (max-width: 800px) {
    height: ${props => props.show == "none" ? '90px' : "250px"};
    flex-wrap: wrap;
    border: 2px solid ${props => props.show == "none" ? 'var(--color-grey)' : "var(--color-blue)"};;
    border-radius: 8px;
    margin-bottom: 12px;
    margin-top: 12px;
    justify-content: flex-s;
    padding:  ${props => props.show == "none" ? '16px 16px' : "16px 24px"};

  }
`;
export const AgentItems = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: ${props => props.show == "none" ? 'space-between' : "flex-start"};
;
    position: relative;
  } ;
`;
export const AgentAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 5px;
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
    width: ${props => props.show == "none" ? "33%" : "37.5%"};
    position: relative;
    justify-content: center;
    align-items: flex-start;
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
  &.mobile {
   @media (max-width: 800px) {
     display: flex;
     flex-direction: row;
     justify-content: ${props => props.show == "none" ? "space-between" : "flex-end"};
     align-items: center;
     padding: 0;
     width: ${props => props.show == "none" ? "100%" : "25%"};
   } ;
   @media (min-width: 800px) {
     display: none;
   } ;
 }
`;
export const AgentItemText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  font-size: 12px;
`;
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
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OptionsText = styled.div`
  width: 80%;
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
    @media (max-width: 800px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    } ;
`
export const FooterMobileText = styled.span`
  font-family: (--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 16px;
  padding-left: 8px;
`
export const AgentExpandButton = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
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
    top: -52px;
    width: 120px;
    align-items: flex-start;
    &.header {
      position: static;
    align-items: flex-start;
    }
  } ;
`;
export const MobileHeader = styled.div<Props>`
  @media (min-width: 800px) {
    display: none;
  }
  @media (max-width: 800px) {
    display: ${props => props.show == "none" ? 'flex' : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  } ;
`