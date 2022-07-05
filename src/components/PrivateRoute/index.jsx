import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {authContext} from '../Contexts/authContext';

const PrivateRoute = ({ children }) => {
    const { auth } = useContext(authContext);


        return auth.user ? children : <Navigate to="/login" />

}

export default PrivateRoute;