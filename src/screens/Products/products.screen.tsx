import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/header.component';
import {categories} from '../../mocks/categories.mock';
import RoundButton from '../../components/Button/round-button.component';
import {
  Container,
  Item,
  ItemText,
  ProductImage,
  ProductItem,
  ProductName,
  ProductPrice,
  SelectContainer,
  SelectedText,
} from './products.styles';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const categoryNames = categories.map((category) => category.name);
  const navigation = useNavigation();

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const renderCategoryItem = ({item}: {item: string}) => (
    <Item
      isSelectedCategory={selectedCategory === item}
      onPress={() => handleSelect(item)}>
      <ItemText>{item}</ItemText>
    </Item>
  );

  const renderProductItem = ({item}: {item: any}) => (
    <ProductItem>
      <ProductImage source={item.image} />
      <ProductName>{item.name}</ProductName>
      <ProductPrice>R$ {item.value.toFixed(2)}</ProductPrice>
    </ProductItem>
  );

  const filteredProducts =
    selectedCategory === 'Todos'
      ? categories.flatMap((category) => category.products)
      : categories.find((category) => category.name === selectedCategory)
          ?.products || [];

  return (
    <Container>
      <Header title={'Produtos'} />
      <SelectContainer onPress={() => setIsOpen(!isOpen)}>
        <SelectedText>
          {selectedCategory ? selectedCategory : 'Selecione uma categoria'}
        </SelectedText>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          size={24}
          color="#000"
          style={{marginLeft: 8}}
        />
      </SelectContainer>

      {isOpen && (
        <FlatList
          data={categoryNames}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
        />
      )}

      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{marginTop: 16, paddingHorizontal: 16}}
      />

      <RoundButton
        onPress={() => navigation.dispatch(DrawerActions.jumpTo('NewItem'))}
        style={{bottom: '6%'}}
      />
    </Container>
  );
};

export default Products;
