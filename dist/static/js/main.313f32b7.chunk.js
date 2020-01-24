(this["webpackJsonpreact-app-4"]=this["webpackJsonpreact-app-4"]||[]).push([[0],{212:function(e,t,a){e.exports=a(404)},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(205),i=a.n(c),s=a(4),o=a(5),l=a(8),u=a(6),m=a(7),d=a(14),h=a(10),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",{className:""},r.a.createElement(d.c,{to:"/createproject"},"New Project")),r.a.createElement("li",{className:""},r.a.createElement("a",{onClick:this.props.logout,href:"#"},"Log out")),r.a.createElement("li",{className:""},r.a.createElement(d.c,{to:"",className:"btn btn-floating pink lighten-1"},this.props.profile.initials," ")))}}]),t}(r.a.Component);var f=Object(h.b)((function(e){return{profile:e.firebase.profile}}),(function(e){return{logout:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"LOGOUT_SUCCESS"})})).catch((function(t){e({type:"LOGOUT_ERR",err:t})}))}))}}}))(p),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",{className:""},r.a.createElement(d.c,{to:"/signin"},"Log in")),r.a.createElement("li",{className:""},r.a.createElement(d.c,{to:"/signup"},"Sign Up")))}}]),t}(r.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.auth.uid?r.a.createElement(f,null):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3 row"},r.a.createElement("div",{className:"container"},r.a.createElement(d.c,{to:"/",className:"brand-logo"},"Blogger"),e))}}]),t}(r.a.Component);var g=Object(h.b)((function(e){return{auth:e.firebase.auth}}))(b),j=a(405),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.notifications,t=e&&e.map((function(e){var t=e.time.seconds,a=new Date(1e3*t),n=Object(j.a)(a,"Do-MMM-yyyy");return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},n))}));return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t))))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.projects.map((function(e){var t=e.createdAt.seconds||e.createdAt,a=new Date(1e3*t),n=Object(j.a)(a,"Do-MMM-yyyy");return r.a.createElement(d.b,{to:"/project/"+e.id,key:e.id},r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text  text-darken-3"},r.a.createElement("span",{className:"card-title"},e.title),r.a.createElement("p",{className:""},e.content),r.a.createElement("p",{className:""},"Posted by ",e.firstName+" "+e.lastName),r.a.createElement("p",{className:"grey-text"},n))))}));return r.a.createElement("div",{className:"project-list section"},e)}}]),t}(r.a.Component),O=a(20),y=a(29),C=a(30),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"}," ",r.a.createElement(N,{projects:this.props.projects})," "),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(v,{notifications:this.props.notifications})))):r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component);var S=Object(O.d)(Object(h.b)((function(e,t){return{projects:e.firestore.ordered.projects||e.project.projects,users:e.user.users,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),(function(e){return{}})),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w),k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(this.props.auth.uid){var e=this.props.match.params.id;console.log(e);var t=this.props.item;return t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.firstName+t.lastName),r.a.createElement("div",null,t.timestamp.toString())))):r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"still loading"))))}return r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component);var R=Object(O.d)(Object(h.b)((function(e,t){var a=t.match.params.id;console.log(a),console.log(e);var n=e.firestore.data.projects,r=n?n[a]:null;return console.log(r),{item:r,auth:e.firebase.auth}})),Object(y.firestoreConnect)([{collection:"projects"}]))(k),x=a(28),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signin(a.state)},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.auths.uid&&(window.location.href="/")}},{key:"render",value:function(){var e=this,t="";return this.props.auth.authErr&&(t=this.props.auth.authMess.toString()),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:""},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign-in"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Log-in"))),r.a.createElement("div",{className:"center red-text"},r.a.createElement("p",null,t)))}}]),t}(n.Component);var F=Object(h.b)((function(e){return{auth:e.auth,auths:e.firebase.auth}}),(function(e){return{signin:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERR",err:e})}))}}(t))}}}))(A),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signup(a.state)},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.auths.uid&&(window.location.href="/")}},{key:"render",value:function(){var e=this,t="";return this.props.auth.authErr&&(t=this.props.auth.authMess.toString()),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:""},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign-in"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"FirstName"),r.a.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"LastName"),r.a.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign-Up"))),r.a.createElement("div",{className:"center red-text"},r.a.createElement("p",null,t)))}}]),t}(n.Component);var _=Object(h.b)((function(e){return{auth:e.auth,auths:e.firebase.auth}}),(function(e){return{signup:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),s=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){return t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERR",err:e})}))}}(t))}}}))(P),I=a(24),U=function(e){return function(t,a,n){var r=n.getFirebase,c=(0,n.getFirestore)(),i=(r(),a().firebase.profile),s=a().firebase.auth;c.collection("projects").add(Object(I.a)({},e,{firstName:i.firstName,lastName:i.lastName,authorId:s.uid,createdAt:new Date})).then((function(e){return t({type:"CREATE_PROJECT",project:e})})).catch((function(e){return t({type:"CREATE_PROJECT_ERR",err:e})}))}},G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleSubmit=function(e){e.preventDefault(),a.props.create_Project(a.state),a.props.history.push("/")},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:""},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create new Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",name:"title",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{className:"materialize-textarea",name:"content",onChange:function(t){e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(C.a,{to:"/signin"})}}]),t}(n.Component);var L=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{create_Project:function(t){return e(U(t))}}}))(G);var M=function(e){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",component:S}),r.a.createElement(C.b,{path:"/signin",component:F}),r.a.createElement(C.b,{path:"/signup",component:_}),r.a.createElement(C.b,{path:"/createproject",component:L}),r.a.createElement(C.b,{path:"/project/:id",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=function(){return{projects:[{id:1,title:"Egg hunt",content:"go for egg hunt today",creator:"shaun",createdAt:1579634981},{id:2,title:"Egg hunt",content:"go for egg hunt today",creator:"shaun",createdAt:1579634981},{id:3,title:"Egg hunt",content:"go for egg hunt today",creator:"shaun",createdAt:1579634981},{id:4,title:"Egg hunt",content:"go for egg hunt today",creator:"shaun",createdAt:1579634981},{id:5,title:"Egg hunt",content:"go for egg hunt today",creator:"shaun",createdAt:1579634981},{id:6,title:"Egg hunt",content:"go for egg hunt today",creator:"shaun",createdAt:1579634981}],users:[{id:1,email:"jain",password:"jslkd",firstname:"ksldfj",lastname:"lsjf"},{id:2,email:"jain",password:"jslkd",firstname:"ksldfj",lastname:"lsjf"},{id:3,email:"jain",password:"jslkd",firstname:"ksldfj",lastname:"lsjf"},{id:4,email:"jain",password:"jslkd",firstname:"ksldfj",lastname:"lsjf"}]}},z=T();var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;return t.type,e},B={authErr:null};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log(t),Object(I.a)({},e,{authErr:!1,authMess:null});case"LOGIN_ERR":return console.log(t.err),Object(I.a)({},e,{authErr:!0,authMess:t.err});case"LOGOUT_SUCCESS":return console.log(t),Object(I.a)({},e,{authErr:!1,authMess:null});case"LOGOUT_ERR":return console.log(t.err),Object(I.a)({},e,{authErr:!0,authMess:t.err});case"SIGNUP_SUCCESS":return console.log(t),Object(I.a)({},e,{authErr:!1,authMess:null});case"SIGNUP_ERR":return console.log(t.err),Object(I.a)({},e,{authErr:!0,authMess:t.err});default:return e}},W=T();var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log(t.project),e;case"CREATE_PROJECT_ERR":return console.log(t.err),e;default:return e}},H=a(210),K=a(83),V=a(133),X=a.n(V);a(398),a(402);X.a.initializeApp({apiKey:"AIzaSyBSm-L_Eoh718dtHBtq1vwiTxlrkP9j_5E",authDomain:"blogger-react-442aa.firebaseapp.com",databaseURL:"https://blogger-react-442aa.firebaseio.com",projectId:"blogger-react-442aa",storageBucket:"blogger-react-442aa.appspot.com",messagingSenderId:"637308045477",appId:"1:637308045477:web:dd6d3560f5b3c2661ae54c",measurementId:"G-3XV9F20EG1"});var $=X.a,Q=Object(O.c)({auth:J,project:q,user:D,firestore:K.firestoreReducer,firebase:y.firebaseReducer}),Y=Object(O.e)(Q,Object(O.d)(Object(O.a)(H.a.withExtraArgument({getFirebase:y.getFirebase,getFirestore:K.getFirestore})),Object(K.reduxFirestore)($),Object(y.reactReduxFirebase)($,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Y.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(h.a,{store:Y},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}))}},[[212,1,2]]]);
//# sourceMappingURL=main.313f32b7.chunk.js.map