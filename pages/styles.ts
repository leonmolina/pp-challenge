import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  isTabSelected?: boolean;
}

export const Main = styled.main`
  display: flex;
  padding: 0;
`
export const LeftSide = styled.div`
  max-width: 256px;
  height: auto;
  background-color: #FFF;
  box-shadow: 0px 4px 8px 0px rgba(165, 171, 179, 0.16);
  border: 1px solid #EAEFED;
  @media(max-width: 800px) {
    display: none;
  };
`
export const RightSide = styled.div`
  height: auto;
  background-color: #f8faf9;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 800px) {
    max-width: 100%;
  };
`
export const TitleArea = styled.div`
  width: 100%;
  @media(max-width: 800px) {
    display: none;
  };
`
export const Title = styled.h2`
  font-family: var(--font);
  font-weight: var(--bold);
  font-size: 32px;
  margin: 0 0 24px 0;
`
export const ContentArea = styled.div`
  width: 956px;
  margin: 56px 0 80px 0;
  @media(max-width: 800px) {
    max-width: 100vw;
  };
`

export const Dashboard = styled.div`
  background-color: #fff;
  height: auto;
  border-radius: 10px;
  padding: 40px 24px 40px 24px;
  box-shadow: 0px 4px 8px 0px rgba(165, 171, 179, 0.16);
  display: flex;
  flex-direction: column;
  @media(max-width: 800px) {
    max-width: 100vw;
  };
`
export const DashboardTabs = styled.div`
  display: flex;
  height: 30px;
  @media(max-width: 800px) {
    display: none;
  };
`
export const Tab = styled.div<Props>`
  width: 300px;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #EAEFED;
  ${({ isTabSelected }) => isTabSelected && css`
    border-bottom: 2px solid #22E0A1;
  `};
`
export const FillerTab = styled.div`
  width: 100%;
  border-bottom: 2px solid #EAEFED;
`
export const TabTitle = styled.h3<Props>`
  font-size: 14px;
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-light);
  ${({ isTabSelected }) => isTabSelected && css`
    color: var(--color-dark);
  `};
`
export const DashboardContent = styled.div`
  max-width: 100vw;
  padding: 0;
`
export const MobileTabs = styled.div`
  width: 100%;
  height: 56px;
  background-color: #FFF;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 800px) {
    max-width: 100vw;
  };
`
export const MobileTabsSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  position: relative;
`
export const MobileTabsText = styled.span`
  font-family: var(--font);
  font-weight: var(--medium);
  color: var(--color-green);
  font-size: 16px;
  line-height: 24px;
`
export const TabsOptionsIcon = styled.div`
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`