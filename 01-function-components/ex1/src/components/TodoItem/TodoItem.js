/**
 * displays a single todo item
 */

 import React from 'react';

 export default (props) => {
     
    return (
        <li className="list-group-item">
            <h4>
                {
                    props.item.title    
                }
            </h4>
            <p>
                {
                    props.item.description
                }
            </p>
        </li>
    )
 }