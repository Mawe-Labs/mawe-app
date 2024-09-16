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
import numberFormat from '../../utils/number-format.util';


type ListInformationsProps = {
  quantityCart: number | undefined;
  price: number | undefined;
  quantityList: number | undefined;
  priceList: number | undefined;
};

const ListInformations = ({quantityCart, price, quantityList, priceList}: ListInformationsProps) => {
  return (
    <Container>
      <Flex>
        <FontAwesomeIcon
          icon={faCalculator}
          size={45}
          style={{marginRight: 10}}
        />
        <View>
          <TitleInformations>Total ({quantityList})</TitleInformations>
          <TextInformations>{numberFormat(priceList as number)}</TextInformations>
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
          <TextInformations>{numberFormat(price as number)}</TextInformations>
        </View>
      </Flex>
    </Container>
  );
};

export default ListInformations;
