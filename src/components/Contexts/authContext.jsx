import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import baseUrl from "../../config/baseUrl.js";


export const authContext = createContext({});

const AuthProvider = ({ children }) => {


    const [auth, setAuth] = useState({
        token: null,
        user: null,
    });

    const setTokenToContext = (tokenData) => {
        setAuth({...auth, token: tokenData});
    }

    const setUserDataToContext = (userData) => {
        setAuth({...auth, user: userData});
        localStorage.setItem('email', userData.email);
        localStorage.setItem('name', userData.name);
    }

    const resetContextData = () => {
        console.log("disconnect");
        setAuth({token: null, user:null});
        localStorage.clear();
        
    }

    useEffect(() => {
        if(auth.token) {
            axios({
                method: "post",
                url:`${baseUrl}/api/authorization`,
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            }).then((res) => setUserDataToContext(res.data.authData));
        }

    }, [auth.token]);
    
    // localStorage
    return (
        <authContext.Provider value={{auth, setTokenToContext, setUserDataToContext, resetContextData}}>
            {children}
        </authContext.Provider>
    )
}


// AuthProvider.propTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.node),
//         PropTypes.node,
//     ]).isRequired,
// }

export default AuthProvider;