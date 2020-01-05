/**
 * render props that does nothing
 */

 import React from 'react';


 // <Noop render={() => <form>.... </form>} />
 export default class StrongerForms extends React.Component {
     
    // state = {}

    constructor(props) {
        super(props);

        this.state = props.initialState;
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }
    
    render() {
        return this.props.render(this.handleChange, this.state);
    }
 }