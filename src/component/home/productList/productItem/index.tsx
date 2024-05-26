import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { CartData } from "../../../../data/cart";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../../../common/redux/slice/search";
import { Dimensions } from "react-native";
import { addToCart } from "../../../../apis/addToCart";
const { width } = Dimensions.get('window');
const widthItem = width/2 - 20
export const ProductItem = ({item}) => {
    const addCart = async() => {
        try {
          const res = await addToCart(item._id);
          alert("thêm vào giỏ hàng thành công")
        } catch (error: any) {
          alert(error.response.data.message);
        }
    }
    return (
    <TouchableOpacity >
      <View style = {styles.item}>
            <Image style = {styles.image} source={{uri: item.img}}/>
            <View style = {{marginLeft: 10,marginTop: 15}}>
                <Text numberOfLines={1} style = {styles.name}>{item.name}</Text>
                <Text style = {styles.price}>{item.price} VNĐ</Text>
                <TouchableOpacity onPress={addCart}>
                        <Icon style = {styles.icon} name = "pluscircleo"/>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
  
    )
}
const styles = StyleSheet.create({
    item: {
        display: "flex",
        alignItems: "center",
        // flexDirection: "row",
        // justifyContent: "center",
        backgroundColor: "#f5f5f0",
        borderRadius: 10,
        width: widthItem,
        height: 350,
        padding: 10,
        marginBottom: 10,
      },
      image: {
        zIndex: 100,
        borderRadius: 20,
        marginLeft: 4,
        width: "100%",
        height: "70%" 
      },
      name: {
        fontWeight: "700",
        marginTop: 10,
        fontSize: 20,
      },
      price: { 
        marginTop: 5,
        opacity: 0.4,
        fontSize: 20
      },
      icon: {
        color: "#8080ff",
        marginTop: 0,
        marginLeft: 130,
        fontSize: 20
      }
})

