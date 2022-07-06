(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8c055a8"],{"217c":function(e,t,a){"use strict";var n=a("d056"),i=a.n(n);i.a},3405:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"custom-bg"},[a("TemplateSOPortal",{on:{finalSubmit:e.onFinalSubmit}}),a("LoaderModal",{attrs:{isLoading:e.isLoading}})],1)},i=[],o=(a("96cf"),a("1da1")),l=a("5530"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card p-6 cmargin"},[a("b-steps",{attrs:{"has-navigation":e.hasNavigation,"icon-prev":e.prevIcon,"icon-next":e.nextIcon,"label-position":e.labelPosition,"mobile-mode":e.mobileMode},scopedSlots:e._u([e.customNavigation?{key:"navigation",fn:function(t){var n=t.previous,i=t.next;return[a("div",{staticClass:"footer-buttons"},[a("b-button",{staticClass:"mr-4",attrs:{outlined:"",type:"is-danger","icon-pack":"mdi","icon-left":e.prevIcon,disabled:n.disabled},on:{click:function(t){return t.preventDefault(),e.btnPrev(n)}}},[e._v(" Prev ")]),a("b-button",{attrs:{outlined:"",type:"is-success","icon-pack":"mdi","icon-right":e.nextIcon,disabled:!1},on:{click:function(t){return t.preventDefault(),e.btnNext(i)}}},[e._v(" "+e._s(e.nextText)+" ")])],1)]}}:null],null,!0),model:{value:e.activeStep,callback:function(t){e.activeStep=t},expression:"activeStep"}},[a("b-step-item",{attrs:{step:"1",label:"Step 1",clickable:e.isStepsClickable,type:e.contactFormStep?"is-success":"is-warning"}},[a("h1",{staticClass:"title has-text-centered"},[e._v("Contact Details")]),a("OrganismContactForm",{attrs:{formSubmitted:e.contactForm},on:{formValidate:e.contactFormValidate}})],1),a("b-step-item",{attrs:{step:"2",label:"Step 2",clickable:e.isStepsClickable,type:e.KYCFormStep?"is-success":"is-warning"}},[a("h1",{staticClass:"title has-text-centered"},[e._v("KYC Details")]),a("OrganismKycForm",{attrs:{formSubmitted:e.kycForm},on:{formValidate:e.kycFormValidate}})],1),a("b-step-item",{attrs:{step:3,label:"Step 3",clickable:e.isStepsClickable,disabled:"",type:e.AddInfoFormStep?"is-success":"is-warning"}},[a("h1",{staticClass:"title has-text-centered"},[e._v("Additional Details")]),a("OrganismAdditionalInfo",{attrs:{formSubmitted:e.AddInfoForm},on:{formValidate:e.AddInfoFormValidate}})],1)],1)],1)])])},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){return[a("MoleculeNameInput",{attrs:{rules:e.validation.fname,fieldName:e.CONTACT_FORM.FIRSTNAME,placeholder:e.CONTACT_FORM.FIRSTNAME,label:e.CONTACT_FORM.FIRSTNAME},model:{value:e.model.fname,callback:function(t){e.$set(e.model,"fname",t)},expression:"model.fname"}}),a("MoleculeNameInput",{attrs:{rules:e.validation.lname,fieldName:e.CONTACT_FORM.LASTNAME,placeholder:e.CONTACT_FORM.LASTNAME,label:e.CONTACT_FORM.LASTNAME},model:{value:e.model.lname,callback:function(t){e.$set(e.model,"lname",t)},expression:"model.lname"}}),a("MoleculeNameInput",{attrs:{rules:e.validation.email,fieldName:e.CONTACT_FORM.EMAIL,placeholder:e.CONTACT_FORM.EMAIL,inputType:"email",label:e.CONTACT_FORM.EMAIL},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),a("MoleculeNameInput",{attrs:{rules:e.validation.cno,fieldName:e.CONTACT_FORM.CONTACT_NO,placeholder:e.CONTACT_FORM.CONTACT_NO,label:e.CONTACT_FORM.CONTACT_NO},model:{value:e.model.cno,callback:function(t){e.$set(e.model,"cno",t)},expression:"model.cno"}})]}}])})},u=[],d=a("7bb1"),m={USERNAME:"Username",FULLNAME:"Full Name",FIRSTNAME:"First Name",LASTNAME:"Last Name",EMAIL:"Email",CONTACT_NO:"Contact No."},p={AMENITIES:"Amenities",SPOTS:"Spots",MINIMUM_DURATION:"Minimum Duration",RENT:"Expected Rent",AMENITIES_DATA:["Covered","Gated","CCTV Camera","Security Guard","Others"],SPOTS_DATA:[{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"},{id:4,name:"3+"}],MINIMUM_DURATION_DATA:[{id:1,name:"less than 1 month"},{id:2,name:"2 - 3 months"},{id:3,name:"3 - 5 months"},{id:4,name:"More than 6 months"}]},f=a("2f62"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{attrs:{name:e.fieldName,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[a("AtomInputs",{staticClass:"mb-4",attrs:{placeholder:e.placeholder,type:e.inputType,errorMessage:n,errorType:{"is-danger":n[0],"is-success":i},label:e.label},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}})]}}])})},b=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.wrapper,{tag:"component"},[a("b-field",{attrs:{label:e.label,message:e.errorMessage,type:e.errorType}},[a("b-input",{attrs:{id:e.id,disabled:e.disabled,type:e.type,value:e.value,placeholder:e.placeholder},nativeOn:{input:function(t){return e.onInput(t.target.value)},focus:function(t){return e.onFocus(t.target.value)}}})],1)],1)},g=[],O=(a("ac1f"),a("466d"),{name:"AtomInputs",props:{wrapper:{type:String,default:"div",validator:function(e){return e.match(/(div|section)/)}},label:{type:String,default:null},id:{type:String,default:null},disabled:{type:Boolean,default:!1},type:{type:String,default:"text",validator:function(e){return e.match(/(text|number|email)/)}},value:{type:String,default:null},placeholder:{type:String,default:null},errorType:{type:Object,default:null},errorMessage:{type:Array,default:null}},emits:["input","focus"],methods:{onInput:function(e){this.$emit("input",e)},onFocus:function(e){this.$emit("focus",e)}}}),S=O,A=a("2877"),y=Object(A["a"])(S,v,g,!1,null,null,null),I=y.exports,N={name:"MoleculeNameInput",components:{ValidationProvider:d["b"],AtomInputs:I},props:{value:{type:null,required:!0},placeholder:{type:String,required:!0},rules:{type:[Object,String],default:""},inputType:{type:String},fieldName:{type:String,required:!0},label:{type:String}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},F=N,_=Object(A["a"])(F,h,b,!1,null,null,null),M=_.exports,T={name:"OrganismContactForm",components:{ValidationObserver:d["a"],MoleculeNameInput:M},props:{formSubmitted:{type:Boolean,default:!1}},emits:["formValidate"],data:function(){return{model:{fname:"",lname:"",email:"",cno:""},validation:{fname:"required",lname:"required",email:"required|email",cno:"required"},CONTACT_FORM:m}},watch:{formSubmitted:function(e){var t=this;console.log("organism contact form"),e&&this.$refs.observer.validate().then((function(e){e?(t.$emit("formValidate",e),t.submit()):t.$emit("formValidate",e)}))["catch"]((function(e){console.log(e)}))}},methods:Object(l["a"])(Object(l["a"])({},Object(f["c"])({updateContact:"soportal/update-contact"})),{},{submit:function(){console.log("Form submitted yay!"),this.updateContact(this.model)},resetForm:function(){var e=this;this.model.fname="",this.model.lname="",this.model.email="",this.model.cno="",requestAnimationFrame((function(){e.$refs.observer.reset()}))}})},x=T,C=Object(A["a"])(x,c,u,!1,null,null,null),k=C.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){return[a("MoleculeRadioButton",{attrs:{fieldName:"radio",rules:e.validation.radio,values:e.radioValues},on:{data:e.updateRadioData}},[e._v(" Are you the Owner? ")]),a("MoleculeSelectInput",{attrs:{fieldName:"input",list:e.documentValues,rules:e.validation.documentSelect,placeholder:"Select documents",label:"Documents"},on:{input:e.updateDocumentData}}),a("MoleculeUpload",{on:{data:e.updateImg}})]}}])})},V=[],E=(a("b0c0"),a("c301")),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{ref:"provider",attrs:{rules:e.rules,name:e.fieldName},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors,i=t.valid;return[a("AtomSelectInput",{staticClass:"mb-5",attrs:{errorMessage:n,errorType:{"is-danger":n[0],"is-success":i},list:e.list,placeholder:e.placeholder,label:e.label},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}})]}}])})},R=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-field",{attrs:{label:e.label,type:e.errorType,message:e.errorMessage}},[a("b-select",{attrs:{placeholder:e.placeholder,expanded:""},nativeOn:{input:function(t){return e.onInput(t.target.value)}}},e._l(e.list,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),0)],1)},w=[],P={name:"AtomSelectInput",props:{placeholder:{type:String,default:"Select anything from list"},list:{type:Array,default:null},errorMessage:{type:Array,default:null},errorType:{type:Object,default:null},label:{type:String}},emits:["input"],methods:{onInput:function(e){this.$emit("input",this.list[e-1])}}},L=P,q=Object(A["a"])(L,j,w,!1,null,null,null),U=q.exports,B={name:"MoleculeSelectInput",components:{ValidationProvider:d["b"],AtomSelectInput:U},props:{rules:{type:[Object,String],default:""},list:{type:Array,default:null,required:!0},placeholder:{type:String},fieldName:{type:String,default:"field"},label:{type:String},value:{type:null}},data:function(){return{innerValue:""}},watch:{innerValue:function(e){this.$emit("input",e)},value:function(e){this.innerValue=e}},created:function(){this.value&&(this.innerValue=this.value)}},K=B,G=Object(A["a"])(K,$,R,!1,null,null,null),Y=G.exports,J=a("c632"),z={name:"OrganismKycForm",components:{ValidationObserver:d["a"],MoleculeRadioButton:E["a"],MoleculeSelectInput:Y,MoleculeUpload:J["a"]},props:{formSubmitted:{type:Boolean,default:!1}},emits:["formValidate"],data:function(){return{radioValues:["Yes","No"],documentValues:[{id:1,name:"Adhaar Card"},{id:2,name:"Electricity Bills"},{id:3,name:"Driving License"},{id:4,name:"Rent Agreement"}],validation:{radio:"required",documentSelect:"required"},model:{radioData:"",documentData:null,imgData:null}}},watch:{formSubmitted:function(e){var t=this;e&&this.$refs.observer.validate().then((function(e){e?(t.$emit("formValidate",e),t.submit()):t.$emit("formValidate",e)}))["catch"]((function(e){console.log(e)}))}},methods:Object(l["a"])(Object(l["a"])({},Object(f["c"])({updateKyc:"soportal/update-kyc"})),{},{submit:function(){this.updateKyc(this.model)},updateRadioData:function(e){this.model.radioData="Yes"===e},updateDocumentData:function(e){this.model.documentData=e.name},updateImg:function(e){console.log("updateImg"),console.log(e),this.model.imgData=e}})},H=z,Q=Object(A["a"])(H,D,V,!1,null,null,null),W=Q.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){return[a("MoleculeCheckbox",{attrs:{fieldName:e.ADD_INFO.AMENITIES,rules:e.validation.amenities,values:e.checkboxData},on:{data:e.updateAmenitiesData}},[e._v(" "+e._s(e.ADD_INFO.AMENITIES)+" ")]),a("MoleculeSelectInput",{attrs:{fieldName:e.ADD_INFO.SPOTS,list:e.spotData,rules:e.validation.spot,placeholder:"Please specify the no. of Spot",label:e.ADD_INFO.SPOTS},on:{input:e.updateSpot}}),a("MoleculeSelectInput",{attrs:{fieldName:e.ADD_INFO.MINIMUM_DURATION,list:e.minDurData,rules:e.validation.minDur,placeholder:"Minimum duration if any",label:e.ADD_INFO.MINIMUM_DURATION},on:{input:e.updateMinDur}}),a("MoleculeNameInput",{attrs:{fieldName:e.ADD_INFO.RENT,placeholder:e.ADD_INFO.RENT,rules:e.validation.rent,label:e.ADD_INFO.RENT},model:{value:e.model.rent,callback:function(t){e.$set(e.model,"rent",t)},expression:"model.rent"}})]}}])})},Z=[],ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationProvider",{ref:"provider",attrs:{name:e.fieldName,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("label",{staticClass:"label"},[e._t("default")],2),a("AtomCheckboxs",{staticClass:"mb-5",attrs:{values:e.values},nativeOn:{change:function(t){return e.handleChange(t)}}}),a("span",{staticClass:"has-text-danger is-size-7"},[e._v(e._s(n[0]))])]}}],null,!0)})},te=[],ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block"},e._l(e.values,(function(t){return a("b-checkbox",{key:t,attrs:{"native-value":t,type:"is-warning"},model:{value:e.checkboxGroup,callback:function(t){e.checkboxGroup=t},expression:"checkboxGroup"}},[e._v(" "+e._s(t)+" ")])})),1)},ne=[],ie={name:"AtomCheckboxs",props:{values:{type:Array,default:null}},data:function(){return{checkboxGroup:[]}}},oe=ie,le=Object(A["a"])(oe,ae,ne,!1,null,null,null),re=le.exports,se={name:"MoleculeCheckBox",components:{ValidationProvider:d["b"],AtomCheckboxs:re},props:{rules:{type:[Object,String],default:""},fieldName:{type:String,required:!0},values:{type:Array}},emits:["data"],data:function(){return{checkboxData:[]}},methods:{handleChange:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.provider.validate(e);case 2:n=a.sent,i=n.valid,i&&(t.checkboxData.push(e.target.value),t.$emit("data",t.checkboxData));case 5:case"end":return a.stop()}}),a)})))()}}},ce=se,ue=Object(A["a"])(ce,ee,te,!1,null,null,null),de=ue.exports,me={name:"OrganismAdditionalInfo",components:{ValidationObserver:d["a"],MoleculeCheckbox:de,MoleculeSelectInput:Y,MoleculeNameInput:M},props:{formSubmitted:{type:Boolean,default:!1}},emits:["formValidate"],data:function(){return{ADD_INFO:p,checkboxData:p.AMENITIES_DATA,spotData:p.SPOTS_DATA,minDurData:p.MINIMUM_DURATION_DATA,model:{amenities:"",spot:"",minDur:"",rent:""},validation:{amenities:"required",spot:"required",minDur:"required",rent:"required"}}},watch:{formSubmitted:function(e){var t=this;console.log("organism contact form"),e&&this.$refs.observer.validate().then((function(e){e?(t.$emit("formValidate",e),t.submit()):t.$emit("formValidate",e)}))["catch"]((function(e){console.log(e)}))}},methods:Object(l["a"])(Object(l["a"])({},Object(f["c"])({updateAddInfo:"soportal/update-additional-info"})),{},{submit:function(){this.updateAddInfo(this.model)},updateMinDur:function(e){this.model.minDur=e.name},updateSpot:function(e){this.model.spot=e.name},updateAmenitiesData:function(e){this.model.amenities=e}})},pe=me,fe=Object(A["a"])(pe,X,Z,!1,null,null,null),he=fe.exports,be={name:"TemplateSOPortal",components:{OrganismContactForm:k,OrganismKycForm:W,OrganismAdditionalInfo:he},emits:["finalSubmit"],data:function(){return{activeStep:0,hasNavigation:!1,customNavigation:!0,isProfileSuccess:!1,contactFormStep:!1,KYCFormStep:!1,AddInfoFormStep:!1,prevIcon:"chevron-left",nextIcon:"chevron-right",labelPosition:"bottom",mobileMode:"minimalist",isStepsClickable:!1,contactForm:!1,kycForm:!1,AddInfoForm:!1,nextEnable:null,nextText:"Next"}},methods:{btnNext:function(e){this.contactForm?this.kycForm?this.AddInfoForm?this.nextEnable.action():(this.AddInfoFormValidate(this.AddInfoForm),this.AddInfoForm=!0):(this.kycFormValidate(this.kycForm),this.kycForm=!0):(this.contactFormValidate(this.contactForm),this.contactForm=!0),this.nextEnable=e},btnPrev:function(e){(this.contactForm||this.kycForm||this.AddInfoForm)&&(this.contactForm=!1,this.kycForm=!1,this.AddInfoForm=!1,this.nextText="Next"),e.action()},contactFormValidate:function(e){this.contactForm=e,this.contactForm&&this.nextEnable.action()},kycFormValidate:function(e){this.kycForm=e,this.kycForm&&(this.nextEnable.action(),this.nextText="Finish")},AddInfoFormValidate:function(e){this.AddInfoForm=e,this.AddInfoForm&&(this.nextEnable.action(),this.$emit("finalSubmit"))}}},ve=be,ge=(a("217c"),Object(A["a"])(ve,r,s,!1,null,"00b0a644",null)),Oe=ge.exports,Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-loading",{attrs:{"is-full-page":e.isFullPage,"can-cancel":!0},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}})},Ae=[],ye={name:"LoaderModal",props:{isLoading:{type:Boolean,default:!1}},data:function(){return{isFullPage:!0}}},Ie=ye,Ne=Object(A["a"])(Ie,Se,Ae,!1,null,null,null),Fe=Ne.exports,_e={name:"PageSOPortal",components:{TemplateSOPortal:Oe,LoaderModal:Fe},data:function(){return{isLoading:!1}},methods:Object(l["a"])(Object(l["a"])({},Object(f["b"])({register:"soportal/register",login:"soportal/login",kyc:"soportal/kyc",contact:"soportal/contact"})),{},{onFinalSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.register();case 4:return t.next=6,e.login();case 6:return t.next=8,e.kyc();case 8:return t.next=10,e.contact();case 10:e.isLoading=!1,e.$buefy.toast.open({message:"ParkSpot registered successfully!",type:"is-success"}),e.$router.push({name:"Home"}),t.next=20;break;case 15:t.prev=15,t.t0=t["catch"](0),console.error({error:t.t0}),e.$buefy.toast.open({message:"Something went wrong!",type:"is-danger"}),e.$router.push({name:"SOPortal"});case 20:case"end":return t.stop()}}),t,null,[[0,15]])})))()}})},Me=_e,Te=(a("cf47"),Object(A["a"])(Me,n,i,!1,null,"dd0f9130",null));t["default"]=Te.exports},"466d":function(e,t,a){"use strict";var n=a("d784"),i=a("825a"),o=a("50c4"),l=a("1d80"),r=a("8aa5"),s=a("14c3");n("match",1,(function(e,t,a){return[function(t){var a=l(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,a):new RegExp(t)[e](String(a))},function(e){var n=a(t,e,this);if(n.done)return n.value;var l=i(e),c=String(this);if(!l.global)return s(l,c);var u=l.unicode;l.lastIndex=0;var d,m=[],p=0;while(null!==(d=s(l,c))){var f=String(d[0]);m[p]=f,""===f&&(l.lastIndex=r(c,o(l.lastIndex),u)),p++}return 0===p?null:m}]}))},"841f":function(e,t,a){},cf47:function(e,t,a){"use strict";var n=a("841f"),i=a.n(n);i.a},d056:function(e,t,a){}}]);