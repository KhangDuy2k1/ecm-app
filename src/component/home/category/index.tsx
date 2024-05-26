import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { setTextSearch } from '../../../common/redux/slice/search';
import { CategoryItem } from './categoryItem';
import { getAllCategory } from '../../../apis/getAllCategory';

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const id_category = useSelector((state: any) => state.category.id_category )
  useEffect(() => {
      const getACate = async() => {
          try {
              const res = await getAllCategory();
              setCategories(res.allCategories);
          } catch (error) {
              alert("Lỗi")
          }
      }
      getACate()
  }, [])
  return <View style = {styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
      {
        categories?.map((data) => {
          return  <CategoryItem category={data} id = {id_category}/>
        })
      }
    </ScrollView>
  

  </View>
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 10
  }
});