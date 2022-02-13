import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import {HistoryElement} from "../components/HistoryElement";
import {getComplaints} from "../services/ComplaintService";
import * as DeviceInfo from "react-native-device-info";

export const History = ({navigation}) => {

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
        },
        checkBox: {
            flexDirection: 'row',
            flex: 0,
            alignContent: 'center',
            marginBottom: 20,
        },
        title: {
            marginTop: 30,
            color: '#6c4cb3',
            fontWeight: 'bold',
            fontSize: 25,
        },
        subtitle: {
            marginTop: 10,
            marginBottom: 10,
            color: '#6c4cb3',
            fontWeight: 'bold',
            fontSize: 15,
        },
        button: {
            padding: 20,
            flexDirection:"row",
            alignSelf: 'center',
            alignItems: 'center',
            color: '#ffffff',
            borderColor: '#483279',
            borderWidth: 1,
            width: 300
        },
        cancelButton: {
            padding: 5,
            margin: 5,
            color: '#ffffff',
            borderColor: '#483279',
            borderWidth: 1,
            width: 65,
            height: 35
        },
        buttonText: {
            color: '#483279',
        },
        submitButtonText: {
            color: '#ffffff',
            fontSize: 17
        },
        submitButton: {
            padding: 20,
            justifyContent: 'space-between',
            flexDirection:"column",
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: '#483279',
            borderColor: '#483279',
            borderWidth: 1,
            width: 300,
            marginBottom: 10,
        }
    });

    const [percentage, setPercentage] = useState(25);
    const [items, setItems] = useState(getComplaints(DeviceInfo.getUniqueId()))


    return(
        <View style={{margin: 20}}>
            <View >
                <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.cancelButton}>
                    <Text style={{ fontSize: 14 }}> {"< Menu"} </Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>History</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', padding: 20, marginBottom:30}}>
                <ProgressCircle
                    percent={percentage}
                    radius={100}
                    color={'#4864ba'}
                    borderWidth={7}
                    bgColor={'#f5f5f5'}
                >
                    <Text>
                        {percentage} %
                    </Text>
                    <Text>
                        Resolved
                    </Text>
                </ProgressCircle>
            </View>
            {items.map(item=> {
                return <HistoryElement item={item}/>
            })}
        </View>
    )
}