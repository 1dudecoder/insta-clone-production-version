import React ,{useContext,useEffect,useState,useRef} from "react"
import { Link,useHistory } from "react-router-dom";
import {userContext} from "../App"
import M from "materialize-css"

const NavBar = () => {

  const {state,dispatch} = useContext(userContext);
  const [search, setSearch] = useState([])
  const [email,setEmail] = useState("")
  const searchModel = useRef(null)
  const history = useHistory();

  useEffect(()=>{
    M.Modal.init(searchModel.current)
  },[])



  const fetchUsers = (query) => {
    setEmail(query)
    console.log(query)

    fetch('/search-users',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        query
      })
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setSearch(result.user)
      console.log(search)
    })
  }


  const renderList = () => {
    if(state){
      return [
        <li><i data-target="modal1" style={{color: "black" , cursor:"pointer" ,caretColor: "transparent"}}  className="material-icons modal-trigger">search</i></li>,
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
      <>
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/" : "/login"} className="brand-logo">Instagram</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderList()}
          </ul>
        </div>

        <div id="modal1" className="modal" ref={searchModel} style={{color:"black"}}>
        <div className="modal-content">
        <input type="text" placeholder="enter the email" value={email} onChange={(e)=>{
          fetchUsers(e.target.value)
        }} />
          {
            search.map(item => {
             return(
               <>
               <ul className="collection">
               <Link to={item._id == state._id ? "/profile" : "/profile/"+item._id} 
               onClick={()=>{
                 M.Modal.getInstance(searchModel.current).close();
                 setEmail("")
                 setSearch([])
               }}
               >
               <li style={{color:"black"}} className="collection-item">{item.email}</li>
               </Link>
              </ul>
              </>
             )
            })
          }
        

        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat">Close</button>
        </div>
      </div>

      </nav>
      </>
    )
}

export default NavBar;