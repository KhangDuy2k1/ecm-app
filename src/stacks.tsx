import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontIcon from "react-native-vector-icons/FontAwesome5"
import { LoginScreen } from './screens/login';
import { RegisterScreen } from './screens/register';
import { getToken } from './common/asyncFn';
import { useEffect, useState } from 'react';
import { HomeScreen } from './screens/home';
import { CartScreen } from './screens/cart';
import { ProductScreen } from './screens/product';
import { OrderScreen } from './screens/order';
import { OrderDetailScreen } from './screens/orderDetail';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
export const MainStack = () => {
  const [token, setToken] = useState()
  useEffect(() => {
    const getAccessToken =async() => {
      const token: any = await getToken();
      setToken(token);
    }
    getAccessToken();
  }, [])
  return (
    <NavigationContainer>
    {
       !token ?
       <Stack.Navigator>
      <Stack.Screen name = "login" component={LoginScreen}/>
      <Stack.Screen name = "register" component={RegisterScreen}/>
      </Stack.Navigator>
      : <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff9933',
        tabBarInactiveTintColor: 'gray',
      }}>
         <Tab.Screen name = "home" options={
          {
            unmountOnBlur: true,
            headerTitle: "Trang chủ",
            tabBarLabel: "Trang chủ",
            tabBarIcon:  ({ color, size }) => (
              <Icon name="home" color={color} size={30} />
          ),
          }
         } component={HomeScreen}/>
         <Tab.Screen name = "cart" component={CartScreen}
         options={
          {
            unmountOnBlur: true,
            headerTitle: "Giỏ hàng",
            tabBarLabel: "Giỏ hàng",
            tabBarIcon:  ({ color, size }) => (
              <AntIcon name="shoppingcart" color={color} size={30} />
            )
            }
          }
         />
         <Tab.Screen name = "product" component={ProductScreen}
          options={{
            unmountOnBlur: true,
            headerTitle: "Sản phẩm",
            tabBarButton: () => null,
          }}
         />
         <Tab.Screen name = "order" component={OrderScreen}
         options={
          {
            unmountOnBlur: true,
            headerTitle: "Đơn hàng",
            tabBarLabel: "Đơn hàng",
            tabBarIcon:  ({ color, size }) => (
              <Icon name="reorder" color={color} size={30} />
            )
            }
          }
          />
          <Tab.Screen
          name="orderDetail"
          component={OrderDetailScreen}
          options={{
            unmountOnBlur: true,
            headerTitle: "Dặt hàng", // Ẩn thanh tiêu đề
            tabBarButton: () => null, // Ẩn nút tab
          }}
        />
      </Tab.Navigator>
    }
     
    </NavigationContainer>
   
  );
}