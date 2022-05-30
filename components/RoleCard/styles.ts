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
`
export const FooterMobileText = styled.span`
  font-family: (--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 16px;
  padding-left: 8px;
`