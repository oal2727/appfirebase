import React,{useContext} from "react"
import Button from '@material-ui/core/Button';
import {config} from "../config/ApiKey"
import InputComponent from "../components/InputComponent";
import CardComponent from "../components/CardComponent";
import { useForm } from "react-hook-form";
import {UserContext} from "../context/UserContextProvider"
const ForgotPassword = ()=>{
    type PersonScore = {
        password: string;
      };
    const {handleSubmit,control,errors } = useForm<PersonScore>();
    const {dispatch} = useContext(UserContext)

    const sendPassword = ()=>{
        let param;
        var auth = config.auth();
        var email = "joseluis_1555@hotmail.com"
        auth.sendPasswordResetEmail(email).then(()=>{
             param = {
                type:"success",
                message:"Verifiy your email"
          }
        dispatch({type:"TOOGLE_SNACKBAR",payload:param})
        }).catch(err => {
             param = {
                type:"error",
                message:err.message.error
          }
            dispatch({type:"TOOGLE_SNACKBAR",payload:param})
        })
    }
    return(
        <CardComponent title={"Recuperar Contraseña"}>
            <form onSubmit={handleSubmit(sendPassword)}>
            <InputComponent 
            label={"Email"}  
            name={"email"}  
            type="email"
            control={control}
            />
          <div style={{marginTop:10}}>
          <Button 
            type="submit"
             variant={"outlined"}
             color={"primary"} 
            onClick={()=>sendPassword()}>
                Recuperar Contraseña
            </Button>
            </div>
            </form>
            </CardComponent>
    )
}
export default ForgotPassword;