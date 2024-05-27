// import { View, Text,Image, StyleSheet } from "react-native"
// QuantitySelector.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
export const CartItem = ({cart}) => { 
    const [count, setCount] = useState(0);
    const navigation = useNavigation()
    const handleIncrease = () => {
      setCount(count + 1);
    };
  
    const handleDecrease = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    const clickCart = () => {
        if(count === 0) {
            alert("vui lòng nhập số lượng")
            return;
        }
        navigation.navigate("orderDetail", {id_product: cart._id, quantity: count})
    }
    return (
        <TouchableOpacity onPress={clickCart}>
        <View style = {styles.containers}>
            <Image style = {styles.image} source = {{uri: cart?.img}}/>
            <View style = {styles.wrap}>
                <Text style = {styles.name}>{cart?.name}</Text>
                <Text style = {styles.price}>{cart?.price} VNĐ</Text>
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleDecrease}>
                    <View style = {styles.wrapbtn}>
                        <Text style = {styles.textBtn}>-</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <Text style = {styles.number}>{count}</Text>
                    <TouchableOpacity onPress={handleIncrease}>
                    <View  style = {styles.wrapbtn}>
                        <Text style = {styles.textBtn}>+</Text>
                    </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
           
        </View>
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    containers: { 
        marginLeft: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
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
        marginTop: 30,
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
        marginLeft: 80,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100,
      },
      countText: {
        marginHorizontal: 20,
        fontSize: 20,
      },
      wrapbtn: {
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#999966",
        width: 30,
        height: 30
      },
      number: {
        textAlign: "center",
        lineHeight: 30,
        width: 20,
        height: 30
      },
      textBtn: {
        fontSize: 20,
        color: "#fff"
      }
})