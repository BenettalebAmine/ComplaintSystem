import React, {useEffect, useState} from "react";
import {View, Image, StyleSheet, Text} from 'react-native'

export const HistoryElement = (props) => {


    // const [type, setType] = useState(props.item.complaint.complaintType===0?'water':(props.item.complaint.complaintType===1?'trash':'electricity'));
    const [type, setType] = useState(props.item.complaint.complaintType);

    const deduceState = () => {
        if (props.item.complaint.status) return 'RESOLVED';
        if (!props.item.picture.checked) return 'AWAITING APPROVAL';
        if (!props.item.picture.status) return 'NOT APPROVED';
        if (!props.item.complaint.status) return 'NOT RESOLVED';
        // if (!props.item.picture.status) return 'AWAITING APPROVAL';

    }
    const state = deduceState();
    const deduceSource = () => {
        console.log(props.item.complaint.complaintType)
        if (type === 'ELECTRICITE') return require('../Assets/electricity.png')
        if (type === 'EAU') return require('../Assets/water.png')
        if (type === 'DECHETS') return require('../Assets/trash.png')
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