import styled from "@emotion/styled";

type Status = {
  isActive: boolean
}

export const Container = styled.div<Status>`
  height: 25px;
  width: 80px;
  border-radius: 20px;
  background-color: ${props => props.isActive ? '#b6f1dd' : '#eaeeed'};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StatusText = styled.span`
  font-family: Roboto;
`