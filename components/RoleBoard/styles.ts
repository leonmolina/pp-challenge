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

export const AgentInfo = styled.div`
  width: 100%;
`
export const InfoTitle = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 18px;
`

export const AgentOrganizational = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const AgentOrgCard = styled.div`
  width: 420px;
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