import { Dimensions, StyleSheet } from "react-native";

const windowDimensions=Dimensions.get("window");
export default StyleSheet.create({
    conteiner: {
        position: 'absolute',
        top:500,
        right: 20,
        borderRadius: 100,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#FF6F00",
    },
    title: {
        color: "white",
        position: "absolute",
        fontSize: 30,

    }
})