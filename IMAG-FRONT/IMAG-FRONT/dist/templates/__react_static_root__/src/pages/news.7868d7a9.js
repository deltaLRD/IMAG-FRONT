(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{87:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),l=n(187),r=n(191),o=n(24),c=Object(l.a)((function(e){return{root:{width:"1140px",margin:"0 auto",padding:"20px"},news:{padding:"20px",display:"flex",flexDirection:"column","& li":{lineHeight:"2",fontSize:"22px"}}}}));t.default=function(){var e=c(),t=Object(o.useRouteData)().detail_news.news;return a.a.createElement("div",{className:e.root},a.a.createElement("div",{className:e.news},a.a.createElement("div",null,a.a.createElement(r.a,{gutterBottom:!0,variant:"h4",style:{color:"#333333",padding:"20px"}},"News")),a.a.createElement("ul",null,t.map((function(e,t){return a.a.createElement("li",{key:t,style:{display:"inline-block"}},a.a.createElement("div",{style:{display:"inline-block",backgroundColor:"#f5d2b3",borderRadius:"10px 0px",width:"70px",fontSize:"12px",lineHeight:"25px",marginBottom:"13px",textAlign:"center"}},e.dat),a.a.createElement("div",{style:{display:"inline-block",textAlign:"center",height:"100%"}},a.a.createElement("a",{style:{marginLeft:"20px",color:"#3b3b3b",fontSize:"16px",marginBottom:"10px",textAlign:"center"},href:"/news/info/"+e.id},e.title)))})))))}}}]);