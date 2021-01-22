import React,{useContext,useEffect} from "react"
import NavbarComponent from "../components/NavbarComponent"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import SnackbarComponent from "../components/SnackbarComponent"
import Index from "../pages/index"
import {config,usuario} from "../config/ApiKey"
import {UserContext} from "../context/UserContextProvider"
import DropDownComponent from "../components/DropDownComponent"
import PrivateRouter from "./PageRouter/PrivateRouter"
import ForgotPassword from "../pages/ForgotPassword"
import {removeToken} from "../config/Token"
const RouterNavbar = ()=>{

  const {state,dispatch} = useContext(UserContext)
  const [dataUser,setDataUser] = React.useState({}) 
  // let authenticated
  useEffect(()=>{

    const getUserData = async(id,email)=>{
      const data = await usuario.where("id_user","==",id).get()
      const arrayData =  data.docs.map(doc => ({id:doc.id,...doc.data()}))
      const dataParam = arrayData[0];
      const param={
        firstName:dataParam.firstName,
        lastName:dataParam.lastName
      }
        setDataUser(param)
        Object.assign(param,{email:email})
        dispatch({type:"USER_AUTHENTICATED",payload:param})
    }
  

    const dataVerify =()=>{
      config.auth().onAuthStateChanged(function(user) {
        if (user) {
          const {displayName,email,uid} = user
          dispatch({type:"TOOGLE_AUTHENTICATED",payload:true})
          if(displayName === null){
            getUserData(uid,email)
          }else{
              const dataname = displayName.split(" ")
              const param={
                firstName:dataname[0],
                lastName:dataname[1],
                email:email
              }
              setDataUser(param)
              dispatch({type:"USER_AUTHENTICATED",payload:param})
          } 
        }else{
          setDataUser({})
          dispatch({type:"TOOGLE_AUTHENTICATED",payload:false})
        }
      });
    }
    dataVerify();
  },[]);

  
  const logoutUser = ()=>{
    config.auth().signOut().then(()=>{
      removeToken()
      const param={
        firstName:"",
        lastName:"",
        email:""
      }
      dispatch({type:"USER_AUTHENTICATED",payload:param})
      dispatch({type:"TOOGLE_AUTHENTICATED",payload:false})
    })
  }

    return(
        <Router>
        <NavbarComponent>
        {
          !state.authenticated ? 
          <div style={{ display: "flex" }}>
          <Link
            style={{ marginRight: 10, color: "white", textDecoration: "none" }}
            to="/LogIn"
            variant="h6"
          >
            Login
          </Link>
          <Link
            style={{ marginRight: 10, color: "white", textDecoration: "none" }}
            to="/Register"
            variant="h6"
          >
            Register
          </Link>
        </div>
        : 
          <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
             
             <Link
          style={{ marginRight: 10,marginTop:10, color: "white", textDecoration: "none" }}
          to="/Dashboard"
          variant="h6"
          >
          Dashboard
        </Link>

          <div style={{display:"flex"}}>
          <DropDownComponent 
          dataUser={dataUser}
         />
          <Link
          style={{ marginRight: 10,marginTop:5, color: "white", textDecoration: "none" }}
          to="/LogIn"
          variant="h6"
          onClick={()=> logoutUser()}
          >
          Log Out
        </Link>
          </div>

          </div>
        }
        </NavbarComponent>
             <Switch>
               <Route path="/" component={Index} exact />
               <Route path="/LogIn" component={Login}  />
               <Route path="/Register" component={Register}  />
               <Route path="/ForgotPassword" component={ForgotPassword}  />
               <PrivateRouter 
               path="/Dashboard" 
               component={Dashboard}  />
         </Switch>
         <SnackbarComponent/>
    </Router>
    )
}
export default RouterNavbar;