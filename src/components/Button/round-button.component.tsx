import React from 'react';
import {Text, ViewStyle} from 'react-native';
import {faAdd} from '@fortawesome/free-solid-svg-icons/faAdd';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button, ButtonContainer} from './round-button.styles';

type RoundButtonProps = {
  onPress?: () => void;
  style?: ViewStyle;
};

const RoundButton = ({onPress, style}: RoundButtonProps) => {
  return (
    <ButtonContainer style={style}>
      <Button onPress={onPress}>
        <FontAwesomeIcon icon={faAdd} size={25} style={{color: '#fff'}} />
      </Button>
    </ButtonContainer>
  );
};

export default RoundButton;
