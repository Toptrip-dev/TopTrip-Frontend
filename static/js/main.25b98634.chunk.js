(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{119:function(e,t,a){e.exports=a(231)},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},133:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var l=a(1),r=a.n(l),n=a(14),s=a.n(n),c=a(2),o=(a(124),a(10)),i=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],d=function(e){var t=e.children,a=e.type,l=e.onClick,n=e.buttonStyle,s=e.buttonSize,c=i.includes(n)?n:i[0],d=m.includes(s)?s:m[0];return r.a.createElement(o.b,{to:"/sign-up",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(c," ").concat(d),onClick:l,type:a},t))};a(125);var u=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!0),i=Object(c.a)(s,2),m=i[0],u=i[1],g=function(){return n(!1)},p=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(l.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(o.b,{to:"/",className:"navbar-logo",onClick:g},"TopTrip",r.a.createElement("img",{src:"images/logo.png",alt:"logo"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return n(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/",className:"nav-links",onClick:g},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/services",className:"nav-links",onClick:g},"Trip Planner")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/places",className:"nav-links",onClick:g},"TopTrips")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/sign-up",className:"nav-links-mobile",onClick:g},"Sign Up"))),m&&r.a.createElement(d,{buttonStyle:"btn--outline"},"SIGN UP"))))};a(36),a(56);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(o.b,{className:"cards__item__link",to:e.path},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var p=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",{style:{fontSize:50}},"Check out these EPIC Destinations!"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(g,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Western Ghats",label:"Adventure",path:"/"}),r.a.createElement(g,{src:"images/img-2.jpg",text:"Visit the Beautiful Temples of Kadamabh Era",label:"Religious",path:"/"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(g,{src:"images/img-3.jpg",text:"Church",label:"Catholic",path:"/"}),r.a.createElement(g,{src:"images/img-4.jpg",text:"Experience The majestic Beaches of Goa",label:"Beach",path:"/"}),r.a.createElement(g,{src:"images/img-8.jpg",text:"Enjoy the Winds With Taj Beach Resort in Goa",label:"Relaxing",path:"/"})))),r.a.createElement("div",{className:"bg-gray-50"},r.a.createElement("div",{className:"mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"},r.a.createElement("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},r.a.createElement("span",{className:"block"},"Ready to dive in?"),r.a.createElement("span",{className:"block text-indigo-600"},"Start your Planning your Trip Now !!!")),r.a.createElement("div",{className:"mt-8 flex lg:mt-0 lg:flex-shrink-0"},r.a.createElement(o.b,{to:"/services"},r.a.createElement("div",{className:"inline-flex rounded-md shadow"},r.a.createElement("a",{href:"#",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"},"Get started"))),r.a.createElement("div",{className:"ml-3 inline-flex rounded-md shadow"},r.a.createElement("a",{href:"#",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"},"Learn more"))))))};a(126);var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"topcontainer"},r.a.createElement("p",{className:"text-center text-3xl"},"Going For A Trip ?")),r.a.createElement("div",{className:"topcontainer"},r.a.createElement("p",{className:"text-center text-5xl text-red-500/80"},"Go Hassle Free With TopTrip!!")),r.a.createElement("div",{className:"hero-container"}),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"Plan Trip Now!!")))};a(127);var x=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"Join the TopTrip newsletter to receive our best vacation deals"),r.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),r.a.createElement("div",{className:"input-areas"},r.a.createElement("form",null,r.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),r.a.createElement(d,{buttonStyle:"btn--outline"},"Subscribe")))),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Contact Us"),r.a.createElement(o.b,{to:"mailto:toptripofficial@gmail.com"},"Contact"),r.a.createElement(o.b,{to:"/"},"Support"),r.a.createElement(o.b,{to:"/"},"About Us"),r.a.createElement(o.b,{to:"/"},"Sponsorships"))),r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null," Social Media"),r.a.createElement(o.b,{to:"/"},"Instagram"),r.a.createElement(o.b,{to:"/"},"Facebook"),r.a.createElement(o.b,{to:"/"},"Youtube"),r.a.createElement(o.b,{to:"/"},"Twitter")))),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement(o.b,{to:"/",className:"social-logo"},"TopTrip",r.a.createElement("img",{src:"images/logo.png",alt:"logo"}))),r.a.createElement("small",{class:"website-rights"},"TopTrip \xa9 2022"),r.a.createElement("div",{class:"social-icons"},r.a.createElement(o.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},r.a.createElement("i",{class:"fab fa-facebook-f"})),r.a.createElement(o.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},r.a.createElement("i",{class:"fab fa-instagram"})),r.a.createElement(o.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},r.a.createElement("i",{class:"fab fa-youtube"})),r.a.createElement(o.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement(o.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},r.a.createElement("i",{class:"fab fa-linkedin"}))))))};var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(o.b,{className:"help__item__link",to:e.path},r.a.createElement("figure",{className:"help__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"help__item__text"},e.text)))))};var h=function(){return r.a.createElement("div",{className:"help"},r.a.createElement("h1",{style:{fontSize:"30px"}},"Why Choose Us ?"),r.a.createElement("div",{className:"help__container"},r.a.createElement("div",{className:"help__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(b,{src:"images/help-2.png",text:"Get A Complete Planned Trip",path:"/"}),r.a.createElement(b,{src:"images/help-1.jpg",text:"Save Money And Time",path:"/"}),r.a.createElement(b,{src:"images/help-3.png",text:"Relax,Enjoy And be Stress Free",path:"/"})))))},E=a(7),w=a(6),v=a(8),y=a(9),N=[{image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{image:"https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80"},{image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"},{image:"https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"},{image:"https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"}],k=a(78),j=a(111),_=a.n(j),S=function(e){Object(v.a)(a,e);var t=Object(y.a)(a);function a(e){var l;return Object(E.a)(this,a),(l=t.call(this,e)).nextSlide=function(){var e=l.state.currentSlide===N.length-1?0:l.state.currentSlide+1;l.setState({currentSlide:e})},l.prevSlide=function(){var e=0===l.state.currentSlide?N.length-1:l.state.currentSlide-1;l.setState({currentSlide:e})},l.setCurrentSlide=function(e){l.setState({currentSlide:e})},l.state={currentSlide:0,paused:!1},l}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){if(!1===e.state.paused){var t=e.state.currentSlide===N.length-1?0:e.state.currentSlide+1;e.setState({currentSlide:t})}}),3e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mt-4 p-2 flex justify-center"},r.a.createElement("div",{className:" w-9/12 h-1/2 flex overflow-hidden relative"},r.a.createElement(k.a,{onClick:this.prevSlide,className:"absolute text-3xl inset-y-1/2 text-white cursor-pointer"}),r.a.createElement(_.a,{onSwipeLeft:this.nextSlide,onSwipeRight:this.prevSlide},N.map((function(t,a){return r.a.createElement("img",{src:t.image,alt:"This is a carousel slide",key:a,className:a===e.state.currentSlide?"block w-full h-auto object-cover":"hidden",onMouseEnter:function(){e.setState({paused:!0})},onMouseLeave:function(){e.setState({paused:!1})}})}))),r.a.createElement("div",{className:"absolute w-full flex justify-center bottom-0"},N.map((function(t,a){return r.a.createElement("div",{className:a===e.state.currentSlide?"h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer":"h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer",key:a,onClick:function(){e.setCurrentSlide(a)}})}))),r.a.createElement(k.b,{onClick:this.nextSlide,className:"absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"})))}}]),a}(l.Component);var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(h,null),r.a.createElement(p,null),r.a.createElement(x,null))},T=a(4),q=a(243),M=a(245),L=a(112);function B(){var e=r.a.useState([500,1e3]),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"flex justify-center bg-slate-100 h-screen"},r.a.createElement("div",{className:"flex flex-col p-2 gap-5 min-w-max w-2/3"},r.a.createElement("p",{className:"font-semibold text-4xl p-4 text-red-500/80"},"Let's Plan you a TopTrip!"),r.a.createElement("form",{className:"flex flex-col p-2 gap-3 text-lg justify-center"},r.a.createElement("input",{type:"text",className:"rounded-full p-1 px-4",placeholder:"Your location"}),r.a.createElement("div",{class:"container w-12 self-center "},r.a.createElement(L.a,{style:{width:"2.5rem",height:"2.5rem"}})),r.a.createElement("input",{type:"text",className:"rounded-full p-1 px-4",placeholder:"Search Region or Place"}),r.a.createElement("div",{className:"flex h-1  bg-white mt-4 shadow-lg justify-center"}),r.a.createElement("h2",{className:"text-gray-890 font-pontiac p-2 text-center text-2xl"},"Customize your way"),r.a.createElement("div",{style:{margin:"0rem 2rem",display:"block",minWidth:"fit-content",width:"3/4"}},r.a.createElement(q.a,{id:"range-slider",className:" text-3xl text-center",gutterBottom:!0},"Select Your Price Range:"),r.a.createElement(M.a,{style:{color:"#ff735c"},value:a,onChange:function(e,t){l(t),console.log(t)},valueLabelDisplay:"auto"}),"Your Price is between ",a[0]," /- and ",a[1]," /-"),r.a.createElement("div",{className:"shadow-lg text-sm text-gray-500 bg-white rounded "},r.a.createElement("div",{className:"border-b-[1px] border-gray-400 p-2"},r.a.createElement("p",{className:"text-base"},"Select experiences")),r.a.createElement("div",{className:"flex gap-2 flex-wrap max-w-sm p-2"},r.a.createElement("span",{className:"shadow-lg border-2 border-gray-10 px-2 rounded-full"},"Trek"),r.a.createElement("span",{className:"shadow-lg border-2 border-gray-10 px-2 rounded-full"},"Water Sport"),r.a.createElement("span",{className:"shadow-lg border-2 border-gray-10 px-2 rounded-full"},"Hill top"),r.a.createElement("span",{className:"shadow-lg border-2 border-gray-10 px-2 rounded-full"},"Sunset Point"),r.a.createElement("span",{className:"shadow-lg border-2 border-gray-10 px-2 rounded-full"},"River View Point")))),r.a.createElement("div",{class:"flex space-x-2 justify-center pt-2"},r.a.createElement(o.b,{to:"/plan"},r.a.createElement("button",{style:{backgroundColor:"#ff735c"},class:" h-12 w-48 inline-block px-6 py-2.5 bg-orange-default before:text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-orange-default hover:shadow-lg focus:bg-orange-default focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-default active:shadow-lg transition duration-150 ease-in-out"},"Plan Now")))))}function D(){return r.a.createElement("div",{class:"w-full h-screen font-sans bg-cover bg-[url('images/bg-img.jpg')]"},r.a.createElement("div",{class:"container flex items-center justify-center flex-1 h-full mx-auto"},r.a.createElement("div",{class:"flex flex-col w-11/12 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"},r.a.createElement("div",{class:"self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white"},"Login To Your Account"),r.a.createElement("div",{class:"flex gap-4 item-center"},r.a.createElement("button",{type:"button",class:"py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "},r.a.createElement("svg",{width:"20",height:"20",fill:"currentColor",class:"mr-2",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"})),"Facebook"),r.a.createElement("button",{type:"button",class:"py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "},r.a.createElement("svg",{width:"20",height:"20",fill:"currentColor",class:"mr-2",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"})),"Google")),r.a.createElement("div",{class:"mt-8"},r.a.createElement("form",{action:"#",autoComplete:"off"},r.a.createElement("div",{class:"flex flex-col mb-2"},r.a.createElement("div",{class:"flex relative "},r.a.createElement("span",{class:"rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm"},r.a.createElement("svg",{width:"15",height:"15",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"}))),r.a.createElement("input",{type:"text",id:"sign-in-email",class:" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"Your email"}))),r.a.createElement("div",{class:"flex flex-col mb-6"},r.a.createElement("div",{class:"flex relative "},r.a.createElement("span",{class:"rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm"},r.a.createElement("svg",{width:"15",height:"15",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"}))),r.a.createElement("input",{type:"password",id:"sign-in-email",class:" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"Your password"}))),r.a.createElement("div",{class:"flex items-center mb-6 -mt-4"},r.a.createElement("div",{class:"flex ml-auto"},r.a.createElement("a",{href:"#",class:"inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"},"Forgot Your Password?"))),r.a.createElement("div",{class:"flex w-full"},r.a.createElement("button",{type:"submit",class:"py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "},"Login")))),r.a.createElement("div",{class:"flex items-center justify-center mt-6"},r.a.createElement("a",{class:"inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"},r.a.createElement("span",{class:"ml-2"},r.a.createElement(o.b,{to:"/login"},"You don't have an account?")))))))}var G=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",{class:"text-2xl"},"Check out these Amazing TopTrips!!!"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{class:"flex justify-center"},r.a.createElement("div",{class:"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"},r.a.createElement("img",{class:" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",src:"images/img-2.jpg",alt:""}),r.a.createElement("div",{class:"p-6 flex flex-col justify-start"},r.a.createElement("h5",{class:"text-gray-900 text-xl font-medium mb-2"},"Card title"),r.a.createElement("p",{class:"text-gray-700 text-base mb-4"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),r.a.createElement("p",{class:"text-gray-600 text-xs"},"Last updated 3 mins ago")))),r.a.createElement("div",{class:"flex justify-center"},r.a.createElement("div",{class:"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"},r.a.createElement("img",{class:" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",src:"images/img-2.jpg",alt:""}),r.a.createElement("div",{class:"p-6 flex flex-col justify-start"},r.a.createElement("h5",{class:"text-gray-900 text-xl font-medium mb-2"},"Card title"),r.a.createElement("p",{class:"text-gray-700 text-base mb-4"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),r.a.createElement("p",{class:"text-gray-600 text-xs"},"Last updated 3 mins ago")))),r.a.createElement("div",{class:"flex justify-center"},r.a.createElement("div",{class:"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"},r.a.createElement("img",{class:" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",src:"images/img-2.jpg",alt:""}),r.a.createElement("div",{class:"p-6 flex flex-col justify-start"},r.a.createElement("h5",{class:"text-gray-900 text-xl font-medium mb-2"},"Card title"),r.a.createElement("p",{class:"text-gray-700 text-base mb-4"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),r.a.createElement("p",{class:"text-gray-600 text-xs"},"Last updated 3 mins ago")))),r.a.createElement("div",{class:"flex justify-center p-4"},r.a.createElement("div",{class:"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"},r.a.createElement("img",{class:" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",src:"images/img-2.jpg",alt:""}),r.a.createElement("div",{class:"p-6 flex flex-col justify-start"},r.a.createElement("h5",{class:"text-gray-900 text-xl font-medium mb-2"},"Card title"),r.a.createElement("p",{class:"text-gray-700 text-base mb-4"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),r.a.createElement("p",{class:"text-gray-600 text-xs"},"Last updated 3 mins ago")))),r.a.createElement("div",{class:"flex justify-center"},r.a.createElement("div",{class:"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"},r.a.createElement("img",{class:" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",src:"images/img-2.jpg",alt:""}),r.a.createElement("div",{class:"p-6 flex flex-col justify-start"},r.a.createElement("h5",{class:"text-gray-900 text-xl font-medium mb-2"},"Card title"),r.a.createElement("p",{class:"text-gray-700 text-base mb-4"},"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),r.a.createElement("p",{class:"text-gray-600 text-xs"},"Last updated 3 mins ago"))))))},H=a(79),Y={lat:-3.745,lng:-38.523};var F=r.a.memo((function(){var e=Object(H.b)({id:"google-map-script",googleMapsApiKey:"AIzaSyDA0d4e-jZWyNgpN-vJXeYEIhOspv5SIoQ"}).isLoaded,t=r.a.useState(null),a=Object(c.a)(t,2),l=(a[0],a[1]),n=r.a.useCallback((function(e){var t=new window.google.maps.LatLngBounds(Y);e.fitBounds(t),l(e)}),[]),s=r.a.useCallback((function(e){l(null)}),[]);return e?r.a.createElement(H.a,{mapContainerStyle:{height:"50vh"},center:Y,zoom:10,onLoad:n,onUnmount:s},r.a.createElement(r.a.Fragment,null)):r.a.createElement(r.a.Fragment,null)}));a(133);var z=function(){return r.a.createElement("div",{className:'"py-6 px-4 sm:p-6 md:py-10 md:px-8"'},r.a.createElement("div",{class:"max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 shadow-lg"},r.a.createElement("div",{class:"relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1 "},r.a.createElement("h1",{class:"mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white"},"Beach House in Collingwood"),r.a.createElement("p",{class:"text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400"},"Entire house")),r.a.createElement("div",{class:"grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"},r.a.createElement("img",{src:"images/img-1.jpg",alt:"",class:"w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full",loading:"lazy"}),r.a.createElement("img",{src:"images/img-1.jpg",alt:"",class:"hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32",loading:"lazy"}),r.a.createElement("img",{src:"images/img-2.jpg",alt:"",class:"hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32",loading:"lazy"})),r.a.createElement("dl",{class:"mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"},r.a.createElement("dt",{class:"sr-only"},"Reviews"),r.a.createElement("dd",{class:"text-indigo-600 flex items-center dark:text-indigo-400"},r.a.createElement("svg",{width:"24",height:"24",fill:"none","aria-hidden":"true",class:"mr-1 stroke-current dark:stroke-indigo-500"},r.a.createElement("path",{d:"m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),r.a.createElement("span",null,"4.89 ",r.a.createElement("span",{class:"text-slate-400 font-normal"},"(128)"))),r.a.createElement("dt",{class:"sr-only"},"Location"),r.a.createElement("dd",{class:"flex items-center"},r.a.createElement("svg",{width:"2",height:"2","aria-hidden":"true",fill:"currentColor",class:"mx-3 text-slate-300"},r.a.createElement("circle",{cx:"1",cy:"1",r:"1"})),r.a.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"mr-1 text-slate-400 dark:text-slate-500","aria-hidden":"true"},r.a.createElement("path",{d:"M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"}),r.a.createElement("path",{d:"M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"})),"Collingwood, Ontario")),r.a.createElement("div",{class:"mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"},r.a.createElement("button",{type:"button",class:"bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"},"Check availability")),r.a.createElement("p",{class:"mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))};function A(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:" text-center font-sans text-4xl font-semibold p-1 text-red-500/80 shadow-inner"},"Your Trip Is Ready !!"),r.a.createElement("div",{className:"p-4"},r.a.createElement(F,null),r.a.createElement("div",{className:" pt-4 m-0 "},r.a.createElement(z,null))),r.a.createElement(S,null))}function P(){return r.a.createElement("div",{class:"w-full h-screen font-sans bg-cover bg-[url('images/bg-img.jpg')]"},r.a.createElement("div",{class:"container flex items-center justify-center flex-1 h-full mx-auto"},r.a.createElement("div",{class:"flex flex-col w-11/12 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"},r.a.createElement("div",{class:"self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white"},"Create a new account"),r.a.createElement("span",{class:"justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400"},"Already have an account ?",r.a.createElement("a",{class:"text-sm text-blue-500 underline hover:text-blue-700"},r.a.createElement(o.b,{to:"/sign-up"},"Sign in"))),r.a.createElement("div",{class:"p-6 mt-8"},r.a.createElement("form",{action:"#"},r.a.createElement("div",{class:"flex flex-col mb-2"},r.a.createElement("div",{class:" relative "},r.a.createElement("input",{type:"text",id:"create-account-pseudo",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",name:"pseudo",placeholder:"Email"}))),r.a.createElement("div",{class:"flex gap-4 mb-2"},r.a.createElement("div",{class:" relative "},r.a.createElement("input",{type:"text",id:"create-account-first-name",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",name:"First name",placeholder:"First name"})),r.a.createElement("div",{class:" relative "},r.a.createElement("input",{type:"text",id:"create-account-last-name",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",name:"Last name",placeholder:"Last name"}))),r.a.createElement("div",{class:"flex flex-col mb-2"},r.a.createElement("div",{class:" relative "},r.a.createElement("input",{type:"text",id:"create-account-email",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"New Password"})),r.a.createElement("div",{class:"flex flex-col mb-2 py-2"},r.a.createElement("div",{class:" relative "},r.a.createElement("input",{type:"text",id:"create-account-email",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"Confirm Password"})))),r.a.createElement("div",{class:"flex w-full my-4"},r.a.createElement("button",{type:"submit",class:"py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "},"Login")))))))}var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(u,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",exact:!0,element:r.a.createElement(C,null)}),r.a.createElement(T.a,{path:"/services",element:r.a.createElement(B,null)}),r.a.createElement(T.a,{path:"/plan",element:r.a.createElement(A,null)}),r.a.createElement(T.a,{path:"/sign-up",element:r.a.createElement(D,null)}),r.a.createElement(T.a,{path:"/places",element:r.a.createElement(G,null)}),r.a.createElement(T.a,{path:"/login",element:r.a.createElement(P,null)}))))};a(134);s.a.render(r.a.createElement(O,null),document.getElementById("root"))},36:function(e,t,a){},56:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.25b98634.chunk.js.map