import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {authContext} from '../Contexts/authContext';

const PrivateAdminRoute = ({ children }) => {
    const { auth } = useContext(authContext);


        return auth.user ?  auth.user.role == 'admin' ? children : <Navigate to="/connexion" /> : <Navigate to="/connexion" />

}

export default PrivateAdminRoute;