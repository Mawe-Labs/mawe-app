import styled from 'styled-components/native';
import {themes} from '../../styles/themes.styles';

type ItemProps = {
  isSelectedCategory: boolean;
};

const {colors} = themes;

export const Container = styled.View`
  flex: 1;
  padding: 0;
`;

export const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const SelectedText = styled.Text`
  font-size: 18px;
`;

export const Item = styled.TouchableOpacity<ItemProps>`
  padding: 16px;
  margin: 8px 16px;
  background-color: ${(props) =>
    props.isSelectedCategory ? '#ccc' : '#e0e0e0'};
  border-radius: 8px;
`;

export const ItemText = styled.Text`
  font-size: 18px;
`;

export const ProductItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  background-color: ${colors.white};
  padding: 16px;
  border-radius: 8px;
`;

export const ProductImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 16px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  flex: 1;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
