import {View, Text, StyleSheet} from "react-native"
import { Header } from "./header"
import { SearchBar } from "./search"
import { ProductList } from "./productList"
export const Home = () => {
    return (
        <View style = {styles.container}>
            <Header/>
            <SearchBar/>
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