import React, {useState,useContext} from 'react'
import {Link} from "react-router-dom"
import M from 'materialize-css';
import { useHistory  } from "react-router-dom";
import {userContext} from "../../App"


function Login() {
    const {state,dispatch} = useContext(userContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const PostData = () => {
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error === "Invaild Email or Password"){
                console.log(data)
                setTimeout(() => {      
                    M.toast({html: 'Invaild Email or Password !',classes:"red"})  
                }, 1000);
            }else{
                // console.log(data.token)
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))

                dispatch({type:"USER", payload:data.user})

                history.push("/");
                setTimeout(() => {      
                    M.toast({html: 'successfully login !',classes:"blue"})  
                }, 1000);
            }
        })
    }


    return (
        <>
        <div className="login-page">
            <div><img src="https://res.cloudinary.com/santynitin/image/upload/v1635239023/phonephoto_vc2xr6.png" alt="phonephoto"/></div>
            <div className="card auth-card">
                <h1>Instagram</h1>
                <div className="login-input">
                    <input className="input-field" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
                    <input className="input-field" value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
                    <button onClick={()=>{PostData()}} className="btn blue">Login</button>
                    <center><p>
                        <Link to="/signup"> Dont have an account ?  </Link>
                    </p></center>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
