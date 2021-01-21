import React,{useContext} from "react"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert,{AlertProps } from '@material-ui/lab/Alert';
import {UserContext} from "../context/UserContextProvider"

function Alert(props:AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SnackbarComponent = ()=>{
  const {state,dispatch} =   useContext(UserContext)
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        dispatch({type:'TOOGLE_OPEN',payload:false})
      };

    return(
       <div>
         {/* <p>snackbar here {state.open}</p> */}
          <Snackbar open={state.open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={state.snackbar.type}>
       {state.snackbar.message} 
    </Alert>
    </Snackbar>
         </div>
    )
}
export default SnackbarComponent;