
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./RoomCard.style"




export default function ({ title,onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.conteiner}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}