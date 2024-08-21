import React from 'react';
import {
  Container,
  TextInformations,
  TitleInformations,
} from './list-informations.styles';
import {View} from 'react-native';
import {Flex} from '../global.component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalculator} from '@fortawesome/free-solid-svg-icons/faCalculator';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';

type ListInformationsProps = {
  quantityCart: number | undefined;
};

const ListInformations = ({quantityCart}: ListInformationsProps) => {
  return (
    <Container>
      <Flex>
        <FontAwesomeIcon
          icon={faCalculator}
          size={45}
          style={{marginRight: 10}}
        />
        <View>
          <TitleInformations>Total (2)</TitleInformations>
          <TextInformations>R$ 5,00</TextInformations>
        </View>
      </Flex>
      <Flex>
        <FontAwesomeIcon
          icon={faShoppingCart}
          size={45}
          style={{marginRight: 10}}
        />
        <View>
          <TitleInformations>Carrinho ({quantityCart})</TitleInformations>
          <TextInformations>R$ 1,00</TextInformations>
        </View>
      </Flex>
    </Container>
  );
};

export default ListInformations;
