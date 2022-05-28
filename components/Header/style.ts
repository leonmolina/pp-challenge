import styled from '@emotion/styled';

export const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;
export const LogoArea = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ddd;
`;
export const UserArea = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
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
export const AvatarText = styled.span`
  font-family: Roboto;
`
export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
export const UserName = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-family: Roboto;
`;
export const UserData = styled.span`
  font-size: 12px;
  color: #555;
  font-family: Roboto;
`;