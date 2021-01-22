import React,{useContext} from "react"
import Typography from '@material-ui/core/Typography';
import {UserContext} from "../context/UserContextProvider"

const Dashboard = ()=>{

  const {state} = useContext(UserContext)

  return(
    <div>
        <Typography variant="h2" style={{textAlign:"center"}} gutterBottom>
        Welcome to the Jungle {state.usuario.firstName} {state.usuario.lastName}
      </Typography>
  </div>
    )
}
export default Dashboard;