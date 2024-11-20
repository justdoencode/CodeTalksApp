import { TextInput, View } from "react-native";

import styles from "./Input.style"


export default function ({ placeholder, value, onType,isSecure }) {
    return (
        <View style={styles.conteiner}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onType}
                secureTextEntry={isSecure}
            />
        </View>
    )
}
