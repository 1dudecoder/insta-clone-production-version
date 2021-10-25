import React ,{useContext,useEffect} from "react"
import { Link,useHistory } from "react-router-dom";
import {userContext} from "../App"

const NavBar = () => {

  const {state,dispatch} = useContext(userContext);
  const history = useHistory();

  const renderList = () => {
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/createpost">CreatePost</Link></li>,  
        <li><Link to="/myfollowerspost">My following Posts</Link></li>,  
        <li><button className="btn waves-effect waves-light blue" onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history.push("/login");
        }} style={{marginRight:"5px"} }>Logout</button></li>  
        ]
    }
    
    if(!state){
      return[
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">SignUp</Link></li>
        ]
    }
  }

  useEffect(() => {
    renderList();
    console.log("running again ")
  })
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/" : "/login"} className="brand-logo">Instagram</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderList()}
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;