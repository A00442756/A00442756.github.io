(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(16),c=a.n(s),r=(a(22),a(3)),o=a(4),l=a(6),u=a(5),h=(a(23),a(0)),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"About",children:[Object(h.jsx)("img",{className:"somtoImg",src:"somto.jpg",alt:"Somto's picture"}),Object(h.jsx)("h2",{children:"Hi, I am Somto"}),Object(h.jsxs)("div",{className:"intro",children:[Object(h.jsx)("p",{className:"introPara",children:"I am from Lagos, Nigeria and I like reading, playing chess and taking long walks "})," "]}),Object(h.jsxs)("div",{className:"intro",children:[Object(h.jsx)("p",{className:"introPara",children:"I have always been fascinated with the data and as I grew it became even more relevant. I enrolled in the MCDA programme at SMU because it perfectly combines computing as well as data analytics as required in the industry."})," "]})]})}}]),a}(n.Component),b=a(17),d=a.n(b),m=(a(43),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).weather=function(){d.a.get("https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=146e31ab4838b9bf457e3f628372fe6e").then((function(e){console.log(e),console.log(e.data.main.temp);var t=e.data.main.temp,a=parseInt(t-273);n.setState({originalTemperature:a,temperature:a})})).catch((function(e){console.log(e)}))},n.weatherIcon=function(){var e="";return e=n.state.originalTemperature<=10?"assets/cold.png":n.state.originalTemperature<=20?"assets/mild.png":"assets/sunny.png",Object(h.jsx)("div",{className:"weatherIconContainer",children:Object(h.jsx)("img",{className:"weatherIcon",src:e,alt:"Weather icon"})})},n.state={originalTemperature:40,temperature:40,unit:"C"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.weather()}},{key:"toggle",value:function(e){var t=this.state.originalTemperature;"F"===e?(t=1.8*t+32,this.setState({temperature:t.toFixed(),unit:"F"})):this.setState({temperature:t.toFixed(),unit:"C"})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"Town",children:[Object(h.jsx)("img",{className:"halifax",src:"halifax.jpg",alt:"Halifax"}),Object(h.jsx)("h2",{children:"I live in Halifax, Nova Scotia"}),Object(h.jsxs)("div",{className:"temperature",children:[" ",this.weatherIcon()," ",Object(h.jsxs)("font",{children:[this.state.temperature," \xb0",this.state.unit]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){e.toggle("C")},disabled:"C"===this.state.unit,children:"To Celcius "}),Object(h.jsx)("button",{onClick:function(){e.toggle("F")},disabled:"F"===this.state.unit,children:"To Farenhiet "})]})]})}}]),a}(n.Component)),p=(a(44),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={selectedTab:"about"},n}return Object(o.a)(a,[{key:"selectTab",value:function(e){this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("span",{className:"tab",onClick:function(){e.selectTab("about")},children:"About Me "})}),Object(h.jsx)("li",{children:Object(h.jsx)("span",{className:"tab",onClick:function(){e.selectTab("town")},children:"My Town"})})]}),"about"===this.state.selectedTab?Object(h.jsx)(j,{}):Object(h.jsx)(m,{})]})}}]),a}(n.Component)),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.4155aa34.chunk.js.map