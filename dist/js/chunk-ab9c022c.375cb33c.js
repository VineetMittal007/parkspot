(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab9c022c"],{"06c5":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("a630"),a("fb6a"),a("0d03"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var s=a("6b75");function i(e,t){if(e){if("string"===typeof e)return Object(s["a"])(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(s["a"])(e,t):void 0}}},"0d03":function(e,t,a){var s=a("6eeb"),i=Date.prototype,r="Invalid Date",n="toString",o=i[n],c=i.getTime;new Date(NaN)+""!=r&&s(i,n,(function(){var e=c.call(this);return e===e?o.call(this):r}))},"171b":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select select_rounded"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"select_rounded select_padding",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.currentValue=t.target.multiple?a:a[0]}}},e._l(e.values,(function(t,s){return a("option",{key:s,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)])},i=[],r={props:{disabled:Boolean,value:String,values:{type:Array,default:function(){return["option to be selected"]}}},name:"atom_select",computed:{currentValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},n=r,o=(a("6254"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,"37cffc7c",null);t["a"]=c.exports},"25f0":function(e,t,a){"use strict";var s=a("6eeb"),i=a("825a"),r=a("d039"),n=a("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),m=l.name!=o;(u||m)&&s(RegExp.prototype,o,(function(){var e=i(this),t=String(e.source),a=e.flags,s=String(void 0===a&&e instanceof RegExp&&!("flags"in c)?n.call(e):a);return"/"+t+"/"+s}),{unsafe:!0})},"277d":function(e,t,a){var s=a("23e7"),i=a("e8b5");s({target:"Array",stat:!0},{isArray:i})},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("277d");var s=a("6b75");function i(e){if(Array.isArray(e))return Object(s["a"])(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var n=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||r(e)||Object(n["a"])(e)||o()}},"339e":function(e,t,a){"use strict";var s=function(){for(var e=document.querySelectorAll("script"),t=0;t<e.length;t++)if("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"===e[t].src)return void console.log(e[t].src);var a=document.createElement("script");a.setAttribute("src","https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"),document.head.appendChild(a)};t["a"]={addMapboxScript:s}},"33b5":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"m_mapbox"}})},i=[],r=(a("99af"),a("d81d"),a("b0c0"),a("a9e3"),{name:"m-mapbox",props:{data:Array,center:Array,popupInfo:Array,zoom:{type:Number,default:function(){return 11}},drag:{type:Boolean,default:function(){return!1}}},data:function(){return{map:"",ltlng:"",img:a("c5e4")}},mounted:function(){var e=this;mapboxgl.accessToken="pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiY2p4bHd1OXdpMGFycDN0bzFiNWR4d2VyNyJ9.3hQjvgyoPoCuRx-Hqr_BFQ",this.repaint(this.center),console.log("this is popup"),console.log(this.popupInfo);var t=new mapboxgl.Popup({offset:25}).setHTML("<h1><b>Your current/searched location</b></h1>"),a=new mapboxgl.Marker({draggable:this.drag}).setPopup(t).setLngLat(this.center).addTo(this.map);"VOPortal"===this.$route.name&&this.map.on("click",(function(s){a.setPopup(t).setLngLat(s.lngLat).addTo(e.map)}));var s=a.getLngLat();this.ltlng=s,this.$emit("location",this.ltlng);for(var i=0;i<this.data.length;i++){var r=document.createElement("div");r.className="marker",r.style.backgroundImage="url("+this.img+")",r.style.width="50px",r.style.height="50px",r.style.backgroundSize="110%";var n=new mapboxgl.Popup({offset:25}).setHTML("<h1><b>".concat(this.popupInfo[i].Name,"</b></h1><h2>Distance : ").concat(this.popupInfo[i].Distance," Km</h2>"));new mapboxgl.Marker(r,{draggable:this.drag}).setPopup(n).setLngLat(this.data[i]).addTo(this.map)}},methods:{repaint:function(e){this.map=new mapboxgl.Map({container:"m_mapbox",style:"mapbox://styles/mapbox/dark-v10",center:e,zoom:this.zoom})}}}),n=r,o=(a("4b4e"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,"6f82c07c",null);t["a"]=c.exports},"4b4e":function(e,t,a){"use strict";var s=a("7768"),i=a.n(s);i.a},6254:function(e,t,a){"use strict";var s=a("8a6c"),i=a.n(s);i.a},"6b5c":function(e,t,a){"use strict";var s=a("7654"),i=a.n(s);i.a},"6b75":function(e,t,a){"use strict";function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=new Array(t);a<t;a++)s[a]=e[a];return s}a.d(t,"a",(function(){return s}))},7654:function(e,t,a){},"766a":function(e,t,a){e.exports=a.p+"img/request-sent.d815e091.svg"},7768:function(e,t,a){},"8a6c":function(e,t,a){},9258:function(e,t,a){"use strict";var s=a("c2c8"),i=a.n(s);i.a},a435:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new_portal"},[e.show?e._e():a("t-so-portal",{attrs:{mapShow:e.mapShow},on:{submit:e.onSubmit}}),e.show?a("div",{staticClass:"ps_thank"},[a("atom-img",{attrs:{src:e.img}}),a("atom-b-title",{staticClass:"is-size-3",attrs:{text:e.msg}}),a("atom-b-subtitle",{staticClass:"is-size-4",attrs:{text:e.msg2}})],1):e._e(),a("br")],1)},i=[],r=(a("d3b7"),a("4795"),a("96cf"),a("1da1")),n=a("6cb1"),o=a("89fb"),c=a("914b"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"t_so_portal section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),a("div",{staticClass:"column is-6"},[a("o-so-details",{attrs:{mapShow:e.mapShow},on:{submit:e.onSubmit}})],1),a("div",{staticClass:"column"})])])])},u=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"o_so_details"},[a("div",{staticClass:"ps_center"},[a("atom-b-title",{staticClass:"is-size-3 is-size-5-mobile",attrs:{text:e.title}})],1),a("br"),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:e.contact.fullName,required:e.required},model:{value:e.userForm.fullName,callback:function(t){e.$set(e.userForm,"fullName",t)},expression:"userForm.fullName"}})],1),a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:e.contact.email,types:e.contact.emailType},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:e.contact.mno,required:e.required,types:e.contact.mobileType},model:{value:e.userForm.mno,callback:function(t){e.$set(e.userForm,"mno",t)},expression:"userForm.mno"}})],1)]),e._m(1),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("atom-select",{staticClass:"select",attrs:{values:e.address.countryList},model:{value:e.userForm.country,callback:function(t){e.$set(e.userForm,"country",t)},expression:"userForm.country"}})],1),a("div",{staticClass:"column"},[a("atom-select",{staticClass:"select",attrs:{values:e.address.stateList},model:{value:e.userForm.state,callback:function(t){e.$set(e.userForm,"state",t)},expression:"userForm.state"}})],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:e.address.City,required:e.required},model:{value:e.userForm.city,callback:function(t){e.$set(e.userForm,"city",t)},expression:"userForm.city"}})],1),a("div",{staticClass:"column"},[a("m-search-box",{attrs:{results:e.results,fieldName:e.address.location},on:{search:e.search,flytosrp:e.flytosrp}})],1)]),a("div",[a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v("Map:Drag the Marker to pin point your location ")]),e.mapShow?a("m-mapbox",{key:e.map.key,staticStyle:{height:"350px"},attrs:{center:e.center,data:e.marker,zoom:e.zoom,drag:e.map.drag},on:{location:e.getLocation}}):e._e()],1),a("br"),a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v("Are you the Owner of the Spot?")]),a("br"),a("div",{staticClass:"control"},[a("label",{staticClass:"radio",attrs:{for:"yes"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ownershipPicked,expression:"ownershipPicked"}],attrs:{type:"radio",id:"yes",value:"yes"},domProps:{checked:e._q(e.ownershipPicked,"yes")},on:{change:function(t){e.ownershipPicked="yes"}}}),e._v(" Yes")]),a("br"),a("label",{staticClass:"radio",attrs:{for:"no"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ownershipPicked,expression:"ownershipPicked"}],attrs:{type:"radio",id:"no",value:"no"},domProps:{checked:e._q(e.ownershipPicked,"no")},on:{change:function(t){e.ownershipPicked="no"}}}),e._v(" No")])]),a("br"),"no"===e.ownershipPicked?a("div",[e._m(2),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:e.contact.fullName,required:e.required},model:{value:e.owner.fullName,callback:function(t){e.$set(e.owner,"fullName",t)},expression:"owner.fullName"}})],1),a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:e.contact.email,types:e.contact.emailType},model:{value:e.owner.email,callback:function(t){e.$set(e.owner,"email",t)},expression:"owner.email"}})],1),a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:e.contact.mno,required:e.required,types:e.contact.mobileType},model:{value:e.owner.mno,callback:function(t){e.$set(e.owner,"mno",t)},expression:"owner.mno"}})],1)])]):e._e(),a("br"),a("div",[a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v("Ownership Proof")]),a("atom-select",{staticClass:"select",attrs:{values:e.ownershipList},model:{value:e.ownershipDefault,callback:function(t){e.ownershipDefault=t},expression:"ownershipDefault"}}),a("br"),a("br"),a("div",{staticStyle:{"border-style":"solid"},on:{dragover:function(e){e.preventDefault()},drop:function(e){e.preventDefault()}}},[a("input",{attrs:{type:"file",multiple:""},on:{change:e.uploadFile}}),a("div",{staticStyle:{"background-color":"green","margin-bottom":"10px",padding:"10px"},on:{drop:e.dragFile}},[e._v(" Or drag the file here "),e.ownershipFile.length?a("div",e._l(e.ownershipFile,(function(t){return a("ul",{key:t},[a("li",[e._v(e._s(t.name))])])})),0):e._e()])])],1),a("br"),a("br"),a("div",[a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v("Amenities")]),a("br"),a("div",{staticClass:"columns is-flex-wrap-wrap"},[a("div",{staticClass:"column is-one-third"},[a("label",{staticClass:"checkbox",attrs:{for:"Covered"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedAmenities,expression:"checkedAmenities"}],attrs:{type:"checkbox",id:"Covered",value:"Covered"},domProps:{checked:Array.isArray(e.checkedAmenities)?e._i(e.checkedAmenities,"Covered")>-1:e.checkedAmenities},on:{change:function(t){var a=e.checkedAmenities,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r="Covered",n=e._i(a,r);s.checked?n<0&&(e.checkedAmenities=a.concat([r])):n>-1&&(e.checkedAmenities=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedAmenities=i}}}),e._v(" Covered")])]),a("div",{staticClass:"column is-one-third"},[a("label",{staticClass:"checkbox",attrs:{for:"Gated"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedAmenities,expression:"checkedAmenities"}],attrs:{type:"checkbox",id:"Gated",value:"Gated"},domProps:{checked:Array.isArray(e.checkedAmenities)?e._i(e.checkedAmenities,"Gated")>-1:e.checkedAmenities},on:{change:function(t){var a=e.checkedAmenities,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r="Gated",n=e._i(a,r);s.checked?n<0&&(e.checkedAmenities=a.concat([r])):n>-1&&(e.checkedAmenities=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedAmenities=i}}}),e._v(" Gated")])]),a("div",{staticClass:"column is-one-third"},[a("label",{staticClass:"checkbox",attrs:{for:"CCTV"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedAmenities,expression:"checkedAmenities"}],attrs:{type:"checkbox",id:"CCTV",value:"CCTV"},domProps:{checked:Array.isArray(e.checkedAmenities)?e._i(e.checkedAmenities,"CCTV")>-1:e.checkedAmenities},on:{change:function(t){var a=e.checkedAmenities,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r="CCTV",n=e._i(a,r);s.checked?n<0&&(e.checkedAmenities=a.concat([r])):n>-1&&(e.checkedAmenities=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedAmenities=i}}}),e._v(" CCTV Camera")])]),a("div",{staticClass:"column is-one-third"},[a("label",{staticClass:"checkbox",attrs:{for:"Security Guard"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedAmenities,expression:"checkedAmenities"}],attrs:{type:"checkbox",id:"Security Guard",value:"Security Guard"},domProps:{checked:Array.isArray(e.checkedAmenities)?e._i(e.checkedAmenities,"Security Guard")>-1:e.checkedAmenities},on:{change:function(t){var a=e.checkedAmenities,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r="Security Guard",n=e._i(a,r);s.checked?n<0&&(e.checkedAmenities=a.concat([r])):n>-1&&(e.checkedAmenities=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedAmenities=i}}}),e._v(" Security Guard")])]),a("div",{staticClass:"column is-one-third"},[a("label",{staticClass:"checkbox",attrs:{for:"others"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedAmenities,expression:"checkedAmenities"}],attrs:{type:"checkbox",id:"others",value:"others"},domProps:{checked:Array.isArray(e.checkedAmenities)?e._i(e.checkedAmenities,"others")>-1:e.checkedAmenities},on:{change:function(t){var a=e.checkedAmenities,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r="others",n=e._i(a,r);s.checked?n<0&&(e.checkedAmenities=a.concat([r])):n>-1&&(e.checkedAmenities=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedAmenities=i}}}),e._v(" others")])])]),a("br")]),a("div",[a("atom-select",{staticClass:"select",attrs:{values:e.nofspot},model:{value:e.nofspotDefault,callback:function(t){e.nofspotDefault=t},expression:"nofspotDefault"}})],1),a("br"),a("div",[a("atom-select",{staticClass:"select",attrs:{values:e.durationList},model:{value:e.durationDefault,callback:function(t){e.durationDefault=t},expression:"durationDefault"}})],1),a("br"),a("div",[a("atom-input",{staticClass:"input",attrs:{placeholder:"Expected Monthly Rent(Exclusive our Service Charge)",required:e.required},model:{value:e.rent,callback:function(t){e.rent=t},expression:"rent"}})],1),a("br"),a("div",[a("label",{staticClass:"checkbox",attrs:{for:"terms"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox",id:"terms",value:"terms"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,"terms")>-1:e.terms},on:{change:function(t){var a=e.terms,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r="terms",n=e._i(a,r);s.checked?n<0&&(e.terms=a.concat([r])):n>-1&&(e.terms=a.slice(0,n).concat(a.slice(n+1)))}else e.terms=i}}}),e._v(" I agree to the"),a("router-link",{attrs:{target:"_blank",to:{name:"Terms"}}},[e._v(" TERMS AND CONDITIONS")])],1)]),a("br"),a("div",{staticClass:"ps_center"},[a("atom-button",{staticClass:"button is-warning",class:{"is-loading":e.toggle},attrs:{text:e.submit}})],1)])])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v("Contact Details "),a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" :")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v("Address "),a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" :")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v("Owner's Contact Details "),a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" :")])}],p=a("3093"),h=a("f23f"),f=a("171b"),v=a("da41"),b=a("33b5"),y=a("b5cf"),g=a("eeb7"),k={components:{atomInput:h["a"],atomSelect:f["a"],AtomButton:p["a"],AtomBTitle:c["a"],MMapbox:b["a"],MSearchBox:y["a"],MContactDetails:v["a"]},emits:["submit"],props:{mapShow:Boolean},name:"o-so-details",mixins:[g["a"]],data:function(){return{title:"Fill the form to Register your Parking Spot",ownershipPicked:"",owner:{fullName:"",email:"",mno:""},ownershipDefault:"Aadhar Card",ownershipList:["Aadhar Card","Electricity Bill","Rent Agreement","Passport","Driving License","Other..."],ownershipFile:[],checkedAmenities:[],nofspotDefault:"No. of Spot available",nofspot:["No. of Spot available","1","2","3","4","5","6","7","8","9","10+"],durationDefault:"Minimum Duration if Any",durationList:["Minimum Duration if Any","Less than 1 Month","1 - 3 Month","3 - 6 Month","6 - 9 Month","More than 9 Month"],terms:"",rent:""}},methods:{onSubmit:function(){var e={UserName:"dummy_"+this.userForm.fullName,Password:"dummy@123",FullName:this.userForm.fullName,City:this.userForm.City,EmailID:this.userForm.email},t={Username:"dummy_"+this.userForm.fullName,Password:"dummy@123"},a={ContactNo:this.userForm.mno,UserName:this.userForm.fullName,Owner:"yes"===this.ownershipPicked,OwnerName:this.owner.fullName,OwnerContactNo:this.owner.mno,Relationship:"n/a--hardcoded",OwnershipDocument:"n/a--hardcoded",IdentityDocument:"n/a--hardcoded",OwnershipDocumentImage:this.ownershipFile,IdentityDocumentImage:[1,2,3]},s={User:{UserName:"noorVO",FullName:this.userForm.fullName,City:this.userForm.city,EmailID:this.userForm.email,Mobile:this.userForm.mno},Flavour:"dweb",Comments:"Spot Registered",RentDetails:{VehicleType:"",Rate:this.rent,MinBookingDuration:this.durationDefault,Availability:"",SpecialService:this.checkedAmenities,TnC:this.terms,Address:this.userForm.location}};console.log("this is the data"),console.log(s),this.$emit("submit",e,t,a,s)},uploadFile:function(e){this.ownershipFile=e.target.files},dragFile:function(e){this.ownershipFile=e.dataTransfer.files}}},C=k,A=(a("cde1"),a("2877")),w=Object(A["a"])(C,m,d,!1,null,"648a167c",null),x=w.exports,_={components:{oSoDetails:x},name:"t-so-portal",emits:["submit"],props:{mapShow:Boolean},methods:{onSubmit:function(e,t,a,s){this.$emit("submit",e,t,a,s)}}},S=_,N=(a("6b5c"),Object(A["a"])(S,l,u,!1,null,"73546174",null)),F=N.exports,O=a("339e"),P={components:{tSoPortal:F,AtomImg:n["a"],AtomBTitle:c["a"],AtomBSubtitle:o["a"]},name:"SO-portal",data:function(){return{msg:"Thank You!",msg2:"Our supply team will soon contact you with right Parking Spot.",img:a("766a"),show:!1,mapShow:!1}},created:function(){O["a"].addMapboxScript()},mounted:function(){var e=this;setTimeout((function(){e.mapShow=!0}),1e3)},methods:{register:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://maya.parkspot.in/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},login:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://maya.parkspot.in/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},kyc:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://maya.parkspot.in/kyc",{method:"PATCH",body:JSON.stringify(e)});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},contact:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://maya.parkspot.in/contact",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},onSubmit:function(e,t,a,s){var i=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.register(e);case 2:return r.next=4,i.login(t);case 4:return r.next=6,i.kyc(a);case 6:return r.next=8,i.contact(s);case 8:i.show=!0;case 9:case"end":return r.stop()}}),r)})))()}}},D=P,T=(a("9258"),Object(A["a"])(D,s,i,!1,null,"53e1a255",null));t["default"]=T.exports},c2c8:function(e,t,a){},cde1:function(e,t,a){"use strict";var s=a("fcda"),i=a.n(s);i.a},d28b:function(e,t,a){var s=a("746f");s("iterator")},da41:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:"Full Name",required:!0},model:{value:e.fullName,callback:function(t){e.fullName=t},expression:"fullName"}})],1),a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:"Email ID (Optional)",types:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",{staticClass:"column"},[a("atom-input",{staticClass:"input",attrs:{placeholder:"Mobile No.",required:!0,types:"tel"},model:{value:e.mno,callback:function(t){e.mno=t},expression:"mno"}})],1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"is-size-5 is-size-6-mobile"},[e._v(" Contact Details "),a("span",{staticStyle:{color:"red"}},[e._v("*")]),e._v(" : ")])}],r=(a("a9e3"),a("f23f")),n={components:{atomInput:r["a"]},name:"m-contact-details",props:{fullName:String,email:String,mno:Number}},o=n,c=a("2877"),l=Object(c["a"])(o,s,i,!1,null,null,null);t["a"]=l.exports},ddb0:function(e,t,a){var s=a("da84"),i=a("fdbc"),r=a("e260"),n=a("9112"),o=a("b622"),c=o("iterator"),l=o("toStringTag"),u=r.values;for(var m in i){var d=s[m],p=d&&d.prototype;if(p){if(p[c]!==u)try{n(p,c,u)}catch(f){p[c]=u}if(p[l]||n(p,l,m),i[m])for(var h in r)if(p[h]!==r[h])try{n(p,h,r[h])}catch(f){p[h]=r[h]}}}},e01a:function(e,t,a){"use strict";var s=a("23e7"),i=a("83ab"),r=a("da84"),n=a("5135"),o=a("861d"),c=a("9bf2").f,l=a("e893"),u=r.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var m={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new u(e):void 0===e?u():u(e);return""===e&&(m[t]=!0),t};l(d,u);var p=d.prototype=u.prototype;p.constructor=d;var h=p.toString,f="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=h.call(e);if(n(m,e))return"";var a=f?t.slice(7,-1):t.replace(v,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:d})}},e260:function(e,t,a){"use strict";var s=a("fc6a"),i=a("44d2"),r=a("3f8c"),n=a("69f3"),o=a("7dd0"),c="Array Iterator",l=n.set,u=n.getterFor(c);e.exports=o(Array,"Array",(function(e,t){l(this,{type:c,target:s(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,a=e.kind,s=e.index++;return!t||s>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==a?{value:s,done:!1}:"values"==a?{value:t[s],done:!1}:{value:[s,t[s]],done:!1}}),"values"),r.Arguments=r.Array,i("keys"),i("values"),i("entries")},eeb7:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d81d"),a("d3b7");var s=a("2909"),i=(a("96cf"),a("1da1")),r={data:function(){return{toggle:!1,results:[],cresults:[],map:{temp:[77.586588,12.969906],temp2:[[77.586588,12.969906]],drag:!0,key:0,zooms:11},required:!0,submit:"Submit Request",contact:{fullName:"Full Name",mno:"Mobile No.",email:"Email ID (Optional)",emailType:"email",mobileType:"tel"},address:{City:"City",countryList:["India"],stateList:["Karnataka"],location:"Nearest Location Address"},preference:{carModel:"Car Model/Name",durationList:["Duration","Less than 1 Month","1 - 3 Month","3 - 6 Month","6 - 9 Month","More than 9 Month"],typeList:["Type of Parking","Coverd Parking","Open Parking"]},userForm:{fullName:"",email:"",mno:"",city:"",country:"India",state:"Karnataka",carModel:"",duration:"Duration",typeParking:"Type of Parking",location:"",mapPosLat:"",mapPosLng:""}}},computed:{center:function(){return this.userForm.location,this.map.temp},marker:function(){return this.userForm.location,this.map.temp2},zoom:function(){return this.userForm.location?this.zooms=13:this.zooms}},methods:{getLocation:function(e){this.userForm.mapPosLat=e.lat,this.userForm.mapPosLng=e.lng},search:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.length){a.next=3;break}return t.results=[],a.abrupt("return");case 3:return a.next=5,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json?access_token=pk.eyJ1IjoiaWFtZmlhc2NvIiwiYSI6ImNrOWZiankzdjA5d2kzbWp3NGNzNmIwaHAifQ.E2UwYdvpjc6yNoCmBjfTaQ&proximity=77.4977,12.9716"));case 5:return s=a.sent,a.next=8,s.json();case 8:i=a.sent,t.cresults=i.features,t.results=i.features.map((function(e){return e.place_name}));case 11:case"end":return a.stop()}}),a)})))()},flytosrp:function(e){this.userForm.location=e;for(var t=0;t<this.results.length;t++)this.results[t]===e&&(this.map.key+=1,this.map.temp=Object(s["a"])(this.cresults[t].center),this.map.temp2[0]=this.cresults[t].center)}}}},fcda:function(e,t,a){}}]);