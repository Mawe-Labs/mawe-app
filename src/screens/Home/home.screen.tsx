import React, {useEffect, useState} from 'react';
import {FlatList, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import {
  CategoriesContainer,
  ProductContainer,
  ProductImage,
  ProductInformations,
  ProductText,
} from './home.styles';
import {categories} from '../../mocks/categories.mock';
import numberFormat from '../../utils/number-format.util';
import CheckBox from '@react-native-community/checkbox';
import ListInformations from '../../components/ListInformations/list-informations.component';
import Header from '../../components/Header/header.component';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useProduct} from '../../context/product-edited.context';
import {useProducts} from '../../context/products.context';
import RoundButton from '../../components/Button/round-button.component';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface CheckedState {
  [key: number]: boolean;
}

export interface ProductProps {
  id: number;
  image: string;
  name: string;
  category: string;
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
  handleEditProduct: (
    id: number,
    name: string,
    value: string,
    category: string,
  ) => void,
  handleDeleteItem: (id: number) => void,
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
                <TouchableOpacity
                  onPress={() =>
                    handleEditProduct(
                      item.id,
                      item.name,
                      (item.value * 100).toString(),
                      item.category,
                    )
                  }>
                  <ProductText strike={checked[item.id]}>
                    {item.name}
                  </ProductText>
                  <ProductInformations>
                    1 un - {numberFormat(item.value)}
                  </ProductInformations>
                </TouchableOpacity>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
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
                      const newCart = cart.filter(
                        (cart) => cart.id !== item.id,
                      );
                      setCart(newCart);
                      (
                        setPrice as React.Dispatch<React.SetStateAction<number>>
                      )((prevPrice: number) =>
                        Math.max(0, prevPrice - item.value),
                      );
                    }
                  }}
                />
              </View>
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
  const [onlyProducts, setOnlyProducts] = useState<ProductProps[]>([]);

  const navigation = useNavigation();
  const {product, setProduct} = useProduct();
  const {products, setProducts} = useProducts();

  const handleDeleteItem = (id: number) => {
    if (products) {
      const newProducts = products.map((item) => ({
        ...item,
        products: item.products.filter((prdItem) => prdItem.id !== id),
      }));
      setProducts(newProducts);
    }
  };

  const handleEditProduct = (
    id: number,
    name: string,
    value: string,
    category: string,
  ) => {
    navigation.dispatch(DrawerActions.jumpTo('EditItem'));
    setProduct({id, name, value, category});
  };

  const priceList = React.useMemo(() => {
    const total = products?.reduce((acc, curr) => {
      const itemsTotal = curr.products.reduce(
        (itemAcc, item) => itemAcc + item.value,
        0
      );
      return acc + itemsTotal;
    }, 0);
    return total;
  }, [products]);

  return (
    <View>
      <Header title={'Minha Lista'} />
      <View style={{marginBottom: '50%'}}>
        {products?.length && products?.length > 0 ? (
          <FlatList
            data={products}
            renderItem={({item}) =>
              renderCategories(
                item,
                checked,
                cart,
                setChecked,
                setCart,
                setPrice,
                handleEditProduct,
                handleDeleteItem,
              )
            }
          />
        ) : (
          <FlatList
            data={categories}
            renderItem={({item}) =>
              renderCategories(
                item,
                checked,
                cart,
                setChecked,
                setCart,
                setPrice,
                handleEditProduct,
                handleDeleteItem,
              )
            }
          />
        )}
      </View>

      <RoundButton
        onPress={() => navigation.dispatch(DrawerActions.jumpTo('Products'))}
      />

      <ListInformations
        quantityCart={cart?.length}
        price={price}
        quantityList={products?.length}
        priceList={priceList || 0}
      />
    </View>
  );
};

export default Home;
