import { css } from '@emotion/react';
import styled from '@emotion/styled'

type Props = {
  isTabSelected?: boolean;
}

export const Container = styled.div`
  background-color: #fff;
  height: 80%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px 0px rgba(165, 171, 179, 0.16);
`
export const DashboardTabs = styled.div`
  display: flex;
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