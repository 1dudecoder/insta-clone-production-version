(this["webpackJsonpinsta-clone"]=this["webpackJsonpinsta-clone"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(19),a=n.n(o),i=n(2),l=n(3),r=n(4),j=n(5),d=n.n(j),h=n(0),u=function(){var e=Object(c.useContext)(S),t=e.state,n=e.dispatch,s=Object(c.useState)([]),o=Object(i.a)(s,2),a=o[0],j=o[1],u=Object(c.useState)(""),p=Object(i.a)(u,2),b=p[0],f=p[1],m=Object(c.useRef)(null),O=Object(l.f)();Object(c.useEffect)((function(){d.a.Modal.init(m.current)}),[]);var g=function(){return t?[Object(h.jsx)("li",{children:Object(h.jsx)("i",{"data-target":"modal1",style:{color:"black",cursor:"pointer",caretColor:"transparent"},className:"material-icons modal-trigger",children:"search"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/profile",children:"Profile"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/createpost",children:"CreatePost"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/myfollowerspost",children:"My following Posts"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:"btn waves-effect waves-light blue",onClick:function(){localStorage.clear(),n({type:"CLEAR"}),O.push("/login")},style:{marginRight:"5px"},children:"Logout"})})]:t?void 0:[Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/login",children:"Login"})}),Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/signup",children:"SignUp"})})]};return Object(c.useEffect)((function(){g(),console.log("running again ")})),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{children:[Object(h.jsxs)("div",{className:"nav-wrapper white",children:[Object(h.jsx)(r.b,{to:t?"/":"/login",className:"brand-logo",children:"Instagram"}),Object(h.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:g()})]}),Object(h.jsxs)("div",{id:"modal1",className:"modal",ref:m,style:{color:"black"},children:[Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsx)("input",{type:"text",placeholder:"enter the email",value:b,onChange:function(e){var t;t=e.target.value,f(t),console.log(t),fetch("/search-users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){console.log(e),j(e.user),console.log(a)}))}}),a.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:"collection",children:Object(h.jsx)(r.b,{to:e._id==t._id?"/profile":"/profile/"+e._id,onClick:function(){d.a.Modal.getInstance(m.current).close(),f(""),j([])},children:Object(h.jsx)("li",{style:{color:"black"},className:"collection-item",children:e.email})})})})}))]}),Object(h.jsx)("div",{className:"modal-footer",children:Object(h.jsx)("button",{className:"modal-close waves-effect waves-green btn-flat",children:"Close"})})]})]})})};n(35);var p=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!1),a=Object(i.a)(o,2),l=a[0],j=a[1],d=Object(c.useContext)(S),u=d.state;return d.dispatch,Object(c.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e.posts)}))}),[n]),Object(h.jsx)("div",{className:"home",children:n.map((function(e){return Object(h.jsxs)("div",{className:"card home-card",children:[Object(h.jsxs)("h5",{style:{marginLeft:"3rem",fontWeight:"bold",fontSize:"20px",display:"flex"},children:[" ",Object(h.jsxs)(r.b,{to:e.postedBy._id!=u._id?"/profile/"+e.postedBy._id:"/profile/",children:[" ",e.postedBy.name," "]}),e.postedBy._id==u._id?Object(h.jsx)("span",{onClick:function(){var t;t=e._id,console.log(t),fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},style:{marginLeft:"40rem",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",caretColor:"transparent"},className:"material-icons",children:"delete"}):""]}),Object(h.jsx)("div",{children:Object(h.jsx)("center",{children:Object(h.jsx)("img",{src:e.photo,alt:"img4"})})}),e.likes.includes(u._id)?Object(h.jsx)("i",{className:"material-icons",onClick:function(){var t;j(!0),1==l&&(t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),j(!1))},style:{color:"red",marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite"}):Object(h.jsx)("i",{className:"material-icons",onClick:function(){var t;j(!1),0==l&&(t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),j(!0))},style:{marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite_border"}),Object(h.jsxs)("h6",{style:{marginLeft:"1.5rem"},children:[e.likes.length," likes"]}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("span",{style:{fontWeight:"bold"},children:[e.postedBy.name," :- "]})," ",Object(h.jsxs)("span",{children:[" ",e.title]}),Object(h.jsx)("p",{children:e.body}),Object(h.jsx)("p",{children:e.comments.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{style:{fontWeight:"bold",fontSize:"13px"},children:e.postedBy.name+" "})," ",Object(h.jsx)("span",{children:e.text}),Object(h.jsx)("br",{})]})}))}),Object(h.jsx)("form",{onSubmit:function(t){var c,o;t.preventDefault(),c=t.target[0].value,o=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:o,text:c})}).then((function(e){return e.json()})).then((function(e){console.log("this is commnets result ",e);var t=n.map((function(t){return t._id==e._id?e:t}));console.log(t),s(t)})),t.currentTarget.reset()},children:Object(h.jsx)("input",{type:"text",placeholder:"comments"})})]})]},e._id)}))})},b=n(10);var f=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useContext)(S),a=o.state,l=o.dispatch,r=Object(c.useState)(""),j=Object(i.a)(r,2),u=j[0],p=j[1],f=Object(c.useState)(""),m=Object(i.a)(f,2),O=m[0],g=m[1];Object(c.useEffect)((function(){u&&x()}),[u]),Object(c.useEffect)((function(){console.log("hellow their"),fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){s(e.myposts)}))}),[]);var x=function(){var e=new FormData;e.append("file",u),e.append("upload_preset","insta-clone"),e.append("cloud_name","santynitin"),fetch("https://api.cloudinary.com/v1_1/santynitin/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e.url),g(e.url),localStorage.setItem("user",JSON.stringify(Object(b.a)(Object(b.a)({},a),{},{pic:e.url}))),l({type:"UPDATEPIC",payload:e.url}),fetch("/updatepic",{method:"put",headers:{"Content-Type":"application.json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:O})}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.myposts)})),d.a.toast({html:"Image uploaded successfully !",classes:"blue"})})).catch((function(e){console.log(e)}))};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid grey"},children:[Object(h.jsxs)("div",{style:{marginLeft:"15rem"},children:[Object(h.jsx)("img",{className:"myprofile",src:a?a.pic:"loading",alt:"img6",style:{width:"15rem",height:"15rem",borderRadius:"10rem",marginTop:"1rem"}}),Object(h.jsxs)("div",{className:"file-field input-field",children:[Object(h.jsxs)("div",{className:"btn",children:[Object(h.jsx)("span",{children:"UPDATE PROFILE Pic "}),Object(h.jsx)("input",{type:"file",onChange:function(e){p(e.currentTarget.files[0])}})]}),Object(h.jsx)("div",{className:"file-path-wrapper",children:Object(h.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(h.jsxs)("div",{style:{marginLeft:"5rem",marginTop:"2rem"},children:[Object(h.jsx)("h5",{children:a?a.name:"loading"}),Object(h.jsx)("h4",{children:a?a.email:"loading"}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"25rem"},children:[Object(h.jsxs)("h6",{children:[" ",void 0!=n?n.length:0," Posts"]}),Object(h.jsxs)("h6",{children:[" ",a?a.followers.length:0," Followers"]}),Object(h.jsxs)("h6",{children:[" ",a?a.following.length:0," Following"]})]})]})]}),Object(h.jsx)("div",{className:"galary",children:void 0!=n?n.map((function(e){return Object(h.jsx)("img",{className:"items",src:e.photo,alt:"img1",height:"150px",width:"250px"})})):""})]})};var m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),a=Object(i.a)(o,2),j=a[0],u=a[1],p=Object(c.useState)(""),b=Object(i.a)(p,2),f=b[0],m=b[1],O=Object(c.useState)(""),g=Object(i.a)(O,2),x=g[0],y=g[1],v=Object(l.f)(),w=Object(c.useState)(""),S=Object(i.a)(w,2),N=S[0],C=S[1],I=Object(c.useState)(void 0),_=Object(i.a)(I,2),T=_[0],B=_[1];Object(c.useEffect)((function(){T&&k()}),[T]);var k=function(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(j)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:j,password:f,pic:T})}).then((function(e){return e.json()})).then((function(e){if(e.error)return d.a.toast({html:"".concat(e.error," !"),classes:"red"});d.a.toast({html:"SignUp Successfully !",classes:"blue"}),d.a.toast({html:"Please login !",classes:"blue"}),setTimeout((function(){v.push("/login")}),2e3)})):d.a.toast({html:"Please enter the valid email !",classes:"red"})},E=function(){N?function(){var e=new FormData;e.append("file",N),e.append("upload_preset","insta-clone"),e.append("cloud_name","santynitin"),fetch("https://api.cloudinary.com/v1_1/santynitin/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){B(e.url),console.log(T),d.a.toast({html:"Image uploaded successfully !",classes:"blue"})})).catch((function(e){console.log(e)}))}():k()};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"login-page",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"/phonephoto.png",alt:"phonephoto"})}),Object(h.jsxs)("div",{className:"card auth-card",children:[Object(h.jsx)("h1",{children:"Instagram"}),Object(h.jsxs)("div",{className:"login-input",children:[Object(h.jsx)("input",{className:"input-field",value:n,onChange:function(e){s(e.target.value)},type:"text",placeholder:"Name"}),Object(h.jsx)("input",{className:"input-field",value:j,onChange:function(e){u(e.target.value)},type:"email",placeholder:"Email"}),Object(h.jsx)("input",{className:"input-field",value:f,onChange:function(e){m(e.target.value)},type:"password",placeholder:"Password"}),Object(h.jsx)("input",{className:"input-field",value:x,onChange:function(e){y(e.target.value)},type:"password",placeholder:"Password"}),Object(h.jsxs)("div",{className:"file-field input-field",children:[Object(h.jsxs)("div",{className:"btn",children:[Object(h.jsx)("span",{children:"Upload Profile picture "}),Object(h.jsx)("input",{type:"file",onChange:function(e){C(e.currentTarget.files[0])}})]}),Object(h.jsx)("div",{className:"file-path-wrapper",children:Object(h.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(h.jsx)("button",{onClick:function(){n&&j&&f&&x?f!==x||f.length<6?d.a.toast({html:"Password must be greater then 6 character and Matchable !",classes:"red"}):E():d.a.toast({html:"plese fill all the fields !",classes:"red"})},className:"btn blue",children:"SignUp"}),Object(h.jsx)("center",{children:Object(h.jsx)("p",{children:Object(h.jsx)(r.b,{to:"/login",children:" Already have an account ?  "})})})]})]})]})})};var O=function(){var e=Object(c.useContext)(S),t=(e.state,e.dispatch),n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],a=s[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),p=u[0],b=u[1],f=Object(l.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"login-page",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"/phonephoto.png",alt:"phonephoto"})}),Object(h.jsxs)("div",{className:"card auth-card",children:[Object(h.jsx)("h1",{children:"Instagram"}),Object(h.jsxs)("div",{className:"login-input",children:[Object(h.jsx)("input",{className:"input-field",value:o,onChange:function(e){a(e.target.value)},type:"email",placeholder:"Email"}),Object(h.jsx)("input",{className:"input-field",value:p,onChange:function(e){b(e.target.value)},type:"password",placeholder:"Password"}),Object(h.jsx)("button",{onClick:function(){fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:p})}).then((function(e){return e.json()})).then((function(e){"Invaild Email or Password"===e.error?(console.log(e),setTimeout((function(){d.a.toast({html:"Invaild Email or Password !",classes:"red"})}),1e3)):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),f.push("/"),setTimeout((function(){d.a.toast({html:"successfully login !",classes:"blue"})}),1e3))}))},className:"btn blue",children:"Login"}),Object(h.jsx)("center",{children:Object(h.jsx)("p",{children:Object(h.jsx)(r.b,{to:"/signup",children:" Dont have an account ?  "})})})]})]})]})})};var g=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),a=Object(i.a)(o,2),l=a[0],r=a[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),p=u[0],b=u[1],f=Object(c.useState)(""),m=Object(i.a)(f,2),O=m[0],g=m[1];Object(c.useEffect)((function(){O&&x()}),[O]);var x=function(){fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:n,body:l,pic:O})}).then((function(e){return e.json()})).then((function(e){console.log(e),d.a.toast({html:"Post Uploaded successfully !",classes:"blue"})}))};return Object(h.jsxs)("div",{className:"card input field",style:{margin:"auto",marginTop:"2rem",padding:"2rem",height:"80vh",width:"500px"},children:[Object(h.jsx)("center",{children:Object(h.jsx)("h1",{children:"Create Post"})}),Object(h.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.currentTarget.value)},placeholder:"title"}),Object(h.jsx)("input",{type:"text",value:l,onChange:function(e){r(e.currentTarget.value)},placeholder:"body"}),Object(h.jsxs)("div",{className:"file-field input-field",children:[Object(h.jsxs)("div",{className:"btn",children:[Object(h.jsx)("span",{children:"File"}),Object(h.jsx)("input",{type:"file",onChange:function(e){b(e.currentTarget.files[0])}})]}),Object(h.jsxs)("div",{className:"file-path-wrapper",children:[Object(h.jsx)("input",{className:"file-path validate",type:"text"}),Object(h.jsx)("button",{className:"waves-effect waves-light btn blue",onClick:function(){!function(){var e=new FormData;e.append("file",p),e.append("upload_preset","insta-clone"),e.append("cloud_name","santynitin"),fetch("https://api.cloudinary.com/v1_1/santynitin/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){g(e.url),console.log(O),d.a.toast({html:"Image uploaded successfully !",classes:"blue"})})).catch((function(e){console.log(e)}))}()},style:{margin:"auto",marginTop:"3rem",marginLeft:"7rem"},children:"Post"})]})]})]})},x=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null==e:"UPDATEPIC"==t.type?Object(b.a)(Object(b.a)({},e),{},{pic:t.payload}):"UPDATE"==t.type?Object(b.a)(Object(b.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):e},y=n(22);var v=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)([]),a=Object(i.a)(o,2),r=a[0],j=a[1],d=Object(c.useContext)(S),u=d.state,p=d.dispatch,f=Object(l.h)().userid,m=Object(c.useState)(!1),O=Object(i.a)(m,2),g=O[0],x=O[1],v=Object(c.useState)(!0),w=Object(i.a)(v,2),N=w[0],C=w[1];return Object(c.useEffect)((function(){fetch("/profile/".concat(f),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){e.error&&x(!0),s(e.posts),j(e.user),console.log(e.user);var t=e.user.followers.filter((function(e){return e==u._id}));u&&(0==t.length?C(!0):C(!1))}))}),[]),Object(h.jsx)(h.Fragment,{children:1==g?Object(h.jsx)("center",{children:Object(h.jsx)("h1",{style:{marginTop:"13rem"},children:"USER NOT FOUND ! "})}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:{display:"flex",borderBottom:"1px solid grey"},children:[Object(h.jsx)("div",{style:{marginLeft:"15rem"},children:Object(h.jsx)("img",{src:r?r.pic:"loading",alt:"img6",style:{width:"15rem",height:"15rem",borderRadius:"10rem",marginTop:"1rem"}})}),Object(h.jsxs)("div",{style:{marginLeft:"5rem",marginTop:"2rem"},children:[Object(h.jsx)("h5",{children:r.name}),Object(h.jsx)("h4",{children:r.email}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"25rem"},children:[Object(h.jsxs)("h6",{children:[n.length," Post"]}),r.followers&&r.following?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h6",{children:[" ",r.followers.length," Followers "]}),Object(h.jsxs)("h6",{children:[" ",r.following.length," Following "]})]}):""]}),N?Object(h.jsx)("button",{onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:f})}).then((function(e){return e.json()})).then((function(e){p({type:"UPDATE",payload:{followers:e.followers,following:e.following}}),localStorage.setItem("user",JSON.stringify(e)),j((function(t){return Object(b.a)(Object(b.a)({},t),{},{followers:[].concat(Object(y.a)(t.followers),[e._id])})})),C(!1)}))},className:"btn blue followbtn",children:"Follow"}):Object(h.jsx)("button",{onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:f})}).then((function(e){return e.json()})).then((function(e){p({type:"UPDATE",payload:{followers:e.followers,following:e.following}}),localStorage.setItem("user",JSON.stringify(e)),j((function(t){var n=t.followers.filter((function(t){return t!==e._id}));return Object(b.a)(Object(b.a)({},t),{},{followers:n})})),C(!0)}))},className:"btn blue followbtn",children:"UnFollow"})]})]}),Object(h.jsx)("div",{className:"galary",children:n.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("img",{className:"items",src:e.photo,alt:"img1",height:"150px",width:"250px"})})}))})]})})};var w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!1),a=Object(i.a)(o,2),l=a[0],j=a[1],d=Object(c.useContext)(S),u=d.state;return d.dispatch,Object(c.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e.posts),s(e.posts)}))}),[n]),Object(h.jsx)("div",{className:"home",children:n.map((function(e){return Object(h.jsxs)("div",{className:"card home-card",children:[Object(h.jsxs)("h5",{style:{marginLeft:"3rem",fontWeight:"bold",fontSize:"20px",display:"flex"},children:[" ",Object(h.jsxs)(r.b,{to:e.postedBy._id!=u._id?"/profile/"+e.postedBy._id:"/profile/",children:[" ",e.postedBy.name," "]}),e.postedBy._id==u._id?Object(h.jsx)("span",{onClick:function(){var t;t=e._id,console.log(t),fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},style:{marginLeft:"40rem",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",caretColor:"transparent"},className:"material-icons",children:"delete"}):""]}),Object(h.jsx)("div",{children:Object(h.jsx)("center",{children:Object(h.jsx)("img",{src:e.photo,alt:"img4"})})}),e.likes.includes(u._id)?Object(h.jsx)("i",{className:"material-icons",onClick:function(){var t;j(!0),1==l&&(t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),j(!1))},style:{color:"red",marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite"}):Object(h.jsx)("i",{className:"material-icons",onClick:function(){var t;j(!1),0==l&&(t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)})),j(!0))},style:{marginTop:"1rem",marginLeft:"1rem",fontSize:"2.5rem"},children:"favorite_border"}),Object(h.jsxs)("h6",{style:{marginLeft:"1.5rem"},children:[e.likes.length," likes"]}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("span",{style:{fontWeight:"bold"},children:[e.postedBy.name," :- "]})," ",Object(h.jsxs)("span",{children:[" ",e.title]}),Object(h.jsx)("p",{children:e.body}),Object(h.jsx)("p",{children:e.comments.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{style:{fontWeight:"bold",fontSize:"13px"},children:e.postedBy.name+" "})," ",Object(h.jsx)("span",{children:e.text}),Object(h.jsx)("br",{})]})}))}),Object(h.jsx)("form",{onSubmit:function(t){var c,o;t.preventDefault(),c=t.target[0].value,o=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:o,text:c})}).then((function(e){return e.json()})).then((function(e){console.log("this is commnets result ",e);var t=n.map((function(t){return t._id==e._id?e:t}));console.log(t),s(t)})),t.currentTarget.reset()},children:Object(h.jsx)("input",{type:"text",placeholder:"comments"})})]})]},e._id)}))})},S=Object(c.createContext)(),N=function(){var e=Object(l.f)(),t=Object(l.g)(),n=Object(c.useContext)(S),s=(n.state,n.dispatch);return Object(c.useEffect)((function(){var n=JSON.parse(localStorage.getItem("user"));n?(s({type:"USER",payload:n}),"/login"==t.pathname&&e.push("/")):e.push("/login")}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/login",children:Object(h.jsx)(O,{})}),Object(h.jsx)(l.a,{path:"/signup",children:Object(h.jsx)(m,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/profile",children:Object(h.jsx)(f,{})}),Object(h.jsx)(l.a,{path:"/profile/:userid",children:Object(h.jsx)(v,{})}),Object(h.jsx)(l.a,{path:"/myfollowerspost",children:Object(h.jsx)(w,{})}),Object(h.jsx)(l.a,{path:"/createpost",children:Object(h.jsx)(g,{})}),Object(h.jsx)(l.a,{path:"/",children:Object(h.jsx)(p,{})})]})})};var C=function(){var e=Object(c.useReducer)(x,null),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(S.Provider,{value:{state:n,dispatch:s},children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(u,{}),Object(h.jsx)(N,{})]})})})})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a2d8e84a.chunk.js.map