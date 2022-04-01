import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tabuada(props){
    let texto = [];
    for(let i = 0; i <= 10; i++){
        texto.push(
            <Text style={styles.texto}>
                {props.num} x {i} = {i * props.num}
            </Text>
        );
    }
    return(
        <>
            <View>
                {texto}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 30
    }
});