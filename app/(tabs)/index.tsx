import React from 'react';
import { StyleSheet, Text , View } from 'react-native';

export default function App() {
    return(
        <View style={style.container}>
         <Text>Open up App.js to start working on your app !n</Text>
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