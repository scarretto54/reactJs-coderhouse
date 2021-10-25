(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},59:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(5),a=c.n(n),s=c(43),r=c.n(s),i=(c(52),c(22),c(53),c(9)),o=c(15),l=c(26),j=c(17),b=c(2),d=Object(n.createContext)(),u=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1],o=function(e){return s.some((function(t){return t.id===e}))};return Object(b.jsx)(d.Provider,{value:{products:s,addItem:function(e,t){var c=Object(j.a)(Object(j.a)({},e),{},{quantity:t});if(o(e.id)){var n=s.map((function(c){return c.id===e.id?Object(j.a)(Object(j.a)({},c),{},{quantity:t}):c}));r(n)}else r([].concat(Object(l.a)(s),[c]))},removeProduct:function(e){var t=s.filter((function(t){return t.id!==e}));r(t)},clearCart:function(){r([])},isInCart:o,getQuantity:function(){var e=0;return s.forEach((function(t){e+=t.quantity})),e},getTotal:function(){var e=0;return s.forEach((function(t){e+=t.price*t.quantity})),e},getProduct:function(e){return s.find((function(t){return t.id===e}))}},children:t})},m=d,O=function(e){var t=e.product,c=Object(n.useContext)(m).removeProduct;return Object(b.jsx)("div",{className:"col-md-6 sm-6",children:Object(b.jsxs)("div",{className:"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:[Object(b.jsx)("div",{className:"col d-none d-lg-block",children:Object(b.jsx)("img",{width:"240",height:"250",preserveAspectRatio:"xMidYMid slice",focusable:"false",src:t.img,alt:t.name,className:"ItemImg"})}),Object(b.jsxs)("div",{className:"col p-4 d-flex flex-column position-static",children:[Object(b.jsx)("h5",{className:"card-title",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:t.name})}),Object(b.jsx)("h6",{className:"card-text",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:"Categoria: ".concat(t.catname," ")})}),Object(b.jsx)("h6",{className:"card-text",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:"Precio: ".concat(t.price," ")})}),t.quantity&&Object(b.jsx)("h6",{className:"card-text",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:"Cantidad a comprar: ".concat(t.quantity," ")})}),(null===t||void 0===t?void 0:t.quantity)?Object(b.jsx)("button",{onClick:function(){return c(t.id)},className:"btn btn-outline-danger",children:Object(b.jsx)("strong",{children:"Quitar del carrito"})}):Object(b.jsx)(o.b,{to:"/reactJs-coderhouse/item/".concat(t.id),className:"btn btn-primary",children:Object(b.jsx)("strong",{children:"Quiero !"})})]})]})})},h=function(e){var t=e.products;return 0===t.length?Object(b.jsx)("h2",{children:Object(b.jsx)("strong",{children:"No hay productos disponibles"})}):Object(b.jsx)("div",{className:"container row mb-2",children:t.map((function(e){return Object(b.jsx)(O,{product:e},e.id)}))})},x=a.a.memo(h),g=(c(59),c(12)),p=c(46),f=c(14),A={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/reactJs-coderhouse",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_apiKey:"AIzaSyD0mLygVvLmijDPCVAq0TQzMWtF6-cGk2k",REACT_APP_appId:"1:748077893397:web:5c21d8cae942cdb4510b1c",REACT_APP_authDomain:"quierovino.firebaseapp.com",REACT_APP_measurementId:"G-Z4LX1CRY1M",REACT_APP_messagingSenderId:"748077893397",REACT_APP_projectId:"quierovino",REACT_APP_storageBucket:"quierovino.appspot.com"}).REACT_APP_apikey,authDomain:"quierovino.firebaseapp.com",projectId:"quierovino",storageBucket:"quierovino.appspot.com",messagingSenderId:"748077893397",appId:"1:748077893397:web:5c21d8cae942cdb4510b1c",measurementId:"G-Z4LX1CRY1M"},v=p.a(A),C=Object(f.g)(v),N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(g.h)().categoryid,r=Object(n.useState)(!0),o=Object(i.a)(r,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){var e,t,c;return d(!0),(e="category",t="==",c=s,new Promise((function(n,a){var s=e&&t&&c?Object(f.h)(Object(f.c)(C,"items"),Object(f.i)(e,t,c)):Object(f.c)(C,"items");Object(f.f)(s).then((function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));n(t)})).catch((function(e){a("Error obtendiendo productos ".concat(c?"por categoria":"",": ").concat(e))}))}))).then((function(e){a(e)})).catch((function(e){console.log(e)})).finally((function(){d(!1)})),function(){d(!0),a([])}}),[s]),Object(b.jsx)("div",{className:"container ItemListContainer",children:l?Object(b.jsx)("div",{className:"spinner-border justify-content-center",Style:"width: 5rem; height: 5rem;",Role:"status"}):Object(b.jsx)(x,{products:c,categoryid:s})})},S=a.a.createContext(),y=function(e){var t=e.children,c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),j=l[0],d=l[1];return Object(b.jsx)(S.Provider,{value:{notification:{message:s,severity:j},setNotification:function(e,t){r(t),d(e),setTimeout((function(){r("")}),2e3)}},children:t})},E=S,k=function(e){var t=e.product,c=e.setCount,a=Object(n.useState)(0),s=Object(i.a)(a,2),r=s[0],o=s[1],l=Object(n.useContext)(E).setNotification,j=Object(n.useContext)(m),d=j.addItem,u=j.isInCart,O=j.getProduct;Object(n.useEffect)((function(){if(u(t.id)){var e,c=null===(e=O(t.id))||void 0===e?void 0:e.quantity;o(c)}return function(){o(0)}}),[t,O,u]);return Object(b.jsx)("div",{children:Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{className:"btn-group",Role:"group",children:[Object(b.jsx)("td",{align:"left",children:Object(b.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){r>0&&o(r-1)},children:Object(b.jsx)("strong",{children:"-"})})}),Object(b.jsx)("td",{align:"center",children:Object(b.jsx)("button",{className:"btn btn-outline",Style:{fontSize:"20px"},children:Object(b.jsx)("strong",{children:r})})}),Object(b.jsx)("td",{align:"right",children:Object(b.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){r<t.stock&&o(r+1)},children:Object(b.jsx)("strong",{children:"+"})})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{align:"right",colSpan:"5",children:Object(b.jsx)("button",{className:"btn btn-secondary",onClick:function(){return d(t,r),c(r),void l("success","".concat(t.name," ha sido agregado al carrito"))},children:Object(b.jsx)("strong",{children:"Agregar al carrito"})})})})]})})})},J=a.a.createContext(),w=function(e){var t=e.children,c=Object(n.useState)(),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(b.jsx)(J.Provider,{value:{user:s,login:function(e){r(e.username)},logout:function(){r()}},children:t})},Z=J,B=function(e){var t=e.product,c=e.productsAdded,a=e.addProdFunction,s=Object(n.useState)(0),r=Object(i.a)(s,2),l=r[0],j=r[1],d=Object(n.useContext)(Z).user;return t?Object(b.jsx)("div",{className:"row-md-2 black",children:Object(b.jsxs)("div",{className:"row g-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative",children:[Object(b.jsx)("div",{className:"col-auto d-none d-lg-block",children:Object(b.jsx)("img",{width:"300",height:"400",src:t.img,alt:t.name,className:"card-img-top"})}),Object(b.jsxs)("div",{className:"col p-4 d-flex flex-column position-static",children:[Object(b.jsx)("h5",{className:"card-title",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:t.name})}),Object(b.jsx)("h5",{className:"card-text",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:"Stock: ".concat(t.stock," ")})}),Object(b.jsx)("h6",{className:"card-text",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:"Precio: ".concat(t.price," ")})}),Object(b.jsx)("h6",{className:"card-text",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:"Categoria: ".concat(t.catname," ")})}),Object(b.jsx)("h6",{className:"card-text",Style:"color: black; display:block; ",children:Object(b.jsx)("strong",{children:t.description})}),Object(b.jsx)("div",{className:"row p-4",children:0===l&&d?Object(b.jsx)(k,{Style:"aling: center",product:t,productsAdded:c,addProdFunction:a,setCount:j}):d?Object(b.jsx)(o.b,{to:"/reactJs-coderhouse/cart",children:Object(b.jsx)("button",{className:"btn btn-light",children:Object(b.jsx)("strong",{children:"Ir al carrito"})})}):Object(b.jsx)(o.b,{to:"/login",children:Object(b.jsx)("button",{className:"btn btn-light",children:Object(b.jsx)("strong",{children:"Login"})})})})]})]})}):Object(b.jsx)("h3",{children:"Ese producto ya no existe"})},P=(c(62),function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(g.h)().itemid;return Object(n.useEffect)((function(){return l(!0),function(e){return new Promise((function(t,c){Object(f.e)(Object(f.d)(C,"items",e)).then((function(e){var c=Object(j.a)({id:e.id},e.data());t(c)})).catch((function(e){c("Error obteniendo producto: "+e)}))}))}(d).then((function(e){a(e)})).catch((function(e){console.log(e)})).finally((function(){l(!1)})),function(){l(!0),a(void 0)}}),[d]),Object(b.jsx)("div",{className:"ItemDetailContainer",children:o?Object(b.jsx)("div",{className:"spinner-border justify-content-center",Style:"width: 5rem; height: 5rem;",role:"status"}):Object(b.jsx)(B,{product:c})})}),I=(c(63),function(){var e=Object(n.useContext)(m).getQuantity;return Object(b.jsxs)("div",{row:!0,children:[Object(b.jsx)("span",{x:"30%",y:"30%",fill:"#eceeef",dy:".3em",children:e()}),Object(b.jsx)("img",{src:"data:image/png;base64,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",Style:"display: flex;",className:"CartWidgetIcon",width:"30",height:"27",alt:"icon"})]})}),Q=c.p+"static/media/logo.2ac087e1.png",T=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(Z),r=s.user,l=s.logout,d=Object(n.useContext)(m).getQuantity,u=Object(n.useContext)(E).setNotification,O=Object(g.g)();Object(n.useEffect)((function(){return new Promise((function(e,t){Object(f.f)(Object(f.c)(C,"categories")).then((function(t){var c=t.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));e(c)})).catch((function(e){t("Error obteniendo categorias: ".concat(e))}))})).then((function(e){a(e)})).catch((function(e){console.log(e)})),function(){a()}}),[]);return Object(b.jsxs)("nav",{className:"NavBar navbar  navbar-dark navbar-expand-lg navbar-light fixed-top",id:"mainNav",children:[Object(b.jsx)("div",{className:"Nav-logo container",children:Object(b.jsx)(o.b,{to:"/reactJs-coderhouse/",children:Object(b.jsx)("img",{src:Q,className:"logo",alt:"logo"})})}),Object(b.jsxs)("div",{className:"leftNav container container-fluid d-flex flex-wrap ",children:[Object(b.jsx)("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"animate__animated collapse navbar-collapse",id:"navbarResponsive",children:Object(b.jsx)("ul",{id:"bgNavMenu",className:"navbar-nav ml-auto my-2 my-lg-0",children:null===c||void 0===c?void 0:c.map((function(e){return Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.c,{to:"/reactJs-coderhouse/category/".concat(e.id),children:e.description},e.id)})}))})})]}),Object(b.jsxs)("div",{className:"rightNav container justify-content-evenly",children:[r?Object(b.jsx)("button",{className:"btn btn-lg btn-light",onClick:function(){l(),u("logout","Hasta luego ".concat(r)),O.push("/reactJs-coderhouse/")},children:Object(b.jsx)("strong",{children:"Logout"})}):Object(b.jsx)(o.b,{to:"/login",children:Object(b.jsx)("button",{type:"button",className:"btn btn-lg btn-secondary",children:Object(b.jsx)("strong",{children:"Login"})})}),r&&d()>0&&Object(b.jsx)(o.b,{to:"/reactJs-coderhouse/cart",children:Object(b.jsx)(I,{})})]})]})},D=a.a.forwardRef((function(e,t){var c=Object(n.useState)(!1),a=Object(i.a)(c,2),s=a[0],r=a[1],o={display:s?"none":""},l={display:s?"":"none"},j=function(){r(!s)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:j}})),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:o,children:Object(b.jsx)("button",{className:"btn btn-success",onClick:j,children:Object(b.jsx)("strong",{children:e.buttonLabelShow})})}),Object(b.jsxs)("div",{style:l,children:[Object(b.jsx)("button",{className:"btn btn-secondary",onClick:j,children:Object(b.jsx)("strong",{children:e.buttonLabelHide?e.buttonLabelHide:"Volver"})}),e.children]})]})})),M=(c(64),function(e){var t=e.toggleVisibility,c=e.setContact,a=Object(n.useState)(""),s=Object(i.a)(a,2),r=s[0],o=s[1],l=Object(n.useState)(""),j=Object(i.a)(l,2),d=j[0],u=j[1],m=Object(n.useState)(""),O=Object(i.a)(m,2),h=O[0],x=O[1],g=Object(n.useState)(""),p=Object(i.a)(g,2),f=p[0],A=p[1],v=Object(n.useState)(""),C=Object(i.a)(v,2),N=C[0],S=C[1],y=Object(n.useContext)(E).setNotification;return Object(b.jsxs)("div",{className:"ContactContainer",children:[Object(b.jsx)("div",{children:Object(b.jsx)("strong",{children:"Contacto"})}),Object(b.jsxs)("form",{className:"ContactForm",onSubmit:function(e){(e.preventDefault(),f!==N)?y("success","Los E-mail no son iguales."):(t.current.toggleVisibility(),c({phone:r,address:d,email:f,emailCheck:N,comment:h}),o(""),u(""),A(""),S(""),x(""))},children:[Object(b.jsxs)("label",{className:"LabelContact",children:["Telefono:",Object(b.jsx)("input",{className:"form-control",type:"text",value:r,onChange:function(e){var t=e.target;return o(t.value)},required:!0})]}),Object(b.jsxs)("label",{className:"LabelContact",children:["E-mail:",Object(b.jsx)("input",{className:"form-control",type:"text",value:f,onChange:function(e){var t=e.target;return A(t.value)},required:!0})]}),Object(b.jsxs)("label",{className:"LabelContact",children:[" Confirmar E-mail:",Object(b.jsx)("input",{className:"form-control",type:"text",value:N,onChange:function(e){var t=e.target;return S(t.value)},required:!0})]}),Object(b.jsxs)("label",{className:"LabelContact",children:["Direccion:",Object(b.jsx)("input",{className:"form-control",type:"text",value:d,onChange:function(e){var t=e.target;return u(t.value)},required:!0})]}),Object(b.jsxs)("label",{className:"LabelContact",children:["Comentario:",Object(b.jsx)("input",{className:"form-control",type:"text",value:h,onChange:function(e){var t=e.target;return x(t.value)},required:!0})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",children:Object(b.jsx)("strong",{children:"Confirmar"})})]}),Object(b.jsx)("br",{})]})}),L=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({phone:"",address:"",email:"",emailCheck:"",comment:""}),r=Object(i.a)(s,2),l=r[0],d=r[1],u=Object(n.useContext)(m),O=u.products,h=u.clearCart,p=u.getTotal,A=Object(n.useContext)(Z).user,v=Object(n.useContext)(E).setNotification,N=Object(n.useRef)(),S=Object(g.g)(),y=function(){a(!0),function(e){return new Promise((function(t,c){e=Object(j.a)(Object(j.a)({},e),{},{date:f.a.fromDate(new Date)});var n=Object(f.j)(C),a=[];e.items.forEach((function(t,c){Object(f.e)(Object(f.d)(C,"items",t.id)).then((function(t){t.data().stock>=e.items[c].quantity?n.update(Object(f.d)(C,"items",t.id),{stock:t.data().stock-e.items[c].quantity}):a.push(Object(j.a)(Object(j.a)({},t.data()),{},{id:t.id}))}))})),0===a.length&&Object(f.b)(Object(f.c)(C,"orders"),e).then((function(){n.commit().then((function(){t("Tu pedido se realizo con \xe9xito, en breve nos pondremos en contacto.")}))})).catch((function(e){c("Error al ejecutar la orden: "+e)}))}))}({buyer:A,items:O,total:p(),phone:l.phone,address:l.address,email:l.email,comment:l.comment}).then((function(e){v("success",e),S.push("/reactJs-coderhouse/")})).catch((function(e){v("error",e)})).finally((function(){a(!1),h(),d({phone:"",address:"",email:"",emailCheck:"",comment:""})}))};return Object(b.jsxs)("div",{className:"cart container",children:[Object(b.jsx)("h2",{children:Object(b.jsx)("strong",{children:"Mi Carrito"})}),!c&&O.length>0&&Object(b.jsx)("button",{onClick:function(){return h()},className:"btn btn-outline-danger",children:Object(b.jsx)("strong",{children:"Cancelar compra"})}),!c&&""!==l.phone&&""!==l.address&&""!==l.email&&""!==l.comment&&Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:Object(b.jsxs)("strong",{children:["Telefono: ",l.phone,"   "]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("strong",{children:["Direccion: ",l.address,"   "]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("strong",{children:["E-mail: ",l.email,"   "]})}),Object(b.jsx)("p",{children:Object(b.jsxs)("strong",{children:["Comentario: ",l.comment,"    "]})}),Object(b.jsx)("button",{onClick:function(){return d({phone:"",address:"",email:"",comment:""})},className:"btn btn-outline-danger",children:Object(b.jsx)("strong",{children:"Borrar datos de contacto"})})]}),(!c&&O.length)>0&&Object(b.jsx)(D,{buttonLabelShow:""!==l.phone&&""!==l.address&&""!==l.email&&""!==l.comment?"Editar contacto":"Agregar datos de contacto",ref:N,children:Object(b.jsx)(M,{toggleVisibility:N,setContact:d})}),Object(b.jsx)("br",{}),c?"Procesando Orden":Object(b.jsx)(x,{products:O}),O.length>0&&!c&&Object(b.jsx)("h3",{children:Object(b.jsxs)("strong",{children:["Total: $",p()]})}),Object(b.jsx)(o.b,{to:"/reactJs-coderhouse/",children:Object(b.jsx)("button",{className:"btn btn-info",children:Object(b.jsx)("strong",{children:"Quiero ver mas !"})})}),"   ",!c&&O.length>0&&Object(b.jsx)("button",{onClick:""!==l.phone&&""!==l.address&&""!==l.email&&""!==l.comment?function(){return y()}:function(){return v("success","Cargar datos de contacto")},className:"btn btn-primary",children:Object(b.jsx)("strong",{children:"Confirmar Compra"})})]})},F=function(){var e=Object(n.useContext)(E).notification;return""===e.message?null:Object(b.jsx)("div",{className:"alert alert-secondary",Role:"alert",Style:{color:"error"===e.severity?"red":"grey"},children:e.message})},R=(c(65),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(n.useContext)(Z).login,d=Object(n.useContext)(E).setNotification,u=Object(g.g)();return Object(b.jsxs)("div",{className:"form-signin",children:[Object(b.jsx)("h3",{children:Object(b.jsx)("strong",{children:"Log In"})}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:c,password:o};j(t),d("success","Bienvenido ".concat(t.username)),u.push("/reactJs-coderhouse/")},className:"LoginForm",children:[Object(b.jsxs)("label",{className:"LabelLogin",children:["Usuario",Object(b.jsx)("input",{className:"form-control",type:"text",value:c,onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(b.jsxs)("label",{className:"LabelLogin",children:["Contrase\xf1a",Object(b.jsx)("input",{className:"form-control",type:"password",value:o,onChange:function(e){var t=e.target;return l(t.value)}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"w-100 btn btn-lg btn-primary",children:Object(b.jsx)("strong",{children:"Login"})})]})]})}),Y=c(47),z=["children","user"],G=function(e){var t=e.children,c=e.user,n=Object(Y.a)(e,z);return Object(b.jsx)(g.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){var n=e.location;return c?t:Object(b.jsx)(g.a,{to:{pathname:"/",state:{from:n}}})}}))},q=function(){return Object(b.jsxs)("footer",{className:"App-footer d-flex flex-wrap align-items-center py-3 ",children:[Object(b.jsx)("div",{className:"col-md-4 d-flex justify-content-end",children:Object(b.jsx)("span",{className:"text-muted sm-2",children:Object(b.jsx)("strong",{children:"QuieroVino\xa9 2021 Company."})})}),Object(b.jsx)("div",{className:"container col-md-4 justify-content-center d-flex",children:Object(b.jsxs)("a",{href:"https://wa.me/5491135865454",Style:"color:#ffffff;",target:"",children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-whatsapp",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})})," Whatsapp"]})})]})},U=function(){var e=Object(n.useContext)(Z).user;return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(y,{children:Object(b.jsx)(u,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)("header",{className:"App-header sticky-top py-3",children:Object(b.jsx)(T,{})}),Object(b.jsxs)("main",{className:"App-main",children:[Object(b.jsx)(F,{}),Object(b.jsxs)(g.d,{children:[Object(b.jsx)(g.b,{exact:!0,path:"/reactJs-coderhouse/",children:Object(b.jsx)(N,{})}),Object(b.jsx)(g.b,{path:"/reactJs-coderhouse/category/:categoryid",children:Object(b.jsx)(N,{})}),Object(b.jsx)(g.b,{path:"/reactJs-coderhouse/item/:itemid",children:Object(b.jsx)(P,{})}),Object(b.jsx)(G,{path:"/reactJs-coderhouse/cart",user:e,children:Object(b.jsx)(L,{})}),Object(b.jsx)(g.b,{path:"/login",children:Object(b.jsx)(R,{})})]})]}),Object(b.jsx)(q,{})]})})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{children:Object(b.jsx)(U,{})})}),document.getElementById("root")),H()}},[[66,1,2]]]);
//# sourceMappingURL=main.9ce5b750.chunk.js.map