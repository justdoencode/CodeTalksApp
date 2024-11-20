import { Dimensions, StyleSheet } from "react-native";
const dimensionsWindow=Dimensions.get("window");
export default StyleSheet.create({
    conteiner:{
        width:dimensionsWindow.width/2-30,
        justifyContent:"center",
        backgroundColor:"white",
        margin:10,
        height:dimensionsWindow.height /3,
        borderRadius:20,
        borderColor:"#FF7F3E",
        borderWidth:1,

    },
    title:{
        textAlign:"center",
        color:"#FF7F3E"
    }
})