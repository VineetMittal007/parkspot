(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e01a045"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("a630"),a("fb6a"),a("0d03"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var r=a("6b75");function s(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r["a"])(t,e):void 0}}},"0d03":function(t,e,a){var r=a("6eeb"),s=Date.prototype,i="Invalid Date",n="toString",o=s[n],c=s.getTime;new Date(NaN)+""!=i&&r(s,n,(function(){var t=c.call(this);return t===t?o.call(this):i}))},"1d48":function(t,e,a){"use strict";var r=a("fae2"),s=a.n(r);s.a},"25f0":function(t,e,a){"use strict";var r=a("6eeb"),s=a("825a"),i=a("d039"),n=a("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=o;(u||d)&&r(RegExp.prototype,o,(function(){var t=s(this),e=String(t.source),a=t.flags,r=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?n.call(t):a);return"/"+e+"/"+r}),{unsafe:!0})},"277d":function(t,e,a){var r=a("23e7"),s=a("e8b5");r({target:"Array",stat:!0},{isArray:s})},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));a("277d");var r=a("6b75");function s(t){if(Array.isArray(t))return Object(r["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var n=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||i(t)||Object(n["a"])(t)||o()}},"2b87":function(t,e,a){"use strict";var r=a("bd1f"),s=a.n(r);s.a},"6b75":function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}a.d(e,"a",(function(){return r}))},"74c2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"discover_page"},[a("t-discover",{attrs:{cardData:t.cardData,searchedText:t.searchedText,show:t.show}})],1)},s=[],i=a("2909"),n=(a("96cf"),a("1da1")),o=a("dc59"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"t_discover"},[a("t-discover-banner",{staticClass:"mb-1"}),a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"breadcrumb has-arrow-separator is-size-7",attrs:{"aria-label":"breadcrumbs"}},[a("ul",[a("li",[a("atom-router-link",{attrs:{text:t.home,link:t.hlink}})],1),a("li",{staticClass:"is-active has-text-weight-semibold is-size-7"},[a("a",{attrs:{href:"#","aria-current":"page"}},[t._v("Parking near "+t._s(t.place)+" ")])])])]),a("br"),a("atom-text",{staticClass:"has-text-weight-semibold",attrs:{text:t.card_title,textRight:t.show?t.emptyMsg:""}}),a("figure",{staticClass:"mt-2",staticStyle:{"text-align":"center"}},[t.show?a("atom-img",{staticStyle:{width:"250px"},attrs:{src:t.emptyImg}}):t._e()],1),a("br"),t.show?t._e():a("div",{staticClass:"columns"},t._l(t.cardData,(function(e){return a("m-srpcard",{key:e.ID,staticClass:"column",attrs:{img:e.IconURL,location:e.Address.slice(0,36)+(e.Address.slice(36).length>0?t.filler:t.empty),rate:e.Fee.Amount,slots:e.SlotsAvailable,title:e.Name.slice(0,24)+(e.Name.slice(24).length>0?t.filler:t.empty),vehicle:e.VehicleType,rating:e.Rating,distance:e.Distance,"site-id":e.ID,disabled:0===e.SlotsAvailable}})})),1),a("br"),a("br"),a("m-discover",{attrs:{searchedText:t.place}}),a("br"),a("br")],1)])],1)},l=[],u=(a("c975"),a("6cb1")),d=a("dec2"),f=a("914b"),m=a("abde"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m_discover"},[a("atom-text",{staticClass:"is-size-4 is-size-5-mobile has-text-weight-semibold mb-2",attrs:{"text-left":t.discover_text,text:t.searchedText}}),a("atom-text",{staticClass:"is-size-6 is-size-7-mobile mb-2 ps_line",attrs:{text:t.discover_para}}),a("atom-text",{staticClass:"is-size-6 is-size-7-mobile ps_line",attrs:{text:t.discover_para2}})],1)},p=[],b=(a("99af"),{components:{AtomText:m["a"]},props:{searchedText:String},computed:{discover_para:function(){return"\n Searching parking space near ".concat(this.searchedText,"  ? Book the cheap and best space for yourself near  ").concat(this.searchedText,"  with ParkSpot.\n       With us, you can leave the uncertainty of not finding parking space for your Car or Bike. \n       We do short term as well as long term parking as per your need with the minimum cost. \n       Choose the new way of parking near  ").concat(this.searchedText,"  , choose the smart way of parking, CHOOSE ParkSpot .\n       Think about the stress avoided, fuel & time saved.")}},name:"m-discover",data:function(){return{discover_text:"Find and book parking spaces near ",discover_para2:"\n    Want to earn extra money? Rent your vacant space at our platform and start earning extra."}}}),v=b,g=(a("1d48"),a("2877")),x=Object(g["a"])(v,h,p,!1,null,"efe14036",null),y=x.exports,C=a("b5cf"),S=a("8303"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"t_discover_banner"},[a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("atom-b-title",{staticClass:"is-size-3 is-size-4-mobile has-text-weight-bold",attrs:{text:t.banner_title}}),a("br"),a("m-search-box",{staticClass:"search",attrs:{results:t.results},on:{search:t.search,flytosrp:t.flytoSrp}})],1)])])},k=[],A=(a("d81d"),a("d3b7"),{components:{atomBTitle:f["a"],MSearchBox:C["a"]},name:"t-discover-banner",data:function(){return{banner_title:"Book Your Parking Spot",cresults:"",results:""}},methods:{getLocation:function(t){this.userForm.mapPosLat=t.lat,this.userForm.mapPosLng=t.lng},onSubmit:function(){console.log(this.userForm),this.toggle=!0,this.$emit("submit",this.userForm)},search:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.length){a.next=3;break}return e.results=[],a.abrupt("return");case 3:return a.next=5,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(t,".json?access_token=pk.eyJ1IjoiaWFtZmlhc2NvIiwiYSI6ImNrOWZiankzdjA5d2kzbWp3NGNzNmIwaHAifQ.E2UwYdvpjc6yNoCmBjfTaQ&proximity=77.4977,12.9716"));case 5:return r=a.sent,a.next=8,r.json();case 8:s=a.sent,e.cresults=s.features,e.results=s.features.map((function(t){return t.place_name}));case 11:case"end":return a.stop()}}),a)})))()},flytoSrp:function(t){for(var e=null,a=null,r=0;r<this.cresults.length;r++)if(this.cresults[r].place_name===t){e=this.cresults[r].center[0],a=this.cresults[r].center[1];break}this.$router.push({name:"srp",query:{lat:a,lng:e,loc:t}})["catch"]((function(t){}))}}}),_=A,O=(a("d467"),Object(g["a"])(_,w,k,!1,null,"f0bd3262",null)),T=O.exports,j={components:{mSearchBox:C["a"],MSrpcard:S["a"],MDiscover:y,AtomRouterLink:d["a"],AtomText:m["a"],AtomBTitle:f["a"],TDiscoverBanner:T,AtomImg:u["a"]},name:"t-discover",props:{cardData:Array,searchedText:String,show:Boolean},computed:{place:function(){var t=this.searchedText.indexOf("/");return t>0?this.searchedText.substring(0,t):this.searchedText}},data:function(){return{home:"Home",hlink:"Home",card_title:"Parking near you",filler:"...",empty:"",emptyImg:a("c5ac"),emptyMsg:" is currently not available!!"}}},z=j,I=(a("2b87"),Object(g["a"])(z,c,l,!1,null,"5fb2f14f",null)),D=I.exports,R={components:{tDiscover:D},name:"discover-page",data:function(){return{cardData:[],searchedText:"",show:!1}},mounted:function(){this.getPageData(),this.searchedText=this.$route.params.pathMatch},methods:{getPageData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(o["d"])(o["b"]),r=Object(o["e"])(a),e.next=4,Object(o["c"])(Object(o["a"])(r,"seo-pages/".concat(t.$route.params.pathMatch))).then((function(e){if(e.exists())return e.val();console.log("No data available"),t.show=!t.show}))["catch"]((function(t){console.error(t)}));case 4:s=e.sent,t.cardData=Object(i["a"])(s.Sites),console.log(s);case 7:case"end":return e.stop()}}),e)})))()}}},B=R,E=Object(g["a"])(B,r,s,!1,null,"2547dab0",null);e["default"]=E.exports},8303:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m_srpcard"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column"},[a("div",{staticClass:"columns"},[a("atom-b-title",{staticClass:"column is-size-6 has-text-weight-semibold",attrs:{text:t.title},nativeOn:{click:function(e){return t.logging(e)}}})],1),a("div",{staticClass:"columns"},[a("atom-text",{staticClass:"column is-size-7",attrs:{"text-left":t.card.location,text:t.location}})],1),a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column"},[a("atom-text",{staticClass:"is-size-7",attrs:{"text-left":t.card.rate,text:t.rate}})],1),a("div",{staticClass:"column"},[a("atom-text",{staticClass:"is-size-7",attrs:{"text-left":t.card.distance,text:t.distance,"text-right":t.card.distanceUnit}})],1)]),a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column"},[a("atom-text",{staticClass:"is-size-7",attrs:{"text-left":t.card.type,text:t.vehicle}})],1),a("div",{staticClass:"column"},[a("atom-text",{staticClass:"is-size-7",attrs:{"text-left":t.card.slot,text:t.slots}})],1)]),a("div",{staticClass:"columns is-mobile"},[a("atom-text",{staticClass:"column is-size-7",attrs:{"text-left":t.card.starRating,text:t.rating,"text-right":t.card.trating}})],1)]),a("div",{staticClass:"column is-3 is-align-content-center ps_center"},[a("atom-img",{staticClass:"image mb-3",attrs:{src:t.img}}),a("atom-button",{staticClass:"button is-small is-rounded is-warning",attrs:{text:t.button,disabled:t.disabled},nativeOn:{click:function(e){return t.onBook()}}})],1)])])]),a("br")])},s=[],i=a("3093"),n=a("6cb1"),o=a("914b"),c=a("abde"),l=a("3473"),u={components:{atomBTitle:o["a"],AtomText:c["a"],AtomImg:n["a"],AtomButton:i["a"],AtomBoxicon:l["a"]},name:"m-srpcard",props:{log:Object,title:String,rate:String,distance:String,location:String,vehicle:String,slots:String,img:String,rating:String,siteId:String,disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{button:"Book",card:{starRating:"Rating: ",trating:"/5 ★",rate:"Rate: ₹",distance:"Distance: ",distanceUnit:"Km",type:"Type: ",slot:"Spot Available: ",location:"📍 "}}},methods:{onBook:function(){this.$emit("on-book",this.siteId)},logging:function(){console.log(this.log)}}},d=u,f=(a("f3f6"),a("2877")),m=Object(f["a"])(d,r,s,!1,null,"3ce1a86c",null);e["a"]=m.exports},aa50:function(t,e,a){},bd1f:function(t,e,a){},c5ac:function(t,e,a){t.exports=a.p+"img/empty.c57cd8b4.png"},c975:function(t,e,a){"use strict";var r=a("23e7"),s=a("4d64").indexOf,i=a("a640"),n=a("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),u=n("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,e,a){var r=a("746f");r("iterator")},d467:function(t,e,a){"use strict";var r=a("e5ce"),s=a.n(r);s.a},ddb0:function(t,e,a){var r=a("da84"),s=a("fdbc"),i=a("e260"),n=a("9112"),o=a("b622"),c=o("iterator"),l=o("toStringTag"),u=i.values;for(var d in s){var f=r[d],m=f&&f.prototype;if(m){if(m[c]!==u)try{n(m,c,u)}catch(p){m[c]=u}if(m[l]||n(m,l,d),s[d])for(var h in i)if(m[h]!==i[h])try{n(m,h,i[h])}catch(p){m[h]=i[h]}}}},e01a:function(t,e,a){"use strict";var r=a("23e7"),s=a("83ab"),i=a("da84"),n=a("5135"),o=a("861d"),c=a("9bf2").f,l=a("e893"),u=i.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var m=f.prototype=u.prototype;m.constructor=f;var h=m.toString,p="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=h.call(t);if(n(d,t))return"";var a=p?e.slice(7,-1):e.replace(b,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:f})}},e260:function(t,e,a){"use strict";var r=a("fc6a"),s=a("44d2"),i=a("3f8c"),n=a("69f3"),o=a("7dd0"),c="Array Iterator",l=n.set,u=n.getterFor(c);t.exports=o(Array,"Array",(function(t,e){l(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,a=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==a?{value:r,done:!1}:"values"==a?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,s("keys"),s("values"),s("entries")},e5ce:function(t,e,a){},f3f6:function(t,e,a){"use strict";var r=a("aa50"),s=a.n(r);s.a},fae2:function(t,e,a){},fb6a:function(t,e,a){"use strict";var r=a("23e7"),s=a("861d"),i=a("e8b5"),n=a("23cb"),o=a("50c4"),c=a("fc6a"),l=a("8418"),u=a("b622"),d=a("1dde"),f=a("ae40"),m=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),b=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!m||!h},{slice:function(t,e){var a,r,u,d=c(this),f=o(d.length),m=n(t,f),h=n(void 0===e?f:e,f);if(i(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?s(a)&&(a=a[p],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return b.call(d,m,h);for(r=new(void 0===a?Array:a)(v(h-m,0)),u=0;m<h;m++,u++)m in d&&l(r,u,d[m]);return r.length=u,r}})}}]);