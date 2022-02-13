import React from "react";
import {Image, View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export const MainMenu = ({navigation}) => {

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title: {
            marginTop: 50,
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 25
        },
        button: {
            padding: 20,
            justifyContent: 'space-between',
            flexDirection:"column",
            alignSelf: 'center',
            alignItems: 'center',
            color: '#ffffff',
            borderColor: 'blue',
            borderWidth: 1,
            width: 300
        },
        buttonText: {
            color: '#280049',
        }
    });


    const declareComplaint = () => {
        //TODO go to declaration page
        navigation.navigate('DeclareComplaint');
    }

    const viewMap = () => {
        //TODO go to map page
        console.log("MAP")
    }

    const viewHistory = () => {
        navigation.navigate('History')
    }
    return (

        <View style={styles.container}>
            <Text style={styles.title}>COMPLAINTS SYSTEM</Text>
            <Image
                style = {{width: 175, height: 175}}
                source = {require('../Assets/logo.png')}
            />
            {/*<img src = ""/>*/}
            <View style={{width:350, height: 400, padding: 20, marginTop: 50}}>
                <TouchableOpacity style={styles.button} onPress={declareComplaint} title = {"DECLARE COMPLAINT"}>
                    <Text style={styles.buttonText}>
                        DECLARE COMPLAINT
                    </Text>
                </TouchableOpacity>
                <View style={{flex:0.1}}/>
                {/*<TouchableOpacity style={styles.button} onPress={viewMap} title = {"VIEW MAP"}>*/}
                {/*    <Text style={styles.buttonText}>*/}
                {/*        VIEW MAP*/}
                {/*    </Text>*/}
                {/*</TouchableOpacity>*/}
                <View style={{flex:0.1}}/>
                <TouchableOpacity style={styles.button} onPress={viewHistory} title = {"MY HISTORY"}>
                    <Text style={styles.buttonText}>
                        MY HISTORY
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}