(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t.n(s),c=t(8),r=t.n(c),l=(t(14),t(15),t(16),t(17),t(18),t(19),t(20),t(21),t(22),t(1)),i=t.n(l);i.a.easing.jswing=i.a.easing.swing,i.a.extend(i.a.easing,{def:"easeOutQuad",swing:function(e,a,t,s,n){return i.a.easing[i.a.easing.def](e,a,t,s,n)},easeInQuad:function(e,a,t,s,n){return s*(a/=n)*a+t},easeOutQuad:function(e,a,t,s,n){return-s*(a/=n)*(a-2)+t},easeInOutQuad:function(e,a,t,s,n){return(a/=n/2)<1?s/2*a*a+t:-s/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,s,n){return s*(a/=n)*a*a+t},easeOutCubic:function(e,a,t,s,n){return s*((a=a/n-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,s,n){return(a/=n/2)<1?s/2*a*a*a+t:s/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,s,n){return s*(a/=n)*a*a*a+t},easeOutQuart:function(e,a,t,s,n){return-s*((a=a/n-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,s,n){return(a/=n/2)<1?s/2*a*a*a*a+t:-s/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,s,n){return s*(a/=n)*a*a*a*a+t},easeOutQuint:function(e,a,t,s,n){return s*((a=a/n-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,s,n){return(a/=n/2)<1?s/2*a*a*a*a*a+t:s/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,s,n){return-s*Math.cos(a/n*(Math.PI/2))+s+t},easeOutSine:function(e,a,t,s,n){return s*Math.sin(a/n*(Math.PI/2))+t},easeInOutSine:function(e,a,t,s,n){return-s/2*(Math.cos(Math.PI*a/n)-1)+t},easeInExpo:function(e,a,t,s,n){return 0==a?t:s*Math.pow(2,10*(a/n-1))+t},easeOutExpo:function(e,a,t,s,n){return a==n?t+s:s*(1-Math.pow(2,-10*a/n))+t},easeInOutExpo:function(e,a,t,s,n){return 0==a?t:a==n?t+s:(a/=n/2)<1?s/2*Math.pow(2,10*(a-1))+t:s/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,s,n){return-s*(Math.sqrt(1-(a/=n)*a)-1)+t},easeOutCirc:function(e,a,t,s,n){return s*Math.sqrt(1-(a=a/n-1)*a)+t},easeInOutCirc:function(e,a,t,s,n){return(a/=n/2)<1?-s/2*(Math.sqrt(1-a*a)-1)+t:s/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,s,n){var c=1.70158,r=0,l=s;if(0==a)return t;if(1==(a/=n))return t+s;if(r||(r=.3*n),l<Math.abs(s)){l=s;c=r/4}else c=r/(2*Math.PI)*Math.asin(s/l);return-l*Math.pow(2,10*(a-=1))*Math.sin((a*n-c)*(2*Math.PI)/r)+t},easeOutElastic:function(e,a,t,s,n){var c=1.70158,r=0,l=s;if(0==a)return t;if(1==(a/=n))return t+s;if(r||(r=.3*n),l<Math.abs(s)){l=s;c=r/4}else c=r/(2*Math.PI)*Math.asin(s/l);return l*Math.pow(2,-10*a)*Math.sin((a*n-c)*(2*Math.PI)/r)+s+t},easeInOutElastic:function(e,a,t,s,n){var c=1.70158,r=0,l=s;if(0==a)return t;if(2==(a/=n/2))return t+s;if(r||(r=n*(.3*1.5)),l<Math.abs(s)){l=s;c=r/4}else c=r/(2*Math.PI)*Math.asin(s/l);return a<1?l*Math.pow(2,10*(a-=1))*Math.sin((a*n-c)*(2*Math.PI)/r)*-.5+t:l*Math.pow(2,-10*(a-=1))*Math.sin((a*n-c)*(2*Math.PI)/r)*.5+s+t},easeInBack:function(e,a,t,s,n,c){return void 0==c&&(c=1.70158),s*(a/=n)*a*((c+1)*a-c)+t},easeOutBack:function(e,a,t,s,n,c){return void 0==c&&(c=1.70158),s*((a=a/n-1)*a*((c+1)*a+c)+1)+t},easeInOutBack:function(e,a,t,s,n,c){return void 0==c&&(c=1.70158),(a/=n/2)<1?s/2*(a*a*((1+(c*=1.525))*a-c))+t:s/2*((a-=2)*a*((1+(c*=1.525))*a+c)+2)+t},easeInBounce:function(e,a,t,s,n){return s-i.a.easing.easeOutBounce(e,n-a,0,s,n)+t},easeOutBounce:function(e,a,t,s,n){return(a/=n)<1/2.75?s*(7.5625*a*a)+t:a<2/2.75?s*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?s*(7.5625*(a-=2.25/2.75)*a+.9375)+t:s*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,s,n){return a<n/2?.5*i.a.easing.easeInBounce(e,2*a,0,s,n)+t:.5*i.a.easing.easeOutBounce(e,2*a-n,0,s,n)+.5*s+t}});t(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(3),d=t(4),j=t(6),h=t(5),b=t.p+"static/media/male1.76ef09d0.png",m=t(0),u=function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={logo:b},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=i()("nav").outerHeight();i()(".navbar-toggler").on("click",(function(){i()("#mainNav").hasClass("navbar-reduce")||i()("#mainNav").addClass("navbar-reduce")})),i()("body").scrollspy({target:"#mainNav",offset:a}),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:b})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:b}))})),i()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=i()(this.hash);if((e=e.length?e:i()("[name="+this.hash.slice(1)+"]")).length)return i()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return Object(m.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("a",{className:"navbar-brand js-scroll",href:"#page-top",children:Object(m.jsx)("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})}),Object(m.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]}),Object(m.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link js-scroll active",href:"#home",children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link js-scroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link js-scroll",href:"#work",children:"Work"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link js-scroll",href:"#contact",children:"Contact"})})]})})]})})}}]),t}(n.a.Component),x=(t(27),t(9)),O=t.n(x),p=function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"home",className:"intro route bg-image background",children:[Object(m.jsx)("div",{id:"stars"}),Object(m.jsx)("div",{id:"stars2"}),Object(m.jsx)("div",{id:"stars3"}),Object(m.jsx)("div",{className:"intro-content display-table",children:Object(m.jsx)("div",{className:"table-cell",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"intro-title mb-4",children:"Hello, I am Guled Ahmed"}),Object(m.jsxs)("p",{className:"intro-subtitle",children:[Object(m.jsx)("span",{className:"text-slider-items"}),Object(m.jsx)("strong",{className:"text-slider",children:Object(m.jsx)(O.a,{strings:["Front End Developer","Back End Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0})})]}),Object(m.jsx)("p",{className:"pt-3",children:Object(m.jsx)("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button",children:"View My Work"})})]})})})]})}}]),t}(n.a.Component),g=(t.p,function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"88%",value:"88"},{id:"CSS3_skill",content:"CSS3",porcentage:"81%",value:"81"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"69%",value:"69"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"72%",value:"72"},{id:"MySQL",content:"MySQL",porcentage:"81%",value:"81"},{id:"NodeJS",content:"NodeJS",porcentage:"85%",value:"85"},{id:"MongoDB",content:"MongoDB",porcentage:"77%",value:"77"}],about_me:[{id:"first-p-about",content:"My name is Guled Ahmed. I am a Full Stack Web Developer. I like to challenge myself by thinking by trying to find creative ways to complete tasks. I attended University of California San Diego Trilogy Coding Bootcamp. During my time in school, I was enjoying coding and creating projects. I came to the realization that I have found my passion. I am currently seeking software development, as well as remote positions. However, I am open-minded to other possibilities."}]},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"about",className:"about-mf sect-pt4 route",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12",children:Object(m.jsx)("div",{className:"box-shadow-full",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(m.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(m.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})})}),Object(m.jsx)("div",{className:"skill-mf",children:this.state.skills.map((function(e){return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)("span",{children:e.content})," ",Object(m.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(m.jsx)("div",{className:"progress",children:Object(m.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))})]}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(m.jsx)("div",{className:"title-box-2",children:Object(m.jsx)("h5",{className:"title-left",children:"About Me"})}),this.state.about_me.map((function(e){return Object(m.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})}}]),t}(n.a.Component)),v=t.p+"static/media/image1.5abd6618.jpg",f=t.p+"static/media/image2.67aa90e5.jpg",y=t.p+"static/media/image3.167535cd.jpg",N=t.p+"static/media/image4.e3b71f4d.jpg",w=t.p+"static/media/image5.4d33ef4b.jpg",k=t.p+"static/media/image6.e10e0ffa.jpg",M=function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"work",className:"portfolio-mf sect-pt4 route",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12",children:Object(m.jsxs)("div",{className:"title-box text-center",children:[Object(m.jsx)("h3",{className:"title-a",children:"Portfolio"}),Object(m.jsx)("p",{className:"subtitle-a",children:"During the time I attended the University of California San Diego Coding Bootcamp, I had fun. I created a lot of projects. Some of the projects, I created alone. I contributed to three separate projects with three different groups consists of my fellow classmates at the bootcamp. Below, you can view the works I have completed."}),Object(m.jsx)("div",{className:"line-mf"})]})})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"work-box",children:[Object(m.jsxs)("a",{href:v,"data-lightbox":"gallery-vmarine",children:[Object(m.jsx)("div",{className:"work-img",children:Object(m.jsx)("img",{src:v,alt:"",className:"img-fluid"})}),Object(m.jsx)("div",{className:"work-content",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-8",children:[Object(m.jsx)("h2",{className:"w-title",children:"Weather-Dashboard"}),Object(m.jsx)("div",{className:"w-more",children:Object(m.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Bootstrap Javascript"})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://guled06.github.io/Weather-Dashboard/",target:"_blank",rel:"noopener noreferrer",children:"Link To Deployed App"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://github.com/Guled06/Weather-Dashboard",target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"})})]})]}),Object(m.jsx)("div",{className:"col-sm-4",children:Object(m.jsx)("div",{className:"w-like",children:Object(m.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(m.jsx)("a",{href:f,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:y,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:N,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:w,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:k,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"work-box",children:[Object(m.jsxs)("a",{href:v,"data-lightbox":"gallery-aguadeluz",children:[Object(m.jsx)("div",{className:"work-img",children:Object(m.jsx)("img",{src:v,alt:"",className:"img-fluid"})}),Object(m.jsx)("div",{className:"work-content",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-8",children:[Object(m.jsx)("h2",{className:"w-title",children:"The Brew Budz"}),Object(m.jsxs)("div",{className:"w-more",children:[Object(m.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Bootstrap Javascript Node.js JawsDB MySQL Express.js Sequelize"})," "]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://thebrewbudz.herokuapp.com/landing",target:"_blank",rel:"noopener noreferrer",children:"Link To Deployed App"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://github.com/Guled06/the-brew-budz",target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"})})]})]}),Object(m.jsx)("div",{className:"col-sm-4",children:Object(m.jsx)("div",{className:"w-like",children:Object(m.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(m.jsx)("a",{href:f,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:y,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:N,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:w,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:k,"data-lightbox":"gallery-aguadeluz",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"work-box",children:[Object(m.jsxs)("a",{href:v,"data-lightbox":"gallery-todo",children:[Object(m.jsx)("div",{className:"work-img",children:Object(m.jsx)("img",{src:v,alt:"",className:"img-fluid"})}),Object(m.jsx)("div",{className:"work-content",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-8",children:[Object(m.jsx)("h2",{className:"w-title",children:"Workday Scheduler"}),Object(m.jsx)("div",{className:"w-more",children:Object(m.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Bootstrap Javascript jQuery"})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://guled06.github.io/Workday-Scheduler/",target:"_blank",rel:"noopener noreferrer",children:"Link To Deployed App"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://github.com/Guled06/Workday-Scheduler",target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"})})]})]}),Object(m.jsx)("div",{className:"col-sm-4",children:Object(m.jsx)("div",{className:"w-like",children:Object(m.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(m.jsx)("a",{href:f,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:y,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:N,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:w,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:k,"data-lightbox":"gallery-todo",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"work-box",children:[Object(m.jsxs)("a",{href:v,"data-lightbox":"gallery-medlingos",children:[Object(m.jsx)("div",{className:"work-img",children:Object(m.jsx)("img",{src:v,alt:"",className:"img-fluid"})}),Object(m.jsx)("div",{className:"work-content",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-8",children:[Object(m.jsx)("h2",{className:"w-title",children:"Note Taker"}),Object(m.jsx)("div",{className:"w-more",children:Object(m.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Bootstrap jQuery Express.js"})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://yournotetaker.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",children:"Link To Deployed App"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://github.com/Guled06/note-taker",target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"})})]})]}),Object(m.jsx)("div",{className:"col-sm-4",children:Object(m.jsx)("div",{className:"w-like",children:Object(m.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(m.jsx)("a",{href:f,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:y,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:N,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:w,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:k,"data-lightbox":"gallery-medlingos",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"work-box",children:[Object(m.jsxs)("a",{href:v,"data-lightbox":"gallery-smth",children:[Object(m.jsx)("div",{className:"work-img",children:Object(m.jsx)("img",{src:v,alt:"",className:"img-fluid"})}),Object(m.jsx)("div",{className:"work-content",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-8",children:[Object(m.jsx)("h2",{className:"w-title",children:"Budget Tracker"}),Object(m.jsx)("div",{className:"w-more",children:Object(m.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Javascript Mongoose IndexedDB Express.js"})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://tracking-my-budget.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",children:"Link To Deployed App"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://github.com/Guled06/budget-tracker",target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"})})]})]}),Object(m.jsx)("div",{className:"col-sm-4",children:Object(m.jsx)("div",{className:"w-like",children:Object(m.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(m.jsx)("a",{href:f,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:y,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:N,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:w,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:k,"data-lightbox":"gallery-smth",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})}),Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsxs)("div",{className:"work-box",children:[Object(m.jsxs)("a",{href:v,"data-lightbox":"gallery-mf",children:[Object(m.jsx)("div",{className:"work-img",children:Object(m.jsx)("img",{src:v,alt:"",className:"img-fluid"})}),Object(m.jsx)("div",{className:"work-content",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-8",children:[Object(m.jsx)("h2",{className:"w-title",children:"Coded 19 (Covid-19 app)"}),Object(m.jsx)("div",{className:"w-more",children:Object(m.jsx)("span",{className:"w-ctegory",children:"HTML5 CSS3 Materialize Javascript jQuery AJAX API"})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://elijahig.github.io/Coded-19-app/",target:"_blank",rel:"noopener noreferrer",children:"Link To Deployed App"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{type:"button",class:"btn btn-danger",children:Object(m.jsx)("a",{href:"https://github.com/ElijahIG/Coded-19-app",target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"})})]})]}),Object(m.jsx)("div",{className:"col-sm-4",children:Object(m.jsx)("div",{className:"w-like",children:Object(m.jsx)("span",{className:"ion-ios-plus-outline"})})})]})})]}),Object(m.jsx)("a",{href:f,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:y,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:N,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:w,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"}),Object(m.jsx)("a",{href:k,"data-lightbox":"gallery-mf",style:{display:"none"},children:"jsx-a11y/anchor-has-content warning"})]})})]})]})})}}]),t}(n.a.Component),I=t.p+"static/media/earth.a08c82a6.jpg",S=function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+I+")"},children:[Object(m.jsx)("div",{className:"overlay-mf"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12",children:Object(m.jsx)("div",{className:"contact-mf",children:Object(m.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("div",{className:"title-box-2",children:Object(m.jsx)("h5",{className:"title-left",children:"Send A Message"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("form",{action:"https://formspree.io/xdoeonlo",method:"POST",className:"contactForm",children:[Object(m.jsx)("div",{id:"sendmessage",children:"Your message has been sent. Thank you!"}),Object(m.jsx)("div",{id:"errormessage"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-12 mb-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(m.jsx)("div",{className:"validation"})]})}),Object(m.jsx)("div",{className:"col-md-12 mb-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(m.jsx)("div",{className:"validation"})]})}),Object(m.jsx)("div",{className:"col-md-12 mb-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(m.jsx)("div",{className:"validation"})]})}),Object(m.jsx)("div",{className:"col-md-12 mb-3",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(m.jsx)("div",{className:"validation"})]})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)("button",{type:"submit",className:"button button-a button-big button-rouded",children:"Send Message"})})]})]})})]}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(m.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(m.jsx)("div",{className:"more-info",children:Object(m.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(m.jsx)("br",{}),"Simply fill the from and send me an email."]})}),Object(m.jsx)("div",{className:"socials",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://docs.google.com/document/d/1GswRTPBYw88MgvoFc8Lc7LHQsvE613Y3FHMwl7qRPY4/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{className:"ico-circle",children:Object(m.jsx)("i",{className:"ion-social-codepen"})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/Guled06",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{className:"ico-circle",children:Object(m.jsx)("i",{className:"ion-social-github"})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/gahmed1/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("span",{className:"ico-circle",children:Object(m.jsx)("i",{className:"ion-social-linkedin"})})})})]})})]})]})})})})})}),Object(m.jsx)("footer",{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-12",children:Object(m.jsx)("div",{className:"copyright-box"})})})})})]})}}]),t}(n.a.Component),C=function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){i()(".back-to-top").click((function(){return i()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return Object(m.jsx)("a",{href:"#",className:"back-to-top animated",children:Object(m.jsx)("i",{className:"fa fa-chevron-up"})})}}]),t}(n.a.Component),L=function(e){Object(j.a)(t,e);var a=Object(h.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){i()(window).on("load",(function(){i()("#preloader").length&&i()("#preloader").delay(100).fadeOut("slow",(function(){i()(this).remove()}))}))}},{key:"render",value:function(){return Object(m.jsx)("div",{id:"preloader"})}}]),t}(n.a.Component);r.a.render(Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)(u,{}),Object(m.jsx)(p,{}),Object(m.jsx)(g,{}),Object(m.jsx)(M,{}),Object(m.jsx)(S,{}),Object(m.jsx)(C,{}),Object(m.jsx)(L,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d3a3582d.chunk.js.map