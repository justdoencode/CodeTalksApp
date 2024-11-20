import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./ChatRooms.style"
import database from "@react-native-firebase/database"
import FloatingButton from "../../components/Button/FloatingButton/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInput/ContentInputModal";
import { showMessage } from "react-native-flash-message";
import parseContentData from "../../utils/parseContentData";
import RoomCard from "../../components/cards/RoomCard/RoomCard";
import authErrorMessageParser from "../../utils/authErrorMessageParser";
import Loading from "../../components/Loading/Loading";



const ChatRooms = ({ navigation }) => {

    const [inputContentVisible, setInputContentVisible] = useState(false)
    const [roomList, setRoomList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        database()
            .ref("chatrooms/")
            .on("value", snapshot => {
                const contentData = snapshot.val();
                const parseData = parseContentData(contentData || {})
                setRoomList(parseData);
            })
        setIsLoading(false)
    }, [])

    function handleInputToggle() {
        setInputContentVisible(!inputContentVisible);
    }

    function handleInputModalClose() {
        setInputContentVisible(false)
    }

    function handleSendContent(content) {
        sendContent(content)

    }
    function sendContent(content) {

        setIsLoading(true)
        const contentObject = {
            roomname: content,
        }

        try {
            database().ref("/chatrooms").push(contentObject);
            showMessage({
                message: "Oda başarıyla eklendi",
                type: "success",
            })
            setIsLoading(false)
            handleInputModalClose()
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger"
            })
            setIsLoading(false)
        }

    }

    function handleRoomMessages(item) {
        navigation.navigate("RoomMessages", item)
    }

    const renderRoom = ({ item }) => <RoomCard title={item.roomname} onPress={() => handleRoomMessages(item)} />
    return (
        <View style={styles.conteiner}>
            <View style={styles.list_conteiner}>

                <FlatList
                    data={roomList}
                    renderItem={renderRoom}
                    horizontal={false}
                    numColumns={2}
                />



            </View>


            <FloatingButton onPress={handleInputToggle} />
            <ContentInputModal
                placeholder={"Oda İsmi.."}
                visible={inputContentVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
                title="Oda Ekle"
                loading={isLoading} />
        </View>
    )
}

export default ChatRooms;