import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainMenu} from "../views/MainMenu";
import {DeclareComplaint} from "../views/DeclareComplaint";
import {CameraView} from "../views/CameraView";
import {Camera} from "../components/Camera";
import {History} from "../views/History";
import {ResolveElement} from "../components/ResolveElement";
import {ResolveView} from "../views/ResolveView";

export const Navigation = () => {

    const Stack = createNativeStackNavigator();


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
                <Stack.Screen
                    name={"History"}
                    component={History}
                    options={{title: "History", headerShown: false}}
                />
                <Stack.Screen
                    name={"Resolution"}
                    component={ResolveView}
                    options={{title: "Resolution", headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}