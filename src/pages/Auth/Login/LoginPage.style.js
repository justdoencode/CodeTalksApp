import { Dimensions, StyleSheet } from "react-native";

const windowDimensions=Dimensions.get("window");
export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#FF6F00",
        padding:10,
    },
    logo_conteiner:{
        height:windowDimensions.height /2,
        justifyContent:"center",
    },
    logo:{
        textAlign:"center",
        color:"white",
        fontSize:40,
    },
    line:{
        width:"100%",
        height:2,
        backgroundColor:"white",
        flexDirection:"row",
    },
    title:{
        textAlign:"center",
        color:"white",
        fontSize:20,
    },
    input_conteiner:{
        alignItems:"center",
    },
    button_conteiner:{
        flexDirection:"row",
        alignItems:"center",
    },
    
})