import React,{useContext} from "react";
import CardComponent from "../components/CardComponent";
import InputComponent from "../components/InputComponent";
import Button from '@material-ui/core/Button';
import {config,usuario} from "../config/ApiKey"
import {useHistory} from "react-router-dom"
import {UserContext} from "../context/UserContextProvider"
import { useForm } from "react-hook-form";


const Register = () => {
    type PersonScore = {
        firstName:string;
        lastName:string;
        email: string;
        password: string;
        repeatpassword:string;
      };
    const history = useHistory()
    const {dispatch} = useContext(UserContext)
    const {handleSubmit,errors,control } = useForm<PersonScore>();
    const RegisterUser = async(data:PersonScore)=>{
        await config.auth().createUserWithEmailAndPassword(data.email,data.password).then(result => {
            const uid = result.user?.uid
            // if(result.user){
                usuario.add({
                    firstName:data.firstName,
                    lastName:data.lastName,
                    id_user:uid
                }).then((result)=>{
                  sendEmailVerification()
                  changeSnackbar("success","Sucessfull on Register")
                  history.push("/LogIn")
                })
        }).then(error =>{
          changeSnackbar("error","Problem on Register")
        })
    }
     const sendEmailVerification =async( )=>{
      var user = config.auth().currentUser;
      user?.sendEmailVerification().then(()=>{
      }).catch(err => {
        console.log(err)
      })
    }

    const onSubmit = (data:PersonScore) => {
        console.log(data)
        if(data.password === data.repeatpassword){
            RegisterUser(data)
        }else{
          changeSnackbar("error","Verify Password")
        }
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
    <CardComponent title={"Register"}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <InputComponent 
        label={"firstName"}  
        name={"firstName"}  
        type="text"
        control={control}
        />
  {errors.firstName && <p style={{color:"red"}}>firstName is required*.</p>}
         <InputComponent 
        label={"lastName"}  
        name={"lastName"}  
        type="text"
        control={control}
        />
          {errors.lastName && <p style={{color:"red"}}>lastName is required*.</p>}
         <InputComponent 
        label={"email"}  
        name={"email"}  
        type="text"
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
           <InputComponent 
        label={"Repeat Password"}  
        name={"repeatpassword"}  
        type="password"
        control={control}
        />
          {errors.repeatpassword && <p style={{color:"red"}}>Repeat Password is required¨*.</p>}
      <div style={{marginTop:20}}>
      <Button type={"submit"} variant="contained" color="primary">
      Register
    </Button>
      </div>

     </form>
    </CardComponent>
      </div>
  );
};
export default Register;
