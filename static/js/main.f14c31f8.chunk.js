(this["webpackJsonpcovid19-broadcast"]=this["webpackJsonpcovid19-broadcast"]||[]).push([[0],{106:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(77),r=a.n(c),o=(a(98),a(78)),s=a(79),i=a(90),m=a(88),u=(a(99),a(3)),d=a.n(u),f=a(19),p=a(7),h=a(2);function b(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0"}var g=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{className:"card-text"},b(Number(e.value))),l.a.createElement("p",{className:"card-text"},e.title)))},v=a(214),E="https://corona.lmao.ninja/v2",y=E+"/all",C=E+"/countries",N=E+"/historical?lastdays=all",j=E+"/historical/all?lastdays=all",x=E+"/states",O="https://covid19.mathdro.id/api/daily",k=function(e){var t=Object(n.useState)({}),a=Object(h.a)(t,2),c=a[0],r=a[1],o=Object(v.a)().t;return Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(y);case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,r(Object(f.a)({},n)),e.updated(n.updated),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"col col-sm-6 col-lg-4"},l.a.createElement(g,{title:o("confirmed"),value:c.cases})),l.a.createElement("div",{className:"col col-sm-6 col-lg-4"},l.a.createElement(g,{title:o("deaths"),value:c.deaths})),l.a.createElement("div",{className:"col col-sm-6 col-lg-4 mx-sm-auto mt-sm-3 mt-lg-0"},l.a.createElement(g,{title:o("recovered"),value:c.recovered})))},w=a(4),S=(a(106),function(){var e=localStorage.getItem("mode"),t={backgroundColor:"light-mode"===e?"#FFF":"#243447",color:"light-mode"===e?"#000":"#FFF"},a=Object(v.a)().t,c=Object(n.useState)([]),r=Object(h.a)(c,2),o=r[0],s=r[1],i=Object(n.useState)([]),m=Object(h.a)(i,2),u=m[0],f=m[1],g=Object(n.useState)(5),E=Object(h.a)(g,2),y=E[0],N=E[1],j=Object(n.useState)(1),x=Object(h.a)(j,2),O=x[0],k=x[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(C);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(Object(w.a)(a)),f(Object(w.a)(a)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=function(e,t){var a=Object(w.a)(o);a.sort((function(e,a){return e[t]>a[t]?1:-1})),f(Object(w.a)(a))},F=function(e,t){var a=Object(w.a)(o);a.sort((function(e,a){return e[t]<a[t]?1:-1})),f(Object(w.a)(a))},D=1!==O,I=Math.ceil(u.length/y),A=O!==I;return l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{className:"d-flex  flex-column flex-sm-row justify-content-between mb-3"},l.a.createElement("div",{className:"d-inline-flex"},l.a.createElement("span",{className:"mt-1"},a("show")),l.a.createElement("select",{className:"form-control-sm mx-2 view-rows",onChange:function(e){return function(e){N(Number(e.target.value)),k(1)}(e)},style:t},l.a.createElement("option",{value:"5",selected:!0},"5"),l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"50"},"50"),l.a.createElement("option",{value:"100"},"100")),l.a.createElement("span",{className:"mt-1"},a("records"))),l.a.createElement("div",{className:"input-group search-bar mt-2 mt-sm-0"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:a("searchCountry"),onChange:function(e){return function(e){var t=o.filter((function(t){return t.country.toLowerCase().startsWith(e.target.value.toLowerCase())}));f(Object(w.a)(t)),k(1)}(e)},style:t}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("span",{className:"input-group-text"},l.a.createElement("i",{className:"fa fa-search",onChange:!0}))))),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-borderless "+(e?"border":""),style:t},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,a("country"),l.a.createElement("div",{className:"d-inline-block d-inline"},l.a.createElement("span",{className:"ml-1 fa fa-arrow-up",onClick:function(e){return S(0,"country")}}),l.a.createElement("span",{className:"fa fa-arrow-down",onClick:function(e){return F(0,"country")}}))),l.a.createElement("th",null,a("confirmed"),l.a.createElement("div",{className:"d-inline-block d-inline"},l.a.createElement("span",{className:"ml-1 fa fa-arrow-up",onClick:function(e){return S(0,"cases")}}),l.a.createElement("span",{className:"fa fa-arrow-down",onClick:function(e){return F(0,"cases")}}))),l.a.createElement("th",null,a("deaths"),l.a.createElement("div",{className:"d-inline-block d-inline"},l.a.createElement("span",{className:"ml-1 fa fa-arrow-up",onClick:function(e){return S(0,"deaths")}}),l.a.createElement("span",{className:"fa fa-arrow-down",onClick:function(e){return F(0,"deaths")}}))),l.a.createElement("th",null,a("recovered"),l.a.createElement("div",{className:"d-inline-block d-inline"},l.a.createElement("span",{className:"ml-1 fa fa-arrow-up",onClick:function(e){return S(0,"recovered")}}),l.a.createElement("span",{className:"fa fa-arrow-down",onClick:function(e){return F(0,"recovered")}}))),l.a.createElement("th",null,a("todayCases"),l.a.createElement("div",{className:"d-inline-block d-inline"},l.a.createElement("span",{className:"ml-1 fa fa-arrow-up ",onClick:function(e){return S(0,"todayCases")}}),l.a.createElement("span",{className:"fa fa-arrow-down",onClick:function(e){return F(0,"todayCases")}}))),l.a.createElement("th",null,a("todayDeaths"),l.a.createElement("div",{className:"d-inline-block d-inline"},l.a.createElement("span",{className:"ml-1 fa fa-arrow-up",onClick:function(e){return S(0,"todayDeaths")}}),l.a.createElement("span",{className:"fa fa-arrow-down",onClick:function(e){return F(0,"todayDeaths")}}))))),function(){if(!u.length)return l.a.createElement("tr",null,l.a.createElement("td",null,a("noResults")));var e=u.slice((O-1)*y,O*y),t=(O-1)*y+1;return e.map((function(e,a){return l.a.createElement("tbody",{key:e.country},l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t+a),l.a.createElement("td",null,l.a.createElement("img",{src:e.countryInfo.flag,alt:"",width:"30px",height:"20px",className:"mr-2 d-none d-sm-inline"}),e.country),l.a.createElement("td",null,b(e.cases)),l.a.createElement("td",null,b(e.deaths)),l.a.createElement("td",null,b(e.recovered)),l.a.createElement("td",null,b(e.todayCases)),l.a.createElement("td",null,b(e.todayDeaths))))}))}())),u.length?l.a.createElement("nav",{"aria-label":"Page navigation"},l.a.createElement("ul",{className:"mt-3 mt-sm-0 pagination pagination-sm justify-content-center justify-content-sm-end flex-wrap"},l.a.createElement("li",{className:"page-item"+(D?"":" disabled")},l.a.createElement("div",{className:"page-link "+("light-mode"===e?"light-pagination":"dark-pagination"),onClick:function(){k((function(e){return e-1}))}},a("prev"))),function(){for(var t=[],a=1;a<=Math.ceil(u.length/y);a++)t.push(a);var n=O,c=t.length;return c-n<3&&(n=Math.max(1,c-3)),(t=t.slice(n-1,c)).length>6&&t.splice(4,t.length-6,"..."),n>10&&t.splice(0,0,1,"..."),t.map((function(t,a){return l.a.createElement("li",{className:"page-item"+("..."===t?" disabled":""),key:a},l.a.createElement("div",{className:"page-link "+("light-mode"===e?"light-pagination":"dark-pagination")+(O===t?" active":""),id:t,onClick:function(e){k(Number(e.target.id))}},t))}))}(),l.a.createElement("li",{className:"page-item"+(A?"":" disabled")},l.a.createElement("div",{className:"page-link "+("light-mode"===e?"light-pagination":"dark-pagination"),onClick:function(){k((function(e){return e+1}))}},a("next"))))):null)}),F=a(17),D=function(){var e=localStorage.getItem("mode"),t={backgroundColor:"light-mode"===e?"#FFF":"#243447",color:"light-mode"===e?"#000":"#FFF",width:"50vh"},a=Object(n.useState)([]),c=Object(h.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)("USA"),i=Object(h.a)(s,2),m=i[0],u=i[1],f=Object(n.useState)(null),g=Object(h.a)(f,2),E=g[0],y=g[1],C=Object(v.a)().t;Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(N);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(Object(w.a)(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var j=function(e){var t=[];return Object.keys(e).forEach((function(a){t.push({x:a,y:e[a]})})),t},x=r.find((function(e){return e.country===m&&e.province===E})),O={};x&&(O={labels:Object.keys(x.timeline.cases),datasets:[{label:C("confirmed"),data:j(x.timeline.cases),backgroundColor:"#00BFFF"},{label:C("deaths"),data:j(x.timeline.deaths),backgroundColor:"#FF6347"},{label:C("recovered"),data:j(x.timeline.recovered),backgroundColor:"#00FF00"}]});var k={legend:{labels:{fontColor:t.color}},tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label;return a+": "+b(e.yLabel)}}},scales:{xAxes:[{ticks:{fontColor:t.color}}],yAxes:[{ticks:{fontColor:t.color}}]},responsive:!0,maintainAspectRatio:!1};return l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{className:"d-flex flex-column flex-sm-row justify-content-between"},l.a.createElement("h5",null,C("timeline")),l.a.createElement("select",{className:"form-control-sm mb-3",onChange:function(e){return function(e){var t=e.target.value.split(", "),a=Object(h.a)(t,2),n=a[0],l=a[1];l||(l=null),u(n),y(l)}(e)},style:t},r.map((function(e){return e.country+(e.province?", "+e.province:"")})).map((function(e){return"USA"===e?l.a.createElement("option",{value:e,key:e,selected:!0},e):l.a.createElement("option",{value:e,key:e},e)})))),l.a.createElement("div",{className:e?"light-mode card":"dark-mode card",style:{width:"100%"}},l.a.createElement(F.a,{data:O,height:400,options:k})))},I=a(46),A=a(213),B=a(89),L=function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),s=Object(h.a)(o,2),i=s[0],m=s[1],u=Object(v.a)().t;Object(n.useEffect)((function(){function t(){return(t=Object(p.a)(d.a.mark((function t(){var a,n,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(x);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,l=n.find((function(e){return"New York"==e.state})),r(Object(w.a)(n)),e.changed(Object(f.a)({},l));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var b=c.map((function(t){return t[e.target]})),g=Object(A.a)().domain([Math.min.apply(Math,Object(w.a)(b)),Math.max.apply(Math,Object(w.a)(b))]).range(["#ffedea","#ff5233"]);return l.a.createElement("div",null,l.a.createElement(I.ComposableMap,{"data-tip":"",projection:"geoAlbersUsa"},l.a.createElement(I.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"},(function(t){return t.geographies.map((function(t){var a=c.find((function(e){return e.state==t.properties.name}));return l.a.createElement(I.Geography,{key:t.rsmKey,geography:t,onClick:function(){return function(){return t.properties.name}},fill:a?g(a.cases):"#EEE",stroke:"#000",onMouseEnter:function(n){return function(t,a,n){var l=c.find((function(e){return e.state===a.name}));return e.changed(Object(f.a)({},l)),n?m("".concat(n.state,": ").concat(n[e.target]," ").concat(u(e.content))):""}(0,t.properties,a)},onMouseLeave:function(){return function(){var t=c.find((function(e){return"New York"===e.state}));e.changed(Object(f.a)({},t)),m("")}()},style:{default:{outline:"none"},hover:{outline:"none"},pressed:{outline:"none"}}})}))}))),l.a.createElement(B.a,null,i))},T=function(){var e=localStorage.getItem("mode"),t={color:"light-mode"===e?"#FFB347":"#C51F5D",fontColor:"light-mode"===e?"text-dark":"text-light"},a=Object(v.a)().t,c=Object(n.useState)({updated:0,state:"",confirmed:0,deaths:0,active:0,todayCases:0,todayDeaths:0}),r=Object(h.a)(c,2),o=r[0],s=r[1],i=new Date(o.updated);return l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",{className:"mb-4"},a("USStatesCases")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"col-md-7",style:{width:"100%"}},l.a.createElement(L,{target:"cases",content:"confirmedCases",changed:s})),l.a.createElement("div",{className:"col-md-5",style:{width:"100%"}},l.a.createElement("h5",{className:"font-weight-bold",style:t},o.state),l.a.createElement("div",{className:"form-group form-group-md row"},l.a.createElement("label",{for:"confirmed",className:"col-5 col-form-label"},a("confirmed")+": "),l.a.createElement("div",{className:"col-7"},l.a.createElement("input",{type:"text",className:"form-control-plaintext "+t.fontColor,id:"confirmed",value:b(o.cases)}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{for:"deaths",className:"col-5 col-form-label"},a("deaths")+": "),l.a.createElement("div",{className:"col-7"},l.a.createElement("input",{type:"text",className:"form-control-plaintext "+t.fontColor,id:"deaths",value:b(o.deaths)}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{for:"active",className:"col-5 col-form-label"},a("active")+": "),l.a.createElement("div",{className:"col-7"},l.a.createElement("input",{type:"text",className:"form-control-plaintext "+t.fontColor,id:"active",value:b(o.active)}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{for:"todayCases",className:"col-5 col-form-label"},a("todayCases")+": "),l.a.createElement("div",{className:"col-7"},l.a.createElement("input",{type:"text",className:"form-control-plaintext "+t.fontColor,id:"todayCases",value:b(o.todayCases)}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{for:"todayDeaths",className:"col-5 col-form-label"},a("todayDeaths")+": "),l.a.createElement("div",{className:"col-7"},l.a.createElement("input",{type:"text",className:"form-control-plaintext "+t.fontColor,id:"todayDeaths",value:b(o.todayDeaths)}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{for:"updated",className:"col-5 col-form-label"},a("updated")+": "),l.a.createElement("div",{className:"col-7"},l.a.createElement("input",{type:"text",className:"form-control-plaintext "+t.fontColor,id:"updated",value:i.toLocaleString()})))))))},U=function(){var e=localStorage.getItem("mode"),t={fontColor:"light-mode"===e?"#000":"#FFF"},a=Object(v.a)().t,c=Object(n.useState)([]),r=Object(h.a)(c,2),o=r[0],s=r[1],i=Object(n.useState)([]),m=Object(h.a)(i,2),u=m[0],f=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,f(Object(w.a)(a)),s(Object(w.a)(a));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g={};o.length&&(g={labels:function(){var e=[];return o.forEach((function(t){e.push(t.reportDate)})),e}(),datasets:[{label:"confirmed",data:function(e){var t=[];return o.forEach((function(a){t.push({x:new Date(a.reportDate.split("-").join("-")).getTime(),y:a[e]})})),t}("deltaConfirmed"),backgroundColor:"light-mode"===e?"#FFB347":"#C51F5D"}]});var E={scales:{xAxes:[{ticks:{fontColor:t.fontColor,callback:function(e){return new Date(e).toLocaleDateString("en-US",{month:"short",year:"numeric"})}}}],yAxes:[{ticks:{fontColor:t.fontColor}}]},tooltips:{callbacks:{label:function(e,t){var n=t.labels[e.index];return n+": "+b(e.yLabel)+" "+a("cases")}}},legend:{display:!1},responsive:!0,maintainAspectRatio:!1};return l.a.createElement("div",{className:"mt-5"},l.a.createElement("div",{className:"d-flex  flex-column flex-sm-row justify-content-between mb-3"},l.a.createElement("h5",null,a("globalDailyCases")),l.a.createElement("div",null,l.a.createElement("input",{type:"range",className:"form-control-range",min:0,max:u.length,onChange:function(e){return function(e){var t=Object(w.a)(u),a=Number(e.target.value);t.splice(a,u.length-a),s(Object(w.a)(t))}(e)},defaultValue:u.length,style:{backgroundColor:"red"}}))),l.a.createElement("div",{className:e+" card",style:{width:"100%"}},l.a.createElement(F.d,{data:g,height:400,options:E})))},M=a(56),R=a(32),V=a(85),P={en:{translation:a(86)},vn:{translation:a(87)}};M.a.use(V.a).use(R.e).init({resources:P,lng:"en",fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});var J=M.a,G={en:{name:"English"},vn:{name:"Ti\u1ebfng Vi\u1ec7t"}},W=(a(202),function(){var e=Object(n.useState)(localStorage.getItem("mode")||"light-mode"),t=Object(h.a)(e,2),a=t[0],c=t[1];localStorage.setItem("mode",a),document.querySelector("body").className=a;var r={backgroundColor:"light-mode"===a?"#FFB347":"#C51F5D",color:"light-mode"===a?"#000":"#FFF"},o=Object(n.useState)(localStorage.getItem("language")||"en"),s=Object(h.a)(o,2),i=s[0],m=s[1];J.changeLanguage(i);return l.a.createElement("header",{className:"container d-flex flex-column flex-sm-row pt-2 align-items-center justify-content-sm-between"},l.a.createElement("div",null,l.a.createElement("p",{id:"logo",className:"mr-auto"},"COVID-19 BROADCAST")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("select",{onChange:function(e){return function(e){m(e.target.value),localStorage.setItem("language",e.target.value),J.changeLanguage(e.target.value)}(e)},value:i,className:"form-control-sm m-0 "+a},Object.keys(G).map((function(e){return l.a.createElement("option",{key:e,value:e},G[e].name)}))),l.a.createElement("button",{className:"btn ml-2 btn-sm rounded-circle",style:r,onClick:function(e){c((function(e){var t="light-mode";return"light-mode"===e&&(t="dark-mode"),document.querySelector("body").className=t,localStorage.setItem("mode",t),t}))}},l.a.createElement("i",{className:"light-mode"===a?"fa fa-sun-o":"fa fa-moon-o"}))))}),q=(a(203),function(e){var t=Object(v.a)().t;return l.a.createElement("div",{className:"mt-5 footer"},l.a.createElement("p",{className:"mb-1 text-center font-weight-lighter"},t("lastUpdated")," ",l.a.createElement("span",null,new Date(e.updated).toLocaleString())),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("p",{className:"mb-1"},t("providedBy")," ",l.a.createElement("a",{href:"https://disease.sh/",target:"_blank"},"NOVEL COVID API")),l.a.createElement("p",{className:"mx-2"},"|"),l.a.createElement("p",{className:"m-0"},t("powerBy")," ",l.a.createElement("a",{href:"https://github.com/InterviewCandies/Covid19-Broadcast",target:"_blank"},"Vo Quoc Thang"))))}),K=function(e){return l.a.createElement("div",null,l.a.createElement(W,null),e.children,l.a.createElement(q,{updated:e.updated}))},Y=function(){var e=localStorage.getItem("mode"),t=Object(n.useState)({}),a=Object(h.a)(t,2),c=a[0],r=a[1],o=Object(v.a)().t,s={fontColor:"light-mode"===e?"#000":"#FFF"};Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(Object(f.a)({},a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(e){var t=[];return Object.keys(e).forEach((function(a){t.push({x:a,y:e[a]})})),t},m={};0!==Object.keys(c).length&&(m={labels:Object.keys(c.cases),datasets:[{label:o("confirmed"),data:i(c.cases),backgroundColor:"blue"},{label:o("deaths"),data:i(c.deaths),backgroundColor:"red"},{label:o("recovered"),data:i(c.recovered),backgroundColor:"green"}]});var u={tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label;return a+": "+b(e.yLabel)}}},scales:{xAxes:[{ticks:{fontColor:s.fontColor}}],yAxes:[{ticks:{fontColor:s.fontColor}}]},responsive:!0,maintainAspectRatio:!1,elements:{line:{fill:!1}},legend:{labels:{usePointStyle:!0,fontColor:s.fontColor}}};return l.a.createElement("div",{style:{width:"100%",height:"300px"}},l.a.createElement("h5",null,o("globalTimeline")),l.a.createElement(F.b,{data:m,options:u}))},_=function(e){var t={legend:{labels:{fontColor:e.options.fontColor}},scale:{gridLines:{color:e.options.gridColor},angleLines:{color:e.options.gridColor}},responsive:!0,maintainAspectRatio:!1,tooltips:{callbacks:{label:function(e,t){var a=t.labels[e.index];return a+": "+b(e.yLabel)+" cases"}}}},a={datasets:[{data:e.data,backgroundColor:e.colors}],labels:e.labels};return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(F.c,{data:a,options:t,height:"300"}," "))},H=function(){var e=localStorage.getItem("mode"),t=Object(v.a)().t,a={gridColor:"light-mode"===e?"#000":"#FFF",fontColor:"light-mode"===e?"#000":"#FFF"},c=Object(n.useState)([]),r=Object(h.a)(c,2),o=r[0],s=r[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://corona.lmao.ninja/v2/continents");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(Object(w.a)(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(e){return o.map((function(t){return t[e]}))},m=i("continent");return l.a.createElement("div",null,l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("h5",null,t("casesByContinent")),l.a.createElement(_,{labels:m,colors:["#e76f51","#f4a261","#e9c46a","#2a9d8f","#CD5C5C","#264653"],data:i("cases"),options:a})))},Q=function(){return l.a.createElement("div",{className:"mt-5 d-flex flex-column flex-lg-row justify-content-between"},l.a.createElement("div",{className:"col-lg-6 mb-5 mb-lg-0"},l.a.createElement(Y,null)),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(H,null)))},X=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeUpdate=function(e){return n.setState({updated:e})},n.state={updated:0},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(K,{updated:this.state.updated},l.a.createElement("main",{className:"container"},l.a.createElement(k,{updated:this.changeUpdate}),l.a.createElement(Q,null),l.a.createElement(S,null),l.a.createElement(D,null),l.a.createElement(T,null),l.a.createElement(U,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e){e.exports=JSON.parse('{"name":"English","confirmed":"Confirmed","deaths":"Deaths","recovered":"Recovered","country":"Country","todayCases":"Today cases","todayDeaths":"Today deaths","show":"Show","records":"records","searchCountry":"Search country","prev":"prev","next":"next","timeline":"Timeline by region","casesByContinent":"Continents","confirmedCases":"confirmed cases","deathCases":"deaths","USStatesCases":"USA states confirmed cases","globalTimeline":"Timeline","active":"Active","updated":"Updated","cases":"Confirmed cases","globalDailyCases":"Global daily cases","providedBy":"Provided by ","powerBy":"Power by ","lastUpdated":"Last updated : ","noResults":"No record found"}')},87:function(e){e.exports=JSON.parse('{"name":"Ti\u1ebfng Vi\u1ec7t","confirmed":"X\xe1c nh\u1eadn","deaths":"T\u1eed vong","recovered":"Ph\u1ee5c h\u1ed3i","country":"N\u01b0\u1edbc","todayCases":"Ca trong ng\xe0y","todayDeaths":"T\u1eed vong trong ng\xe0y","show":"Hi\u1ec3n th\u1ecb","records":"d\xf2ng","searchCountry":"T\xecm n\u01b0\u1edbc","prev":"Tr\u01b0\u1edbc","next":"Ti\u1ebfp","timeline":"L\u1ecbch s\u1eed theo v\xf9ng","casesByContinent":"Ch\xe2u l\u1ee5c","confirmedCases":"ca nhi\u1ec5m","deathCases":"ca t\u1eed vong","USStatesCases":"Ca nhi\u1ec5m c\xe1c bang n\u01b0\u1edbc M\u1ef9","globalTimeline":"D\xf2ng th\u1eddi gian","active":"\u0110ang nhi\u1ec5m","updated":"C\u1eadp nh\u1eadt","cases":"Ca nhi\u1ec5m","globalDailyCases":"Ca nhi\u1ec5m theo ng\xe0y","providedBy":"\u0110\u01b0\u1ee3c cung c\u1ea5p b\u1edfi ","powerBy":"Th\u1ef1c hi\u1ec7n b\u1edfi ","lastUpdated":"C\u1eadp nh\u1eadt g\u1ea7n nh\u1ea5t : ","noResults":"Kh\xf4ng t\xecm th\u1ea5y"}')},93:function(e,t,a){e.exports=a(206)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.f14c31f8.chunk.js.map