import React, {useState} from 'react';
import {
  Button,
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

export const Home = () => {
  const [checked, setChecked] = useState<CheckedState>({});

  return (
    <View style={{position: 'relative'}}>
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
      <CircleAddedItem>
        <FontAwesomeIcon icon={faAdd} size={35} style={{color: '#fff'}} />
      </CircleAddedItem>
      <ListInformations />
    </View>
  );
};

export default Home;
