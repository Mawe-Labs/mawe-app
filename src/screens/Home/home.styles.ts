import styled, {css} from 'styled-components/native';
import {themes} from '../../styles/themes.styles';

const {colors} = themes;

export const CategoriesContainer = styled.View`
  background-color: ${colors.backgroundColor};
  padding: 15px;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${colors.borderColor};
  border-bottom-width: 3px;
  padding: 10px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 70px;
  height: 70px;
  margin: 0 15px;
`;

type ProductText = {
  strike: boolean;
};

export const ProductText = styled.Text<ProductText>`
  font-size: 22px;
  text-decoration: ${(props) => props.strike && 'line-through'};
`;

export const ProductInformations = styled.Text`
  font-size: 15px;
`;
