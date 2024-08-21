import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header/header.component';

const asas: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Home Page" />
            <Text style={styles.text}>Hello, home!</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default asas;
