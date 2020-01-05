/**
 * HOC prevents code duplicate in forms
 * init the state
 * handleChange
 */

import React from 'react';


export default function forms(someArgumentsDifferentForms) {
    
    return function(SomeForm) {

        return class StrongerForm extends React.Component {
            state = someArgumentsDifferentForms;

            handleChange = (event) => {
                this.setState({
                   [event.target.name]: event.target.value
                })
            }

            render() {
                return (
                    <SomeForm {...this.props}  handleChange={this.handleChange} values={this.state} />
                )
            }

        }

    }
}



// export default function forms(SomeForm) {

//     return class StrongerForm extends React.Component {
//         render() {
//             // {title: '..'}
//             return (
//                 <>
//                     <h1>hoc</h1>
//                     <SomeForm {...this.props}  />
//                 </>
//             )
//         }
//     }

// }