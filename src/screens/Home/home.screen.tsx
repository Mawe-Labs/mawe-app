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
  value: number;
}

const renderCategories = (
  item: ItemProps,
  checked: CheckedState,
  cart: CartProps[],
  setChecked: (obj: CheckedState) => void,
  setCart: (newItem: any) => void,
  setPrice: (value: number) => void,
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
                  <ProductText strike={checked[item.id]}>
                    {item.name}
                  </ProductText>
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
                    setCart((prevCart: any[]) => {
                      let newCart;
                      if (newValue) {
                        newCart = [
                          ...prevCart,
                          {id: item.id, name: item.name, value: item.value},
                        ];
                      } else {
                        newCart = prevCart.filter(
                          (cartItem: any) => cartItem.id !== item.id,
                        );
                      }

                      const newPrice = newCart.reduce(
                        (acc, currentItem) => acc + currentItem.value,
                        0,
                      );
                      setPrice(newPrice);

                      return newCart;
                    });
                  } else {
                    const newCart = cart.filter((cart) => cart.id !== item.id);
                    setCart(newCart);
                    (setPrice as React.Dispatch<React.SetStateAction<number>>)(
                      (prevPrice: number) =>
                        Math.max(0, prevPrice - item.value),
                    );
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
  const [price, setPrice] = useState<number>(0);

  return (
    <View>
      <Header title={'Minha Lista'} isMyList />

      <View style={{marginBottom: '52%'}}>
        <FlatList
          data={categories}
          renderItem={({item}) =>
            renderCategories(item, checked, cart, setChecked, setCart, setPrice)
          }
        />
      </View>

      <CircleAddedItem>
        <FontAwesomeIcon icon={faAdd} size={35} style={{color: '#fff'}} />
      </CircleAddedItem>

      <ListInformations quantityCart={cart?.length} price={price} />
    </View>
  );
};

export default Home;
