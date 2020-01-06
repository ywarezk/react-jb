

import React from 'react';
import {connect} from 'react-redux';

const Recieve = ({messageFromState}) => {
    return (
        <h1>
            {messageFromState}
        </h1>
    )
}

const Stronger = connect(
    (state) => {

        return {
            messageFromState: state.message
        }

    }

)(Recieve);
export default Stronger;