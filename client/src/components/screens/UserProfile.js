import React,{useEffect,useState,useContext} from 'react'
import { userContext } from '../../App'
import {useParams} from "react-router-dom"

function UserProfile() {

    const [pics,setPics] = useState([])
    const [userProfile,setUserProfile] = useState([])
    const {state,dispatch} = useContext(userContext)
    const {userid} = useParams()
    const [errorfound,setError] = useState(false)
    const [showfollow,setshowfollow] = useState(true);

    useEffect(()=>{
        fetch(`/profile/${userid}`,{
            headers:{
                "Authorization" : "Bearer "+ localStorage.getItem("jwt"),
            }
        }).then(res=>res.json())
        .then(data=>{

            if(data.error){
                setError(true);
            }
            setPics(data.posts)
            setUserProfile(data.user)
            console.log(data.user)

            let mydata = data.user.followers.filter(item => item == state._id); 
            
            if(state){
                if(mydata.length == 0){
                    setshowfollow(true)
                }else{
                    setshowfollow(false)
                }
            }


        })
     },[])
    
    const followUser = () =>{
        fetch("/follow",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                followId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            dispatch({type:"UPDATE", payload:{followers:data.followers,following:data.following}})
            localStorage.setItem("user",JSON.stringify(data))
            setUserProfile((olddata)=>{
                return {
                    ...olddata,
                    followers:[...olddata.followers,data._id]
                }
            })
            setshowfollow(false)
        })
    }

    const UnfollowUser = () =>{
        fetch("/unfollow",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                unfollowId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            dispatch({type:"UPDATE", payload:{followers:data.followers,following:data.following}})
            localStorage.setItem("user",JSON.stringify(data))
            setUserProfile((olddata)=>{
                const newFollower = olddata.followers.filter(item => item !== data._id)
                return {
                    ...olddata,
                    followers:newFollower
                }
            })
            setshowfollow(true)
        })
    }

    return (
        <>
        
            {errorfound==true ? <center><h1 style={{marginTop:"13rem"}}>USER NOT FOUND ! </h1></center> :
         <div>

             <div style={{display:"flex", borderBottom:"1px solid grey"}}> 
                 <div style={{marginLeft:"15rem"}}>
                     <img src={userProfile?userProfile.pic :"loading"} alt="img6"
                     style={{width:"15rem" , height:"15rem" ,borderRadius:"10rem" ,marginTop:"1rem"}}/>
                 </div>
                 <div style={{ marginLeft:"5rem" , marginTop:"2rem"}}>
                    <h5>{userProfile.name}</h5>
                    <h4>{userProfile.email}</h4>
                     <div style={{display:"flex", justifyContent:"space-between" ,width:"25rem"}}>
                    <h6>{pics.length} Post</h6>
                    {
                        userProfile.followers && userProfile.following ?
                        <>
                        <h6> {userProfile.followers.length} Followers </h6> 
                        <h6> {userProfile.following.length} Following </h6>
                        </>
                            : 
                        ""
                    }
                     </div>
                {showfollow ? 
                    <button onClick={()=>{
                    followUser()
                }} className="btn blue followbtn">Follow</button>  
                :
                <button onClick={()=>{
                    UnfollowUser()
                }} className="btn blue followbtn">UnFollow</button>  
                }
                 </div>
             </div>
             <div className="galary">
             {
                 pics.map(item => {
                     return(
                         <>
                         <img className="items" src={item.photo} alt="img1" height="150px" width="250px"></img>
                        </>
                     )
                 }) 
             }
             </div>
         </div>
}
        </>
    )
}

export default UserProfile
