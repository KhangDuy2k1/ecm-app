import { useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
export const OrderItem = ({orderInfo}) => {
    const caTotalMoney = (price: number, quantity: number) => price*quantity;
    function formatDate(isoString: any) {
        // Parse the ISO string
        const date = new Date(isoString);
      
        // Extract date and time components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
      
        // Format the date and time as 'yyyy-MM-dd HH:mm:ss'
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }
    return (
        <View style = {styles.container}> 
            <View style = {styles.wrapProduct} >
                <Image style = {styles.img} source={{uri: orderInfo.id_product.img}} />
                <View style = {styles.wrapInfoOrder}>
                    <Text style = {styles.text}>Tên sản phẩm: {orderInfo.id_product.name}</Text>
                    <Text style = {styles.text}>Giá sản phẩm: {orderInfo.id_product.price} VNĐ</Text>
                    <Text style = {styles.text}>Tổng số tiền: {caTotalMoney(orderInfo.id_product.price, orderInfo.quantity)} VNĐ</Text>
                    <Text style = {styles.textSuccess}>Đặt hàng thành công</Text>
                </View>
            </View>
            <View style = {styles.wrapTime}>
                <Text style = {styles.timeText}>Thời gian đặt hàng: {formatDate(orderInfo.createdAt)} </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container: {
        backgroundColor: "#d6d6c2",
        padding: 20,
        borderRadius: 20, 
        margin: 10,
        height: 180
    },
    wrapProduct: { 
        display: "flex",
        flexDirection: "row"
    },
    img: { 
        borderRadius: 10,
        width: 100,
        height: 100
    },
    wrapInfoOrder: { 
        marginLeft: 10
    },
    text: { 
        fontWeight: "700",
        margin: 2,
        fontSize: 20
    },
    textSuccess: { 
        fontStyle: "italic",
        marginTop: 10,
        fontSize: 18,
        color: "green"
    },
    wrapTime: { 
        marginTop: 15
    },
    timeText: {
        fontStyle: "italic",
        opacity: 0.5,
        fontWeight: "600",
        fontSize: 18
    }
})