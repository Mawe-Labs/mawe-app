import styled from 'styled-components/native';
import {themes} from '../../styles/themes.styles';

export const Container = styled.View``;

export const InputControl = styled.View`
  margin: 0 auto;
  width: 80%;
`;

export const InputText = styled.Text`
  margin-top: 20px;
  font-size: 15px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${themes.colors.primary};
  width: 100%;
`;

export const ErrorText = styled.Text`
  color: ${themes.colors.error};
`;
