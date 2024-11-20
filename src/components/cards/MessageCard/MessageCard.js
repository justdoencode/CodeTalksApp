
import React from "react";
import { Text, View } from "react-native";

import styles from "./MessageCard.style"
import { formatDistance,parseISO } from "date-fns";


export default function({message}){
    const formatedDate=formatDistance(parseISO(message.date),new Date(),{addSuffix:true,})
    return(
        <View style={styles.conteiner}>
            <View style={styles.inner_conteiner}>
                <Text>{message.user}</Text>
                <Text>{formatedDate}</Text>
            </View>
            <Text style={styles.message}>{message.message}</Text>
            
        </View>
    )
}