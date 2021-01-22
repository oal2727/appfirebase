import {IState,ISnackbar} from "../interfaces/InterfaceUser"
import {IUsuario} from "../interfaces/InterfaceUser"
type ACTIONTYPE =
| { type: "TOOGLE_OPEN"; payload: boolean }
  | { type: "TOOGLE_SNACKBAR"; payload: ISnackbar }
  | {type:"TOOGLE_AUTHENTICATED",payload:boolean}
  | {type:"USER_AUTHENTICATED",payload:IUsuario}
  | {type:"UPDATE_SPINNER",payload:boolean};


export const UserReducer =(state:IState,action:ACTIONTYPE)=>{
    switch(action.type){

        case "TOOGLE_OPEN":
            return{
                ...state,open:action.payload
            }
        case "TOOGLE_SNACKBAR":
        return{
            ...state,
            snackbar:{
                type:action.payload.type,
                message:action.payload.message
            }
        }
        case "TOOGLE_AUTHENTICATED":
            return{
                ...state,
                authenticated:action.payload
            }
        case "USER_AUTHENTICATED":
            return{
                ...state,
                usuario:{
                    firstName:action.payload.firstName,
                    lastName:action.payload.lastName,
                    email:action.payload.email,
                    password:""
                }
        }
       
        default:
            return state;
    }
}