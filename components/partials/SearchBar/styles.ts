import styled from "@emotion/styled";

export const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 0 10px;
  border: 2px solid var(--color-green--light);
  margin: 40px 0 0 0;
  position: relative;
  @media(max-width: 800px) {
    max-width: 100vw;
  };
`
export const InputArea = styled.div`
  display: flex;
  align-items: center;
`
export const SearchInput = styled.input`
  background: url('/public/magnifying-glass.svg');
  width: 100%;
  height: 50px;
  border: none;
  padding-left: 8px;
  &:focus{
    border: none;
    outline: none;
  };
  &::placeholder {
    font-family: var(--font);
    font-weight: var(--medium);
    color: var(--color-green);
    font-size: 16px;
  };
  @media(max-width: 800px) {
    max-width: 100;
  };
`;
export const SearchLabel = styled.label`
  font-family: var(--font);
  font-weight: var(--medium);
  color: var(--color-light);
  font-size: 14px;
  background-color: #fff;
  position: absolute;
  top: -12px;
  padding: 0 3px;
`