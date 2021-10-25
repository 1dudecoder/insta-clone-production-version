import React,{useState, useEffect} from 'react'
import M from 'materialize-css';


function CreatePost() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")


    useEffect(() =>{
        if(imageUrl){
            PostData();
        }
    },[imageUrl])


    //here we are posting our image to cloudanary 
    // and getting the image url and saveing to our data base
    const postImage = () => {
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
            setImageUrl(data.url);
            console.log(imageUrl);
            M.toast({html: 'Image uploaded successfully !',classes:"blue"})  
        }).catch((err)=>{
            console.log(err);
        })
    }

    const PostData = () => {
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:imageUrl                
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            M.toast({html: 'Post Uploaded successfully !',classes:"blue"})  
        })
    }
    
    return (
        <div className="card input field" style={{margin:"auto", marginTop:"2rem", padding:"2rem" ,height:"80vh" ,width:"500px" }}>
        <center><h1>Create Post</h1></center>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.currentTarget.value)}} placeholder="title" />
        <input type="text" value={body} onChange={(e)=>{setBody(e.currentTarget.value)}} placeholder="body" />
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file" onChange={(e)=>{setImage(e.currentTarget.files[0])}}/>
                </div>
                <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
                <button className="waves-effect waves-light btn blue"
                onClick={()=>{
                    postImage()
                }}
                 style={{ margin:"auto", marginTop:"3rem" ,marginLeft:"7rem"}}>Post</button>       
                </div>
            </div>
        </div>
    )
}

export default CreatePost
