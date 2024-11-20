
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import styles from "./Button.style"



export default function ({ title,onPress,loading }) {
    return (

        <TouchableOpacity style={styles.conteiner} onPress={onPress}>
            {
                loading ?(
                    <ActivityIndicator />
                ):(
                    <Text style={styles.title}>{title}</Text>
                )
            }
            
        </TouchableOpacity>
    )
}