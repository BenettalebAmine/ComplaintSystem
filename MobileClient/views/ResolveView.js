import React, {useEffect, useState} from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import DeviceInfo from "react-native-device-info";
import {getComplaints} from "../services/ComplaintService";
import {ResolveElement} from "../components/ResolveElement";

export const ResolveView = ({navigation}) => {

    const [items, setItems] = useState([])
    const id = DeviceInfo.getUniqueId()

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

    const getValidComplaints = (id) => {

    }

    useEffect(()=> {
        getComplaints(id).then(r=>{
            // console.log(r.data.map((d)=>!d.complaint.status&&d.picture.status))
            setItems(r.data.filter((d)=>(!d.complaint.status&&d.picture.status&&!d.picture.resolved)));
        })
    },[])

    const updateList = () => {
        setItems([])
        getComplaints(id).then(r=>{
            // console.log(r.data.map((d)=>!d.complaint.status&&d.picture.status))
            setItems(r.data.filter((d)=>(!d.complaint.status&&d.picture.status&&!d.picture.resolved)));
        })
    }

    return (
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
            </View>
            {items.map(item=> {
                return <ResolveElement item={item} updateList={updateList}/>
            })}
        </View>
    )
}