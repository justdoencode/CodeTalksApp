import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth"

import Login from "./pages/Auth/Login/LoginPage";
import Sign from "./pages/Auth/Sign/SignPage";
import ChatRooms from "./pages/ChatRooms/ChatRooms";
import RoomMessages from "./pages/RoomMessages/RoomMessages"
import Button from "./components/Button/Button/Button";
import ExitButton from "./components/Button/ExitButton/ExitButton";




const Stack = createNativeStackNavigator();
const Router = () => {

  const [userSession, setUserSession] = useState()
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator>

        <Stack.Screen name="LoginPage" component={Login} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="SignPage" component={Sign} options={{
          headerShown: false,
        }} />

      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? (
            <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          ) : (
            <>
              <Stack.Screen name="ChatRoomsPage" component={ChatRooms} options={{
                headerStyle: { backgroundColor: "#FF7F3E" },
                headerTitleAlign: "center",
                headerTitle: "Rooms",
                headerTitleStyle: { color: "white" },
                headerRight: () => <ExitButton onPress={() => auth().signOut()} />
              }} />

              <Stack.Screen name="RoomMessages" component={RoomMessages} options={{
                headerStyle: { backgroundColor: "#FF7F3E" },
                headerTitleAlign: "center",
                headerTitle: "Messages",
                headerTitleStyle: { color: "white" }
              }} />
            </>

          )
        }



      </Stack.Navigator>
      <FlashMessage position={"center"} />
    </NavigationContainer>
  )
}

export default Router;