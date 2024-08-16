import styled from 'styled-components/native';
import {themes} from '../../styles/themes.styles';

const {colors} = themes;

export const CategoriesContainer = styled.View`
  background-color: ${colors.backgroundColor};
  padding: 15px;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 70px;
  height: 70px;
`;

export const ProductText = styled.Text`
  font-size: 22px;
`;
