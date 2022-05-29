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
`
export const RightSide = styled.div`
  height: auto;
  background-color: #f8faf9;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleArea = styled.div`
  width: 100%;
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
`



export const Dashboard = styled.div`
  background-color: #fff;
  height: auto;
  border-radius: 10px;
  padding: 40px 24px 40px 24px;
  box-shadow: 0px 4px 8px 0px rgba(165, 171, 179, 0.16);
  display: flex;
  flex-direction: column;
`
export const DashboardTabs = styled.div`
  display: flex;
  height: 30px;
`
export const Tab = styled.div<Props>`
  width: 300px;
  height: 100%;
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
`