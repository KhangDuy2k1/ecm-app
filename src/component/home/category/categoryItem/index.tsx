import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { setIdCategory } from "../../../../common/redux/slice/search";
export const CategoryItem = ({category, id}) => {
    const id_category = useSelector((state: any) => state.category.id_category )
    const dispatch = useDispatch()
    const checkSelect = () => {
        return id === category._id;
    }
    const selectCategory = () => {
       if(id_category === category._id) {
        dispatch(setIdCategory(""))
        return;
       }
       dispatch(setIdCategory(category._id));
    }
    const all = () => {
        console.log("all")
    }
    return (
        <TouchableOpacity onPress={selectCategory}>
            <View style = {checkSelect() ? styles.container: [styles.container, styles.checked]}>
                <Text style = {styles.text}>{category?.name}</Text>
            </View>
        </TouchableOpacity>  
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "blue",
        width: 120,
        height: 30
    },
    checked: {
        backgroundColor: "#b3b3ff"
    },
    text: {
        color: "#fff"
    }
})