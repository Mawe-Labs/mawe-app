import styled from 'styled-components/native';
import {themes} from '../../styles/themes.styles';

const {colors} = themes;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 22%;
  right: 0;
  margin-right: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 73px;
  height: 73px;
  border-radius: 50px;
  background-color: ${colors.info};
  justify-content: center;
  align-items: center;
`;
