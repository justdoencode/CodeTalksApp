import React from "react";
import { Text, View } from "react-native";

import styles from "./SignPage.style"
import { Formik } from "formik";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button/Button";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import signValidationShema from "../../../utils/ValidationShema/signValidationShema";



const initialValues = {
    useremail: "",
    password: "",
    repassword: "",
}




const Sign = ({ navigation }) => {

    

    function handleLogin() {
        navigation.navigate("LoginPage")
    }

    async function handleFormSubmit(formValues) {
        try {
            await auth().createUserWithEmailAndPassword(formValues.useremail, formValues.repassword);
            
            showMessage({
                message:"Kullanıcı Oluşturuldu",
                type:"success",
            })
            navigation.navigate("LoginPage")

        } catch (error) {
            showMessage({
                message:authErrorMessageParser(error.code),
                type:"danger",
            })
        }
    }

    return (
        <View style={styles.conteiner}>
            <View style={styles.logo_conteiner}>
                <Text style={styles.logo}>codetalks</Text>
                <View style={styles.line}></View>
                <Text style={styles.title}>Sign Up</Text>
            </View>

            <View style={styles.input_conteiner}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={signValidationShema}>

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

                            <Input
                                placeholder={"Şifrenizi tekrar giriniz.."}
                                onType={handleChange("repassword")}
                                value={values.repassword}
                                isSecure
                            />
                            <Text style={{color:"white"}}>{errors.repassword}</Text>

                            <View style={styles.button_conteiner}>
                                <Button title={"KAYDOL"} onPress={handleSubmit} />
                                <Button title={"GİRİŞ"} onPress={handleLogin} />
                            </View>
                        </>

                    )}

                </Formik>



            </View>
        </View >

    )
}

export default Sign;