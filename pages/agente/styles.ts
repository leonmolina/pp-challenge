import styled from '@emotion/styled';

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
export const AgentDashboard = styled.div`
  background-color: #fff;
  height: 600px;
  border-radius: 10px;
  padding: 40px 24px 40px 24px;
  box-shadow: 0px 4px 8px 0px rgba(165, 171, 179, 0.16);
  display: flex;
  flex-direction: column;
`
export const DashboardContent = styled.div`
`