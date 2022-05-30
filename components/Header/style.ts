import styled from '@emotion/styled';

export const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EAEFED;
  @media(max-width: 800px) {
    height: 60px;
    flex-direction: row-reverse;
    position: relative;
  }
`;
export const LogoArea = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #EAEFED;
  cursor: pointer;
  @media(max-width: 800px) {
    border: none;
    width: 100%;
  };
`;
export const UserArea = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #EAEFED;
  @media(max-width: 800px) {
    border: none;
    width: 100px;
    position: absolute;
    align-self: flex-end;
    left: 0;
  };
`;
export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #b6f1dd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AvatarFirstLetters = styled.span`
  font-family: var(--font);
  font-weight: var(--regular);
  font-size: 14px;
`;
export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
export const UserName = styled.span`
  font-size: 14px;
  font-family: var(--font);
  font-weight: var(--bold);
  @media(max-width: 800px) {
    display: none;
  };
`;
export const UserData = styled.span`
  font-size: 12px;
  color: #555;
  font-family: var(--font);
  font-weight: var(--regular);
  @media(max-width: 800px) {
    display: none;
  };
`;