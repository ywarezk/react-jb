/**
 * context is used to share global var in certain subtree of our component
 */

 import {createContext} from 'react';

 // default value of the variable
 const JWTContext = createContext( {token: null, setToken: null} );

 export default JWTContext;

 export const JWTProvider = JWTContext.Provider;

//  export const JWTProvider2 = <JWTContext.Provider value={} ></JWTContext.Provider>