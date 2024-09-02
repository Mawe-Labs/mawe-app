import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import {faAdd} from '@fortawesome/free-solid-svg-icons/faAdd';

import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type RoundButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
};

const RoundButton: React.FC<RoundButtonProps> = ({ onPress, style }) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesomeIcon icon={faAdd} size={25} style={{color: '#fff'}} />
      </TouchableOpacity>
    </View>
    
  );
};

export default RoundButton;
