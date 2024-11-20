import { Dimensions, StyleSheet } from "react-native";

const windowDimensions=Dimensions.get("window");
export default StyleSheet.create({
    conteiner:{
        backgroundColor:"white",
        borderRadius:20,
        padding:10,
        height:windowDimensions.height /4,
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:30,
    },
    input_conteiner:{
        width:350,
        backgroundColor:"white",
        borderRadius:10,
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
    },
    
})