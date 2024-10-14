import React from "react"
import {View, Text , TextInput} from "react-native"
import { TextInput } from "react-native-web";

export default function Form(){
    return(
        <View>
            <View>
             <Text>altura</Text>
             <TextInput
             placeholder="Ex. 1,75"
             keyboardType="nemeric"></TextInput>
             <Text>Peso</Text>
             <TextInput
             placeholder="Ex. 75.00"
             keyboardType="nemeric"></TextInput>
            </View>
            
        </View>
    );
}