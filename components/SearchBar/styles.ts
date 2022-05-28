import styled from "@emotion/styled";

export const Container = styled.div`
  border-radius: 10px;
  padding: 0 10px;
  border: 1px solid #ccc;
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
  &:focus{
    border: none;
    outline: none;
  }
`;