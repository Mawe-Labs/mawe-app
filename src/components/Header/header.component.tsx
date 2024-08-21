import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './header.styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
