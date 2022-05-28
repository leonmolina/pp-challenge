import styled from "@emotion/styled";

type Status = {
  isActive: boolean
}

export const Container = styled.div<Status>`
  height: 25px;
  width: 80px;
  border-radius: 20px;
  background-color: ${props => props.isActive ? '#B5F1DD' : '#EAEFED'};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StatusText = styled.span`
font-family: var(--font);
font-weight: var(--medium);
font-size: 14px;
`