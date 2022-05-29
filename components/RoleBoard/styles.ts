import styled from "@emotion/styled";

export const Container = styled.div`
  height: auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AgentHeader = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
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
  width: 100%;
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
  align-items: center;
  justify-content: flex-start;
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
  background-color: var(--color-green--light);
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
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 24px;
`
export const AgentOrgCard = styled.div`
  width: 380px;
  height: 56px;
  background-color: #F5FAF8;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AgentCardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const OrgCardTitle = styled.span`
  font-family: var(--font);
  font-weight: var(--medium);
  color: var(--color-light);
  font-size: 14px;
`
export const OrgCardText = styled.span`
  font-family: var(--font);
  font-weight: var(--medium);
  color: var(--color-green);
`