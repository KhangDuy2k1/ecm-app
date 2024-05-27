import { useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image  } from "react-native"
import { getProductById } from "../../apis/getProductById"
import { useNavigation } from "@react-navigation/native";
export const Product = ({id_product}) => {
    const [product, setProduct] = useState<any>();
    const [inputNumber, setInputNumber] = useState(0)
    const navigation = useNavigation()
    useEffect(() => {
       async function get(){
            try {
                const res = await getProductById(id_product)
                setProduct(res.product);
            } catch (error: any) {
                console.error(error.response.data);
            }
        }
        get()
    }, [])
    const decre = () => {
        setInputNumber(inputNumber !== 0 ? inputNumber - 1 : 0)
    }
    const incre = () => {
        setInputNumber(inputNumber + 1)
    }
    const handleOrder = () => {
        if(inputNumber === 0) {
            alert("vui lòng nhập số lượng sản phẩm")
            return
        }
        navigation.navigate("orderDetail", {id_product: id_product, quantity: inputNumber});
    }
    return (
        <View style = {styles.container}>
             <View style = {styles.container}>
            <View style = {styles.wrapImage}>
                <Image source={{uri: product?.img}} resizeMode="cover" style = {styles.image}/>
            </View>
            <View style = {styles.wrapContent}>
                <View style = {styles.headerContent}>
                    <Text style = {{fontSize :25, fontWeight: "700"}}>
                        {product?.name}
                    </Text>
                    <View> 
                        <View style = {styles.containerInfo}>
                            <Text style = {styles.price}>
                                {product?.price} VNĐ
                            </Text>
                        </View> 
                    </View>
                   
                </View>
                <View style = {styles.descript}>
                   <Text style = {styles.textDesc}>
                        {product?.desc}
                   </Text>
                </View>
                <View style = {styles.quantityContainer}>
                    <TouchableOpacity style={styles.button} onPress={decre} >
                    <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.input} value = {inputNumber.toString()}/>
                    <TouchableOpacity style={styles.button} onPress={incre}>
                    <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                    <View style = {styles.containerOrderBottom}>
                        <View>
                           <TouchableOpacity onPress={handleOrder}>
                            <View style = {styles.orderButton}>
                                <Text style = {styles.textOrder}>
                                    Đặt hàng
                                </Text>
                            </View>
                           </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container: {
        backgroundColor: "#99ccff"
    },
    wrapImage: {
        height: 300,
        display: "flex",
        alignItems: "center"
    },
    descript: {
        height: 100,
    },
    textDesc: {
        opacity: 0.5,
        fontSize: 20
    },
    image: { 
        marginTop: 10,
        textAlign: "center",
        borderRadius: 100,
        width: "100%",
        height: "100%"
    },
    wrapContent: { 
        padding: 30,
        marginTop: 20,
        borderRadius: 60,
        height: "100%",
        backgroundColor: "#a3c2c2"
    },
    headerContent: {
        height: 60,
    },
    quantityContainer: {
        marginTop: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        backgroundColor: '#adad85',
        borderRadius: 5,
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 25,
    },
    input: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 70,
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5,
    },
    containerOrderBottom: {
        marginTop: 40,
        height: 60,
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerInfo: { 
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    starsContainer: {
        width: 70,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    starIcon: { 
        fontSize: 20,
        color: "#ff9900"
    },
    starsNumberText: { 
        fontSize: 22
    },
    price: {
        letterSpacing: 0.5,
        fontSize: 23
    },
    orderButton: {
        display: "flex",
        justifyContent: "center",
        borderRadius: 20,
        width: 350 ,
        height: 40,
        backgroundColor: "#0080ff"
    },
    textOrder: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff"
    },
    textSumMoney: { 
        fontWeight: "600",
        fontSize: 25
    }
})