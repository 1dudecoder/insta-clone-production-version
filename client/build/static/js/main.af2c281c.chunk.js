(this["webpackJsonpinsta-clone"]=this["webpackJsonpinsta-clone"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(19),i=n.n(o),a=n(2),l=n(3),r=n(4),j=n(0),d=function(){var e=Object(c.useContext)(S),t=e.state,n=e.dispatch,s=Object(l.f)(),o=function(){return t?[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/profile",children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/createpost",children:"CreatePost"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/myfollowerspost",children:"My following Posts"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"btn waves-effect waves-light blue",onClick:function(){localStorage.clear(),n({type:"CLEAR"}),s.push("/login")},style:{marginRight:"5px"},children:"Logout"})})]:t?void 0:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/login",children:"Login"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/signup",children:"SignUp"})})]};return Object(c.useEffect)((function(){o(),console.log("running again ")})),Object(j.jsx)("nav",{children:Object(j.jsxs)("div",{className:"nav-wrapper white",children:[Object(j.jsx)(r.b,{to:t?"/":"/login",className:"brand-logo",children:"Instagram"}),Object(j.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:o()})]})})};n(35);var h=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!1),i=Object(a.a)(o,2),l=i[0],d=i[1],h=Object(c.useContext)(S),u=h.state;return h.dispatch,Object(c.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e.posts),s(e.posts)}))}),[n]),Object(j.jsx)("div",{className:"home",children:n.map((function(e){return Object(j.jsxs)("div",{className:"card home-card",children:[Object(j.jsxs)("h5",{style:{marginLeft:"3rem",fontWeight:"bold",fontSize:"20px",display:"flex"},children:[" ",Object(j.jsxs)(r.b,{to:e.postedBy._id!=u._id?"/profile/"+e.postedBy._id:"/profile/",children:[" ",e.postedBy.name," "]}),e.postedBy._id==u._id?Object(j.jsx)("span",{onClick:function(){var t;t=e._id,console.log(t),fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},style:{marginLeft:"40rem",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",caretColor:"transparent"},className:"material-icons",children:"delete"}):""]}),Object(j.jsx)("div",{children:Object(j.jsx)("center",{children:Object(j.jsx)("img",{src:e.photo,alt:"img4"})})}),e.likes.includes(u._id)?Object(j.jsx)("i",{className:"material-icons",onClick:function(){var t;d(!0),1==l&&(t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),d(!1))},style:{color:"red",marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite"}):Object(j.jsx)("i",{className:"material-icons",onClick:function(){var t;d(!1),0==l&&(t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),d(!0))},style:{marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite_border"}),Object(j.jsxs)("h6",{style:{marginLeft:"1.5rem"},children:[e.likes.length," likes"]}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:[e.postedBy.name," :- "]})," ",Object(j.jsxs)("span",{children:[" ",e.title]}),Object(j.jsx)("p",{children:e.body}),Object(j.jsx)("p",{children:e.comments.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{style:{fontWeight:"bold",fontSize:"13px"},children:e.postedBy.name+" "})," ",Object(j.jsx)("span",{children:e.text}),Object(j.jsx)("br",{})]})}))}),Object(j.jsx)("form",{onSubmit:function(t){var c,o;t.preventDefault(),c=t.target[0].value,o=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:o,text:c})}).then((function(e){return e.json()})).then((function(e){console.log("this is commnets result ",e);var t=n.map((function(t){return t._id==e._id?e:t}));console.log(t),s(t)})),t.currentTarget.reset()},children:Object(j.jsx)("input",{type:"text",placeholder:"comments"})})]})]},e._id)}))})},u=n(10),p=n(6),b=n.n(p);var f=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useContext)(S),i=o.state,l=o.dispatch,r=Object(c.useState)(""),d=Object(a.a)(r,2),h=d[0],p=d[1],f=Object(c.useState)(""),m=Object(a.a)(f,2),O=m[0],g=m[1];Object(c.useEffect)((function(){h&&x()}),[h]),Object(c.useEffect)((function(){console.log("hellow their"),fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e.myposts)}))}),[]);var x=function(){var e=new FormData;e.append("file",h),e.append("upload_preset","insta-clone"),e.append("cloud_name","santynitin"),fetch("https://api.cloudinary.com/v1_1/santynitin/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e.url),g(e.url),localStorage.setItem("user",JSON.stringify(Object(u.a)(Object(u.a)({},i),{},{pic:e.url}))),l({type:"UPDATEPIC",payload:e.url}),fetch("/updatepic",{method:"put",headers:{"Content-Type":"application.json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:O})}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.myposts)})),b.a.toast({html:"Image uploaded successfully !",classes:"blue"})})).catch((function(e){console.log(e)}))};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid grey"},children:[Object(j.jsxs)("div",{style:{marginLeft:"15rem"},children:[Object(j.jsx)("img",{className:"myprofile",src:i?i.pic:"loading",alt:"img6",style:{width:"15rem",height:"15rem",borderRadius:"10rem",marginTop:"1rem"}}),Object(j.jsxs)("div",{className:"file-field input-field",children:[Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)("span",{children:"UPDATE PROFILE Pic "}),Object(j.jsx)("input",{type:"file",onChange:function(e){p(e.currentTarget.files[0])}})]}),Object(j.jsx)("div",{className:"file-path-wrapper",children:Object(j.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(j.jsxs)("div",{style:{marginLeft:"5rem",marginTop:"2rem"},children:[Object(j.jsx)("h5",{children:i?i.name:"loading"}),Object(j.jsx)("h4",{children:i?i.email:"loading"}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"25rem"},children:[Object(j.jsxs)("h6",{children:[" ",void 0!=n?n.length:"loading"," Posts"]}),Object(j.jsxs)("h6",{children:[" ",i?i.followers.length:0," Followers"]}),Object(j.jsxs)("h6",{children:[" ",i?i.following.length:0," Following"]})]})]})]}),Object(j.jsx)("div",{className:"galary",children:void 0!=n?n.map((function(e){return Object(j.jsx)("img",{className:"items",src:e.photo,alt:"img1",height:"150px",width:"250px"})})):""})]})};var m=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),i=Object(a.a)(o,2),d=i[0],h=i[1],u=Object(c.useState)(""),p=Object(a.a)(u,2),f=p[0],m=p[1],O=Object(c.useState)(""),g=Object(a.a)(O,2),x=g[0],y=g[1],v=Object(l.f)(),w=Object(c.useState)(""),S=Object(a.a)(w,2),N=S[0],C=S[1],I=Object(c.useState)(void 0),T=Object(a.a)(I,2),_=T[0],B=T[1];Object(c.useEffect)((function(){_&&P()}),[_]);var P=function(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(d)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:d,password:f,pic:_})}).then((function(e){return e.json()})).then((function(e){if(e.error)return b.a.toast({html:"".concat(e.error," !"),classes:"red"});b.a.toast({html:"SignUp Successfully !",classes:"blue"}),b.a.toast({html:"Please login !",classes:"blue"}),setTimeout((function(){v.push("/login")}),2e3)})):b.a.toast({html:"Please enter the valid email !",classes:"red"})},E=function(){N?function(){var e=new FormData;e.append("file",N),e.append("upload_preset","insta-clone"),e.append("cloud_name","santynitin"),fetch("https://api.cloudinary.com/v1_1/santynitin/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){B(e.url),console.log(_),b.a.toast({html:"Image uploaded successfully !",classes:"blue"})})).catch((function(e){console.log(e)}))}():P()};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"login-page",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"/phonephoto.png",alt:"phonephoto"})}),Object(j.jsxs)("div",{className:"card auth-card",children:[Object(j.jsx)("h1",{children:"Instagram"}),Object(j.jsxs)("div",{className:"login-input",children:[Object(j.jsx)("input",{className:"input-field",value:n,onChange:function(e){s(e.target.value)},type:"text",placeholder:"Name"}),Object(j.jsx)("input",{className:"input-field",value:d,onChange:function(e){h(e.target.value)},type:"email",placeholder:"Email"}),Object(j.jsx)("input",{className:"input-field",value:f,onChange:function(e){m(e.target.value)},type:"password",placeholder:"Password"}),Object(j.jsx)("input",{className:"input-field",value:x,onChange:function(e){y(e.target.value)},type:"password",placeholder:"Password"}),Object(j.jsxs)("div",{className:"file-field input-field",children:[Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)("span",{children:"Upload Profile picture "}),Object(j.jsx)("input",{type:"file",onChange:function(e){C(e.currentTarget.files[0])}})]}),Object(j.jsx)("div",{className:"file-path-wrapper",children:Object(j.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(j.jsx)("button",{onClick:function(){n&&d&&f&&x?f!==x||f.length<6?b.a.toast({html:"Password must be greater then 6 character and Matchable !",classes:"red"}):E():b.a.toast({html:"plese fill all the fields !",classes:"red"})},className:"btn blue",children:"SignUp"}),Object(j.jsx)("center",{children:Object(j.jsx)("p",{children:Object(j.jsx)(r.b,{to:"/login",children:" Already have an account ?  "})})})]})]})]})})};var O=function(){var e=Object(c.useContext)(S),t=(e.state,e.dispatch),n=Object(c.useState)(""),s=Object(a.a)(n,2),o=s[0],i=s[1],d=Object(c.useState)(""),h=Object(a.a)(d,2),u=h[0],p=h[1],f=Object(l.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"login-page",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"/phonephoto.png",alt:"phonephoto"})}),Object(j.jsxs)("div",{className:"card auth-card",children:[Object(j.jsx)("h1",{children:"Instagram"}),Object(j.jsxs)("div",{className:"login-input",children:[Object(j.jsx)("input",{className:"input-field",value:o,onChange:function(e){i(e.target.value)},type:"email",placeholder:"Email"}),Object(j.jsx)("input",{className:"input-field",value:u,onChange:function(e){p(e.target.value)},type:"password",placeholder:"Password"}),Object(j.jsx)("button",{onClick:function(){fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:u})}).then((function(e){return e.json()})).then((function(e){"Invaild Email or Password"===e.error?(console.log(e),setTimeout((function(){b.a.toast({html:"Invaild Email or Password !",classes:"red"})}),1e3)):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),f.push("/"),setTimeout((function(){b.a.toast({html:"successfully login !",classes:"blue"})}),1e3))}))},className:"btn blue",children:"Login"}),Object(j.jsx)("center",{children:Object(j.jsx)("p",{children:Object(j.jsx)(r.b,{to:"/signup",children:" Dont have an account ?  "})})})]})]})]})})};var g=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),i=Object(a.a)(o,2),l=i[0],r=i[1],d=Object(c.useState)(""),h=Object(a.a)(d,2),u=h[0],p=h[1],f=Object(c.useState)(""),m=Object(a.a)(f,2),O=m[0],g=m[1];Object(c.useEffect)((function(){O&&x()}),[O]);var x=function(){fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:n,body:l,pic:O})}).then((function(e){return e.json()})).then((function(e){console.log(e),b.a.toast({html:"Post Uploaded successfully !",classes:"blue"})}))};return Object(j.jsxs)("div",{className:"card input field",style:{margin:"auto",marginTop:"2rem",padding:"2rem",height:"80vh",width:"500px"},children:[Object(j.jsx)("center",{children:Object(j.jsx)("h1",{children:"Create Post"})}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.currentTarget.value)},placeholder:"title"}),Object(j.jsx)("input",{type:"text",value:l,onChange:function(e){r(e.currentTarget.value)},placeholder:"body"}),Object(j.jsxs)("div",{className:"file-field input-field",children:[Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)("span",{children:"File"}),Object(j.jsx)("input",{type:"file",onChange:function(e){p(e.currentTarget.files[0])}})]}),Object(j.jsxs)("div",{className:"file-path-wrapper",children:[Object(j.jsx)("input",{className:"file-path validate",type:"text"}),Object(j.jsx)("button",{className:"waves-effect waves-light btn blue",onClick:function(){!function(){var e=new FormData;e.append("file",u),e.append("upload_preset","insta-clone"),e.append("cloud_name","santynitin"),fetch("https://api.cloudinary.com/v1_1/santynitin/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){g(e.url),console.log(O),b.a.toast({html:"Image uploaded successfully !",classes:"blue"})})).catch((function(e){console.log(e)}))}()},style:{margin:"auto",marginTop:"3rem",marginLeft:"7rem"},children:"Post"})]})]})]})},x=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null==e:"UPDATEPIC"==t.type?Object(u.a)(Object(u.a)({},e),{},{pic:t.payload}):"UPDATE"==t.type?Object(u.a)(Object(u.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):e},y=n(22);var v=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)([]),i=Object(a.a)(o,2),r=i[0],d=i[1],h=Object(c.useContext)(S),p=h.state,b=h.dispatch,f=Object(l.h)().userid,m=Object(c.useState)(!1),O=Object(a.a)(m,2),g=O[0],x=O[1],v=Object(c.useState)(!0),w=Object(a.a)(v,2),N=w[0],C=w[1];return Object(c.useEffect)((function(){fetch("/profile/".concat(f),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){e.error&&x(!0),s(e.posts),d(e.user),console.log(e.user);var t=e.user.followers.filter((function(e){return e==p._id}));p&&(0==t.length?C(!0):C(!1))}))}),[]),Object(j.jsx)(j.Fragment,{children:1==g?Object(j.jsx)("center",{children:Object(j.jsx)("h1",{style:{marginTop:"13rem"},children:"USER NOT FOUND ! "})}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid grey"},children:[Object(j.jsx)("div",{style:{marginLeft:"15rem"},children:Object(j.jsx)("img",{src:r?r.pic:"loading",alt:"img6",style:{width:"15rem",height:"15rem",borderRadius:"10rem",marginTop:"1rem"}})}),Object(j.jsxs)("div",{style:{marginLeft:"5rem",marginTop:"2rem"},children:[Object(j.jsx)("h5",{children:r.name}),Object(j.jsx)("h4",{children:r.email}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"25rem"},children:[Object(j.jsxs)("h6",{children:[n.length," Post"]}),r.followers&&r.following?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h6",{children:[" ",r.followers.length," Followers "]}),Object(j.jsxs)("h6",{children:[" ",r.following.length," Following "]})]}):""]}),N?Object(j.jsx)("button",{onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:f})}).then((function(e){return e.json()})).then((function(e){b({type:"UPDATE",payload:{followers:e.followers,following:e.following}}),localStorage.setItem("user",JSON.stringify(e)),d((function(t){return Object(u.a)(Object(u.a)({},t),{},{followers:[].concat(Object(y.a)(t.followers),[e._id])})})),C(!1)}))},className:"btn blue followbtn",children:"Follow"}):Object(j.jsx)("button",{onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:f})}).then((function(e){return e.json()})).then((function(e){b({type:"UPDATE",payload:{followers:e.followers,following:e.following}}),localStorage.setItem("user",JSON.stringify(e)),d((function(t){var n=t.followers.filter((function(t){return t!==e._id}));return Object(u.a)(Object(u.a)({},t),{},{followers:n})})),C(!0)}))},className:"btn blue followbtn",children:"UnFollow"})]})]}),Object(j.jsx)("div",{className:"galary",children:n.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{className:"items",src:e.photo,alt:"img1",height:"150px",width:"250px"})})}))})]})})};var w=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!1),i=Object(a.a)(o,2),l=i[0],d=i[1],h=Object(c.useContext)(S),u=h.state;return h.dispatch,Object(c.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e.posts),s(e.posts)}))}),[n]),Object(j.jsx)("div",{className:"home",children:n.map((function(e){return Object(j.jsxs)("div",{className:"card home-card",children:[Object(j.jsxs)("h5",{style:{marginLeft:"3rem",fontWeight:"bold",fontSize:"20px",display:"flex"},children:[" ",Object(j.jsxs)(r.b,{to:e.postedBy._id!=u._id?"/profile/"+e.postedBy._id:"/profile/",children:[" ",e.postedBy.name," "]}),e.postedBy._id==u._id?Object(j.jsx)("span",{onClick:function(){var t;t=e._id,console.log(t),fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},style:{marginLeft:"40rem",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",caretColor:"transparent"},className:"material-icons",children:"delete"}):""]}),Object(j.jsx)("div",{children:Object(j.jsx)("center",{children:Object(j.jsx)("img",{src:e.photo,alt:"img4"})})}),e.likes.includes(u._id)?Object(j.jsx)("i",{className:"material-icons",onClick:function(){var t;d(!0),1==l&&(t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),d(!1))},style:{color:"red",marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite"}):Object(j.jsx)("i",{className:"material-icons",onClick:function(){var t;d(!1),0==l&&(t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),d(!0))},style:{marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite_border"}),Object(j.jsxs)("h6",{style:{marginLeft:"1.5rem"},children:[e.likes.length," likes"]}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("span",{style:{fontWeight:"bold"},children:[e.postedBy.name," :- "]})," ",Object(j.jsxs)("span",{children:[" ",e.title]}),Object(j.jsx)("p",{children:e.body}),Object(j.jsx)("p",{children:e.comments.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{style:{fontWeight:"bold",fontSize:"13px"},children:e.postedBy.name+" "})," ",Object(j.jsx)("span",{children:e.text}),Object(j.jsx)("br",{})]})}))}),Object(j.jsx)("form",{onSubmit:function(t){var c,o;t.preventDefault(),c=t.target[0].value,o=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:o,text:c})}).then((function(e){return e.json()})).then((function(e){console.log("this is commnets result ",e);var t=n.map((function(t){return t._id==e._id?e:t}));console.log(t),s(t)})),t.currentTarget.reset()},children:Object(j.jsx)("input",{type:"text",placeholder:"comments"})})]})]},e._id)}))})},S=Object(c.createContext)(),N=function(){var e=Object(l.f)(),t=Object(l.g)(),n=Object(c.useContext)(S),s=(n.state,n.dispatch);return Object(c.useEffect)((function(){var n=JSON.parse(localStorage.getItem("user"));n?(s({type:"USER",payload:n}),"/login"==t.pathname&&e.push("/")):e.push("/login")}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/login",children:Object(j.jsx)(O,{})}),Object(j.jsx)(l.a,{path:"/signup",children:Object(j.jsx)(m,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/profile",children:Object(j.jsx)(f,{})}),Object(j.jsx)(l.a,{path:"/profile/:userid",children:Object(j.jsx)(v,{})}),Object(j.jsx)(l.a,{path:"/myfollowerspost",children:Object(j.jsx)(w,{})}),Object(j.jsx)(l.a,{path:"/createpost",children:Object(j.jsx)(g,{})}),Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(h,{})})]})})};var C=function(){var e=Object(c.useReducer)(x,null),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(S.Provider,{value:{state:n,dispatch:s},children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(N,{})]})})})})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.af2c281c.chunk.js.map