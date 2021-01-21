import React from "react"
import Button from '@material-ui/core/Button';
import {config} from "../config/ApiKey"
import InputComponent from "../components/InputComponent";
import CardComponent from "../components/CardComponent";
import { useForm, Controller } from "react-hook-form";

const ForgotPassword = ()=>{
    type PersonScore = {
        password: string;
      };
    const {handleSubmit,control,errors } = useForm<PersonScore>();

    const sendPassword = ()=>{
        var auth = config.auth();
        var email = "joseluis_1555@hotmail.com"
        auth.sendPasswordResetEmail(email).then(()=>{
            console.log("well")
        }).catch(err => {
            console.log(err)
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