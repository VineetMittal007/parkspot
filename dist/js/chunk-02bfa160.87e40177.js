(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02bfa160"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a630"),a("fb6a"),a("0d03"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var r=a("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r["a"])(t,e):void 0}}},"14f8":function(t,e,a){t.exports=a.p+"img/features-tick.396ee303.svg"},"277d":function(t,e,a){var r=a("23e7"),i=a("e8b5");r({target:"Array",stat:!0},{isArray:i})},"3d1e":function(t,e,a){},"6b75":function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}a.d(e,"a",(function(){return r}))},"9da2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("t-features-page")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("m-features-main-heading"),a("div",{staticClass:"columns is-flex-wrap-wrap is-3"},t._l(t.featuresData,(function(e){return a("div",{key:e.id,staticClass:"features-card column is-half"},[a("transition",{attrs:{name:"expand"}},[e.textLimit?a("m-features-details",{class:e.textLimit?"feature-card__details":"",attrs:{"features-title":e.title,"features-text":e.text.substring(0,300)+"..."}}):t._e(),e.textLimit?t._e():a("m-features-details",{class:e.textLimit?"feature-card__details":"",attrs:{"features-title":e.title,"features-text":e.text}})],1),e.textLimit?a("p",{staticClass:"feature-card__show",on:{click:function(a){return t.expand(e.id)}}},[t._v(" Show more ")]):t._e(),e.textLimit?t._e():a("p",{staticClass:"feature-card__hide",on:{click:function(a){return t.expand(e.id)}}},[t._v(" Show Less ")])],1)})),0)],1)},s=[],o=a("5530"),l=a("b85c"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-features-details"},[a("atom-img",{staticClass:"m-features-details__img",attrs:{src:t.src}}),a("atom-b-subtitle",{staticClass:"m-features-details__title",attrs:{text:t.featuresTitle}}),a("br"),a("p",{staticClass:"m-features-details__text",domProps:{innerHTML:t._s(t.featuresText)}})],1)},u=[],p=a("6cb1"),d=a("89fb"),f={name:"MFeaturesDetails",components:{atomBSubtitle:d["a"],AtomImg:p["a"]},props:{featuresTitle:String,featuresText:String},data:function(){return{src:a("14f8")}}},h=f,m=(a("bd1f"),a("2877")),b=Object(m["a"])(h,c,u,!1,null,"f6cd0d78",null),g=b.exports,v=a("5991"),k={name:"TFeaturesPage",components:{MFeaturesDetails:g,MFeaturesMainHeading:v["a"]},data:function(){return{featuresData:[{id:1,title:"Navigation",text:"It is very difficult to go to an unknown place. \n          People usually search on Google Maps to reach a particular          location but sometimes it happens that people don’t get          the exact address from the map.It is easy to find places          like malls, hospitals, and much more popular sites, but           when it comes to finding a specific location like a house,           it’s really hard.<br> <br> ParkSpot helps in this situation.           ParkSpot stores the exact location of the parking location           and gives a navigation feature that will direct the ParkSpot           user to navigate to the desired parking space.This easy-finding           feature helps let users experience a hassle-free parking experience.",textLimit:!0},{id:2,title:"Booking",text:"Who doesn’t want to reserve a spot? It is easy to park           vehicles beside the roadside but everyone knows what might be           the consequences.The usual consequences will be that the user’s           vehicle might get towed away. Just like people going to Movie           Theatres after booking a ticket so that they don’t need to worry           about the availability of tickets after going to the Theatre, users           can also book their car parking space by using our platform and           will be assured that there will be a parking space reserved for           their vehicles. <br> <br> ParkSpot helps in this situation. Our platform           provides short term booking as well as long term rental booking.           So if people want to go out of the station for a few days and people           who do not have a parking area in their apartment and do not have           a parking spot to keep their vehicle, they may not be able to           afford airport parking rates and malls do not allow longtime booking.           ParkSpot can be of help in this situation. ParkSpot helps users to book           the best, cheap and secure parking space for the long term at a very reasonable price.",textLimit:!0},{id:3,title:"Searching",text:"People love their cars and hence they would want to keep their           vehicles in a safe and secure parking area. They would want a parking           area where there will be security guards, CCTV cameras, etc. ParkSpot           provides a genuine and authentic parking space for its users so that           no mishappening will be done to the user’s property. ParkSpot provides           security to private property as well so that users don’t need to worry           about the place where they are keeping their vehicles.",textLimit:!0},{id:4,title:"Safety & Security",text:"People go to places like shopping malls, hospitals, and many local           areas with their cars, without thinking that there may not be available car           parking spaces. Maps can help you search popular sites but ParkSpot along           with search provides additional information like current availability,           rates, distance, etc. ParkSpot also helps users to search apartment parking areas.",textLimit:!0}]}},methods:{expand:function(t){var e,a=[],r=Object(l["a"])(this.featuresData);try{for(r.s();!(e=r.n()).done;){var i=e.value;i.id===t?(i=Object(o["a"])(Object(o["a"])({},i),{},{textLimit:!i.textLimit}),a.push(i)):a.push(i)}}catch(n){r.e(n)}finally{r.f()}this.featuresData=a}}},y=k,w=(a("a455"),Object(m["a"])(y,n,s,!1,null,"28038bbd",null)),x=w.exports,_={name:"Features",components:{tFeaturesPage:x}},S=_,P=Object(m["a"])(S,r,i,!1,null,"017bf102",null);e["default"]=P.exports},a455:function(t,e,a){"use strict";var r=a("ed95"),i=a.n(r);i.a},b85c:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a4d3"),a("e01a"),a("d28b"),a("277d"),a("d3b7"),a("3ca3"),a("ddb0");var r=a("06c5");function i(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){l=!0,s=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(l)throw s}}}}},bd1f:function(t,e,a){"use strict";var r=a("3d1e"),i=a.n(r);i.a},ed95:function(t,e,a){}}]);