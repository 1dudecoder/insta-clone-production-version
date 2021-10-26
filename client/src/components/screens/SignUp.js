import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import M from 'materialize-css';
import { useHistory  } from "react-router-dom";


function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    let history = useHistory();
    const [image,setImage] = useState("")
    const [imageUrl,setImageUrl] = useState(undefined)

    useEffect(() => {
        if(imageUrl){
            uploadFields()
        }
    }, [imageUrl])

    const HomeButton = () => {
          history.push("/login");
    }

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
            setImageUrl(data.url);
            console.log(imageUrl);
            M.toast({html: 'Image uploaded successfully !',classes:"blue"})  
        }).catch((err)=>{
            console.log(err);
        })
    }

    const uploadFields = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password,
                    pic:imageUrl
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    return M.toast({html: `${ data.error} !`,classes:"red"})  
                }
    
                M.toast({html: 'SignUp Successfully !',classes:"blue"})  
                M.toast({html: 'Please login !',classes:"blue"})  
                setTimeout(() => {
                    HomeButton();
                }, 2000);
            })
        }else{
            M.toast({html: 'Please enter the valid email !',classes:"red"})  

        }
    }

    const PostData = () => {
        if(image){
            uploadImage()
        }else{
            uploadFields()
        }
    }

    return (
        <>
        <div className="login-page">
            <div><img src="/phonephoto.png" alt="phonephoto"/></div>
            <div className="card auth-card">
                <h1>Instagram</h1>
                <div className="login-input">
                    <input className="input-field" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name"/>
                    <input className="input-field" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
                    <input className="input-field" value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
                    <input className="input-field" value={cpassword}  onChange={(e)=>{setCpassword(e.target.value)}} type="password" placeholder="Password"/>
                    
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Upload Profile picture </span>
                            <input type="file" onChange={(e)=>{setImage(e.currentTarget.files[0])}}/>
                        </div>
            
                        <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" /> 
                        </div>
                    </div>

                    <button onClick={()=>{
                
                        if(!name || !email || !password || !cpassword){
                            M.toast({html: 'plese fill all the fields !',classes:"red"})  

                        }else if(password !== cpassword || password.length < 6 ){
                            M.toast({html: 'Password must be greater then 6 character and Matchable !',classes:"red"})                              
                        }else{
                            PostData();
                        }
                        }} className="btn blue">SignUp</button>
                    <center><p>
                        <Link to="/login"> Already have an account ?  </Link>
                    </p></center>
                </div>
            </div>
        </div>
        </>
    )
}


export default SignUp
