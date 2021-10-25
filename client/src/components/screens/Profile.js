import React,{useEffect,useState,useContext} from 'react'
import { userContext } from '../../App'
import M from 'materialize-css';


function Profile() {

    const [pics , setPics] = useState([])
    const {state , dispatch} = useContext(userContext)
    const [image,setImage] = useState("")
    const [imageUrl,setImageUrl] = useState("")

    useEffect(()=>{
        if(image){
            uploadImage();
        }
    },[image])

    useEffect(() => {
        console.log("hellow their")
        fetch('/mypost' ,{
            headers : {
                "Authorization" : "Bearer "+ localStorage.getItem("jwt"),
            }
        }).then(res => res.json())
        .then( data => {
            setPics(data.myposts)
        })
     },[])


     const uploadImage = () => {
        const imageData = new FormData();
        imageData.append('file',image); //konsi file krni hai upload 
        imageData.append("upload_preset","insta-clone"); //khn krni hai 
        imageData.append("cloud_name","santynitin"); //cloud name kya hai 
        //dont forget to append image/uplaod after the based url
        fetch("https://api.cloudinary.com/v1_1/santynitin/image/upload",{
            method:"post",
            body:imageData
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data.url);
            setImageUrl(data.url);
            localStorage.setItem("user",JSON.stringify({...state,pic:data.url}))
            dispatch({type:"UPDATEPIC",payload:data.url})
            fetch("/updatepic",{
                method:"put",
                headers:{
                    "Content-Type":"application.json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    pic:imageUrl
                })
                ,
            }).then(res=>res.json())
            .then(result=>{
                console.log(result)
                setPics(result.myposts);
            })


            M.toast({html: 'Image uploaded successfully !',classes:"blue"})  
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <div>
            <div style={{display:"flex", borderBottom:"1px solid grey"}}> 
                <div style={{marginLeft:"15rem"}}>
                    <img className="myprofile" src={state?state.pic :"loading"} alt="img6"
                    style={{width:"15rem" , height:"15rem" ,borderRadius:"10rem" ,marginTop:"1rem"}}/>
                
                <div className="file-field input-field">
                        <div className="btn">
                            <span>UPDATE PROFILE Pic </span>
                            <input type="file" onChange={(e)=>{setImage(e.currentTarget.files[0])}}/>
                        </div>
            
                        <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" /> 
                        </div>
                    </div>

                
                </div>

                <div style={{ marginLeft:"5rem" , marginTop:"2rem"}}>
                    <h5>{state ? state.name : "loading" }</h5>
                    <h4>{state ? state.email : "loading" }</h4>

                    <div style={{display:"flex", justifyContent:"space-between" ,width:"25rem"}}>
                        <h6> {pics != undefined ? pics.length : "loading"} Posts</h6>
                        <h6> {state ? state.followers.length : 0 } Followers</h6>
                        <h6> {state ? state.following.length : 0 } Following</h6>
                    </div>

                    
                </div>


            </div>
            <div className="galary">
            {
                pics != undefined ? pics.map(item => {
                    return(
                    <img className="items" src={item.photo} alt="img1" height="150px" width="250px"></img>
                    )
                }) : ""

            }

            </div>
        </div>
    )
}

export default Profile
