(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-186fac83"],{"06b1":function(t,e,a){t.exports=a.p+"img/blog2.62a42d5f.jpg"},"22cd":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m_blog_box"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-4by3"},[t.blogDetails.postImage?a("atom-img",{attrs:{src:t.blogDetails.postImage}}):a("atom-img",{attrs:{src:t.src}})],1)]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("atom-b-subtitle",{staticClass:"is-size-4",attrs:{text:t.blogDetails.postTitle}}),a("atom-text",{staticClass:"is-size-6",attrs:{text:t.blogDetails.postSummary}}),a("atom-link",{staticClass:"is-size-6",attrs:{text:t.read}})],1)])])])},i=[],o=a("6cb1"),n=a("9aa5"),r=a("89fb"),l=a("abde"),c={components:{atomImg:o["a"],AtomBSubtitle:r["a"],AtomText:l["a"],AtomLink:n["a"]},name:"m-blog-box-details",props:["blogDetails"],data:function(){return{src:"https://bulma.io/images/placeholders/1280x960.png",subtitle:"This is subtitle for subheading",text:"This is paragraph written in blog please click the blog to see the th blog content in details.",read:"Read more.."}}},p=c,h=a("2877"),u=Object(h["a"])(p,s,i,!1,null,null,null);e["a"]=u.exports},"377f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_blog"},[a("t-main-blog",{attrs:{currBlog:t.currBlog,nextBlog:t.nextBlog}})],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"t_main_blog section"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"breadcrumb has-arrow-separator is-size-7",attrs:{"aria-label":"breadcrumbs"}},[a("ul",[a("li",[a("atom-router-link",{attrs:{text:t.home,link:t.hlink}})],1),a("li",[a("atom-router-link",{attrs:{text:t.blogs,link:t.blink}})],1),a("li",{staticClass:"is-active has-text-weight-semibold is-size-7"},[a("a",{attrs:{href:"#","aria-current":"page"}},[t._v(t._s(t.currBlog.postTitle))])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-9"},[a("article",[1==t.currBlog.id?a("BlogOne"):t._e(),2==t.currBlog.id?a("blog-2"):t._e()],1)]),a("o-recent",{staticClass:"column",attrs:{blogDetails:t.nextBlog,check:t.currBlog.id}})],1),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"}),a("o-comment",{staticClass:"column"}),a("div",{staticClass:"column is-3"})],1)])])},n=[],r=a("dec2"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"o_comment"},[a("atom-b-subtitle",{staticClass:"is-size-4 mb-2",attrs:{text:t.commentTitle}}),a("atom-textarea",{staticClass:"textarea mb-2"}),a("atom-input",{staticClass:"input mb-2"}),a("atom-input",{staticClass:"input mb-2"}),a("atom-button",{staticClass:"button is-warning is-pulled-right",attrs:{text:t.Submit}})],1)},c=[],p=a("3093"),h=a("f23f"),u=a("ed9a"),m=a("89fb"),g={components:{atomBSubtitle:m["a"],AtomTextarea:u["a"],AtomInput:h["a"],AtomButton:p["a"]},name:"o-comment",data:function(){return{commentTitle:"Leave A Comment",Submit:"Submit"}}},f=g,d=a("2877"),b=Object(d["a"])(f,l,c,!1,null,null,null),v=b.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"o_recent"},[a("atom-b-subtitle",{staticClass:"is-size-3 mb-2",attrs:{text:t.recent}}),a("hr"),t._l(t.blogDetail,(function(e){return a("m-blog-box-details",{key:e.id,attrs:{blogDetails:e},nativeOn:{click:function(a){return t.getBlog(e)}}})}))],2)},w=[],x=(a("4de4"),a("22cd")),y={components:{AtomBSubtitle:m["a"],MBlogBoxDetails:x["a"]},props:["blogDetails","check"],name:"o-recent",data:function(){return{recent:"Recent Posts"}},computed:{blogDetail:function(){var t=this;return this.blogDetails.filter((function(e){if(e.id!=t.check)return e}))}},methods:{getBlog:function(t){var e=JSON.parse(JSON.stringify(this.blogDetails));this.$router.push({name:"mainBlog",params:{id:"".concat(t.id),data:e,postImage:t.postImage,postSummary:t.postSummary,postTitle:t.postTitle}})}}},C=y,_=Object(d["a"])(C,k,w,!1,null,null,null),A=_.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrappermain"},[a("div",{staticClass:"mainp"},[a("br"),a("div",{staticClass:"content"},[a("p",{staticClass:"is-size-1 has-text-black has-text-left"},[t._v("Eliminating Traffic jams in India!")]),a("div",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{id:"authorDetails"}},[a("img",{staticClass:"round",attrs:{"data-url":t.dp}}),a("p",{staticClass:"is-size-6 has-text-success noBottomMargin"},[t._v("Nikhil Surya Mukhi")]),a("p",{staticClass:"is-size-6 has-text-dark noBottomMargin"},[t._v("Nov 2, 2020")]),a("p",{staticClass:"is-size-6 has-text-dark noBottomMargin"},[t._v("5 min read")]),a("p",{staticClass:"is-size-6 has-text-dark noBottomMargin"})]),a("hr"),a("img",{attrs:{src:"https://www.stevenvanbelleghem.com/wp-content/uploads/2020/04/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg"}}),a("br"),a("br"),a("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("In the recent years all over the globe production and demand for motor vehicles has increased dramatically. Earlier motor vehicles were a luxury only few can afford but now their prices have plummeted and its more easily available to the population. India for an example took about 60 years to acquire 100 million vehicles and the next 100 million vehicles were bought in the last 10 years !")]),a("br"),a("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("This sheer increase in vehicles has caused a strain on the roadways and parking infrastructure. Having such a high population and vehicle density in India only makes things worse. These problems elevate the risk of traffic jams in urban cities. With Bengaluru facing the worst traffic congestion in the world, Delhi, Mumbai and Pune remain in the top 10 source traffic congestion index.")]),a("br"),a("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("What causes a traffic jam ?")]),a("br"),a("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("There a numerous reasons for traffic jams like lack of proper infrastructure, office rush hours, illegal parkings and many more. Improper parkings beside roads/no parking zones are he main cause for traffic jams. Even the widest of roads have traffic jams because of illegal parkings. Widening the ones which face traffic jams are not so rewarding because empty roads means more room for people to park vehicles. Inadequate parking infrastructure is the reason to blame when people park their vehicles in no parking zones. Absence of a proper inventory for parking sites and the lack of awareness is the root of the cause.")]),a("br"),a("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("How can a smart parking platform help ?")]),a("br"),a("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("A smart parking system allows people to search and book a secure parking spot. This two features to search and book will allow people to plan where they park their vehicle in a secure parking zone. These two features can curb the problem of traffic jams. Car parking systems are equipped with smart sensors and devices which make the parking experience seamless which users will flock to experience.")]),a("br"),a("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("The new normal and how ParkSpot helps the cause.")]),a("br"),a("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("The COVID-19 pandemic shed light upon the problems in our day to day habits which aids in transmission of diseases. Social distancing, wearing of masks and hand sanitation have become a new normal withing our society. People are distancing themselves from other people. ParkSpot is a smart parking platform which allows users to search and book secure parking spots for long and short term. ParkSpot gives users a seamless and contact-less experience which users are searching for after the corona outbreak. ParkSpot also allow users to list out their free parking space into our platform which other users finding for a parking space can use. This will help our weak parking infrastructure in the battle to curb traffic congestion.")]),a("br"),a("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("Join hands with ParkSpot and help us win this fight against traffic jams")]),a("br"),t._m(0)]),a("br"),a("br")])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("send us mail to "),a("a",{attrs:{href:"mailto:connect@parkspot.in"}},[t._v("connect@parkspot.in")]),t._v(" to join list your parking spots in our platform.")])}],O={name:"Blog1",data:function(){return{dp:a("c294")}}},j=O,z=(a("f868"),Object(d["a"])(j,B,E,!1,null,"684d9c4c",null)),T=z.exports,S=a("9205"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"mainp"},[a("br"),a("div",{staticClass:"content"},[a("h1",{staticClass:"is-size-2"},[t._v("Parking Challenges in Office Area")]),a("div",{attrs:{id:"authorDetails"}},[a("img",{staticClass:"round",attrs:{src:t.dp,alt:""}}),a("p",{staticClass:"has-text-success is-size-6"},[t._v("Anonymous")]),a("p",{staticClass:"has-text-dark is-size-6"},[t._v("Aug 5, 2021")]),a("p",{staticClass:"has-text-dark is-size-6"},[t._v("5 min read")]),a("p")]),a("hr"),a("img",{attrs:{src:t.blogimg,alt:""}}),a("h1",[t._v("Parking Challenges in Office Area")]),a("p",[t._v(" Parking has been a major concern in major cities. Due to fewer parking spaces, people have to spend a lot of time searching for the right spot. Another concern is the parking charges. Especially when it comes to Bangalore downtown, the charges are so high that it’s getting difficult day by day to afford to park there. In spite of these issues, the majority of people prefer driving to the workplace than using public transport. They feel it is much more convenient. They do not have to depend on the specific timings of public transport and can leave whenever they want to. Also, many of them have additional duties such as picking/ dropping their kids to school while coming to the office. So, having their own car helps in multitasking. ")]),a("br"),a("p",[t._v(" For some of the employees parking near the office has become an everyday challenge especially in cities like Bangalore. Some of these challenges include: ")]),a("h2",[t._v("Parking Challenges:")]),t._m(0),a("br"),a("p",[t._v(" Though it would take time to resolve these issues, it’s always beneficial to take steps towards improvement. Some of the simple yet effective solutions are: ")]),a("h2",[t._v("Solutions:")]),t._m(1),a("br"),a("img",{attrs:{src:t.parkspotimg,alt:""}}),t._m(2),a("br"),a("br")])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[a("p",[t._v("Insufficient Parking spots.")])]),a("li",[a("p",[t._v(" No Parking option provided by offices, especially in downtowns. ")])]),a("li",[a("p",[t._v("Lack of spots for the clients and customers.")])]),a("li",[a("p",[t._v("Rule Violations.")])]),a("li",[a("p",[t._v("Inappropriate Parking ratio.")])]),a("li",[a("p",[t._v("A lot of time spent on finding a parking spot.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[a("p",[t._v(" Stacked Spaces: Parking cars one after the other in form of stacks. This would work if the one who has parked the car inside would leave later. But this can not be the case always. So, figuring out a method through which only those cars that leave later get parked inside can somehow help solve the parking issue and a lot more cars will get parked this way. This can be done through valley parking. ")])]),a("li",[a("p",[t._v(" Transportation Allowance: The company can help its employees by providing an allowance for public transport or uber. This will help in encouraging them to use public transport and avoid coming by personal car. ")])]),a("li",[a("p",[t._v(" Talk to your employees: Getting to know personal insights and feedback is very important. Speak to your employees on this, what challenges do they face, what solutions would help them in this situation. ")])]),a("li",[a("p",[t._v(" Using ParkSpot App: ParkSpot provides a digital parking solution. The app has an interactive map that provides real-time data and helps users find and book a parking spot. The best part is that this online solution is user friendly and free of cost. ParkSpot app is available on google play. Download the app for free and sign up. if you have any questions, just call at +91 80929 96057, or email at "),a("a",{attrs:{href:"mailto:connect@parkspot.in"}},[t._v("connect@parkspot.in")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Let us know if you also have similar parking issues, and what solution would you like to recommend to your office. You can write to us at "),a("a",{attrs:{href:"mailto:connect@parkspot.in"}},[t._v("connect@parkspot.in")])])}],D={name:"blog2",data:function(){return{dp:a("6c3f"),blogimg:a("06b1"),parkspotimg:a("c5e4")}}},P=D,U=(a("bf2a"),Object(d["a"])(P,R,I,!1,null,"ba47769c",null)),M=U.exports,K={name:"t-main-blog",components:{AtomRouterLink:r["a"],ORecent:A,OComment:v,BlogOne:T,OBlogBox:S["a"],Blog2:M},props:["currBlog","nextBlog"],data:function(){return{home:"Home",hlink:"Home",blogs:"Blogs",blink:"blog"}}},L=K,N=Object(d["a"])(L,o,n,!1,null,null,null),G=N.exports,H={components:{tMainBlog:G},name:"main-blog",data:function(){return{}},computed:{currBlog:function(){return this.$route.params},nextBlog:function(){var t=this.$route.params.data;return t}},methods:{check:function(){console.log("coming data",this.$route.params.data)}},created:function(){this.check()}},J=H,V=Object(d["a"])(J,s,i,!1,null,null,null);e["default"]=V.exports},"6c3f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="},"7f21":function(t,e,a){},9205:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"o_blog-box mx-6"},[a("div",{staticClass:"columns is-centered"},t._l(t.noOfBlog,(function(e){return a("m-blog-box-details",{key:e.id,staticClass:"column is-4",attrs:{blogDetails:e},nativeOn:{click:function(a){return t.getBlog(e)}}})})),1)])},i=[],o=a("22cd"),n={components:{mBlogBoxDetails:o["a"]},props:{noOfBlog:Array},name:"o-blog-box",methods:{getBlog:function(t){this.$router.push({name:"mainBlog",params:{id:"".concat(t.id),data:this.noOfBlog,postImage:t.postImage,postSummary:t.postSummary,postTitle:t.postTitle}})}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},"9aa5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:t.href}},[t._v(t._s(t.text))])},i=[],o={name:"atom-link",props:{href:String,text:String}},n=o,r=a("2877"),l=Object(r["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports},a21c:function(t,e,a){},bf2a:function(t,e,a){"use strict";var s=a("7f21"),i=a.n(s);i.a},c294:function(t,e,a){t.exports=a.p+"img/nik.216ef67a.jpg"},f868:function(t,e,a){"use strict";var s=a("a21c"),i=a.n(s);i.a}}]);