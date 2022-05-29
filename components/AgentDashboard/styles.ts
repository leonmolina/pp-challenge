import styled from '@emotion/styled'

export const Container = styled.div`
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

export const AgentHeader = styled.div`
  display: flex;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
`
export const AgentAvatar = styled.div`
  height: 80px;
  width: 80px;
  background-color: #f00;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const AgentData = styled.div`
  display: flex;
  margin-left: 24px;
  flex-direction: column;
`
export const AgentName = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 18px;
`
export const AgentEmail = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  font-size: 14px;
`

export const AgentInfo = styled.div`
  margin: 40px 0;
`
export const InfoTitle = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 18px;
`
export const InfoCardsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
`
export const AgentInfoCard = styled.div`
  border: 1px solid #000;
  display: flex;
  width: 270px;
  height: 70px;
  background-color: #F5FAF8;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  padding: 16px;
`
export const InfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  background-color: #f00;
  border-radius: 19px;
` 
export const InfoData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
`
export const InfoText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  font-size: 12px;
`
export const InfoContent = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 14px;
`

export const AgentOrganizational = styled.div`
  padding: 24px;
  border: 2px solid #EAEFED;
  border-radius: 8px;
`
export const OrgTitle = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 18px;
`
export const OrgCardsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 24px;
`
export const AgentOrgCard = styled.div`
  width: 392px;
  height: 50px;
  background-color: #F5FAF8;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  padding: 20px;
`
export const OrgText = styled.span`
  font-family: var(--font);
  font-weight: var(--medium);
  color: var(--color-green);
`