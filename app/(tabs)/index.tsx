import React from 'react';
import { StyleSheet, View , Text }from 'react-native';
import Title from './src/components/Title/'
import Main from './src/components/Main/'

export default function App() {
    return(
        <View style={style.container}>
            <Title/>
            <Main/>
         <Text>teste de texto </Text>
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