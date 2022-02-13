import { useIsFocused } from '@react-navigation/core';
import React from "react";
import {CameraView} from "../views/CameraView";
export const Camera = (props) => {

    const isFocused = useIsFocused();

    if (isFocused) {
        return <CameraView setCameraMode = {props.setCameraMode} setImage = {props.setImage}/>;
    } else {
        return null;
    }
}