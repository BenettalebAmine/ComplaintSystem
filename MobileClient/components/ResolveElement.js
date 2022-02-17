import React, {useEffect, useState} from "react";
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {resolveComplaint, resolvePicture} from "../services/ComplaintService";

export const ResolveElement = (props) => {


    // const [type, setType] = useState(props.item.complaint.complaintType===0?'water':(props.item.complaint.complaintType===1?'trash':'electricity'));
    const [type, setType] = useState(props.item.complaint.complaintType);

    const deduceSource = () => {
        console.log(props.item.complaint.complaintType)
        if (type === 'ELECTRICITE') return require('../Assets/electricity.png')
        if (type === 'EAU') return require('../Assets/water.png')
        if (type === 'DECHETS') return require('../Assets/trash.png')
        return require('../Assets/default.png')
    }

    const imageSource = deduceSource();

    const resolve = () => {
        const complaintId = props.item.complaint.id
        const pictureId = props.item.picture.id
        resolveComplaint(complaintId).catch(err=>log(err));
        resolvePicture(pictureId).then(r=> {
            props.updateList()
        }).catch(err=>log(err));
    }

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
            <TouchableOpacity onPress={resolve} style={{marginLeft: 'auto', backgroundColor: 'rgba(18,191,1,0.16)', borderWidth: 1}}>
                <Text>
                    Mark as resolved
                </Text>
            </TouchableOpacity>
        </View>
    )
}