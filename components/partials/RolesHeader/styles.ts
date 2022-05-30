import styled from "@emotion/styled";

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  border: 1px solid var(--color-green--light);
  border-radius: 10px 10px 0 0;
  @media(max-width: 800px) {
    display: none;
  };
`;
export const HeaderItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.main {
    justify-content: flex-start;
  }
`
export const HeaderItemTitle = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-green);
  font-size: 12px;
`