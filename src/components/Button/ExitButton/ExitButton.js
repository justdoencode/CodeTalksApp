
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./ExitButton.stye"


export default function({onPress}){
    return(
        <TouchableOpacity style={styles.conteiner} onPress={onPress}>
            <Text style={styles.title}>Çıkış</Text>
        </TouchableOpacity>
    )
}