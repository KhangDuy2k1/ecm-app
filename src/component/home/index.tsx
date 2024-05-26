import {View, Text, StyleSheet} from "react-native"
import { Header } from "./header"
import { Category, SearchBar } from "./category"
import { ProductList } from "./productList"
import { Slide } from "./slide"
export const Home = () => {
    return (
        <View style = {styles.container}>
            <Header/>
            <View style = {{  height: 210}}>
                <Slide/>
            </View>
            <Category/>
            <ProductList/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#fff"
    }
})