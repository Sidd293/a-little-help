(this.webpackJsonpa_little_help=this.webpackJsonpa_little_help||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(6),s=n.n(c),i=n(14),o=n.n(i),r=(n(20),n(8));n(21),n(22);var u=function(e){var t=e.name,n=e.amount,c=(e.uid,e.status),s=(e.user,e.url),i=e.message,o=1==c;return Object(a.jsx)("div",{className:"card",children:o?Object(a.jsxs)("p",{className:"mcontent",children:[Object(a.jsxs)("h3",{children:["   ",Object(a.jsx)("img",{src:s,width:"40px",height:"40px"})," ",t," has donated"]}),Object(a.jsxs)("h3",{children:["  the amount of  Rs.",n]}),Object(a.jsxs)("h3",{children:['"',i,'"']})]}):Object(a.jsxs)("div",{children:[t," 's donation have not been verified yet"]})})},j=n(10),l=j.a.initializeApp({apiKey:"AIzaSyBPwUHb_CAnpR7LbWDRiRjsXgHe_Mgd_iE",authDomain:"a-little-help-b3dc8.firebaseapp.com",projectId:"a-little-help-b3dc8",storageBucket:"a-little-help-b3dc8.appspot.com",messagingSenderId:"578444045703",appId:"1:578444045703:web:306fa443bb35b8788db722",measurementId:"G-QRKXYCGXKZ"}).firestore(),d=j.a.auth(),h=new j.a.auth.GoogleAuthProvider,b=l;var O=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)("0"),o=Object(r.a)(i,2),j=o[0],l=o[1],O=Object(c.useState)(""),p=Object(r.a)(O,2),m=(p[0],p[1],Object(c.useState)("")),f=Object(r.a)(m,2),g=f[0],x=f[1],v=Object(c.useState)(""),S=Object(r.a)(v,2),I=S[0],C=S[1],y=Object(c.useState)(""),A=Object(r.a)(y,2),R=A[0],E=A[1],w=Object(c.useState)([]),L=Object(r.a)(w,2),F=L[0],H=L[1],T=Object(c.useState)(""),B=Object(r.a)(T,2),D=B[0],P=B[1],_=Object(c.useState)(""),k=Object(r.a)(_,2),M=k[0],N=k[1],U=Object(c.useState)(""),G=Object(r.a)(U,2),K=G[0],X=G[1];return Object(c.useEffect)((function(){b.collection("data").onSnapshot((function(e){H(e.docs.map((function(e){return e.data()})))}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{classsName:"header",children:["  ",Object(a.jsx)("img",{src:K,width:"30px",height:"30px"})," ",R," "]}),Object(a.jsxs)("div",{className:"App",children:[R?Object(a.jsxs)("h6",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:" LITTLE HELP FROM US "})}),Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:" TO THE FAMILY OF LATE DHARMESH PATHAK SIR "})}),Object(a.jsxs)("div",{children:[" welcome ",R]}),n?Object(a.jsx)("h1",{children:"thankyou for your donation as soon as the donation gets verified you can see that on this page"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{placeholder:"Contact no.",value:D,onChange:function(e){return P(e.target.value)}}),Object(a.jsx)("input",{placeholder:"Amount Donated",type:"Number",min:"0",value:g,onChange:function(e){return x(e.target.value)}}),Object(a.jsx)("input",{placeholder:"Unique paytm ORDER ID",value:I,onChange:function(e){return C(e.target.value)}}),Object(a.jsx)("input",{placeholder:"Message",value:M,onChange:function(e){return N(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){b.collection("data").add({name:R,amount:g,uid:I,status:j,message:M,url:K}),s(!0),l(0),x(""),N(""),C(""),P("")},children:"submit"})]}),F.map((function(e){return Object(a.jsx)(u,{name:e.name,amount:e.amount,uid:e.uid,status:e.status,user:R,url:e.url,message:e.message})}))]}):Object(a.jsx)("button",{onClick:function(){d.signInWithPopup(h).then((function(e){console.log(e),E(e.additionalUserInfo.profile.name),X(e.additionalUserInfo.profile.picture)}))},children:"login"}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"this is a collaborative effort of every single student of GL Bajaj SEC -H "}),Object(a.jsx)("h6",{children:"website designed by Siddhartha Bjapai - contact (+917398438689)"}),Object(a.jsx)("h6",{children:"Bursar(funds collector)  - Shivam Rai"})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()}},[[27,1,2]]]);
//# sourceMappingURL=main.ef5c7c6b.chunk.js.map