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
`;
export const ListContentArea = styled.div`
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: #EEE;
`;

export const CollaboratorsBoard = styled.div`
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

export const ListContent = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`