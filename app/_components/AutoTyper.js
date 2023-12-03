import React from "react";
import Typed from 'react-typed';


export default function AutoTyper(props) {
    return (
        <Typed
            strings={props.typeArray}
            typeSpeed={80}
            loop
            backSpeed={40}
            cursorChar=" | "
        />
    )
}
