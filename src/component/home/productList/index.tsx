// screens/ProductListScreen.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { ProductItem } from './productItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../apis/getAllProducts';
import { useNavigation } from '@react-navigation/native';
import { setIdCategory } from '../../../common/redux/slice/search';
export const ProductList = () => {
  const [productsList, setProductList] = useState([]);
  const [productFil, setProductFil] = useState([]);
  const navigation = useNavigation()
  const id_category = useSelector((state: any) => state.category.id_category)
  const dispatch = useDispatch()
  const filProduct = (list: any[]) => {
    return list.filter((data: any) => {
       return data.id_category === id_category
    })
  }
  useEffect(() => {
        dispatch(setIdCategory(""))
  }, [navigation])
  useEffect(() => {
        const res = filProduct(productsList);
        setProductFil(res);
  }, [id_category])
  useEffect(() => {
    const getAP = async() => {
        try {
          const res = await getAllProduct()
          setProductList(res.allProducts)
        } catch (error) {
          alert("lỗi");
        }
    }
    getAP()
  },[])
  return (
    <View style={styles.container}>
      <ScrollView  style = {styles.container}>
        <View style={styles.grid}>
          {
            productFil.length === 0 && !id_category? 
            productsList?.map((data: any) => { 
              return <View key={data.id} style={styles.productContainer}>
              <ProductItem item={data}/>
            </View> 
            })
            :
            productFil?.map((data: any) => { 
              return <View key={data.id} style={styles.productContainer}>
              <ProductItem item={data}/>
            </View> 
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  row: {
    justifyContent: 'space-between',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  }
});
