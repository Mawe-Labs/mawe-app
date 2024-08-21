import styled from 'styled-components/native';
import {themes} from '../../styles/themes.styles';

const {colors} = themes;

export const Container = styled.View`
  position: absolute;
  bottom: 14%;
  left: 0;
  right: 0;
  padding: 15px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: ${colors.secondary};
`;

export const TitleInformations = styled.Text`
  font-size: 20px;
`;

export const TextInformations = styled.Text`
  font-size: 23px;
`;
