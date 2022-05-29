import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #EAEFED;
`;
export const PermissionItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const PermissionItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &.roleName {
    justify-content: flex-start;
  }
`;
export const PermissionItemText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
  font-size: 12px;
`;
export const PermissionCheckbox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PermissionLabel = styled.div`
  width: 20px;
  height: 28px;
`