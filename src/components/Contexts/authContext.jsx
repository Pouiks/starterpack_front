import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
    }

    useEffect(() => {
        if(auth.token) {
            axios({
                method: "post",
                url:"http://localhost:8080/api/authorization",
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            }).then((res) => setUserDataToContext(res.data.authData));
        }

    }, [auth.token]);

    return (
        <authContext.Provider value={{auth, setTokenToContext, setUserDataToContext}}>
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