// import { View, Text,Image, StyleSheet } from "react-native"
// QuantitySelector.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
export const CartItem = ({cart}) => { 
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
      setCount(count + 1);
    };
  
    const handleDecrease = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    return (
        <View style = {styles.containers}>
            <Image style = {styles.image} source = {{uri: cart.img}}/>
            <View style = {styles.wrap}>
                <Text style = {styles.name}>{cart.name}</Text>
                <Text style = {styles.price}>{cart.price} VNĐ</Text>
            </View>
            <View style={styles.container}>
                    <Button title="-" onPress={handleDecrease} />
                    <Text style={styles.countText}>{count}</Text>
                    <Button title="+" onPress={handleIncrease} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containers: { 
        marginLeft: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
        
        marginBottom: 20,
        marginLeft: 20
    },
    name: { 
        fontWeight: "600",
        fontSize: 20
    },
    price: {
        marginTop: 10,
        opacity: 0.6,
        fontSize: 15
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      countText: {
        marginHorizontal: 20,
        fontSize: 20,
      },
})