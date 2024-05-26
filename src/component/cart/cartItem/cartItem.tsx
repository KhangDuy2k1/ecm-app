// import { View, Text,Image, StyleSheet } from "react-native"
// QuantitySelector.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
export const CartItem = () => { 
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {{uri: "https://goldenconcept.com/cdn/shop/products/Hoodie_GE-01_690x.progressive.jpg?v=1695974975"}}/>
            <View style = {styles.wrap}>
                <Text style = {styles.name}>Tên sản phẩm</Text>
                <Text style = {styles.price}>12000 VNĐ</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        marginLeft: 40,
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 10,
        padding: 5,
        backgroundColor: "#e6e6e6",
        width: "80%",
        height: 120
    },
    image: {
        marginLeft: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 80,
        height: 80,
    },
    wrap: {
        marginTop: 10,
        marginLeft: 10
    },
    name: { 
        fontSize: 20
    },
    price: {
        marginTop: 10,
        opacity: 0.6,
        fontSize: 15
    }
})