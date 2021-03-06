import {NavigationContainer} from "@react-navigation/native";
import React, {useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainMenu} from "../views/MainMenu";
import {DeclareComplaint} from "../views/DeclareComplaint";
import {CameraView} from "../views/CameraView";
import {Camera} from "../components/Camera";

export const Navigation = () => {

    const Stack = createNativeStackNavigator();
    const notInCamera = useState(true);

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"MainMenu"}
                    component={MainMenu}
                    options={{title:"MENU", headerShown: false}}
                />
                <Stack.Screen
                    name={"DeclareComplaint"}
                    component={DeclareComplaint}
                    options={{title: "DECLARE COMPLAINT", headerShown: false}}
                />
                <Stack.Screen
                    name={"CameraView"}
                    component={Camera}
                    options={{title: "Camera", headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}