import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { getProductById } from "../../apis/getProductById";
import { TextInput } from "react-native-paper";
import { order } from "../../apis/order";
export const OrderDetail = ({params}) => {
    const {id_product, quantity} = params
    const [product, setProduct] = useState<any>();
    const [address, setAddress] = useState()
    const [phonenumber, setPhonnumber] = useState()
    useEffect(() => { 
        const getProductId =async () => { 
                try {
                    const res =await getProductById(id_product);
                    setProduct(res.product)
                } catch (error) {
                    console.error(error);
                }
        }
        getProductId()
    }, [])
    const getAddress = (value: any) => {
        setAddress(value);
    }
    const getPhone = (value: any) => {
        setPhonnumber(value);
    }
    console.log(address, phonenumber);
    const clickOrder = async() => {
        try {
            if(!address || !phonenumber ) {
                alert("vui lòng nhập đủ địa chỉ và số điện thoại") 
                return;
            } 
            const res = await order({id_product, quantity, address, phonenumber})
            alert(res.mes);
        } catch (error: any) {
            console.log(error.respone.data);
        }
    }
    return (
        <View style = {styles.container}>
            <View>
                <Text style = {{fontWeight: "700", fontSize: 20, marginBottom: 10}}>Thông tin liên hệ</Text>
                <View>
                     <Text style = {{marginBottom: 5}}>Địa chỉ</Text>
                    <TextInput onChangeText={getAddress} style = {{width: "100%",height: 40}}/>
                </View>
               
                <View  style = {{marginTop: 10}}>
                    <Text style = {{marginBottom: 5}}>Số điện thoại</Text>
                    <TextInput style = {{width: "100%",height: 40}} onChangeText={getPhone}/>
                </View>
            </View>
            <View style = {styles.wrapProduct}>
                <Text style = {{fontSize: 20, fontWeight: "800"}}>Thông tin sản phẩm</Text>
                <View style = {{marginTop: 20}}>
                    <Image style = {styles.image} source={{uri: product?.img}}/>
                    <Text style = {styles.text}>Tên sản phẩm: {product?.name}</Text>
                    <Text style = {styles.text}>Giá sản phẩm: {product?.price} VNĐ</Text>
                    <Text style = {styles.text}>Số lượng sản phẩm: {quantity} chiếc</Text>
                </View>
                
            </View>
            <View style = {styles.wrapBottom}>
                <View>
                    <Text style = {{fontSize: 25}}>Tổng số tiền:</Text>
                    <Text style = {{fontWeight: "800", fontSize: 20, marginTop: 5}}>{quantity*(product?.price)} VNĐ</Text>
                </View>
                <TouchableOpacity onPress={clickOrder}>
                    <View style = {styles.btn}>
                        <Text style = {{color: "#fff", fontSize: 20}}>Đặt hàng</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        padding: 20,
        height: "100%",
        backgroundColor: "#fff"
    },
    wrapProduct: {
        marginTop: 40,
        height: 300,
    },
    image: {
        borderRadius: 20,
        width: 200,
        height: 200
    },
    wrapBottom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 50,
        width: "110%",
        bottom: 15,
        position: "absolute",
    }, 
    text: {
        fontWeight: "700",
        marginTop: 10,
        fontSize: 20
    },
    btn : {
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#3333ff"
    }
})