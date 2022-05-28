import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SearchLabel = styled.label`
  font-family: var(--font);
  font-weight: var(--medium);
  color: var(--color-light);
  font-size: 14px;
  margin: 40px 0 0 20px;
`
export const ListTitle = styled.h3`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 16px;
  margin: 40px 0;
`;
export const ListArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const ListContent = styled.div`
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: #EEE;
`;
export const ListFooter = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
`;
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