import React, {useState} from 'react';
import {FlatList, ImageProps, Text, View} from 'react-native';
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
import {faAdd} from '@fortawesome/free-solid-svg-icons/faAdd';
import Header from '../../components/Header/header.component';
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

interface CartProps {
  id: number;
  name: string;
}

const renderCategories = (
  item: ItemProps,
  checked: CheckedState,
  cart: CartProps[],
  setChecked: (obj: CheckedState) => void,
  setCart: (newItem: any) => void,
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

                  if (!checked[item.id]) {
                    setCart((prevState: any) => [
                      ...prevState,
                      {id: item.id, name: item.name},
                    ]);
                  } else {
                    const newCart = cart.filter((cart) => cart.id !== item.id);
                    setCart(newCart);
                  }
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
  const [cart, setCart] = useState<CartProps[]>([]);

  return (
    <View>
      <Header title={'Minha Lista'} />

      <View style={{marginBottom: '70%'}}>
        <FlatList
          data={categories}
          renderItem={({item}) =>
            renderCategories(item, checked, cart, setChecked, setCart)
          }
        />
      </View>

      <CircleAddedItem>
        <FontAwesomeIcon icon={faAdd} size={35} style={{color: '#fff'}} />
      </CircleAddedItem>

      <ListInformations quantityCart={cart?.length} />
    </View>
  );
};

export default Home;
