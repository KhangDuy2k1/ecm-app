import { View, Text, StyleSheet, ScrollView } from "react-native"
import { CartData } from "../../data/cart"
import { useSelector } from "react-redux";
import { CartItem } from "./cartItem/cartItem";
const cartData = [];
export const Cart = () => {
    return (
        <View style = {styles.container}>
            <ScrollView style = {{width: "100%"}}>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
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