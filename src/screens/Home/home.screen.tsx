import React, {useState} from 'react';
import {ImageProps, ScrollView, StyleSheet, Text, View} from 'react-native';
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
import {Spacer} from '../../components/global.component';

interface CheckedState {
  [key: number]: boolean;
}

export const Home = () => {
  const [checked, setChecked] = useState<CheckedState>({});

  return (
    <View>
      <ScrollView>
        {categories.map((category) => {
          if (category.name !== 'Todos') {
            if (category.products.length > 0) {
              return (
                <>
                  <CategoriesContainer key={category.id}>
                    <Text style={{fontSize: 18}}>{category.name}</Text>
                  </CategoriesContainer>
                  {category.products.map((product) => (
                    <ProductContainer key={product.id}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <ProductImage
                          source={product.image as ImageProps}
                          alt={product.name}
                        />
                        <View>
                          <ProductText>{product.name}</ProductText>
                          <ProductInformations>
                            1 un - {numberFormat(product.value)}
                          </ProductInformations>
                        </View>
                      </View>
                      <CheckBox
                        disabled={false}
                        value={checked[product.id]}
                        onValueChange={(newValue: boolean) => {
                          setChecked({...checked, [product.id]: newValue});
                        }}
                      />
                    </ProductContainer>
                  ))}
                </>
              );
            }
          }
        })}
        <Spacer size={160} />
      </ScrollView>
      <ListInformations />
    </View>
  );
};

export default Home;
