/**
 * render props that does nothing
 */

 import React from 'react';


 // <Noop render={() => <form>.... </form>} />
 export default class Noop extends React.Component {
     
    
    render() {
        return this.props.render();
    }
 }