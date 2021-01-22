import './App.css';
import Router from "./router/index"
import UserContextProvider from "./context/UserContextProvider"
const App =( )=>{
  return(
    <UserContextProvider>
    <Router/>
    </UserContextProvider>
    )
}
export default App;
