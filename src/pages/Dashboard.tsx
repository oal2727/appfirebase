import React,{useContext} from "react"
import Typography from '@material-ui/core/Typography';
import {UserContext} from "../context/UserContextProvider"
const Dashboard = ()=>{

  const {state} = useContext(UserContext)

  return(
    <Typography variant="h2" style={{textAlign:"center"}} gutterBottom>
    Welcome to the Jungle {state.usuario.firstName} {state.usuario.lastName}
  </Typography>
    )
}
export default Dashboard;