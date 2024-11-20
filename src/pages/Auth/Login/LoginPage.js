import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import styles from "./LoginPage.style"
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button/Button";
import auth from "@react-native-firebase/auth"

import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import loginValidationShema from "../../../utils/ValidationShema/loginValidationShema";



const initialValues = {
    useremail: "",
    password: "",
}



const Login = ({ navigation }) => {

    const [isLoading,setIsLoading]=useState(false)

    async function handleFormSubmit(formValues) {
        try {
            setIsLoading(true)
            await auth().signInWithEmailAndPassword(formValues.useremail, formValues.password);
            setIsLoading(false)
            showMessage({
                message:"Başarılı Girş",
                type:"success",
            })
            navigation.navigate("ChatRoomsPage");
        } catch (error) {
            showMessage({
                message:authErrorMessageParser(error.code),
                type:"danger",
            })
            setIsLoading(false)
        }
    }

    function handleSignUp() {
        navigation.navigate("SignPage");
    }

    return (
        <View style={styles.conteiner}>
            <View style={styles.logo_conteiner}>
                <Text style={styles.logo}>codetalks</Text>
                <View style={styles.line}></View>
                <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.input_conteiner}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={loginValidationShema}
                    >
                    
                    {({ values, handleChange, handleSubmit,errors }) => (
                        <>
                            <Input
                                placeholder={"e-mail adresinizi giriniz.."}
                                onType={handleChange("useremail")}
                                value={values.useremail}
                            />
                            <Text style={{color:"white"}}>{errors.useremail}</Text>
                            
                            <Input
                                placeholder={"Şifrenizi giriniz.."}
                                onType={handleChange("password")}
                                value={values.password}
                                isSecure
                            />
                            <Text style={{color:"white"}}>{errors.password}</Text>

                            <View style={styles.button_conteiner}>
                                <Button title={"GİRİŞ YAP"} onPress={handleSubmit} loading={isLoading}/>
                                <Button title={"KAYDOL"} onPress={handleSignUp} />
                            </View>
                        </>

                    )}

                </Formik>



            </View>
        </View >

    )
}

export default Login;