import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FooterWeb = styled.div`
`
export const ListFooter = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
export const ListFooterLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FooterText = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  color: var(--color-green);
`
export const FooterSelect = styled.button`
  padding: 2px 10px;
  margin: 0 24px ;
  background-color: #fff;
  color: var(--color-green);
  border: 2px solid var(--color-green--light);
  border-radius: 8px;
`
export const DropdownMenu = styled.ul`
`
export const DropdownItem = styled.li`
`

export const ListFooterRightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FooterNavButton = styled.button`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin: 0 10px;
  &.left {
    border: 1.4px solid #CAD6D1;
    border-radius: 8px 0px 0px 8px;
  };
  &.right {
  border: 1.4px solid #709085;
  border-radius: 0px 8px 8px 0px;
  };
`
export const FooterNavText = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-green);
  font-size: 16px;
`