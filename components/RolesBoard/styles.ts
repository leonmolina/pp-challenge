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

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  border: 1px solid var(--color-green--light);
  border-radius: 10px 10px 0 0;
`;
export const HeaderItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.main {
    justify-content: flex-start;
  };
`
export const HeaderItemTitle = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-green);
  font-size: 12px;
`
export const ListContent = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;
