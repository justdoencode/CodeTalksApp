import { Dimensions, StyleSheet } from "react-native";

const windowDimensions=Dimensions.get("window");
export default StyleSheet.create({
    conteiner:{
        backgroundColor:"#FFB74D",
        margin:10,
        padding:15,
        borderRadius:10,
    },
    inner_conteiner:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20,
    },
    message:{
        fontWeight:"bold",
    }
})