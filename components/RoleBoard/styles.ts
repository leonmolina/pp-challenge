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

export const RoleInfo = styled.div`
  width: 100%;
  height: auto;
`
export const InfoTitle = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 18px;
`

export const RoleData = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 40px 0;
`
export const RoleOrgCard = styled.div`
  width: 420px;
  height: 56px;
  background-color: #FFF;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const RoleCardSection = styled.div`
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
export const RolePermissions = styled.div`
  width: 100%;
  height: auto;
`