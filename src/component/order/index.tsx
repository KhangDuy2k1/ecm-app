import { View, Text, StyleSheet, ScrollView } from "react-native"
import { OrderItem } from "./orderItem"
import { useEffect, useState } from "react"
import { getAllOrder } from "../../apis/getAllOrderMe"
export const Order = () => {
    const [listOrders, setListOrders] = useState<any[]>()
    useEffect(() => {
        async function getAllOrders() { 
            try {
                const res:any = await getAllOrder()
                setListOrders(res.allOrders)
            } catch (error) {
                console.log(error);
            }
        }
        getAllOrders()
    }, [])
    console.log(listOrders);
    return ( 
        <View style = {styles.container}>
            <ScrollView>
                <View>
                   {
                    listOrders?.map((order, index) => { 
                        return <OrderItem key={index} orderInfo={order}/>
                    })
                   }
                </View>
               
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({ 
    container: {
        height: "100%",
        backgroundColor: "#fff"
    }
})