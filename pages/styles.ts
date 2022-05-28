import styled from '@emotion/styled';

export const Main = styled.main`
  height: 100vh;
  display: flex;
  padding: 0;
`
export const LeftSide = styled.div`
  width: 256px;
  height: 100%;
  background-color: #FFF;
  box-shadow: 0px 4px 8px 0px rgba(165, 171, 179, 0.16);
  border: 1px solid #EAEFED;
 ;
`
export const RightSide = styled.div`
  width: 100%;
  background-color: #f8faf9;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleArea = styled.div`
  width: 100%;
`
export const Title = styled.h2`
  font-family: var(--font);
  font-weight: var(--bold);
  font-size: 32px;
  margin: 20px 0;
`
export const ContentArea = styled.div`
  width: 80%;
  height: 100vw;
  margin: 10px 0;
`