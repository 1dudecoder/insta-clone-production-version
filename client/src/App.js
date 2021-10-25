import React, {useEffect,createContext,useReducer,useContext} from "react"
import NavBar from "./components/Navbar"
import {BrowserRouter as Router,Switch,Route,useHistory,useLocation} from "react-router-dom"
import "./App.css"
import Home from "./components/screens/Home"
import Profile from "./components/screens/Profile"
import SignUp from "./components/screens/SignUp"
import SignIn from "./components/screens/Login"
import CreatePost from "./components/screens/CreatePost"
import {reducer,initialState} from "./components/reducers/userReducers"
import UserProfile from "./components/screens/UserProfile"
import SubscribeUserPost from "./components/screens/SubscribeUserPost"

export const userContext = createContext();


const Routing = () => {
  //we created seprate routing for using usehistory beacuse it can be only used inside router so we have no other option 
  const history = useHistory();
  const location = useLocation();
  const {state,dispatch} = useContext(userContext);

  useEffect(()=>{

    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      if(location.pathname == "/login"){
        history.push("/");
      }
    }else{
      history.push("/login");
    }

  },[])


  return(
    <>
    <Switch>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
      <Route path="/myfollowerspost">
        <SubscribeUserPost />
      </Route>
      <Route path="/createpost">
        <CreatePost />
      </Route>
      <Route path="/">
        <Home />
      </Route>

    </Switch>
    </>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <div className="App">

    <userContext.Provider value={{state,dispatch}}> 
        <Router>
        <NavBar />
          <Routing />
        </Router>
    </userContext.Provider>

    </div>
    </>
  );
}

export default App;
