import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ImageProps,
  ScrollView,
  Text,
  Touchable,
  View,
} from 'react-native';
import {
  CategoriesContainer,
  CircleAddedItem,
  ProductContainer,
  ProductImage,
  ProductInformations,
  ProductText,
} from './home.styles';
import {categories} from '../../mocks/categories.mock';
import numberFormat from '../../utils/number-format.util';
import CheckBox from '@react-native-community/checkbox';
import ListInformations from '../../components/ListInformations/list-informations.component';
import {Spacer} from '../../components/global.component';
import {faAdd} from '@fortawesome/free-solid-svg-icons/faAdd';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface CheckedState {
  [key: number]: boolean;
}

interface ProductProps {
  id: number;
  image: string;
  name: string;
  value: number;
}

interface ItemProps {
  id: number;
  name: string;
  products: ProductProps[];
}

const renderCategories = (
  item: ItemProps,
  checked: CheckedState,
  setChecked: (obj: CheckedState) => void,
) => {
  if (item.name !== 'Todos' && item.products.length > 0) {
    return (
      <View>
        <CategoriesContainer key={item.id}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
        </CategoriesContainer>
        <FlatList
          data={item.products}
          renderItem={({item}) => (
            <ProductContainer key={item.id}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ProductImage
                  source={item.image as ImageProps}
                  alt={item.name}
                />
                <View>
                  <ProductText>{item.name}</ProductText>
                  <ProductInformations>
                    1 un - {numberFormat(item.value)}
                  </ProductInformations>
                </View>
              </View>
              <CheckBox
                disabled={false}
                value={checked[item.id]}
                onValueChange={(newValue: boolean) => {
                  setChecked({...checked, [item.id]: newValue});
                }}
              />
            </ProductContainer>
          )}
        />
      </View>
    );
  } else {
    return <></>;
  }
};

export const Home = () => {
  const [checked, setChecked] = useState<CheckedState>({});

  return (
    <View>
      <View style={{marginBottom: '30%'}}>
        <FlatList
          data={categories}
          renderItem={({item}) => renderCategories(item, checked, setChecked)}
        />
      </View>

      <CircleAddedItem>
        <FontAwesomeIcon icon={faAdd} size={35} style={{color: '#fff'}} />
      </CircleAddedItem>

      <ListInformations />
    </View>
  );
};

export default Home;
