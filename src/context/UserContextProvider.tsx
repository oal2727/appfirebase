import React,{useReducer,createContext} from "react"
import {IState} from "../interfaces/InterfaceUser"
import {UserReducer} from "./UserReducer"


const initialState={
  open:false,
  snackbar:{message:"",type:""},
  authenticated:false,
  usuario:{firstName:"",lastName:"",email:"",password:""},
}

export const UserContext = createContext<IState | any>(initialState);

const UserContextProvider: React.FC = ({children})=>{
    const [state,dispatch] = useReducer(UserReducer,initialState);
    const value = { state, dispatch };

    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
      )
}
export default UserContextProvider;