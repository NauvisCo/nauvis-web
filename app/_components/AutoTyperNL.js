import React from 'react';
import Typed from 'react-typed';
import VisibilitySensor from 'react-visibility-sensor';


export default function AutoTyperNL(props) {
    var numView = 0;
    var strDisplay = [' ']
  
    
    function onChange(isVisible) {
        if (isVisible) {
            numView += 1;
            strDisplay = props.typeArray
        }
    }

    return (
            <VisibilitySensor
                onChange={onChange}>
                {({ isVisible }) =>
                        <Typed
                            strings={strDisplay} //
                            typeSpeed={10}
                            start={numView}
                            cursorChar=" | "
                        />
                }
            </VisibilitySensor>
    )
}