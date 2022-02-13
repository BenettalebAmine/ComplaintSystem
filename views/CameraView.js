import React, {useRef, useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import {RNCamera} from "react-native-camera";

export const CameraView = (props) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'black',
        },
        preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        capture: {
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 5,
            padding: 15,
            paddingHorizontal: 20,
            alignSelf: 'center',
            margin: 20,
        },
    });

    // const [camera, setCamera] = useState(null);
    const [data, setData] = useState(null);
    const cameraRef = useRef(null);

    const goBack = () => {
        props.setCameraMode(false)
    }

    const takePicture = async () => {
        console.log("CAMERA = ")
        console.log(cameraRef)
        if (cameraRef) {
            const options = {quality: 0.5, base64: true}
            const data = await cameraRef.current.takePictureAsync(options)
            props.setImage(data);
            console.log(data)
            props.setCameraMode(false);
        }
    }
    return(
        <View style={styles.container}>
            <RNCamera
                ref = {cameraRef}
                captureAudio={false}
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={goBack} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> {"Cancel"} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}