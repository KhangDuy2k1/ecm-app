import { View, Text, StyleSheet, ScrollView } from "react-native"
import { CartData } from "../../data/cart"
import { useSelector } from "react-redux";
import { CartItem } from "./cartItem/cartItem";
import { useEffect, useState } from "react";
import { getAllCart } from "../../apis/getAllCart";
const cartData = [];
export const Cart = () => {
    const [listCart, setListCart] = useState([]);
    useEffect(() => {
        const getAll = async() => {
            try {
                const res = await getAllCart()
                setListCart(res.allCart)
            } catch (error) {
                console.log(error)
            }
        }
        getAll()
    }, [])
    return (
        <View style = {styles.container}>
            <ScrollView style = {{width: "100%"}}>
                {listCart.map((data, index) => {
                    return <CartItem key={index} cart = {data}/>
                })}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container: {
        display: "flex",
        alignItems:"center",
        height: "100%",
        backgroundColor: "#fff"
    }
})