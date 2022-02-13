import React, {useEffect, useState} from "react";
import {View, Image, StyleSheet, Text} from 'react-native'

export const HistoryElement = (props) => {

    const item = {
        "complaint": {
            "complaintCounter": 1,
            "complaintResolutionCounter": 0,
            "complaintType": 2,
            "date": 1644792087216,
            "latitude": 37.4219983,
            "longitude": -122.084,
            "status": false
        },
        "picture": {
            "data": "ABCDEF",
            "date": 1644792087217,
            "deviceId": "643662880403167d",
            "status": false
        }
    };




    const [type, setType] = useState(props.item.complaint.complaintType===0?'water':(props.item.complaint.complaintType===1?'trash':'electricity'));

    const deduceState = () => {
        if (!props.item.picture.status) return 'AWAITING APPROVAL';
        if (!props.item.complaint.status) return 'NOT RESOLVED';
        if (props.item.complaint.status) return 'RESOLVED';
        // if (!props.item.picture.status) return 'AWAITING APPROVAL';

    }
    const state = deduceState();
    const deduceSource = () => {

        if (type === 'electricity') return require('../Assets/electricity.png')
        if (type === 'water') return require('../Assets/water.png')
        if (type === 'trash') return require('../Assets/trash.png')
        return require('../Assets/default.png')
    }

    const imageSource = deduceSource();

    const deduceColor = () => {
        if (state === 'RESOLVED') return '#00a702'
        if (state === 'NOT RESOLVED') return '#ff0000'
        if (state === 'AWAITING APPROVAL') return '#0066ff'
        if (state === 'NOT APPROVED') return '#000000'
    }

    const textColour = deduceColor();

    const styles = StyleSheet.create({
        container: {
            padding: 15,
            flexDirection:"row",
            alignSelf: 'center',
            borderWidth: 0.5,
            alignItems: 'stretch',
            width: 350
        },
        icon: {
            height: 20,
            width: 30,
            marginRight: 25
        },
    })

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={imageSource}/>
            <Text style={{color: 'black'}}>
                {type}
            </Text>
            <Text style={{marginLeft: 'auto', color: textColour}}>
                {state}
            </Text>
        </View>
    )
}