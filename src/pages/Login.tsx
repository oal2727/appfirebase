import React,{useContext} from "react";
import ButtonComponent from "../components/ButtonComponent"
import CardComponent from "../components/CardComponent";
import InputComponent from "../components/InputComponent";
// import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"
import {config,
  googleAuthProvider,
  facebookAuthProvider} from "../config/ApiKey"
import {UserContext} from "../context/UserContextProvider"
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import {setToken} from "../config/Token"
const Login = () => {
  type PersonScore = {
    email: string;
    password: string;
    edad:number;
  };
  const {handleSubmit,control,errors } = useForm<PersonScore>();
    const {dispatch} = useContext(UserContext)
    const history = useHistory()

    const LoginApp = async(data:PersonScore)=>{
      await config.auth().signInWithEmailAndPassword(data.email,data.password).then(result =>{
        sucessfullLogin("Sucessfull Login") 
        }).catch(error => {
          changeSnackbar("error",error.message)
        })
    }
    const socialLogin = async(provider:any)=>{
        await config.auth().signInWithPopup(provider).then(result => {
          sucessfullLogin("Sucessfull with Login Social")  
        }).catch(error => {
          changeSnackbar("error",error.message)
        })
    }
    const sucessfullLogin = (message:string)=>{
      setToken("true")
      changeSnackbar("success",message)
      history.push("/Dashboard")
    }
    const changeSnackbar = (type:any,message:any)=>{
        var param = {
              type:type,
              message:message
        }
        dispatch({type:'TOOGLE_OPEN',payload:true})
        dispatch({type:"TOOGLE_SNACKBAR",payload:param})
    }

  return (
      <div>
    <CardComponent title={"Login"}>
    <form onSubmit={handleSubmit(LoginApp)}>
        <InputComponent 
        label={"Email"}  
        name={"email"}  
        type="email"
        control={control}
        />
     {errors.email && <p style={{color:"red"}}>Email is required*.</p>}
    
      <InputComponent 
        label={"Password"}  
        name={"password"}  
        type="password"
        control={control}
        />
      {errors.password && <p style={{color:"red"}}>Password is required*.</p>}

      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    > 
        <ButtonComponent
        type="submit" 
        variant="contained" 
        color="primary"
        onClick={()=>null}>
          Login
        </ButtonComponent>
      <p 
      onClick={()=>history.push("/ForgotPassword")}
       style={{color:"blue",cursor:"pointer"}}>Recuperar Contraseña</p>
        <ButtonComponent
        type="button" 
        variant="outlined" 
        color="primary"
        onClick={()=>socialLogin(googleAuthProvider)}>
         <i className="fab fa-google" style={{marginRight:10}}></i>
         Iniciar Session con Google
        </ButtonComponent>
        <ButtonComponent
        type="button" 
        variant="outlined" 
        onClick={()=>socialLogin(facebookAuthProvider)}
        color="primary">
       <i className="fab fa-facebook" style={{marginRight:10}}></i>
       Iniciar Session con Facebook
        </ButtonComponent>
</Grid>
   
    </form>
    
    </CardComponent>
    </div>
  );
};
export default Login;
