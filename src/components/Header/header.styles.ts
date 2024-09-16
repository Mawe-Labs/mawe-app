import styled from 'styled-components/native';
import {themes} from '../../styles/themes.styles';

type HeaderContainerProps = {
  isCheck?: boolean;
};

const {colors} = themes;

export const HeaderContainer = styled.View<HeaderContainerProps>`
  background-color: ${colors.primary};
  padding: 16px;
  align-items: center;
  justify-content: ${(props) => (props.isCheck ? 'space-between' : 'start')};
  flex-direction: row;
  gap: 30px;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;
