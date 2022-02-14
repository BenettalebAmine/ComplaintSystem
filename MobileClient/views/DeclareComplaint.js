import React, {useState} from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {PermissionsAndroid, StyleSheet} from "react-native";
import GetLocation from "react-native-get-location";
import {View, Text, TouchableOpacity, Image} from "react-native"
import CheckBox from '@react-native-community/checkbox';
import {Camera} from "../components/Camera";
import DeviceInfo from "react-native-device-info";
import ComplaintService, {addComplaint} from "../services/ComplaintService";

export const DeclareComplaint = ({navigation}) => {

    const [image, setImage] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [hasLocationPermission, setHasLocationPermission] = useState(false);
    const [cameraMode, setCameraMode] = useState(false)
    const [agreed, setAgreed] = useState(false);
    const [uniqueId, setUniqueId] = useState(DeviceInfo.getUniqueId());
    const [geoLocation, setGeoLocation] = useState(null)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState( //TODO import items (use schema)
        [
            {label: 'EAU', value: 'water'},
            {label: 'ELECTRICITE', value: 'electricity'},
            {label: 'DECHETS', value: 'trash'}
        ]
    )

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


    const agreeToTerms = () => {
        if (agreed) {
            setAgreed(!agreed);
            return;
        }
        requestLocationPermission().then(r=> {
            setHasLocationPermission(r);
            if (r) {
                GetLocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 15000,
                }).then(location => {
                    console.log("loc = ")
                    console.log(location);
                    setGeoLocation(location)
                }).catch(error => {
                    const { code, message } = error;
                    console.warn(code, message);
                })
                setAgreed(!agreed);
            }
            else {
                setAgreed(false)
                alert("Location permission is denied, please change permission in device settings to continue")
            }
        })

    }
    async function requestCameraPermission()
    {
        let granted = false;
        try {
            granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': 'Example App',
                    'message': 'Example App access to your camera '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera")
                // alert("You can use the camera");
            } else {
                console.log("camera permission denied")
                // alert("camera permission denied");
            }
        } catch (err) {
            console.warn(err)
            return false;
        }
        return (granted === PermissionsAndroid.RESULTS.GRANTED);
    }

    async function requestLocationPermission()
    {
        let grantedBool = false;
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Access to your location',
                    'message': 'Access to your location is required to continue'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location")
                grantedBool = true
                // alert("You can use the location");
            } else {
                console.log("location permission denied")
                // alert("Location permission denied");
                grantedBool = false;
            }

        } catch (err) {
            console.warn(err)
            grantedBool = false;
        }
        return grantedBool;
    }

    const submit = () => {
        //TODO submit
        // console.log("SUBMIT")
        // console.log("Image = ")
        // console.log(image)
        // console.log("GeoLocation = ")
        // console.log(geoLocation)
        // console.log("ID = ")
        // console.log(uniqueId)
        // console.log("Type = ")
        // console.log(value)

        // console.log(geoLocation)


        const complaint = {
            status: false,
            date: new Date().toISOString(),
            complaintCounter: 1,
            complaintResolutionCounter: 0,
            complaintType: value==='water'?0:(value==='trash'?1:2),
            latitude: geoLocation.latitude,
            longitude: geoLocation.longitude
        }
        // console.log(complaint)

        const data = image.base64;
        const picture = {
            date: new Date().toISOString(),
            data: data,
            status: false,
            isChecked: false,
            deviceId: uniqueId
        }
        // console.log(picture)

        const complaintDto = {
            complaint: complaint,
            picture: picture
        }
        console.log("DATA = ")
        console.log(complaintDto)

        addComplaint(complaintDto);
        alert("Complain saved!")
        navigation.navigate('MainMenu');

    }

    const takeImage = () => {
        //TODO submit
        requestCameraPermission().then(r=> {
            setHasCameraPermission(r);
            if (r) {
                // navigation.navigate("CameraView")
                setCameraMode(true);
            }
        })
    }

    // const devices = useCameraDevices('wide-angle-camera')
    // const device = devices.back


    return (
        cameraMode?
        <Camera setCameraMode = {setCameraMode} setImage = {setImage}/>
        :
        <View style={{margin: 20}}>
            <TouchableOpacity style={styles.cancelButton} onPress = {()=>{navigation.goBack()}}>
                <Text style={styles.buttonText}>
                    {"< Menu"}
                </Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center', padding: 20}}>
                <Text style={styles.title}>DECLARE COMPLAINT</Text>
            </View>
            <Text style={styles.subtitle}>SELECT SERVICE</Text>
            <DropDownPicker
                open = {open}
                value = {value}
                items = {items}
                setOpen = {setOpen}
                setValue = {setValue}
                setItems = {setItems}
                placeholder = "Select an option"
            />
            <Text style={styles.subtitle}>IMAGE</Text>
            <TouchableOpacity style={styles.button} onPress = {takeImage}>
                <Image style={{height: 25, width: 25, marginRight:15}} source={require('../Assets/camera-icon.png')}/>
                <Text style={styles.buttonText}>
                    TAKE PICTURE
                </Text>
            </TouchableOpacity>
            <Text style={styles.subtitle}>TERMS</Text>
            <View style={styles.checkBox}>
                <CheckBox
                    value = {agreed && hasLocationPermission}
                    onValueChange = {agreeToTerms}
                />
                <Text>Yes, I agree to take my Device ID and location</Text>

            </View>
            {/*{!hasLocationPermission? <Text>You must allow permission to access your location</Text>:null}*/}

            <TouchableOpacity
                style={styles.submitButton}
                onPress={submit}
                disabled = {!agreed || !value || !hasLocationPermission || !image}
            >
                <Text style={styles.submitButtonText}>
                    Submit
                </Text>
            </TouchableOpacity>
            {!agreed? <Text>*You must agree with terms above</Text>:null}
            {!value? <Text>*You must select the type of complaint</Text>:null}
            {!hasLocationPermission? <Text>*You must allow permission to access your location</Text>:null}
            {!image? <Text>*You must take an image of the complaint</Text>:null}

        </View>
    )
}