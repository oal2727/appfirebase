import React from "react"
import {Route,Redirect} from 'react-router-dom'
import {UserContext} from "../../context/UserContextProvider"
import {getToken} from "../../config/Token"


//falta verificar ruta con dashboard privado
const PrivateRouter = ({component, ...rest}: any) => {
    const routeComponent = (props: any) => (
        getToken()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};
export default PrivateRouter;