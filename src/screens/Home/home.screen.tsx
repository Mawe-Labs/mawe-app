import React from 'react';
import {ImageProps, ScrollView, Text, View} from 'react-native';
import {
  CategoriesContainer,
  ProductContainer,
  ProductImage,
  ProductText,
} from './home.styles';
import {categories} from '../../mocks/categories.mock';

export const Home = () => {
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
                    <ProductContainer key={product.name}>
                      <ProductImage
                        source={product.image as ImageProps}
                        alt={product.name}
                      />
                      <ProductText>{product.name}</ProductText>
                    </ProductContainer>
                  ))}
                </>
              );
            }
          }
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
