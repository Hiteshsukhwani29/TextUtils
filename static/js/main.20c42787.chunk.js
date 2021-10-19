(this["webpackJsonpmy-firstapp"]=this["webpackJsonpmy-firstapp"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand p-3",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check p-3 form-switch text-".concat("light"===e.mode?"Dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckChecked"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:e.Text})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"container",style:{color:"dark"===e.mode?"white":"Black"},children:Object(o.jsxs)("div",{className:"mb-3 mt-2",children:[Object(o.jsx)("h3",{children:e.Heading}),Object(o.jsx)("textarea",{className:"form-control",id:"myBox",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#292b2c":"white",color:"dark"===e.mode?"white":"Black"},rows:"8"}),Object(o.jsx)("button",{className:"btn btn-primary my-3",onClick:function(){var t=n.toUpperCase();s(t),e.showalert("Converted to Uppercase","success")},children:"Convert To Upercase"}),Object(o.jsx)("button",{className:"btn btn-primary my-3 mx-3",onClick:function(){var t=n.toLowerCase();s(t),e.showalert("Converted to Lowercase","success")},children:"Convert To Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary my-3 ",onClick:function(){s(""),e.showalert("Text Clear","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary my-3 mx-3",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showalert("Copied to clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary my-3",onClick:function(){s(n.replaceAll(/\s/g,"")),e.showalert("Extra space removed","success")},children:"Remove Extra Space"})]})}),Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"Black"},children:[Object(o.jsx)("h1",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," Word ",n.length," Character"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes"]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter Something in the textbox above to preview it"})]})]})}var d=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type}),": ",e.alert.message]})};var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Enable Dark Mode"),r=Object(l.a)(s,2),j=r[0],h=r[1],m=Object(c.useState)("null"),u=Object(l.a)(m,2),x=u[0],p=u[1],g=function(e,t){p({message:e,type:t}),setTimeout((function(){p(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",about:"About us",mode:a,toggleMode:function(){"light"===a?(n("dark"),h("Disable Dark Mode"),document.body.style.backgroundColor="#292b2c",g("Dark mode has been enabled","success")):(n("light"),h("Enable Dark Mode"),document.body.style.backgroundColor="white",g("Light mode has been enabled","success"))},Text:j}),Object(o.jsx)(d,{alert:x}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{Heading:"Enter the text to analyze ",showalert:g,mode:a})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.20c42787.chunk.js.map