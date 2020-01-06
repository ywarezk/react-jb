/**
 * action describes what happened in our app
 * 
 * { type: 'SET Message', payload: 'extra data that we want to pass with the action' }
 */

 export function setMessage(whatMessage) {
     return {
         type: 'SET MESSAGE',
         payload: whatMessage
     }
 }

