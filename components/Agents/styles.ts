import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  @media(max-width: 800px) {
    border: none;
    max-width: 100vw;
  };
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
  @media(max-width: 800px) {
    margin: 40px 0 24px 0;
  };
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
export const FooterWeb = styled.div`
  @media (max-width: 800px) {
    display: none;
  } ;
`
export const FooterMobile = styled.div`
  display: flex;
  margin: 24px 0 0 0;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-blue);
  border-radius: 8px;
  height: 52px;
  @media (min-width: 800px) {
    display: none;
  } ;
`
export const FooterMobileText = styled.span`
  font-family: (--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 16px;
  padding-left: 8px;
`