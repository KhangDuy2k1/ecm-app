import { View, Text } from "react-native"
import { OrderDetail } from "../../component/orderDetail"
export const OrderDetailScreen = ({route}) => {
    return (
        <OrderDetail params = {route.params}/>
    )
}