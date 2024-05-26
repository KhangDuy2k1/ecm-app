// screens/ProductListScreen.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ProductItem } from './productItem';
import { useSelector } from 'react-redux';
const products = [
    { id: '1', name: 'Áo khoác gió', price: 240000, url: "https://goldenconcept.com/cdn/shop/products/Hoodie_GE-01_690x.progressive.jpg?v=1695974975" },
    { id: '2', name: 'Áo cộc', price: 230000, url: "https://cbu01.alicdn.com/img/ibank/2020/844/450/18316054448_1800824068.jpg"},
    { id: '3', name: 'Áo khoác mùa đông', price: 120000, url: "https://cbu01.alicdn.com/img/ibank/O1CN01CTT9J62FMgFseRc6F_!!2208164718866-0-cib.jpg"},
    { id: '4', name: 'Product 2', price: 240000, url: "https://cbu01.alicdn.com/img/ibank/2020/676/043/19711340676_717989553.jpg"},
    { id: '5', name: 'Product 2', price: 240000, url: "https://cbu01.alicdn.com/img/ibank/O1CN0184JEoV2FMgDeeUJmz_!!2208164718866-0-cib.jpg"},
    { id: '6', name: 'Product 2', price: 240000, url: "https://cbu01.alicdn.com/img/ibank/O1CN01W5Qz4G2FMgDV9CrHx_!!2208164718866-0-cib.jpg"}
  ];
export const ProductList = () => {
    const text = useSelector((state:any) => state.search.text);
    const [productsList, setProductList] = useState(products);
   useEffect(() => {
    if(text === "") {
        setProductList(products)
        return;
    }
        const newProductList = products.filter((data: any, index: any) => {
            return data.name.includes(text)
        })
        setProductList(newProductList)
   }, [text])

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator = {false}
        data={productsList}
        renderItem={ProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  row: {
    justifyContent: 'space-between',
  },

});
