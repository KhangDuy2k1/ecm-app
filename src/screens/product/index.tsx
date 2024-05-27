import { View, Text } from "react-native"
import { Product } from "../../component/product";
export const ProductScreen = ({route}) => { 
    return (
        <Product id_product = {route.params.id_product}/>
    )
}