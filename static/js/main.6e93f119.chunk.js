(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(10),i=a.n(n),s=a(2),r=a(7),c=a(3),l=a(4),o=a(6),m=a(5),u=a(1),h=a.n(u),p=(a(15),a(16),a(17),a(18),a(9)),b=a(0),j=function(t){Object(o.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={currScroll:0},t.totalImgWidth=t.props.images.length*t.props.itemWidth,t.handleNextBtn=function(){var e,a=t.props,n=a.step,i=a.itemWidth,s=a.frameSize,r=a.images,c=t.state.currScroll,l=n*i,o=r.length*i-Math.abs(c)-i*s;e=o>l?c-l:c-o,t.setState({currScroll:e})},t.handlePrevBtn=function(){var e,a=t.props,n=a.step,i=a.itemWidth,s=t.state.currScroll,r=n*i,c=Math.abs(s);e=c>r?s+r:s+c,t.setState({currScroll:e})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.images,a=t.itemWidth,n=t.frameSize,i=t.animationDuration,s=this.state.currScroll,r=a*n,c=e.length*a;return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("button",{type:"button",onClick:this.handlePrevBtn,className:"button__prev",disabled:0===s,children:Object(b.jsx)(p.a,{className:"button"})}),Object(b.jsx)("div",{className:"carousel",style:{width:a*n},children:Object(b.jsx)("div",{className:"carousel__container ",style:{width:c,transform:"translateX(".concat(s,"px)"),transition:"transform ".concat(i/1e3,"s ease")},children:Object(b.jsx)("ul",{className:"carousel__list",children:e.map((function(t,e){return Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:t,alt:"".concat(e),style:{width:a}})},t)}))})})}),Object(b.jsx)("button",{"data-cy":"next",type:"button",onClick:this.handleNextBtn,className:"button__next",disabled:Math.abs(s)+r===c,children:Object(b.jsx)(p.b,{className:"button"})})]})}}]),a}(u.Component),d=j,g=function(t){Object(o.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3},t.handleInput=function(e){var a=e.currentTarget,n=a.value,i=a.name,c=Object(r.a)({},t.state);t.setState(Object(r.a)(Object(r.a)({},c),{},Object(s.a)({},i,+n)))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.images,a=t.step,n=t.itemWidth,i=t.frameSize,s=t.animationDuration;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(b.jsx)(d,{images:e,step:a,itemWidth:n,frameSize:i,animationDuration:s}),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:"form",children:[Object(b.jsxs)("label",{htmlFor:"itemWidth",children:["Image width:",Object(b.jsx)("input",{type:"number",id:"itemWidth",name:"itemWidth",value:n,onChange:this.handleInput,className:"form__input"})]}),Object(b.jsxs)("label",{htmlFor:"frameSize",children:["Frame size:",Object(b.jsx)("input",{type:"number",id:"frameSize",name:"frameSize",value:i,onChange:this.handleInput,className:"form__input"})]}),Object(b.jsxs)("label",{htmlFor:"step",children:["Step:",Object(b.jsx)("input",{type:"number",id:"step",name:"step",value:a,onChange:this.handleInput,className:"form__input"})]}),Object(b.jsxs)("label",{htmlFor:"animationDuration",children:["Animation duration:",Object(b.jsx)("input",{type:"number",id:"animationDuration",name:"animationDuration",value:s,onChange:this.handleInput,step:"500",className:"form__input"})]})]})})]})}}]),a}(h.a.Component),O=g;i.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6e93f119.chunk.js.map