import React from 'react';
import { StyleSheet, View }
import Title from './src/components/Title/'
from 'react-native';

export default function App() {
    return(
        <View style={style.container}>
         <Text>teste de texto</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    },
});