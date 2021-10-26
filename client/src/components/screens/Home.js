import React,{useState,useEffect, useContext} from 'react'
import { userContext } from '../../App'
import {Link} from "react-router-dom"

function Home() {

    const [data,setData] = useState([]);
    const [likecount,setLikeCount] = useState(false);
    const {state,dispatch} = useContext(userContext)

    useEffect(()=>{
       fetch("/allpost",{
           headers:{
               "Authorization" : "Bearer "+ localStorage.getItem("jwt"),
           }
       }).then(res=>res.json())
       .then(data=>{
           setData(data.posts);
       })
    },[data])

    const likePost = (id) => {
        fetch("/like",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId: id
            })
        }).then(res=>res.json())
        .then((result)=>{
            console.log(result);
        })
    }

    const unlikePost = (id) => {
        fetch("/unlike",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId: id
            })
        }).then(res=>res.json())
        .then((result)=>{
            console.log(result);
        })
    }

    const makeComment = (text,postId)=>{
        fetch("/comment",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId,
                text
            })
        }).then(res=>res.json()).then((result)=>{
            console.log("this is commnets result " , result);
            const newdata = data.map(item=>{
                if(item._id == result._id){
                    return result
                }else{
                    return item
                }
            })
            console.log(newdata);
            setData(newdata)

        })
    }

    const deletePost = (postId)=>{
        console.log(postId);
        fetch(`/deletepost/${postId}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("jwt")
            }
        }).then((res)=>res.json())
        .then(result=>{
            console.log(result);

        })
    }


    return (
        <div className="home">
        {
            
            data.map(item=>{

                return(
                <div className="card home-card" key={item._id}>
                <h5 style={{marginLeft:"3rem", fontWeight:"bold" ,fontSize:"20px" , display:"flex" }}> <Link to={item.postedBy._id != state._id ? "/profile/" + item.postedBy._id : "/profile/"} > {item.postedBy.name} </Link> 
                {item.postedBy._id == state._id ?         
                    <span onClick={()=>{
                    deletePost(item._id)
                }} style={{marginLeft:"40rem" , display:"flex", justifyContent:"center" , alignItems:"center" , cursor:"pointer", caretColor:"transparent" }} className="material-icons">
                    delete
                </span> : "" } 

            
            </h5>
 
                <div >
                    <center><img src={item.photo} alt="img4" /></center>
                </div>

                {
                 !item.likes.includes(state._id) ?   
                <i className="material-icons" onClick={()=>{
                        setLikeCount(false)
                    if(likecount == false){   
                        likePost(item._id);
                        setLikeCount(true);
                    }

                }} style={{marginTop:"1rem",  marginLeft:"1rem", fontSize:"2.5rem"}}>favorite_border</i>
                
                :

                <i className="material-icons"  onClick={()=>{
                    setLikeCount(true)
                    if(likecount == true){
                        unlikePost(item._id);
                        setLikeCount(false);
                    }
                
                }}
                style={{color:"red" ,marginTop:"1rem",  marginLeft:"1rem", fontSize:"2.5rem"}}>favorite</i>

                }
                <h6 style={{marginLeft:"1.5rem"}}>{item.likes.length} likes</h6>

                <div className="card-content"> 
                     <span style={{fontWeight:"bold"}}>{item.postedBy.name} :- </span> <span> {item.title}</span>
                     <p>{item.body}</p>

                    <p>{item.comments.map(record=>{

                        return(
                            <>
                            <span style={{fontWeight:"bold" , fontSize:"13px"}}>{record.postedBy.name +" "}
                            </span> <span>{record.text}</span><br/>
                            </>
                        )
                    })}
                    </p>

                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        makeComment(e.target[0].value,item._id)
                        e.currentTarget.reset() 
                        }}>

                    <input type="text" placeholder="comments" />

                    </form>

                </div>
            </div>
                )
            })
        }


        </div>
    )
}

export default Home
