/**
 * how does hoc work?
 * 
 */

import React from 'react';

export default function noop(Form) {

    return class StrongerForm extends React.Component {

        
        render() {
            return (
                <Form />
            )
        }

    }

}