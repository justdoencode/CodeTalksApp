

import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "../../Button/Button/Button";

import Modal from "react-native-modal"
import styles from "./ContentInputModal.style"




const ContentInputModal = ({visible,onClose,onSend,title,placeholder,loading}) => {

    const [text,setText]=useState("")

    function handleSend(){
        onSend(text)
        setText(null)
    }
    
    return (
        <Modal 
        isVisible={visible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        >
            <View style={styles.conteiner}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.input_conteiner}>
                    <TextInput placeholder={placeholder} onChangeText={setText} multiline/>
                </View>
                
                <Button title={"Ekle"} onPress={handleSend} loading={loading}/>
            </View>
        </Modal>

    )
}

export default ContentInputModal;