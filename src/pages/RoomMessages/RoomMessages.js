
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContentInputModal from "../../components/modal/ContentInput/ContentInputModal";
import FloatingButton from "../../components/Button/FloatingButton/FloatingButton";

import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import parseContentData from "../../utils/parseContentData";
import MessageCard from "../../components/cards/MessageCard/MessageCard";

import styles from "./RoomMessages.style"



const RoomMessages = ({ route }) => {
    const [inputContentVisible, setInputContentVisible] = useState(false)
    const { roomname } = route.params
    const [messages, setMessages] = useState([])

    useEffect(() => {
        database().ref(`messages/${roomname}/`)
            .on("value", snapshot => {
                const contendData = snapshot.val()
                const parseData = parseContentData(contendData || {})
                setMessages(parseData);
            })
    }, [])
    function handleContentClose() {
        setInputContentVisible(false)
    }
    function handleInputToggle() {
        setInputContentVisible(!inputContentVisible);
    }
    function handleSendMessage(content) {
        const currentUser = auth().currentUser.email
        const contentObject = {
            message: content,
            user: currentUser.split('@')[0],
            date: (new Date()).toISOString(),
        }

        database().ref(`messages/${roomname}/`).push(contentObject)

        handleContentClose()

    }
    const renderMessage = ({ item }) => <MessageCard message={item} />
    return (

        <View style={styles.conteiner}>
            <View style={styles.header}>
                <Text style={styles.header_text}>{`${roomname} Room`}</Text>
            </View>
            <FlatList data={messages} renderItem={renderMessage} />
            <FloatingButton onPress={handleInputToggle} />
            <ContentInputModal
                placeholder={"Mesaj yaz.."}
                visible={inputContentVisible}
                onClose={handleInputToggle}
                title="Mesaj Ekle"
                onSend={handleSendMessage} />
        </View>
    )
}

export default RoomMessages;