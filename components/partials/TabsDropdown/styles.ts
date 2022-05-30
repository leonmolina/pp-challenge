import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`

export const AgentOptions = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OptionsTitle = styled.span`
  font-size: 16px;
  font-family: var(--font);
  font-weight: var(--medium);
  color: var(--color-green);
`
export const MoreOptions = styled.ul`
`;
export const MoreOptionsItem = styled.li`
`;
export const OptionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`
export const OptionsHeaderText = styled.span`
  font-family: var(--font);
  font-weight: var(--bold);
  color: var(--color-dark);
  font-size: 18px;
`
export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  &:hover {
    background: #ccc;
    color: #ccc;
  }
`
export const OptionsText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  font-family: var(--font);
  color: var(--color-green);
  font-size: 16px;
  cursor: pointer;
  &:hover {
  }
`
export const OptionsLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`