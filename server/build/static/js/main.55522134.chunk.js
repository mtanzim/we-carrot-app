(window.webpackJsonpwe_carrot_app=window.webpackJsonpwe_carrot_app||[]).push([[0],{16:function(e,t,a){e.exports={footer:"footer_footer__2oW47",title:"footer_title__piRrt",description:"footer_description__NPmPK",footerlink:"footer_footerlink__aH3y3"}},21:function(e,t,a){e.exports={skipLink:"navbar_skipLink__3TdC_"}},25:function(e,t,a){e.exports=a(50)},30:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=a(5),l=a(56),i=a(55),u=(a(30),a(24)),m=a(53),d=function(e){var t=e.component,a=e.userLogged,n=Object(u.a)(e,["component","userLogged"]);return r.a.createElement(i.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},n,e)):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},p=a(52),f=a(21),g=a.n(f),b=function(e){var t=e.userLogged,a=e.logOut;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.a.skipLink},r.a.createElement("a",{href:"#mainContent"},"Skip to Main Content")),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light border-bottom justify-content-between"},r.a.createElement(p.a,{className:"navbar-brand",to:"/"},"Nulleiemer"),r.a.createElement("div",{className:"navbar-nav"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"mr-2",to:"/dashboard"},"Dashboard"),r.a.createElement(p.a,{className:"mr-2",to:"/account"},"Account"),r.a.createElement(p.a,{className:"mr-2",to:"/guide"},"Guide")):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"mr-2",to:"/maps"},"List"),r.a.createElement(p.a,{className:"mr-2",to:"/about"},"About")),r.a.createElement(p.a,{className:"mr-2",to:t?"/logout":"/login",onClick:t?a:null},t?"Logout":"Business Login"))))},h={ERROR_MESSAGE:{},ENDPOINT:"https://5d738429214da600148f58b0.mockapi.io/api/v1/"},E=h,v=function(e){var t=e.userLogged,a=e.setUserLogged,o=Object(n.useState)(""),c=Object(s.a)(o,2),l=c[0],i=c[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],f=d[1];return t?r.a.createElement(m.a,{push:!0,to:"/dashboard"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"ml-2"},"Login"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("input",{className:"ml-4",type:"text",name:"username",placeholder:"Username",value:l,onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{className:"ml-4",type:"password",name:"username",placeholder:"Password",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{className:"btn btn-primary",type:"button",value:"Sign in",onClick:function(){if(""!==l&&null!==l){var e=null;switch(l){case"bgmeister":e=1;break;case"gyaya":e=2;break;case"futura":e=3;break;default:return alert("Username or password not found"),null}fetch("".concat(E.ENDPOINT,"/businesses/").concat(e),{method:"GET",mode:"cors",cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("business",JSON.stringify(e)),a(!0)}).catch(function(e){return alert(e)})}else alert("Please input a username")}})))},y=a(22),O=a(11),N=a(12),w=a(14),j=a(13),k=a(15),L=function(e){var t=e.title,a=e.content;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},a)))},_=a(23),S=a.n(_),P={data:[{type:"bar",x:[],y:[]}],layout:{width:1200,height:600,updatemenus:[{buttons:[{args:["type","bar"],label:"Bar",method:"restyle"},{args:["type","line"],label:"Line",method:"restyle"}],direction:"right",pad:{r:10,t:10},showactive:!0,type:"buttons"}],xaxis:{autorange:!0,rangeselector:{buttons:[{count:1,label:"1m",step:"month",stepmode:"backward"},{step:"all"}]},type:"date"},yaxis:{title:"Waste [kg]"}},frames:[],config:{}};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(w.a)(this,Object(j.a)(t).call(this,e))).state=P,a}return Object(k.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={bgmeister:"wastes1",gyaya:"wastes2",futura:"wastes3"};console.log(this.props.business.username),console.log(this.props.business.name),console.log(t[this.props.business.username]),fetch("".concat(E.ENDPOINT).concat(t[this.props.business.username])).then(function(e){return e.json()}).then(function(t){return e.setState({layout:x({},e.state.layout,{title:e.props.business.name}),data:[{type:"line",x:t.map(function(e){return e.timestamp}),y:t.map(function(e){return e.waste_kg})}]})})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ml-2 mt-2 mr-2 mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement(L,{title:"Badge",content:"image"})),r.a.createElement("div",{className:"col-md"},r.a.createElement(L,{title:"Score",content:"score "}))),r.a.createElement("div",{className:"ml-2 mt-2 mr-2 mb-2"},r.a.createElement(S.a,{data:this.state.data,layout:this.state.layout,frames:this.state.frames,config:this.state.config,onInitialized:function(t){return e.setState(t)},onUpdate:function(t){return e.setState(t)}}))))}}]),t}(r.a.Component),I=a(16),M=a.n(I);function A(){return r.a.createElement("footer",{className:M.a.footer},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-left"},r.a.createElement("div",{className:"col-8 col-md-5"},r.a.createElement("h5",{className:M.a.title},"Nulleimer"),r.a.createElement("p",{className:M.a.description},"Track waste, save food!")))))}var F=a(17),T={width:900,height:600},U=function(e){function t(e){var a;return Object(O.a)(this,t),console.log(e),(a=Object(w.a)(this,Object(j.a)(t).call(this,e))).displayMarkers=function(){return a.props.businesses.map(function(e,t){return r.a.createElement(F.Marker,{key:t,id:t,position:{lat:e.latitude,lng:e.longitude},onClick:function(){return console.log("You clicked me!")}})})},a}return Object(k.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement(F.Map,{style:T,initialCenter:{lat:this.props.businesses[0].latitude,lng:this.props.businesses[0].longitude},google:this.props.google,zoom:12},this.displayMarkers())}}]),t}(n.Component),W=Object(F.GoogleApiWrapper)({apiKey:"AIzaSyCI2r1FCVmUEMlMeMzjuu6ia1O-v83tRDc"})(U);var R=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)(function(){fetch("".concat(E.ENDPOINT,"/businesses")).then(function(e){return e.json()}).then(function(e){return c(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 ml-2 mt-2 mr-2 mb-2"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"List"),r.a.createElement("ul",null,o&&o.map(function(e,t){return r.a.createElement("li",{key:t},e.name)}))))),r.a.createElement("div",{className:"col-md ml-2 mt-2 mr-2 mb-2"},r.a.createElement("div",{className:""},o&&r.a.createElement(W,{businesses:o})))))};var B=function(e){var t=e.title;return r.a.createElement("h2",null,t)},G=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)(function(){null!==localStorage.getItem("business")&&o(!0)},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{userLogged:a,logOut:function(e){e.preventDefault(),localStorage.removeItem("business"),o(!1)}}),r.a.createElement("div",{className:"app-container container"},r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(B,Object.assign({},e,{title:"Home"}))}}),r.a.createElement(i.a,{path:"/login",render:function(e){return r.a.createElement(v,Object.assign({},e,{userLogged:a,setUserLogged:o}))}}),r.a.createElement(i.a,{path:"/maps",component:R}),r.a.createElement(i.a,{path:"/about",render:function(e){return r.a.createElement(B,Object.assign({},e,{title:"About"}))}}),r.a.createElement(d,{path:"/dashboard",component:D,userLogged:a,business:JSON.parse(localStorage.getItem("business"))}),r.a.createElement(d,{path:"/guide",component:B,userLogged:a,title:"Guide"}),r.a.createElement(d,{path:"/account",component:B,userLogged:a,title:"Account"}))),r.a.createElement(A,null))},z=a(54),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(49);c.a.render(r.a.createElement(z.a,null,r.a.createElement(G,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");J?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):H(e)})}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.55522134.chunk.js.map