(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(10),i=a.n(n),s=a(2),r=a(7),c=a(3),l=a(4),m=a(6),o=a(5),p=a(1),u=a.n(p),h=(a(15),a(16),a(9)),d=a(0),j=function(t){Object(m.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={currScroll:0},t.totalImgWidth=t.props.images.length*t.props.itemWidth,t.handleNextBtn=function(){var e,a=t.props,n=a.step,i=a.itemWidth,s=a.frameSize,r=a.images,c=t.state.currScroll,l=n*i,m=r.length*i-Math.abs(c)-i*s;e=m>l?c-l:c-m,t.setState({currScroll:e})},t.handlePrevBtn=function(){var e,a=t.props,n=a.step,i=a.itemWidth,s=t.state.currScroll,r=n*i,c=Math.abs(s);e=c>r?s+r:s+c,t.setState({currScroll:e})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.images,a=t.itemWidth,n=t.frameSize,i=t.animationDuration,s=this.state.currScroll,r=a*n,c=e.length*a;return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("button",{type:"button",onClick:this.handlePrevBtn,className:"carousel__button--prev",disabled:0===s,children:Object(d.jsx)(h.a,{className:"carousel__button"})}),Object(d.jsx)("div",{className:"carousel",style:{width:a*n},children:Object(d.jsx)("div",{className:"carousel__container ",style:{width:c,transform:"translateX(".concat(s,"px)"),transition:"transform ".concat(i/1e3,"s ease")},children:Object(d.jsx)("ul",{className:"carousel__list",children:e.map((function(t,e){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:t,alt:"".concat(e),style:{width:a}})},t)}))})})}),Object(d.jsx)("button",{"data-cy":"next",type:"button",onClick:this.handleNextBtn,className:"carousel__button--next",disabled:Math.abs(s)+r===c,children:Object(d.jsx)(h.b,{className:"carousel__button"})})]})}}]),a}(p.Component),b=j,g=function(t){Object(m.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3},t.handleInput=function(e){var a=e.currentTarget,n=a.value,i=a.name,c=Object(r.a)({},t.state);t.setState(Object(r.a)(Object(r.a)({},c),{},Object(s.a)({},i,+n)))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.images,a=t.step,n=t.itemWidth,i=t.frameSize,s=t.animationDuration;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(d.jsx)(b,{images:e,step:a,itemWidth:n,frameSize:i,animationDuration:s}),Object(d.jsx)("form",{className:"App__form",children:Object(d.jsxs)("fieldset",{className:"App__fieldSet",children:[Object(d.jsx)("legend",{children:"Options"}),Object(d.jsxs)("label",{htmlFor:"itemWidth",children:["Image width:",Object(d.jsx)("input",{type:"number",id:"itemWidth",name:"itemWidth",step:10,min:100,max:450,value:n,onChange:this.handleInput,className:"App__input"})]}),Object(d.jsxs)("label",{htmlFor:"frameSize",children:["Frame size:",Object(d.jsx)("input",{type:"number",id:"frameSize",name:"frameSize",min:1,max:e.length,value:i,onChange:this.handleInput,className:"App__input"})]}),Object(d.jsxs)("label",{htmlFor:"step",children:["Step:",Object(d.jsx)("input",{type:"number",id:"step",name:"step",min:1,max:i,value:a,onChange:this.handleInput,className:"App__input"})]}),Object(d.jsxs)("label",{htmlFor:"animationDuration",children:["Animation duration:",Object(d.jsx)("input",{type:"number",id:"animationDuration",name:"animationDuration",min:1e3,max:5e3,value:s,onChange:this.handleInput,step:"100",className:"App__input"})]})]})})]})}}]),a}(u.a.Component),O=g;i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a7b4ed1c.chunk.js.map