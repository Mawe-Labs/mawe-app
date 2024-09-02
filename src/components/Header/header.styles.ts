import styled from 'styled-components/native';

type HeaderContainerProps = {
  isCheck?: boolean;
};

export const HeaderContainer = styled.View<HeaderContainerProps>`
  background-color: #00ba00;
  padding: 16px;
  align-items: center;
  justify-content: ${props => props.isCheck ? 'space-between' : 'start'};
  flex-direction: row;
  gap: 30px;
`;

export const HeaderTitle = styled.Text`
  color: #fffffff;
  font-size: 20px;
  font-weight: bold;
  `;