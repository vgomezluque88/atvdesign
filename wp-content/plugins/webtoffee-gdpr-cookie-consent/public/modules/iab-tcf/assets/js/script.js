/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2131:
/***/ ((module) => {

function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var t=function(){var t,e,o=[],n=window,r=n;for(;r;){try{if(r.frames.__tcfapiLocator){t=r;break}}catch(t){}if(r===n.top)break;r=r.parent}t||(!function t(){var e=n.document,o=!!n.frames.__tcfapiLocator;if(!o)if(e.body){var r=e.createElement("iframe");r.style.cssText="display:none",r.name="__tcfapiLocator",e.body.appendChild(r)}else setTimeout(t,5);return!o}(),n.__tcfapi=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return o;"setGdprApplies"===n[0]?n.length>3&&2===parseInt(n[1],10)&&"boolean"==typeof n[3]&&(e=n[3],"function"==typeof n[2]&&n[2]("set",!0)):"ping"===n[0]?"function"==typeof n[2]&&n[2]({gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"}):o.push(n)},n.addEventListener("message",(function(t){var e="string"==typeof t.data,o={};if(e)try{o=JSON.parse(t.data)}catch(t){}else o=t.data;var n="object"===_typeof(o)&&null!==o?o.__tcfapiCall:null;n&&window.__tcfapi(n.command,n.version,(function(o,r){var a={__tcfapiReturn:{returnValue:o,success:r,callId:n.callId}};t&&t.source&&t.source.postMessage&&t.source.postMessage(e?JSON.stringify(a):a,"*")}),n.parameter)}),!1))}; true?module.exports=t:0}();

/***/ }),

/***/ 9621:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __read=this&&this.__read||function(o,n){var e="function"==typeof Symbol&&o[Symbol.iterator];if(!e)return o;var s,a,i=e.call(o),t=[];try{for(;(void 0===n||n-- >0)&&!(s=i.next()).done;)t.push(s.value)}catch(o){a={error:o}}finally{try{s&&!s.done&&(e=i.return)&&e.call(i)}finally{if(a)throw a.error}}return t},__spreadArray=this&&this.__spreadArray||function(o,n,e){if(e||2===arguments.length)for(var s,a=0,i=n.length;a<i;a++)!s&&a in n||(s||(s=Array.prototype.slice.call(n,0,a)),s[a]=n[a]);return o.concat(s||Array.prototype.slice.call(n))};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.CallResponder=exports.API_KEY=void 0;var index_js_1=__webpack_require__(1581),CommandMap_js_1=__webpack_require__(5656),CmpApiModel_js_1=__webpack_require__(476),Disabled_js_1=__webpack_require__(7629),SupportedVersions_js_1=__webpack_require__(3965);exports.API_KEY="__tcfapi";var CallResponder=function(){function o(o){if(o){var n=index_js_1.TCFCommand.ADD_EVENT_LISTENER;if(null==o?void 0:o[n])throw new Error("Built-In Custom Commmand for ".concat(n," not allowed: Use ").concat(index_js_1.TCFCommand.GET_TC_DATA," instead"));if(n=index_js_1.TCFCommand.REMOVE_EVENT_LISTENER,null==o?void 0:o[n])throw new Error("Built-In Custom Commmand for ".concat(n," not allowed"));(null==o?void 0:o[index_js_1.TCFCommand.GET_TC_DATA])&&(o[index_js_1.TCFCommand.ADD_EVENT_LISTENER]=o[index_js_1.TCFCommand.GET_TC_DATA],o[index_js_1.TCFCommand.REMOVE_EVENT_LISTENER]=o[index_js_1.TCFCommand.GET_TC_DATA]),this.customCommands=o}try{this.callQueue=window[exports.API_KEY]()||[]}catch(o){this.callQueue=[]}finally{window[exports.API_KEY]=this.apiCall.bind(this),this.purgeQueuedCalls()}}return o.prototype.apiCall=function(o,n,e){for(var s,a=[],i=3;i<arguments.length;i++)a[i-3]=arguments[i];if("string"!=typeof o)e(null,!1);else if(SupportedVersions_js_1.SupportedVersions.has(n)){if("function"!=typeof e)throw new Error("invalid callback function");CmpApiModel_js_1.CmpApiModel.disabled?e(new Disabled_js_1.Disabled,!1):this.isCustomCommand(o)||this.isBuiltInCommand(o)?this.isCustomCommand(o)&&!this.isBuiltInCommand(o)?(s=this.customCommands)[o].apply(s,__spreadArray([e],__read(a),!1)):o===index_js_1.TCFCommand.PING?this.isCustomCommand(o)?new CommandMap_js_1.CommandMap[o](this.customCommands[o],a[0],null,e):new CommandMap_js_1.CommandMap[o](e,a[0]):void 0===CmpApiModel_js_1.CmpApiModel.tcModel?this.callQueue.push(__spreadArray([o,n,e],__read(a),!1)):this.isCustomCommand(o)&&this.isBuiltInCommand(o)?new CommandMap_js_1.CommandMap[o](this.customCommands[o],a[0],null,e):new CommandMap_js_1.CommandMap[o](e,a[0]):e(null,!1)}else e(null,!1)},o.prototype.purgeQueuedCalls=function(){var o=this.callQueue;this.callQueue=[],o.forEach((function(o){window[exports.API_KEY].apply(window,__spreadArray([],__read(o),!1))}))},o.prototype.isCustomCommand=function(o){return this.customCommands&&"function"==typeof this.customCommands[o]},o.prototype.isBuiltInCommand=function(o){return void 0!==CommandMap_js_1.CommandMap[o]},o}();exports.CallResponder=CallResponder;

/***/ }),

/***/ 9089:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.CmpApi=void 0;var CmpApiModel_js_1=__webpack_require__(476),index_js_1=__webpack_require__(3619),CallResponder_js_1=__webpack_require__(9621),core_1=__webpack_require__(3406),CmpApi=function(){function p(p,e,i,o){void 0===i&&(i=!1),this.numUpdates=0,this.throwIfInvalidInt(p,"cmpId",2),this.throwIfInvalidInt(e,"cmpVersion",0),CmpApiModel_js_1.CmpApiModel.cmpId=p,CmpApiModel_js_1.CmpApiModel.cmpVersion=e,CmpApiModel_js_1.CmpApiModel.tcfPolicyVersion=2,this.isServiceSpecific=!!i,this.callResponder=new CallResponder_js_1.CallResponder(o)}return p.prototype.throwIfInvalidInt=function(p,e,i){if(!("number"==typeof p&&Number.isInteger(p)&&p>=i))throw new Error("Invalid ".concat(e,": ").concat(p))},p.prototype.update=function(p,e){if(void 0===e&&(e=!1),CmpApiModel_js_1.CmpApiModel.disabled)throw new Error("CmpApi Disabled");CmpApiModel_js_1.CmpApiModel.cmpStatus=index_js_1.CmpStatus.LOADED,e?(CmpApiModel_js_1.CmpApiModel.displayStatus=index_js_1.DisplayStatus.VISIBLE,CmpApiModel_js_1.CmpApiModel.eventStatus=index_js_1.EventStatus.CMP_UI_SHOWN):void 0===CmpApiModel_js_1.CmpApiModel.tcModel?(CmpApiModel_js_1.CmpApiModel.displayStatus=index_js_1.DisplayStatus.DISABLED,CmpApiModel_js_1.CmpApiModel.eventStatus=index_js_1.EventStatus.TC_LOADED):(CmpApiModel_js_1.CmpApiModel.displayStatus=index_js_1.DisplayStatus.HIDDEN,CmpApiModel_js_1.CmpApiModel.eventStatus=index_js_1.EventStatus.USER_ACTION_COMPLETE),CmpApiModel_js_1.CmpApiModel.gdprApplies=null!==p,CmpApiModel_js_1.CmpApiModel.gdprApplies?(""===p?(CmpApiModel_js_1.CmpApiModel.tcModel=new core_1.TCModel,CmpApiModel_js_1.CmpApiModel.tcModel.cmpId=CmpApiModel_js_1.CmpApiModel.cmpId,CmpApiModel_js_1.CmpApiModel.tcModel.cmpVersion=CmpApiModel_js_1.CmpApiModel.cmpVersion):CmpApiModel_js_1.CmpApiModel.tcModel=core_1.TCString.decode(p),CmpApiModel_js_1.CmpApiModel.tcModel.isServiceSpecific=this.isServiceSpecific,CmpApiModel_js_1.CmpApiModel.tcfPolicyVersion=Number(CmpApiModel_js_1.CmpApiModel.tcModel.policyVersion),CmpApiModel_js_1.CmpApiModel.tcString=p):CmpApiModel_js_1.CmpApiModel.tcModel=null,0===this.numUpdates?this.callResponder.purgeQueuedCalls():CmpApiModel_js_1.CmpApiModel.eventQueue.exec(),this.numUpdates++},p.prototype.disable=function(){CmpApiModel_js_1.CmpApiModel.disabled=!0,CmpApiModel_js_1.CmpApiModel.cmpStatus=index_js_1.CmpStatus.ERROR},p}();exports.CmpApi=CmpApi;

/***/ }),

/***/ 476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.CmpApiModel=void 0;var index_js_1=__webpack_require__(3619),EventListenerQueue_js_1=__webpack_require__(6173),CmpApiModel=function(){function e(){}return e.reset=function(){delete this.cmpId,delete this.cmpVersion,delete this.eventStatus,delete this.gdprApplies,delete this.tcModel,delete this.tcString,delete this.tcfPolicyVersion,this.cmpStatus=index_js_1.CmpStatus.LOADING,this.disabled=!1,this.displayStatus=index_js_1.DisplayStatus.HIDDEN,this.eventQueue.clear()},e.apiVersion="2",e.eventQueue=new EventListenerQueue_js_1.EventListenerQueue,e.cmpStatus=index_js_1.CmpStatus.LOADING,e.disabled=!1,e.displayStatus=index_js_1.DisplayStatus.HIDDEN,e}();exports.CmpApiModel=CmpApiModel;

/***/ }),

/***/ 3143:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 6173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.EventListenerQueue=void 0;var GetTCDataCommand_js_1=__webpack_require__(5244),EventListenerQueue=function(){function e(){this.eventQueue=new Map,this.queueNumber=0}return e.prototype.add=function(e){return this.eventQueue.set(this.queueNumber,e),this.queueNumber++},e.prototype.remove=function(e){return this.eventQueue.delete(e)},e.prototype.exec=function(){this.eventQueue.forEach((function(e,t){new GetTCDataCommand_js_1.GetTCDataCommand(e.callback,e.param,t,e.next)}))},e.prototype.clear=function(){this.queueNumber=0,this.eventQueue.clear()},Object.defineProperty(e.prototype,"size",{get:function(){return this.eventQueue.size},enumerable:!1,configurable:!0}),e}();exports.EventListenerQueue=EventListenerQueue;

/***/ }),

/***/ 3965:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.SupportedVersions=void 0;var SupportedVersions=function(){function e(){}return e.has=function(e){return"string"==typeof e&&(e=Number(e)),this.set_.has(e)},e.set_=new Set([0,2,void 0,null]),e}();exports.SupportedVersions=SupportedVersions;

/***/ }),

/***/ 145:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.AddEventListenerCommand=void 0;var CmpApiModel_js_1=__webpack_require__(476),GetTCDataCommand_js_1=__webpack_require__(5244),AddEventListenerCommand=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.respond=function(){this.listenerId=CmpApiModel_js_1.CmpApiModel.eventQueue.add({callback:this.callback,param:this.param,next:this.next}),t.prototype.respond.call(this)},e}(GetTCDataCommand_js_1.GetTCDataCommand);exports.AddEventListenerCommand=AddEventListenerCommand;

/***/ }),

/***/ 7110:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Command=void 0;var Command=function(){function t(t,e,n,a){this.success=!0,Object.assign(this,{callback:t,listenerId:n,param:e,next:a});try{this.respond()}catch(t){this.invokeCallback(null)}}return t.prototype.invokeCallback=function(t){var e=null!==t;"function"==typeof this.next?this.callback(this.next,t,e):this.callback(t,e)},t}();exports.Command=Command;

/***/ }),

/***/ 4395:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 5656:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.CommandMap=void 0;var PingCommand_js_1=__webpack_require__(8785),GetTCDataCommand_js_1=__webpack_require__(5244),GetInAppTCDataCommand_js_1=__webpack_require__(8759),GetVendorListCommand_js_1=__webpack_require__(2947),AddEventListenerCommand_js_1=__webpack_require__(145),RemoveEventListenerCommand_js_1=__webpack_require__(6467),TCFCommand_js_1=__webpack_require__(131),CommandMap=function(){function m(){}var n,e,C,a,o,d;return n=TCFCommand_js_1.TCFCommand.PING,e=TCFCommand_js_1.TCFCommand.GET_TC_DATA,C=TCFCommand_js_1.TCFCommand.GET_IN_APP_TC_DATA,a=TCFCommand_js_1.TCFCommand.GET_VENDOR_LIST,o=TCFCommand_js_1.TCFCommand.ADD_EVENT_LISTENER,d=TCFCommand_js_1.TCFCommand.REMOVE_EVENT_LISTENER,m[n]=PingCommand_js_1.PingCommand,m[e]=GetTCDataCommand_js_1.GetTCDataCommand,m[C]=GetInAppTCDataCommand_js_1.GetInAppTCDataCommand,m[a]=GetVendorListCommand_js_1.GetVendorListCommand,m[o]=AddEventListenerCommand_js_1.AddEventListenerCommand,m[d]=RemoveEventListenerCommand_js_1.RemoveEventListenerCommand,m}();exports.CommandMap=CommandMap;

/***/ }),

/***/ 8759:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.GetInAppTCDataCommand=void 0;var GetTCDataCommand_js_1=__webpack_require__(5244),index_js_1=__webpack_require__(2811),GetInAppTCDataCommand=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return __extends(n,t),n.prototype.respond=function(){this.throwIfParamInvalid(),this.invokeCallback(new index_js_1.InAppTCData(this.param))},n}(GetTCDataCommand_js_1.GetTCDataCommand);exports.GetInAppTCDataCommand=GetInAppTCDataCommand;

/***/ }),

/***/ 5244:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.GetTCDataCommand=void 0;var Command_js_1=__webpack_require__(7110),index_js_1=__webpack_require__(2811),GetTCDataCommand=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return __extends(r,t),r.prototype.respond=function(){this.throwIfParamInvalid(),this.invokeCallback(new index_js_1.TCData(this.param,this.listenerId))},r.prototype.throwIfParamInvalid=function(){if(!(void 0===this.param||Array.isArray(this.param)&&this.param.every(Number.isInteger)))throw new Error("Invalid Parameter")},r}(Command_js_1.Command);exports.GetTCDataCommand=GetTCDataCommand;

/***/ }),

/***/ 2947:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.GetVendorListCommand=void 0;var CmpApiModel_js_1=__webpack_require__(476),Command_js_1=__webpack_require__(7110),core_1=__webpack_require__(3406),GetVendorListCommand=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.respond=function(){var t,e=this,o=CmpApiModel_js_1.CmpApiModel.tcModel,r=o.vendorListVersion;void 0===this.param&&(this.param=r),(t=this.param===r&&o.gvl?o.gvl:new core_1.GVL(this.param)).readyPromise.then((function(){e.invokeCallback(t.getJson())}))},e}(Command_js_1.Command);exports.GetVendorListCommand=GetVendorListCommand;

/***/ }),

/***/ 8785:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.PingCommand=void 0;var index_js_1=__webpack_require__(2811),Command_js_1=__webpack_require__(7110),PingCommand=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.respond=function(){this.invokeCallback(new index_js_1.Ping)},t}(Command_js_1.Command);exports.PingCommand=PingCommand;

/***/ }),

/***/ 6467:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.RemoveEventListenerCommand=void 0;var CmpApiModel_js_1=__webpack_require__(476),Command_js_1=__webpack_require__(7110),RemoveEventListenerCommand=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.respond=function(){this.invokeCallback(CmpApiModel_js_1.CmpApiModel.eventQueue.remove(this.param))},t}(Command_js_1.Command);exports.RemoveEventListenerCommand=RemoveEventListenerCommand;

/***/ }),

/***/ 131:
/***/ ((__unused_webpack_module, exports) => {

var TCFCommand;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.TCFCommand=void 0,function(e){e.PING="ping",e.GET_TC_DATA="getTCData",e.GET_IN_APP_TC_DATA="getInAppTCData",e.GET_VENDOR_LIST="getVendorList",e.ADD_EVENT_LISTENER="addEventListener",e.REMOVE_EVENT_LISTENER="removeEventListener"}(TCFCommand=exports.TCFCommand||(exports.TCFCommand={}));

/***/ }),

/***/ 1581:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),__exportStar=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||__createBinding(t,e,r)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(131),exports),__exportStar(__webpack_require__(4395),exports);

/***/ }),

/***/ 346:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.API_KEY=void 0,__exportStar(__webpack_require__(1581),exports),__exportStar(__webpack_require__(2811),exports),__exportStar(__webpack_require__(3619),exports),__exportStar(__webpack_require__(9089),exports),__exportStar(__webpack_require__(476),exports),__exportStar(__webpack_require__(3143),exports);var CallResponder_js_1=__webpack_require__(9621);Object.defineProperty(exports, "API_KEY", ({enumerable:!0,get:function(){return CallResponder_js_1.API_KEY}}));

/***/ }),

/***/ 7629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Disabled=void 0;var Response_js_1=__webpack_require__(8066),index_js_1=__webpack_require__(3619),Disabled=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cmpStatus=index_js_1.CmpStatus.ERROR,e}return __extends(e,t),e}(Response_js_1.Response);exports.Disabled=Disabled;

/***/ }),

/***/ 9933:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(r,e)};return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__read=this&&this.__read||function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,a=e.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i},__spreadArray=this&&this.__spreadArray||function(t,r,e){if(e||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.InAppTCData=void 0;var TCData_js_1=__webpack_require__(2520),InAppTCData=function(t){function r(r){var e=t.call(this,r)||this;return delete e.outOfBand,e}return __extends(r,t),r.prototype.createVectorField=function(t){return __spreadArray([],__read(t),!1).reduce((function(t,r){return t+=r[1]?"1":"0"}),"")},r.prototype.createRestrictions=function(t){var r={};if(t.numRestrictions>0){var e=t.getMaxVendorId();t.getRestrictions().forEach((function(t){r[t.purposeId.toString()]="_".repeat(e)}));for(var n=function(e){var n=e+1;t.getRestrictions(n).forEach((function(t){var n=t.restrictionType.toString(),o=t.purposeId.toString(),a=r[o].substr(0,e),i=r[o].substr(e+1);r[o]=a+n+i}))},o=0;o<e;o++)n(o)}return r},r}(TCData_js_1.TCData);exports.InAppTCData=InAppTCData;

/***/ }),

/***/ 9364:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var e=function(o,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(o,t)};return function(o,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function p(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(p.prototype=t.prototype,new p)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Ping=void 0;var CmpApiModel_js_1=__webpack_require__(476),Response_js_1=__webpack_require__(8066),Ping=function(e){function o(){var o=e.call(this)||this;return o.cmpLoaded=!0,o.cmpStatus=CmpApiModel_js_1.CmpApiModel.cmpStatus,o.displayStatus=CmpApiModel_js_1.CmpApiModel.displayStatus,o.apiVersion=String(CmpApiModel_js_1.CmpApiModel.apiVersion),CmpApiModel_js_1.CmpApiModel.tcModel&&CmpApiModel_js_1.CmpApiModel.tcModel.vendorListVersion&&(o.gvlVersion=+CmpApiModel_js_1.CmpApiModel.tcModel.vendorListVersion),o}return __extends(o,e),o}(Response_js_1.Response);exports.Ping=Ping;

/***/ }),

/***/ 8066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Response=void 0;var CmpApiModel_js_1=__webpack_require__(476),Response=function(){this.cmpId=CmpApiModel_js_1.CmpApiModel.cmpId,this.cmpVersion=CmpApiModel_js_1.CmpApiModel.cmpVersion,this.gdprApplies=CmpApiModel_js_1.CmpApiModel.gdprApplies,this.tcfPolicyVersion=CmpApiModel_js_1.CmpApiModel.tcfPolicyVersion};exports.Response=Response;

/***/ }),

/***/ 2520:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,s=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=s.next()).done;)i.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}return i},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,s=t.length;n<s;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.TCData=void 0;var CmpApiModel_js_1=__webpack_require__(476),Response_js_1=__webpack_require__(8066),TCData=function(e){function t(t,r){var o=e.call(this)||this;if(o.eventStatus=CmpApiModel_js_1.CmpApiModel.eventStatus,o.cmpStatus=CmpApiModel_js_1.CmpApiModel.cmpStatus,o.listenerId=r,CmpApiModel_js_1.CmpApiModel.gdprApplies){var n=CmpApiModel_js_1.CmpApiModel.tcModel;o.tcString=CmpApiModel_js_1.CmpApiModel.tcString,o.isServiceSpecific=n.isServiceSpecific,o.useNonStandardStacks=n.useNonStandardStacks,o.purposeOneTreatment=n.purposeOneTreatment,o.publisherCC=n.publisherCountryCode,o.outOfBand={allowedVendors:o.createVectorField(n.vendorsAllowed,t),disclosedVendors:o.createVectorField(n.vendorsDisclosed,t)},o.purpose={consents:o.createVectorField(n.purposeConsents),legitimateInterests:o.createVectorField(n.purposeLegitimateInterests)},o.vendor={consents:o.createVectorField(n.vendorConsents,t),legitimateInterests:o.createVectorField(n.vendorLegitimateInterests,t)},o.specialFeatureOptins=o.createVectorField(n.specialFeatureOptins),o.publisher={consents:o.createVectorField(n.publisherConsents),legitimateInterests:o.createVectorField(n.publisherLegitimateInterests),customPurpose:{consents:o.createVectorField(n.publisherCustomConsents),legitimateInterests:o.createVectorField(n.publisherCustomLegitimateInterests)},restrictions:o.createRestrictions(n.publisherRestrictions)}}return o}return __extends(t,e),t.prototype.createRestrictions=function(e){var t={};if(e.numRestrictions>0)for(var r=e.getMaxVendorId(),o=function(r){var o=r.toString();e.getRestrictions(r).forEach((function(e){var r=e.purposeId.toString();t[r]||(t[r]={}),t[r][o]=e.restrictionType}))},n=1;n<=r;n++)o(n);return t},t.prototype.createVectorField=function(e,t){return t?t.reduce((function(t,r){return t[String(r)]=e.has(Number(r)),t}),{}):__spreadArray([],__read(e),!1).reduce((function(e,t){return e[t[0].toString(10)]=t[1],e}),{})},t}(Response_js_1.Response);exports.TCData=TCData;

/***/ }),

/***/ 2811:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,i){void 0===i&&(i=t),Object.defineProperty(e,i,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,i){void 0===i&&(i=t),e[i]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(7629),exports),__exportStar(__webpack_require__(9933),exports),__exportStar(__webpack_require__(9364),exports),__exportStar(__webpack_require__(8066),exports),__exportStar(__webpack_require__(2520),exports);

/***/ }),

/***/ 1865:
/***/ ((__unused_webpack_module, exports) => {

var CmpStatus;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.CmpStatus=void 0,function(t){t.STUB="stub",t.LOADING="loading",t.LOADED="loaded",t.ERROR="error"}(CmpStatus=exports.CmpStatus||(exports.CmpStatus={}));

/***/ }),

/***/ 3042:
/***/ ((__unused_webpack_module, exports) => {

var DisplayStatus;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.DisplayStatus=void 0,function(s){s.VISIBLE="visible",s.HIDDEN="hidden",s.DISABLED="disabled"}(DisplayStatus=exports.DisplayStatus||(exports.DisplayStatus={}));

/***/ }),

/***/ 63:
/***/ ((__unused_webpack_module, exports) => {

var EventStatus;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.EventStatus=void 0,function(t){t.TC_LOADED="tcloaded",t.CMP_UI_SHOWN="cmpuishown",t.USER_ACTION_COMPLETE="useractioncomplete"}(EventStatus=exports.EventStatus||(exports.EventStatus={}));

/***/ }),

/***/ 3619:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){void 0===i&&(i=r),t[i]=e[r]}),__exportStar=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||__createBinding(e,t,r)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(1865),exports),__exportStar(__webpack_require__(3042),exports),__exportStar(__webpack_require__(63),exports);

/***/ }),

/***/ 6542:
/***/ (function(__unused_webpack_module, exports) {

var __values=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Cloneable=void 0;var Cloneable=function(){function e(){}return e.prototype.clone=function(){var e=this,r=new this.constructor;return Object.keys(this).forEach((function(t){var n=e.deepClone(e[t]);void 0!==n&&(r[t]=n)})),r},e.prototype.deepClone=function(e){var r,t,n=typeof e;if("number"===n||"string"===n||"boolean"===n)return e;if(null!==e&&"object"===n){if("function"==typeof e.clone)return e.clone();if(e instanceof Date)return new Date(e.getTime());if(void 0!==e[Symbol.iterator]){var o=[];try{for(var i=__values(e),l=i.next();!l.done;l=i.next()){var a=l.value;o.push(this.deepClone(a))}}catch(e){r={error:e}}finally{try{l&&!l.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return e instanceof Array?o:new e.constructor(o)}var u={};for(var f in e)e.hasOwnProperty(f)&&(u[f]=this.deepClone(e[f]));return u}},e}();exports.Cloneable=Cloneable;

/***/ }),

/***/ 4892:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function a(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(s=i.trys,(s=s.length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.GVL=void 0;var Cloneable_js_1=__webpack_require__(6542),index_js_1=__webpack_require__(6468),Json_js_1=__webpack_require__(5761),index_js_2=__webpack_require__(8663),GVL=function(e){function t(r){var n=e.call(this)||this;n.isReady_=!1,n.isLatest=!1;var s=t.baseUrl;if(n.lang_=t.DEFAULT_LANGUAGE,n.isVendorList(r))n.populate(r),n.readyPromise=Promise.resolve();else{if(!s)throw new index_js_1.GVLError("must specify GVL.baseUrl before loading GVL json");if(r>0){var o=r;t.CACHE.has(o)?(n.populate(t.CACHE.get(o)),n.readyPromise=Promise.resolve()):(s+=t.versionedFilename.replace("[VERSION]",String(o)),n.readyPromise=n.fetchJson(s))}else t.CACHE.has(t.LATEST_CACHE_KEY)?(n.populate(t.CACHE.get(t.LATEST_CACHE_KEY)),n.readyPromise=Promise.resolve()):(n.isLatest=!0,n.readyPromise=n.fetchJson(s+t.latestFilename))}return n}return __extends(t,e),Object.defineProperty(t,"baseUrl",{get:function(){return this.baseUrl_},set:function(e){if(/^https?:\/\/vendorlist\.consensu\.org\//.test(e))throw new index_js_1.GVLError("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");e.length>0&&"/"!==e[e.length-1]&&(e+="/"),this.baseUrl_=e},enumerable:!1,configurable:!0}),t.emptyLanguageCache=function(e){var r=!1;return void 0===e&&t.LANGUAGE_CACHE.size>0?(t.LANGUAGE_CACHE=new Map,r=!0):"string"==typeof e&&this.consentLanguages.has(e.toUpperCase())&&(t.LANGUAGE_CACHE.delete(e.toUpperCase()),r=!0),r},t.emptyCache=function(e){var r=!1;return Number.isInteger(e)&&e>=0?(t.CACHE.delete(e),r=!0):void 0===e&&(t.CACHE=new Map,r=!0),r},t.prototype.cacheLanguage=function(){t.LANGUAGE_CACHE.has(this.lang_)||t.LANGUAGE_CACHE.set(this.lang_,{purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks})},t.prototype.fetchJson=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=this.populate,[4,Json_js_1.Json.fetch(e)];case 1:return t.apply(this,[n.sent()]),[3,3];case 2:throw r=n.sent(),new index_js_1.GVLError(r.message);case 3:return[2]}}))}))},t.prototype.getJson=function(){return JSON.parse(JSON.stringify({gvlSpecificationVersion:this.gvlSpecificationVersion,vendorListVersion:this.vendorListVersion,tcfPolicyVersion:this.tcfPolicyVersion,lastUpdated:this.lastUpdated,purposes:this.purposes,specialPurposes:this.specialPurposes,features:this.features,specialFeatures:this.specialFeatures,stacks:this.stacks,vendors:this.fullVendorList}))},t.prototype.changeLanguage=function(e){return __awaiter(this,void 0,void 0,(function(){var r,n,s,o,i;return __generator(this,(function(a){switch(a.label){case 0:if(r=e.toUpperCase(),!t.consentLanguages.has(r))return[3,6];if(r===this.lang_)return[3,5];if(this.lang_=r,!t.LANGUAGE_CACHE.has(r))return[3,1];for(s in n=t.LANGUAGE_CACHE.get(r))n.hasOwnProperty(s)&&(this[s]=n[s]);return[3,5];case 1:o=t.baseUrl+t.languageFilename.replace("[LANG]",e),a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.fetchJson(o)];case 3:return a.sent(),this.cacheLanguage(),[3,5];case 4:throw i=a.sent(),new index_js_1.GVLError("unable to load language: "+i.message);case 5:return[3,7];case 6:throw new index_js_1.GVLError("unsupported language ".concat(e));case 7:return[2]}}))}))},Object.defineProperty(t.prototype,"language",{get:function(){return this.lang_},enumerable:!1,configurable:!0}),t.prototype.isVendorList=function(e){return void 0!==e&&void 0!==e.vendors},t.prototype.populate=function(e){this.purposes=e.purposes,this.specialPurposes=e.specialPurposes,this.features=e.features,this.specialFeatures=e.specialFeatures,this.stacks=e.stacks,this.isVendorList(e)&&(this.gvlSpecificationVersion=e.gvlSpecificationVersion,this.tcfPolicyVersion=e.tcfPolicyVersion,this.vendorListVersion=e.vendorListVersion,this.lastUpdated=e.lastUpdated,"string"==typeof this.lastUpdated&&(this.lastUpdated=new Date(this.lastUpdated)),this.vendors_=e.vendors,this.fullVendorList=e.vendors,this.mapVendors(),this.isReady_=!0,this.isLatest&&t.CACHE.set(t.LATEST_CACHE_KEY,this.getJson()),t.CACHE.has(this.vendorListVersion)||t.CACHE.set(this.vendorListVersion,this.getJson())),this.cacheLanguage()},t.prototype.mapVendors=function(e){var t=this;this.byPurposeVendorMap={},this.bySpecialPurposeVendorMap={},this.byFeatureVendorMap={},this.bySpecialFeatureVendorMap={},Object.keys(this.purposes).forEach((function(e){t.byPurposeVendorMap[e]={legInt:new Set,consent:new Set,flexible:new Set}})),Object.keys(this.specialPurposes).forEach((function(e){t.bySpecialPurposeVendorMap[e]=new Set})),Object.keys(this.features).forEach((function(e){t.byFeatureVendorMap[e]=new Set})),Object.keys(this.specialFeatures).forEach((function(e){t.bySpecialFeatureVendorMap[e]=new Set})),Array.isArray(e)||(e=Object.keys(this.fullVendorList).map((function(e){return+e}))),this.vendorIds=new Set(e),this.vendors_=e.reduce((function(e,r){var n=t.vendors_[String(r)];return n&&void 0===n.deletedDate&&(n.purposes.forEach((function(e){t.byPurposeVendorMap[String(e)].consent.add(r)})),n.specialPurposes.forEach((function(e){t.bySpecialPurposeVendorMap[String(e)].add(r)})),n.legIntPurposes.forEach((function(e){t.byPurposeVendorMap[String(e)].legInt.add(r)})),n.flexiblePurposes&&n.flexiblePurposes.forEach((function(e){t.byPurposeVendorMap[String(e)].flexible.add(r)})),n.features.forEach((function(e){t.byFeatureVendorMap[String(e)].add(r)})),n.specialFeatures.forEach((function(e){t.bySpecialFeatureVendorMap[String(e)].add(r)})),e[r]=n),e}),{})},t.prototype.getFilteredVendors=function(e,t,r,n){var s=this,o=e.charAt(0).toUpperCase()+e.slice(1),i={};return("purpose"===e&&r?this["by"+o+"VendorMap"][String(t)][r]:this["by"+(n?"Special":"")+o+"VendorMap"][String(t)]).forEach((function(e){i[String(e)]=s.vendors[String(e)]})),i},t.prototype.getVendorsWithConsentPurpose=function(e){return this.getFilteredVendors("purpose",e,"consent")},t.prototype.getVendorsWithLegIntPurpose=function(e){return this.getFilteredVendors("purpose",e,"legInt")},t.prototype.getVendorsWithFlexiblePurpose=function(e){return this.getFilteredVendors("purpose",e,"flexible")},t.prototype.getVendorsWithSpecialPurpose=function(e){return this.getFilteredVendors("purpose",e,void 0,!0)},t.prototype.getVendorsWithFeature=function(e){return this.getFilteredVendors("feature",e)},t.prototype.getVendorsWithSpecialFeature=function(e){return this.getFilteredVendors("feature",e,void 0,!0)},Object.defineProperty(t.prototype,"vendors",{get:function(){return this.vendors_},enumerable:!1,configurable:!0}),t.prototype.narrowVendorsTo=function(e){this.mapVendors(e)},Object.defineProperty(t.prototype,"isReady",{get:function(){return this.isReady_},enumerable:!1,configurable:!0}),t.prototype.clone=function(){var e=new t(this.getJson());return this.lang_!==t.DEFAULT_LANGUAGE&&e.changeLanguage(this.lang_),e},t.isInstanceOf=function(e){return"object"==typeof e&&"function"==typeof e.narrowVendorsTo},t.LANGUAGE_CACHE=new Map,t.CACHE=new Map,t.LATEST_CACHE_KEY=0,t.DEFAULT_LANGUAGE="EN",t.consentLanguages=new index_js_2.ConsentLanguages,t.latestFilename="vendor-list.json",t.versionedFilename="archives/vendor-list-v[VERSION].json",t.languageFilename="purposes-[LANG].json",t}(Cloneable_js_1.Cloneable);exports.GVL=GVL;

/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Json=void 0;var Json=function(){function e(){}return e.absCall=function(e,t,n,r){return new Promise((function(o,s){var i=new XMLHttpRequest;i.withCredentials=n,i.addEventListener("load",(function(){if(i.readyState==XMLHttpRequest.DONE)if(i.status>=200&&i.status<300){var e=i.response;if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}o(e)}else s(new Error("HTTP Status: ".concat(i.status," response type: ").concat(i.responseType)))})),i.addEventListener("error",(function(){s(new Error("error"))})),i.addEventListener("abort",(function(){s(new Error("aborted"))})),null===t?i.open("GET",e,!0):i.open("POST",e,!0),i.responseType="json",i.timeout=r,i.ontimeout=function(){s(new Error("Timeout "+r+"ms "+e))},i.send(t)}))},e.post=function(e,t,n,r){return void 0===n&&(n=!1),void 0===r&&(r=0),this.absCall(e,JSON.stringify(t),n,r)},e.fetch=function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=0),this.absCall(e,null,t,n)},e}();exports.Json=Json;

/***/ }),

/***/ 3769:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.TCModel=void 0;var Cloneable_js_1=__webpack_require__(6542),index_js_1=__webpack_require__(6468),GVL_js_1=__webpack_require__(4892),index_js_2=__webpack_require__(8663),TCModel=function(e){function t(t){var n=e.call(this)||this;return n.isServiceSpecific_=!1,n.supportOOB_=!0,n.useNonStandardStacks_=!1,n.purposeOneTreatment_=!1,n.publisherCountryCode_="AA",n.version_=2,n.consentScreen_=0,n.policyVersion_=2,n.consentLanguage_="EN",n.cmpId_=0,n.cmpVersion_=0,n.vendorListVersion_=0,n.numCustomPurposes_=0,n.specialFeatureOptins=new index_js_2.Vector,n.purposeConsents=new index_js_2.Vector,n.purposeLegitimateInterests=new index_js_2.Vector,n.publisherConsents=new index_js_2.Vector,n.publisherLegitimateInterests=new index_js_2.Vector,n.publisherCustomConsents=new index_js_2.Vector,n.publisherCustomLegitimateInterests=new index_js_2.Vector,n.vendorConsents=new index_js_2.Vector,n.vendorLegitimateInterests=new index_js_2.Vector,n.vendorsDisclosed=new index_js_2.Vector,n.vendorsAllowed=new index_js_2.Vector,n.publisherRestrictions=new index_js_2.PurposeRestrictionVector,t&&(n.gvl=t),n.updated(),n}return __extends(t,e),Object.defineProperty(t.prototype,"gvl",{get:function(){return this.gvl_},set:function(e){GVL_js_1.GVL.isInstanceOf(e)||(e=new GVL_js_1.GVL(e)),this.gvl_=e,this.publisherRestrictions.gvl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cmpId",{get:function(){return this.cmpId_},set:function(e){if(e=Number(e),!(Number.isInteger(e)&&e>1))throw new index_js_1.TCModelError("cmpId",e);this.cmpId_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cmpVersion",{get:function(){return this.cmpVersion_},set:function(e){if(e=Number(e),!(Number.isInteger(e)&&e>-1))throw new index_js_1.TCModelError("cmpVersion",e);this.cmpVersion_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"consentScreen",{get:function(){return this.consentScreen_},set:function(e){if(e=Number(e),!(Number.isInteger(e)&&e>-1))throw new index_js_1.TCModelError("consentScreen",e);this.consentScreen_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"consentLanguage",{get:function(){return this.consentLanguage_},set:function(e){this.consentLanguage_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"publisherCountryCode",{get:function(){return this.publisherCountryCode_},set:function(e){if(!/^([A-z]){2}$/.test(e))throw new index_js_1.TCModelError("publisherCountryCode",e);this.publisherCountryCode_=e.toUpperCase()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"vendorListVersion",{get:function(){return this.gvl?this.gvl.vendorListVersion:this.vendorListVersion_},set:function(e){if((e=Number(e)>>0)<0)throw new index_js_1.TCModelError("vendorListVersion",e);this.vendorListVersion_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"policyVersion",{get:function(){return this.gvl?this.gvl.tcfPolicyVersion:this.policyVersion_},set:function(e){if(this.policyVersion_=parseInt(e,10),this.policyVersion_<0)throw new index_js_1.TCModelError("policyVersion",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this.version_},set:function(e){this.version_=parseInt(e,10)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isServiceSpecific",{get:function(){return this.isServiceSpecific_},set:function(e){this.isServiceSpecific_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useNonStandardStacks",{get:function(){return this.useNonStandardStacks_},set:function(e){this.useNonStandardStacks_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"supportOOB",{get:function(){return this.supportOOB_},set:function(e){this.supportOOB_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"purposeOneTreatment",{get:function(){return this.purposeOneTreatment_},set:function(e){this.purposeOneTreatment_=e},enumerable:!1,configurable:!0}),t.prototype.setAllVendorConsents=function(){this.vendorConsents.set(this.gvl.vendors)},t.prototype.unsetAllVendorConsents=function(){this.vendorConsents.empty()},t.prototype.setAllVendorsDisclosed=function(){this.vendorsDisclosed.set(this.gvl.vendors)},t.prototype.unsetAllVendorsDisclosed=function(){this.vendorsDisclosed.empty()},t.prototype.setAllVendorsAllowed=function(){this.vendorsAllowed.set(this.gvl.vendors)},t.prototype.unsetAllVendorsAllowed=function(){this.vendorsAllowed.empty()},t.prototype.setAllVendorLegitimateInterests=function(){this.vendorLegitimateInterests.set(this.gvl.vendors)},t.prototype.unsetAllVendorLegitimateInterests=function(){this.vendorLegitimateInterests.empty()},t.prototype.setAllPurposeConsents=function(){this.purposeConsents.set(this.gvl.purposes)},t.prototype.unsetAllPurposeConsents=function(){this.purposeConsents.empty()},t.prototype.setAllPurposeLegitimateInterests=function(){this.purposeLegitimateInterests.set(this.gvl.purposes)},t.prototype.unsetAllPurposeLegitimateInterests=function(){this.purposeLegitimateInterests.empty()},t.prototype.setAllSpecialFeatureOptins=function(){this.specialFeatureOptins.set(this.gvl.specialFeatures)},t.prototype.unsetAllSpecialFeatureOptins=function(){this.specialFeatureOptins.empty()},t.prototype.setAll=function(){this.setAllVendorConsents(),this.setAllPurposeLegitimateInterests(),this.setAllSpecialFeatureOptins(),this.setAllPurposeConsents(),this.setAllVendorLegitimateInterests()},t.prototype.unsetAll=function(){this.unsetAllVendorConsents(),this.unsetAllPurposeLegitimateInterests(),this.unsetAllSpecialFeatureOptins(),this.unsetAllPurposeConsents(),this.unsetAllVendorLegitimateInterests()},Object.defineProperty(t.prototype,"numCustomPurposes",{get:function(){var e=this.numCustomPurposes_;if("object"==typeof this.customPurposes){var t=Object.keys(this.customPurposes).sort((function(e,t){return Number(e)-Number(t)}));e=parseInt(t.pop(),10)}return e},set:function(e){if(this.numCustomPurposes_=parseInt(e,10),this.numCustomPurposes_<0)throw new index_js_1.TCModelError("numCustomPurposes",e)},enumerable:!1,configurable:!0}),t.prototype.updated=function(){var e=new Date,t=new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()));this.created=t,this.lastUpdated=t},t.consentLanguages=GVL_js_1.GVL.consentLanguages,t}(Cloneable_js_1.Cloneable);exports.TCModel=TCModel;

/***/ }),

/***/ 4566:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.TCString=void 0;var index_js_1=__webpack_require__(2368),index_js_2=__webpack_require__(8663),IntEncoder_js_1=__webpack_require__(6776),TCModel_js_1=__webpack_require__(3769),TCString=function(){function e(){}return e.encode=function(e,n){var r,t="";return e=index_js_1.SemanticPreEncoder.process(e,n),(r=Array.isArray(null==n?void 0:n.segments)?n.segments:new index_js_1.SegmentSequence(e,n)[""+e.version]).forEach((function(n,d){var s="";d<r.length-1&&(s="."),t+=index_js_1.SegmentEncoder.encode(e,n)+s})),t},e.decode=function(e,n){var r=e.split("."),t=r.length;n||(n=new TCModel_js_1.TCModel);for(var d=0;d<t;d++){var s=r[d],i=index_js_1.Base64Url.decode(s.charAt(0)).substr(0,index_js_1.BitLength.segmentType),o=index_js_2.SegmentIDs.ID_TO_KEY[IntEncoder_js_1.IntEncoder.decode(i,index_js_1.BitLength.segmentType).toString()];index_js_1.SegmentEncoder.decode(s,n,o)}return n},e}();exports.TCString=TCString;

/***/ }),

/***/ 4952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Base64Url=void 0;var index_js_1=__webpack_require__(6468),Base64Url=function(){function e(){}return e.encode=function(e){if(!/^[0-1]+$/.test(e))throw new index_js_1.EncodingError("Invalid bitField");var r=e.length%this.LCM;e+=r?"0".repeat(this.LCM-r):"";for(var t="",n=0;n<e.length;n+=this.BASIS)t+=this.DICT[parseInt(e.substr(n,this.BASIS),2)];return t},e.decode=function(e){if(!/^[A-Za-z0-9\-_]+$/.test(e))throw new index_js_1.DecodingError("Invalidly encoded Base64URL string");for(var r="",t=0;t<e.length;t++){var n=this.REVERSE_DICT.get(e[t]).toString(2);r+="0".repeat(this.BASIS-n.length)+n}return r},e.DICT="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",e.REVERSE_DICT=new Map([["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25],["a",26],["b",27],["c",28],["d",29],["e",30],["f",31],["g",32],["h",33],["i",34],["j",35],["k",36],["l",37],["m",38],["n",39],["o",40],["p",41],["q",42],["r",43],["s",44],["t",45],["u",46],["v",47],["w",48],["x",49],["y",50],["z",51],["0",52],["1",53],["2",54],["3",55],["4",56],["5",57],["6",58],["7",59],["8",60],["9",61],["-",62],["_",63]]),e.BASIS=6,e.LCM=24,e}();exports.Base64Url=Base64Url;

/***/ }),

/***/ 9093:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.BitLength=void 0;var index_js_1=__webpack_require__(8663),BitLength=function(){function e(){}var s,i,n,d,t,r,_,o,l,p,x,u,j,a,c,F,g,m;return s=index_js_1.Fields.cmpId,i=index_js_1.Fields.cmpVersion,n=index_js_1.Fields.consentLanguage,d=index_js_1.Fields.consentScreen,t=index_js_1.Fields.created,r=index_js_1.Fields.isServiceSpecific,_=index_js_1.Fields.lastUpdated,o=index_js_1.Fields.policyVersion,l=index_js_1.Fields.publisherCountryCode,p=index_js_1.Fields.publisherLegitimateInterests,x=index_js_1.Fields.publisherConsents,u=index_js_1.Fields.purposeConsents,j=index_js_1.Fields.purposeLegitimateInterests,a=index_js_1.Fields.purposeOneTreatment,c=index_js_1.Fields.specialFeatureOptins,F=index_js_1.Fields.useNonStandardStacks,g=index_js_1.Fields.vendorListVersion,m=index_js_1.Fields.version,e[s]=12,e[i]=12,e[n]=12,e[d]=6,e[t]=36,e[r]=1,e[_]=36,e[o]=6,e[l]=12,e[p]=24,e[x]=24,e[u]=24,e[j]=24,e[a]=1,e[c]=12,e[F]=1,e[g]=12,e[m]=6,e.anyBoolean=1,e.encodingType=1,e.maxId=16,e.numCustomPurposes=6,e.numEntries=12,e.numRestrictions=12,e.purposeId=6,e.restrictionType=2,e.segmentType=3,e.singleOrRange=1,e.vendorId=16,e}();exports.BitLength=BitLength;

/***/ }),

/***/ 4818:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 1123:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.SegmentEncoder=void 0;var Base64Url_js_1=__webpack_require__(4952),BitLength_js_1=__webpack_require__(9093),index_js_1=__webpack_require__(9999),index_js_2=__webpack_require__(1148),index_js_3=__webpack_require__(6468),Fields_js_1=__webpack_require__(8927),index_js_4=__webpack_require__(8663),SegmentEncoder=function(){function e(){}return e.encode=function(e,n){var s,i=this;try{s=this.fieldSequence[String(e.version)][n]}catch(s){throw new index_js_3.EncodingError("Unable to encode version: ".concat(e.version,", segment: ").concat(n))}var r="";n!==index_js_4.Segment.CORE&&(r=index_js_1.IntEncoder.encode(index_js_4.SegmentIDs.KEY_TO_ID[n],BitLength_js_1.BitLength.segmentType));var t=(0,index_js_1.FieldEncoderMap)();return s.forEach((function(s){var d=e[s],o=t[s],_=BitLength_js_1.BitLength[s];void 0===_&&i.isPublisherCustom(s)&&(_=Number(e[Fields_js_1.Fields.numCustomPurposes]));try{r+=o.encode(d,_)}catch(e){throw new index_js_3.EncodingError("Error encoding ".concat(n,"->").concat(s,": ").concat(e.message))}})),Base64Url_js_1.Base64Url.encode(r)},e.decode=function(e,n,s){var i=this,r=Base64Url_js_1.Base64Url.decode(e),t=0;s===index_js_4.Segment.CORE&&(n.version=index_js_1.IntEncoder.decode(r.substr(t,BitLength_js_1.BitLength[Fields_js_1.Fields.version]),BitLength_js_1.BitLength[Fields_js_1.Fields.version])),s!==index_js_4.Segment.CORE&&(t+=BitLength_js_1.BitLength.segmentType);var d=this.fieldSequence[String(n.version)][s],o=(0,index_js_1.FieldEncoderMap)();return d.forEach((function(e){var s=o[e],d=BitLength_js_1.BitLength[e];if(void 0===d&&i.isPublisherCustom(e)&&(d=Number(n[Fields_js_1.Fields.numCustomPurposes])),0!==d){var _=r.substr(t,d);if(s===index_js_1.VendorVectorEncoder?n[e]=s.decode(_,n.version):n[e]=s.decode(_,d),Number.isInteger(d))t+=d;else{if(!Number.isInteger(n[e].bitLength))throw new index_js_3.DecodingError(e);t+=n[e].bitLength}}})),n},e.isPublisherCustom=function(e){return 0===e.indexOf("publisherCustom")},e.fieldSequence=new index_js_2.FieldSequence,e}();exports.SegmentEncoder=SegmentEncoder;

/***/ }),

/***/ 4864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.SemanticPreEncoder=void 0;var index_js_1=__webpack_require__(6468),index_js_2=__webpack_require__(8663),SemanticPreEncoder=function(){function e(){}return e.process=function(e,r){var s=e.gvl;if(!s)throw new index_js_1.EncodingError("Unable to encode TCModel without a GVL");if(!s.isReady)throw new index_js_1.EncodingError("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");(e=e.clone()).consentLanguage=s.language.toUpperCase(),(null==r?void 0:r.version)>0&&(null==r?void 0:r.version)<=this.processor.length?e.version=r.version:e.version=this.processor.length;var n=e.version-1;if(!this.processor[n])throw new index_js_1.EncodingError("Invalid version: ".concat(e.version));return this.processor[n](e,s)},e.processor=[function(e){return e},function(e,r){e.publisherRestrictions.gvl=r,e.purposeLegitimateInterests.unset(1);var s=new Map;return s.set("legIntPurposes",e.vendorLegitimateInterests),s.set("purposes",e.vendorConsents),s.forEach((function(s,n){s.forEach((function(o,t){if(o){var i=r.vendors[t];if(!i||i.deletedDate)s.unset(t);else if(0===i[n].length)if("legIntPurposes"===n&&0===i.purposes.length&&0===i.legIntPurposes.length&&i.specialPurposes.length>0);else if(e.isServiceSpecific)if(0===i.flexiblePurposes.length)s.unset(t);else{for(var c=e.publisherRestrictions.getRestrictions(t),l=!1,d=0,u=c.length;d<u&&!l;d++)l=c[d].restrictionType===index_js_2.RestrictionType.REQUIRE_CONSENT&&"purposes"===n||c[d].restrictionType===index_js_2.RestrictionType.REQUIRE_LI&&"legIntPurposes"===n;l||s.unset(t)}else s.unset(t)}}))})),e.vendorsDisclosed.set(r.vendors),e}],e}();exports.SemanticPreEncoder=SemanticPreEncoder;

/***/ }),

/***/ 5494:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.BooleanEncoder=void 0;var BooleanEncoder=function(){function e(){}return e.encode=function(e){return String(Number(e))},e.decode=function(e){return"1"===e},e}();exports.BooleanEncoder=BooleanEncoder;

/***/ }),

/***/ 7116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.DateEncoder=void 0;var IntEncoder_js_1=__webpack_require__(6776),index_js_1=__webpack_require__(6468),DateEncoder=function(){function e(){}return e.encode=function(e,n){return IntEncoder_js_1.IntEncoder.encode(Math.round(e.getTime()/100),n)},e.decode=function(e,n){if(n!==e.length)throw new index_js_1.DecodingError("invalid bit length");var r=new Date;return r.setTime(100*IntEncoder_js_1.IntEncoder.decode(e,n)),r},e}();exports.DateEncoder=DateEncoder;

/***/ }),

/***/ 331:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.FieldEncoderMap=void 0;var index_js_1=__webpack_require__(8663),BooleanEncoder_js_1=__webpack_require__(5494),DateEncoder_js_1=__webpack_require__(7116),FixedVectorEncoder_js_1=__webpack_require__(1830),IntEncoder_js_1=__webpack_require__(6776),LangEncoder_js_1=__webpack_require__(206),PurposeRestrictionVectorEncoder_js_1=__webpack_require__(9148),VendorVectorEncoder_js_1=__webpack_require__(5793);function FieldEncoderMap(){var e;return(e={})[index_js_1.Fields.version]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.created]=DateEncoder_js_1.DateEncoder,e[index_js_1.Fields.lastUpdated]=DateEncoder_js_1.DateEncoder,e[index_js_1.Fields.cmpId]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.cmpVersion]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.consentScreen]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.consentLanguage]=LangEncoder_js_1.LangEncoder,e[index_js_1.Fields.vendorListVersion]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.policyVersion]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.isServiceSpecific]=BooleanEncoder_js_1.BooleanEncoder,e[index_js_1.Fields.useNonStandardStacks]=BooleanEncoder_js_1.BooleanEncoder,e[index_js_1.Fields.specialFeatureOptins]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.purposeConsents]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.purposeLegitimateInterests]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.purposeOneTreatment]=BooleanEncoder_js_1.BooleanEncoder,e[index_js_1.Fields.publisherCountryCode]=LangEncoder_js_1.LangEncoder,e[index_js_1.Fields.vendorConsents]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.vendorLegitimateInterests]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.publisherRestrictions]=PurposeRestrictionVectorEncoder_js_1.PurposeRestrictionVectorEncoder,e.segmentType=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.vendorsDisclosed]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.vendorsAllowed]=VendorVectorEncoder_js_1.VendorVectorEncoder,e[index_js_1.Fields.publisherConsents]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.publisherLegitimateInterests]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.numCustomPurposes]=IntEncoder_js_1.IntEncoder,e[index_js_1.Fields.publisherCustomConsents]=FixedVectorEncoder_js_1.FixedVectorEncoder,e[index_js_1.Fields.publisherCustomLegitimateInterests]=FixedVectorEncoder_js_1.FixedVectorEncoder,e}exports.FieldEncoderMap=FieldEncoderMap;

/***/ }),

/***/ 1830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.FixedVectorEncoder=void 0;var BooleanEncoder_js_1=__webpack_require__(5494),index_js_1=__webpack_require__(6468),index_js_2=__webpack_require__(8663),FixedVectorEncoder=function(){function e(){}return e.encode=function(e,o){for(var n="",r=1;r<=o;r++)n+=BooleanEncoder_js_1.BooleanEncoder.encode(e.has(r));return n},e.decode=function(e,o){if(e.length!==o)throw new index_js_1.DecodingError("bitfield encoding length mismatch");for(var n=new index_js_2.Vector,r=1;r<=o;r++)BooleanEncoder_js_1.BooleanEncoder.decode(e[r-1])&&n.set(r);return n.bitLength=e.length,n},e}();exports.FixedVectorEncoder=FixedVectorEncoder;

/***/ }),

/***/ 6776:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.IntEncoder=void 0;var index_js_1=__webpack_require__(6468),IntEncoder=function(){function e(){}return e.encode=function(e,n){var t;if("string"==typeof e&&(e=parseInt(e,10)),(t=e.toString(2)).length>n||e<0)throw new index_js_1.EncodingError("".concat(e," too large to encode into ").concat(n));return t.length<n&&(t="0".repeat(n-t.length)+t),t},e.decode=function(e,n){if(n!==e.length)throw new index_js_1.DecodingError("invalid bit length");return parseInt(e,2)},e}();exports.IntEncoder=IntEncoder;

/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.LangEncoder=void 0;var IntEncoder_js_1=__webpack_require__(6776),index_js_1=__webpack_require__(6468),LangEncoder=function(){function e(){}return e.encode=function(e,n){var r=(e=e.toUpperCase()).charCodeAt(0)-65,o=e.charCodeAt(1)-65;if(r<0||r>25||o<0||o>25)throw new index_js_1.EncodingError("invalid language code: ".concat(e));if(n%2==1)throw new index_js_1.EncodingError("numBits must be even, ".concat(n," is not valid"));return n/=2,IntEncoder_js_1.IntEncoder.encode(r,n)+IntEncoder_js_1.IntEncoder.encode(o,n)},e.decode=function(e,n){if(n!==e.length||e.length%2)throw new index_js_1.DecodingError("invalid bit length for language");var r=e.length/2,o=IntEncoder_js_1.IntEncoder.decode(e.slice(0,r),r)+65,d=IntEncoder_js_1.IntEncoder.decode(e.slice(r),r)+65;return String.fromCharCode(o)+String.fromCharCode(d)},e}();exports.LangEncoder=LangEncoder;

/***/ }),

/***/ 9148:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.PurposeRestrictionVectorEncoder=void 0;var BitLength_js_1=__webpack_require__(9093),BooleanEncoder_js_1=__webpack_require__(5494),index_js_1=__webpack_require__(6468),IntEncoder_js_1=__webpack_require__(6776),index_js_2=__webpack_require__(8663),PurposeRestrictionVectorEncoder=function(){function e(){}return e.encode=function(e){var n=IntEncoder_js_1.IntEncoder.encode(e.numRestrictions,BitLength_js_1.BitLength.numRestrictions);return e.isEmpty()||e.getRestrictions().forEach((function(t){n+=IntEncoder_js_1.IntEncoder.encode(t.purposeId,BitLength_js_1.BitLength.purposeId),n+=IntEncoder_js_1.IntEncoder.encode(t.restrictionType,BitLength_js_1.BitLength.restrictionType);for(var r=e.getVendors(t),o=r.length,i=0,s=0,d="",_=function(n){var t=r[n];0===s&&(i++,s=t);var _=r[o-1],c=e.gvl.vendorIds;if(n===o-1||r[n+1]>function(e){for(;++e<=_&&!c.has(e););return e}(t)){var B=!(t===s);d+=BooleanEncoder_js_1.BooleanEncoder.encode(B),d+=IntEncoder_js_1.IntEncoder.encode(s,BitLength_js_1.BitLength.vendorId),B&&(d+=IntEncoder_js_1.IntEncoder.encode(t,BitLength_js_1.BitLength.vendorId)),s=0}},c=0;c<o;c++)_(c);n+=IntEncoder_js_1.IntEncoder.encode(i,BitLength_js_1.BitLength.numEntries),n+=d})),n},e.decode=function(e){var n=0,t=new index_js_2.PurposeRestrictionVector,r=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.numRestrictions),BitLength_js_1.BitLength.numRestrictions);n+=BitLength_js_1.BitLength.numRestrictions;for(var o=0;o<r;o++){var i=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.purposeId),BitLength_js_1.BitLength.purposeId);n+=BitLength_js_1.BitLength.purposeId;var s=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.restrictionType),BitLength_js_1.BitLength.restrictionType);n+=BitLength_js_1.BitLength.restrictionType;var d=new index_js_2.PurposeRestriction(i,s),_=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.numEntries),BitLength_js_1.BitLength.numEntries);n+=BitLength_js_1.BitLength.numEntries;for(var c=0;c<_;c++){var B=BooleanEncoder_js_1.BooleanEncoder.decode(e.substr(n,BitLength_js_1.BitLength.anyBoolean));n+=BitLength_js_1.BitLength.anyBoolean;var g=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.vendorId),BitLength_js_1.BitLength.vendorId);if(n+=BitLength_js_1.BitLength.vendorId,B){var h=IntEncoder_js_1.IntEncoder.decode(e.substr(n,BitLength_js_1.BitLength.vendorId),BitLength_js_1.BitLength.vendorId);if(n+=BitLength_js_1.BitLength.vendorId,h<g)throw new index_js_1.DecodingError("Invalid RangeEntry: endVendorId ".concat(h," is less than ").concat(g));for(var L=g;L<=h;L++)t.add(L,d)}else t.add(g,d)}}return t.bitLength=n,t},e}();exports.PurposeRestrictionVectorEncoder=PurposeRestrictionVectorEncoder;

/***/ }),

/***/ 3759:
/***/ ((__unused_webpack_module, exports) => {

var VectorEncodingType;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.VectorEncodingType=void 0,function(e){e[e.FIELD=0]="FIELD",e[e.RANGE=1]="RANGE"}(VectorEncodingType=exports.VectorEncodingType||(exports.VectorEncodingType={}));

/***/ }),

/***/ 5793:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.VendorVectorEncoder=void 0;var index_js_1=__webpack_require__(8663),index_js_2=__webpack_require__(2368),IntEncoder_js_1=__webpack_require__(6776),BooleanEncoder_js_1=__webpack_require__(5494),FixedVectorEncoder_js_1=__webpack_require__(1830),VectorEncodingType_js_1=__webpack_require__(3759),index_js_3=__webpack_require__(6468),VendorVectorEncoder=function(){function e(){}return e.encode=function(e){var n,d=[],r=[],t=IntEncoder_js_1.IntEncoder.encode(e.maxId,index_js_2.BitLength.maxId),o="",i=index_js_2.BitLength.maxId+index_js_2.BitLength.encodingType,_=i+e.maxId,s=2*index_js_2.BitLength.vendorId+index_js_2.BitLength.singleOrRange+index_js_2.BitLength.numEntries,c=i+index_js_2.BitLength.numEntries;return e.forEach((function(t,i){(o+=BooleanEncoder_js_1.BooleanEncoder.encode(t),(n=e.maxId>s&&c<_)&&t)&&(e.has(i+1)?0===r.length&&(r.push(i),c+=index_js_2.BitLength.singleOrRange,c+=index_js_2.BitLength.vendorId):(r.push(i),c+=index_js_2.BitLength.vendorId,d.push(r),r=[]))})),n?(t+=String(VectorEncodingType_js_1.VectorEncodingType.RANGE),t+=this.buildRangeEncoding(d)):(t+=String(VectorEncodingType_js_1.VectorEncodingType.FIELD),t+=o),t},e.decode=function(e,n){var d,r=0,t=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.maxId),index_js_2.BitLength.maxId);r+=index_js_2.BitLength.maxId;var o=IntEncoder_js_1.IntEncoder.decode(e.charAt(r),index_js_2.BitLength.encodingType);if(r+=index_js_2.BitLength.encodingType,o===VectorEncodingType_js_1.VectorEncodingType.RANGE){if(d=new index_js_1.Vector,1===n){if("1"===e.substr(r,1))throw new index_js_3.DecodingError("Unable to decode default consent=1");r++}var i=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.numEntries),index_js_2.BitLength.numEntries);r+=index_js_2.BitLength.numEntries;for(var _=0;_<i;_++){var s=BooleanEncoder_js_1.BooleanEncoder.decode(e.charAt(r));r+=index_js_2.BitLength.singleOrRange;var c=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.vendorId),index_js_2.BitLength.vendorId);if(r+=index_js_2.BitLength.vendorId,s){var j=IntEncoder_js_1.IntEncoder.decode(e.substr(r,index_js_2.BitLength.vendorId),index_js_2.BitLength.vendorId);r+=index_js_2.BitLength.vendorId;for(var E=c;E<=j;E++)d.set(E)}else d.set(c)}}else{var g=e.substr(r,t);r+=t,d=FixedVectorEncoder_js_1.FixedVectorEncoder.decode(g,t)}return d.bitLength=r,d},e.buildRangeEncoding=function(e){var n=e.length,d=IntEncoder_js_1.IntEncoder.encode(n,index_js_2.BitLength.numEntries);return e.forEach((function(e){var n=1===e.length;d+=BooleanEncoder_js_1.BooleanEncoder.encode(!n),d+=IntEncoder_js_1.IntEncoder.encode(e[0],index_js_2.BitLength.vendorId),n||(d+=IntEncoder_js_1.IntEncoder.encode(e[1],index_js_2.BitLength.vendorId))})),d},e}();exports.VendorVectorEncoder=VendorVectorEncoder;

/***/ }),

/***/ 9999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(5494),exports),__exportStar(__webpack_require__(7116),exports),__exportStar(__webpack_require__(331),exports),__exportStar(__webpack_require__(1830),exports),__exportStar(__webpack_require__(6776),exports),__exportStar(__webpack_require__(206),exports),__exportStar(__webpack_require__(9148),exports),__exportStar(__webpack_require__(3759),exports),__exportStar(__webpack_require__(5793),exports);

/***/ }),

/***/ 2368:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,i){void 0===i&&(i=t),Object.defineProperty(e,i,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,i){void 0===i&&(i=t),e[i]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(4952),exports),__exportStar(__webpack_require__(9093),exports),__exportStar(__webpack_require__(4818),exports),__exportStar(__webpack_require__(1123),exports),__exportStar(__webpack_require__(4864),exports),__exportStar(__webpack_require__(9999),exports),__exportStar(__webpack_require__(1148),exports);

/***/ }),

/***/ 6857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.FieldSequence=void 0;var index_js_1=__webpack_require__(8663),FieldSequence=function(){var e,s;this[1]=((e={})[index_js_1.Segment.CORE]=[index_js_1.Fields.version,index_js_1.Fields.created,index_js_1.Fields.lastUpdated,index_js_1.Fields.cmpId,index_js_1.Fields.cmpVersion,index_js_1.Fields.consentScreen,index_js_1.Fields.consentLanguage,index_js_1.Fields.vendorListVersion,index_js_1.Fields.purposeConsents,index_js_1.Fields.vendorConsents],e),this[2]=((s={})[index_js_1.Segment.CORE]=[index_js_1.Fields.version,index_js_1.Fields.created,index_js_1.Fields.lastUpdated,index_js_1.Fields.cmpId,index_js_1.Fields.cmpVersion,index_js_1.Fields.consentScreen,index_js_1.Fields.consentLanguage,index_js_1.Fields.vendorListVersion,index_js_1.Fields.policyVersion,index_js_1.Fields.isServiceSpecific,index_js_1.Fields.useNonStandardStacks,index_js_1.Fields.specialFeatureOptins,index_js_1.Fields.purposeConsents,index_js_1.Fields.purposeLegitimateInterests,index_js_1.Fields.purposeOneTreatment,index_js_1.Fields.publisherCountryCode,index_js_1.Fields.vendorConsents,index_js_1.Fields.vendorLegitimateInterests,index_js_1.Fields.publisherRestrictions],s[index_js_1.Segment.PUBLISHER_TC]=[index_js_1.Fields.publisherConsents,index_js_1.Fields.publisherLegitimateInterests,index_js_1.Fields.numCustomPurposes,index_js_1.Fields.publisherCustomConsents,index_js_1.Fields.publisherCustomLegitimateInterests],s[index_js_1.Segment.VENDORS_ALLOWED]=[index_js_1.Fields.vendorsAllowed],s[index_js_1.Segment.VENDORS_DISCLOSED]=[index_js_1.Fields.vendorsDisclosed],s)};exports.FieldSequence=FieldSequence;

/***/ }),

/***/ 912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.SegmentSequence=void 0;var index_js_1=__webpack_require__(8663),SegmentSequence=function(e,s){if(this[1]=[index_js_1.Segment.CORE],this[2]=[index_js_1.Segment.CORE],2===e.version)if(e.isServiceSpecific)this[2].push(index_js_1.Segment.PUBLISHER_TC);else{var i=!(!s||!s.isForVendors);i&&!0!==e[index_js_1.Fields.supportOOB]||this[2].push(index_js_1.Segment.VENDORS_DISCLOSED),i&&(e[index_js_1.Fields.supportOOB]&&e[index_js_1.Fields.vendorsAllowed].size>0&&this[2].push(index_js_1.Segment.VENDORS_ALLOWED),this[2].push(index_js_1.Segment.PUBLISHER_TC))}};exports.SegmentSequence=SegmentSequence;

/***/ }),

/***/ 4020:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 1148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),__exportStar=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||__createBinding(t,e,r)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(6857),exports),__exportStar(__webpack_require__(912),exports),__exportStar(__webpack_require__(4020),exports);

/***/ }),

/***/ 5709:
/***/ (function(__unused_webpack_module, exports) {

var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.DecodingError=void 0;var DecodingError=function(r){function t(t){var o=r.call(this,t)||this;return o.name="DecodingError",o}return __extends(t,r),t}(Error);exports.DecodingError=DecodingError;

/***/ }),

/***/ 9094:
/***/ (function(__unused_webpack_module, exports) {

var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.EncodingError=void 0;var EncodingError=function(r){function t(t){var o=r.call(this,t)||this;return o.name="EncodingError",o}return __extends(t,r),t}(Error);exports.EncodingError=EncodingError;

/***/ }),

/***/ 7849:
/***/ (function(__unused_webpack_module, exports) {

var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.GVLError=void 0;var GVLError=function(r){function t(t){var o=r.call(this,t)||this;return o.name="GVLError",o}return __extends(t,r),t}(Error);exports.GVLError=GVLError;

/***/ }),

/***/ 6325:
/***/ (function(__unused_webpack_module, exports) {

var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.TCModelError=void 0;var TCModelError=function(r){function t(t,o,e){void 0===e&&(e="");var n=r.call(this,"invalid value ".concat(o," passed for ").concat(t," ").concat(e))||this;return n.name="TCModelError",n}return __extends(t,r),t}(Error);exports.TCModelError=TCModelError;

/***/ }),

/***/ 6468:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(r,e,t,o){void 0===o&&(o=t),Object.defineProperty(r,o,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,o){void 0===o&&(o=t),r[o]=e[t]}),__exportStar=this&&this.__exportStar||function(r,e){for(var t in r)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||__createBinding(e,r,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(5709),exports),__exportStar(__webpack_require__(9094),exports),__exportStar(__webpack_require__(7849),exports),__exportStar(__webpack_require__(6325),exports);

/***/ }),

/***/ 3406:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(2368),exports),__exportStar(__webpack_require__(6468),exports),__exportStar(__webpack_require__(8663),exports),__exportStar(__webpack_require__(6542),exports),__exportStar(__webpack_require__(4892),exports),__exportStar(__webpack_require__(5761),exports),__exportStar(__webpack_require__(3769),exports),__exportStar(__webpack_require__(4566),exports);

/***/ }),

/***/ 3301:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.BinarySearchTree=void 0;var Cloneable_js_1=__webpack_require__(6542),BinarySearchTree=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.root=null,e}return __extends(e,t),e.prototype.getRoot=function(){return this.root},e.prototype.isEmpty=function(){return!this.root},e.prototype.add=function(t){var e,r={value:t,left:null,right:null};if(this.isEmpty())this.root=r;else for(e=this.root;;)if(t<e.value){if(null===e.left){e.left=r;break}e=e.left}else{if(!(t>e.value))break;if(null===e.right){e.right=r;break}e=e.right}},e.prototype.get=function(){for(var t=[],e=this.root;e;)if(e.left){for(var r=e.left;r.right&&r.right!=e;)r=r.right;r.right==e?(r.right=null,t.push(e.value),e=e.right):(r.right=e,e=e.left)}else t.push(e.value),e=e.right;return t},e.prototype.contains=function(t){for(var e=!1,r=this.root;r;){if(r.value===t){e=!0;break}t>r.value?r=r.right:t<r.value&&(r=r.left)}return e},e.prototype.min=function(t){var e;for(void 0===t&&(t=this.root);t;)t.left?t=t.left:(e=t.value,t=null);return e},e.prototype.max=function(t){var e;for(void 0===t&&(t=this.root);t;)t.right?t=t.right:(e=t.value,t=null);return e},e.prototype.remove=function(t,e){void 0===e&&(e=this.root);for(var r=null,o="left";e;)if(t<e.value)r=e,e=e.left,o="left";else if(t>e.value)r=e,e=e.right,o="right";else{if(e.left||e.right)if(e.left)if(e.right){var i=this.min(e.right);this.remove(i,e.right),e.value=i}else r?r[o]=e.left:this.root=e.left;else r?r[o]=e.right:this.root=e.right;else r?r[o]=null:this.root=null;e=null}},e.build=function(t){if(t&&0!==t.length){if(1===t.length)return(r=new e).add(t[0]),r;var r,o=t.length>>1;(r=new e).add(t[o]);var i=r.getRoot();if(i){if(o+1<t.length){var l=e.build(t.slice(o+1));i.right=l?l.getRoot():null}if(o-1>0){var n=e.build(t.slice(0,o-1));i.left=n?n.getRoot():null}}return r}return null},e}(Cloneable_js_1.Cloneable);exports.BinarySearchTree=BinarySearchTree;

/***/ }),

/***/ 6121:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.ConsentLanguages=void 0;var ConsentLanguages=function(){function e(){}return e.prototype.has=function(n){return e.langSet.has(n)},e.prototype.forEach=function(n){e.langSet.forEach(n)},Object.defineProperty(e.prototype,"size",{get:function(){return e.langSet.size},enumerable:!1,configurable:!0}),e.langSet=new Set(["BG","CA","CS","DA","DE","EL","EN","ES","ET","FI","FR","HR","HU","IT","JA","LT","LV","MT","NL","NO","PL","PT","RO","RU","SK","SL","SV","TR","ZH"]),e}();exports.ConsentLanguages=ConsentLanguages;

/***/ }),

/***/ 2183:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 4661:
/***/ ((__unused_webpack_module, exports) => {

var DeviceDisclosureStorageAccessType;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.DeviceDisclosureStorageAccessType=void 0,function(e){e.COOKIE="cookie",e.WEB="web",e.APP="app"}(DeviceDisclosureStorageAccessType=exports.DeviceDisclosureStorageAccessType||(exports.DeviceDisclosureStorageAccessType={}));

/***/ }),

/***/ 8927:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Fields=void 0;var Fields=function(){function e(){}return e.cmpId="cmpId",e.cmpVersion="cmpVersion",e.consentLanguage="consentLanguage",e.consentScreen="consentScreen",e.created="created",e.supportOOB="supportOOB",e.isServiceSpecific="isServiceSpecific",e.lastUpdated="lastUpdated",e.numCustomPurposes="numCustomPurposes",e.policyVersion="policyVersion",e.publisherCountryCode="publisherCountryCode",e.publisherCustomConsents="publisherCustomConsents",e.publisherCustomLegitimateInterests="publisherCustomLegitimateInterests",e.publisherLegitimateInterests="publisherLegitimateInterests",e.publisherConsents="publisherConsents",e.publisherRestrictions="publisherRestrictions",e.purposeConsents="purposeConsents",e.purposeLegitimateInterests="purposeLegitimateInterests",e.purposeOneTreatment="purposeOneTreatment",e.specialFeatureOptins="specialFeatureOptins",e.useNonStandardStacks="useNonStandardStacks",e.vendorConsents="vendorConsents",e.vendorLegitimateInterests="vendorLegitimateInterests",e.vendorListVersion="vendorListVersion",e.vendorsAllowed="vendorsAllowed",e.vendorsDisclosed="vendorsDisclosed",e.version="version",e}();exports.Fields=Fields;

/***/ }),

/***/ 3263:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 5708:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 3621:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports, "__esModule", ({value:!0})),exports.PurposeRestriction=void 0;var Cloneable_js_1=__webpack_require__(6542),index_js_1=__webpack_require__(6468),RestrictionType_js_1=__webpack_require__(701),PurposeRestriction=function(e){function t(t,r){var o=e.call(this)||this;return void 0!==t&&(o.purposeId=t),void 0!==r&&(o.restrictionType=r),o}return __extends(t,e),t.unHash=function(e){var r=e.split(this.hashSeparator),o=new t;if(2!==r.length)throw new index_js_1.TCModelError("hash",e);return o.purposeId=parseInt(r[0],10),o.restrictionType=parseInt(r[1],10),o},Object.defineProperty(t.prototype,"hash",{get:function(){if(!this.isValid())throw new Error("cannot hash invalid PurposeRestriction");return"".concat(this.purposeId).concat(t.hashSeparator).concat(this.restrictionType)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"purposeId",{get:function(){return this.purposeId_},set:function(e){this.purposeId_=e},enumerable:!1,configurable:!0}),t.prototype.isValid=function(){return Number.isInteger(this.purposeId)&&this.purposeId>0&&(this.restrictionType===RestrictionType_js_1.RestrictionType.NOT_ALLOWED||this.restrictionType===RestrictionType_js_1.RestrictionType.REQUIRE_CONSENT||this.restrictionType===RestrictionType_js_1.RestrictionType.REQUIRE_LI)},t.prototype.isSameAs=function(e){return this.purposeId===e.purposeId&&this.restrictionType===e.restrictionType},t.hashSeparator="-",t}(Cloneable_js_1.Cloneable);exports.PurposeRestriction=PurposeRestriction;

/***/ }),

/***/ 8730:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],o=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return s},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.PurposeRestrictionVector=void 0;var PurposeRestriction_js_1=__webpack_require__(3621),BinarySearchTree_js_1=__webpack_require__(3301),RestrictionType_js_1=__webpack_require__(701),Cloneable_js_1=__webpack_require__(6542),PurposeRestrictionVector=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.bitLength=0,t.map=new Map,t}return __extends(t,e),t.prototype.has=function(e){return this.map.has(e)},t.prototype.isOkToHave=function(e,t,r){var o,n=!0;if(null===(o=this.gvl)||void 0===o?void 0:o.vendors){var i=this.gvl.vendors[r];if(i)if(e===RestrictionType_js_1.RestrictionType.NOT_ALLOWED)n=i.legIntPurposes.includes(t)||i.purposes.includes(t);else if(i.flexiblePurposes.length)switch(e){case RestrictionType_js_1.RestrictionType.REQUIRE_CONSENT:n=i.flexiblePurposes.includes(t)&&i.legIntPurposes.includes(t);break;case RestrictionType_js_1.RestrictionType.REQUIRE_LI:n=i.flexiblePurposes.includes(t)&&i.purposes.includes(t)}else n=!1;else n=!1}return n},t.prototype.add=function(e,t){if(this.isOkToHave(t.restrictionType,t.purposeId,e)){var r=t.hash;this.has(r)||(this.map.set(r,new BinarySearchTree_js_1.BinarySearchTree),this.bitLength=0),this.map.get(r).add(e)}},t.prototype.restrictPurposeToLegalBasis=function(e){for(var t=this.gvl.vendorIds,r=e.hash,o=function(){var e,r,o;try{for(var n=__values(t),i=n.next();!i.done;i=n.next())o=i.value}catch(t){e={error:t}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}return o}(),n=__spreadArray([],__read(Array(o).keys()),!1).map((function(e){return e+1})),i=1;i<=o;i++)this.has(r)||(this.map.set(r,BinarySearchTree_js_1.BinarySearchTree.build(n)),this.bitLength=0),this.map.get(r).add(i)},t.prototype.getVendors=function(e){var t=[];if(e){var r=e.hash;this.has(r)&&(t=this.map.get(r).get())}else{var o=new Set;this.map.forEach((function(e){e.get().forEach((function(e){o.add(e)}))})),t=Array.from(o)}return t},t.prototype.getRestrictionType=function(e,t){var r;return this.getRestrictions(e).forEach((function(e){e.purposeId===t&&(void 0===r||r>e.restrictionType)&&(r=e.restrictionType)})),r},t.prototype.vendorHasRestriction=function(e,t){for(var r=!1,o=this.getRestrictions(e),n=0;n<o.length&&!r;n++)r=t.isSameAs(o[n]);return r},t.prototype.getMaxVendorId=function(){var e=0;return this.map.forEach((function(t){e=Math.max(t.max(),e)})),e},t.prototype.getRestrictions=function(e){var t=[];return this.map.forEach((function(r,o){e?r.contains(e)&&t.push(PurposeRestriction_js_1.PurposeRestriction.unHash(o)):t.push(PurposeRestriction_js_1.PurposeRestriction.unHash(o))})),t},t.prototype.getPurposes=function(){var e=new Set;return this.map.forEach((function(t,r){e.add(PurposeRestriction_js_1.PurposeRestriction.unHash(r).purposeId)})),Array.from(e)},t.prototype.remove=function(e,t){var r=t.hash,o=this.map.get(r);o&&(o.remove(e),o.isEmpty()&&(this.map.delete(r),this.bitLength=0))},Object.defineProperty(t.prototype,"gvl",{get:function(){return this.gvl_},set:function(e){var t=this;this.gvl_||(this.gvl_=e,this.map.forEach((function(e,r){var o=PurposeRestriction_js_1.PurposeRestriction.unHash(r);e.get().forEach((function(r){t.isOkToHave(o.restrictionType,o.purposeId,r)||e.remove(r)}))})))},enumerable:!1,configurable:!0}),t.prototype.isEmpty=function(){return 0===this.map.size},Object.defineProperty(t.prototype,"numRestrictions",{get:function(){return this.map.size},enumerable:!1,configurable:!0}),t}(Cloneable_js_1.Cloneable);exports.PurposeRestrictionVector=PurposeRestrictionVector;

/***/ }),

/***/ 701:
/***/ ((__unused_webpack_module, exports) => {

var RestrictionType;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.RestrictionType=void 0,function(e){e[e.NOT_ALLOWED=0]="NOT_ALLOWED",e[e.REQUIRE_CONSENT=1]="REQUIRE_CONSENT",e[e.REQUIRE_LI=2]="REQUIRE_LI"}(RestrictionType=exports.RestrictionType||(exports.RestrictionType={}));

/***/ }),

/***/ 5000:
/***/ ((__unused_webpack_module, exports) => {

var Segment;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Segment=void 0,function(e){e.CORE="core",e.VENDORS_DISCLOSED="vendorsDisclosed",e.VENDORS_ALLOWED="vendorsAllowed",e.PUBLISHER_TC="publisherTC"}(Segment=exports.Segment||(exports.Segment={}));

/***/ }),

/***/ 4481:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _a;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.SegmentIDs=void 0;var Segment_js_1=__webpack_require__(5000),SegmentIDs=function(){function e(){}return e.ID_TO_KEY=[Segment_js_1.Segment.CORE,Segment_js_1.Segment.VENDORS_DISCLOSED,Segment_js_1.Segment.VENDORS_ALLOWED,Segment_js_1.Segment.PUBLISHER_TC],e.KEY_TO_ID=((_a={})[Segment_js_1.Segment.CORE]=0,_a[Segment_js_1.Segment.VENDORS_DISCLOSED]=1,_a[Segment_js_1.Segment.VENDORS_ALLOWED]=2,_a[Segment_js_1.Segment.PUBLISHER_TC]=3,_a),e}();exports.SegmentIDs=SegmentIDs;

/***/ }),

/***/ 6388:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),__generator=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Vector=void 0;var Cloneable_js_1=__webpack_require__(6542),index_js_1=__webpack_require__(6468),Vector=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bitLength=0,e.maxId_=0,e.set_=new Set,e}return __extends(e,t),e.prototype[Symbol.iterator]=function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=1,e.label=1;case 1:return t<=this.maxId?[4,[t,this.has(t)]]:[3,4];case 2:e.sent(),e.label=3;case 3:return t++,[3,1];case 4:return[2]}}))},e.prototype.values=function(){return this.set_.values()},Object.defineProperty(e.prototype,"maxId",{get:function(){return this.maxId_},enumerable:!1,configurable:!0}),e.prototype.has=function(t){return this.set_.has(t)},e.prototype.unset=function(t){var e=this;Array.isArray(t)?t.forEach((function(t){return e.unset(t)})):"object"==typeof t?this.unset(Object.keys(t).map((function(t){return Number(t)}))):(this.set_.delete(Number(t)),this.bitLength=0,t===this.maxId&&(this.maxId_=0,this.set_.forEach((function(t){e.maxId_=Math.max(e.maxId,t)}))))},e.prototype.isIntMap=function(t){var e=this,r="object"==typeof t;return r=r&&Object.keys(t).every((function(r){var n=Number.isInteger(parseInt(r,10));return n=(n=n&&e.isValidNumber(t[r].id))&&void 0!==t[r].name}))},e.prototype.isValidNumber=function(t){return parseInt(t,10)>0},e.prototype.isSet=function(t){var e=!1;return t instanceof Set&&(e=Array.from(t).every(this.isValidNumber)),e},e.prototype.set=function(t){var e=this;if(Array.isArray(t))t.forEach((function(t){return e.set(t)}));else if(this.isSet(t))this.set(Array.from(t));else if(this.isIntMap(t))this.set(Object.keys(t).map((function(t){return Number(t)})));else{if(!this.isValidNumber(t))throw new index_js_1.TCModelError("set()",t,"must be positive integer array, positive integer, Set<number>, or IntMap");this.set_.add(t),this.maxId_=Math.max(this.maxId,t),this.bitLength=0}},e.prototype.empty=function(){this.set_=new Set},e.prototype.forEach=function(t){for(var e=1;e<=this.maxId;e++)t(this.has(e),e)},Object.defineProperty(e.prototype,"size",{get:function(){return this.set_.size},enumerable:!1,configurable:!0}),e.prototype.setAll=function(t){this.set(t)},e}(Cloneable_js_1.Cloneable);exports.Vector=Vector;

/***/ }),

/***/ 5522:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 9255:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 4196:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 7128:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 5923:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 955:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 5269:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 2959:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 4537:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));

/***/ }),

/***/ 2596:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(5522),exports),__exportStar(__webpack_require__(9255),exports),__exportStar(__webpack_require__(4196),exports),__exportStar(__webpack_require__(7128),exports),__exportStar(__webpack_require__(5923),exports),__exportStar(__webpack_require__(955),exports),__exportStar(__webpack_require__(5269),exports),__exportStar(__webpack_require__(2959),exports),__exportStar(__webpack_require__(4537),exports);

/***/ }),

/***/ 8663:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,o){void 0===o&&(o=t),e[o]=r[t]}),__exportStar=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(3301),exports),__exportStar(__webpack_require__(6121),exports),__exportStar(__webpack_require__(8927),exports),__exportStar(__webpack_require__(3263),exports),__exportStar(__webpack_require__(5708),exports),__exportStar(__webpack_require__(3621),exports),__exportStar(__webpack_require__(8730),exports),__exportStar(__webpack_require__(4661),exports),__exportStar(__webpack_require__(2183),exports),__exportStar(__webpack_require__(701),exports),__exportStar(__webpack_require__(5000),exports),__exportStar(__webpack_require__(4481),exports),__exportStar(__webpack_require__(6388),exports),__exportStar(__webpack_require__(2596),exports);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/errors/EncodingError.js
/**
 * class for encoding errors
 *
 * @extends {Error}
 */
class EncodingError extends Error {
    /**
     * constructor - constructs an EncodingError
     *
     * @param {string} msg - Encoding Error Message
     * @return {undefined}
     */
    constructor(msg) {
        super(msg);
        this.name = 'EncodingError';
    }
}


;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/errors/DecodingError.js
/**
 * class for decoding errors
 *
 * @extends {Error}
 */
class DecodingError extends Error {
    /**
     * constructor - constructs an DecodingError
     *
     * @param {string} msg - Decoding Error Message
     * @return {undefined}
     */
    constructor(msg) {
        super(msg);
        this.name = 'DecodingError';
    }
}


;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/Base64Url.js

class Base64Url {
    /**
     * Base 64 URL character set.  Different from standard Base64 char set
     * in that '+' and '/' are replaced with '-' and '_'.
     */
    static DICT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    static REVERSE_DICT = new Map([
        ['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4], ['F', 5],
        ['G', 6], ['H', 7], ['I', 8], ['J', 9], ['K', 10], ['L', 11],
        ['M', 12], ['N', 13], ['O', 14], ['P', 15], ['Q', 16], ['R', 17],
        ['S', 18], ['T', 19], ['U', 20], ['V', 21], ['W', 22], ['X', 23],
        ['Y', 24], ['Z', 25], ['a', 26], ['b', 27], ['c', 28], ['d', 29],
        ['e', 30], ['f', 31], ['g', 32], ['h', 33], ['i', 34], ['j', 35],
        ['k', 36], ['l', 37], ['m', 38], ['n', 39], ['o', 40], ['p', 41],
        ['q', 42], ['r', 43], ['s', 44], ['t', 45], ['u', 46], ['v', 47],
        ['w', 48], ['x', 49], ['y', 50], ['z', 51], ['0', 52], ['1', 53],
        ['2', 54], ['3', 55], ['4', 56], ['5', 57], ['6', 58], ['7', 59],
        ['8', 60], ['9', 61], ['-', 62], ['_', 63],
    ]);
    /**
     * log2(64) = 6
     */
    static BASIS = 6;
    static LCM = 24;
    /**
     * encodes an arbitrary-length bitfield string into base64url
     *
     * @static
     * @param {string} str - arbitrary-length bitfield string to be encoded to base64url
     * @return {string} - base64url encoded result
     */
    static encode(str) {
        /**
         * should only be 0 or 1
         */
        if (!/^[0-1]+$/.test(str)) {
            throw new EncodingError('Invalid bitField');
        }
        /**
         * Pad the end of the string to the least common mutliple of 6 (basis for
         * base64) and 8 (one byte)
         */
        const padding = str.length % this.LCM;
        str += padding ? '0'.repeat(this.LCM - padding) : '';
        let result = '';
        for (let i = 0; i < str.length; i += this.BASIS) {
            result += this.DICT[parseInt(str.substr(i, this.BASIS), 2)];
        }
        return result;
    }
    /**
     * decodes a base64url encoded bitfield string
     *
     * @static
     * @param {string} str - base64url encoded bitfield string to be decoded
     * @return {string} - bitfield string
     */
    static decode(str) {
        /**
         * should contain only characters from the base64url set
         */
        if (!/^[A-Za-z0-9\-_]+$/.test(str)) {
            throw new DecodingError('Invalidly encoded Base64URL string');
        }
        let result = '';
        for (let i = 0; i < str.length; i++) {
            /**
             * index the binary value of the character from out reverse map
             */
            const strBits = this.REVERSE_DICT.get(str[i]).toString(2);
            /**
             * Since a bit string converted to an integer on encoding will lose
             * leading zeros – pad to the left for those missing leading zeros
             */
            result += '0'.repeat(this.BASIS - strBits.length) + strBits;
        }
        return result;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/ConsentLanguages.js
class ConsentLanguages {
    static langSet = new Set([
        'BG',
        'CA',
        'CS',
        'DA',
        'DE',
        'EL',
        'EN',
        'ES',
        'ET',
        'FI',
        'FR',
        'HR',
        'HU',
        'IT',
        'JA',
        'LT',
        'LV',
        'MT',
        'NL',
        'NO',
        'PL',
        'PT',
        'RO',
        'RU',
        'SK',
        'SL',
        'SV',
        'TR',
        'ZH',
    ]);
    has(key) {
        return ConsentLanguages.langSet.has(key);
    }
    forEach(callback) {
        ConsentLanguages.langSet.forEach(callback);
    }
    get size() {
        return ConsentLanguages.langSet.size;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/Fields.js
class Fields {
    static cmpId = 'cmpId';
    static cmpVersion = 'cmpVersion';
    static consentLanguage = 'consentLanguage';
    static consentScreen = 'consentScreen';
    static created = 'created';
    static supportOOB = 'supportOOB';
    static isServiceSpecific = 'isServiceSpecific';
    static lastUpdated = 'lastUpdated';
    static numCustomPurposes = 'numCustomPurposes';
    static policyVersion = 'policyVersion';
    static publisherCountryCode = 'publisherCountryCode';
    static publisherCustomConsents = 'publisherCustomConsents';
    static publisherCustomLegitimateInterests = 'publisherCustomLegitimateInterests';
    static publisherLegitimateInterests = 'publisherLegitimateInterests';
    static publisherConsents = 'publisherConsents';
    static publisherRestrictions = 'publisherRestrictions';
    static purposeConsents = 'purposeConsents';
    static purposeLegitimateInterests = 'purposeLegitimateInterests';
    static purposeOneTreatment = 'purposeOneTreatment';
    static specialFeatureOptins = 'specialFeatureOptins';
    static useNonStandardStacks = 'useNonStandardStacks';
    static vendorConsents = 'vendorConsents';
    static vendorLegitimateInterests = 'vendorLegitimateInterests';
    static vendorListVersion = 'vendorListVersion';
    static vendorsAllowed = 'vendorsAllowed';
    static vendorsDisclosed = 'vendorsDisclosed';
    static version = 'version';
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/Cloneable.js
/**
 * Abstract Class Cloneable<T> can be extended to give the child class the ability to clone its self.
 * The child class must pass its class to super. You can then pass any needed arguments to help build
 * the cloned class to the protected _clone() method.
 *
 * Example:
 *
 * class Example extends Cloneable<Example> {
 *
 * }
 * Todo: There must be more non primitive build in types to check. But for our current purposes, this works great.
 */
class Cloneable {
    /**
     * clone - returns a copy of the classes with new values and not references
     *
     * @return {T}
     */
    clone() {
        const myClone = new this.constructor();
        const keys = Object.keys(this);
        keys.forEach((key) => {
            const value = this.deepClone(this[key]);
            if (value !== undefined) {
                myClone[key] = value;
            }
        });
        return myClone;
    }
    ;
    /**
     * deepClone - recursive function that makes copies of reference values
     *
     * @param {unknown} item
     * @return {unknown}
     */
    deepClone(item) {
        const itsType = typeof item;
        if (itsType === 'number' || itsType === 'string' || itsType === 'boolean') {
            return item;
        }
        else if (item !== null && itsType === 'object') {
            if (typeof item.clone === 'function') {
                return item.clone();
            }
            else if (item instanceof Date) {
                return new Date(item.getTime());
            }
            else if (item[Symbol.iterator] !== undefined) {
                const ar = [];
                for (const subItem of item) {
                    ar.push(this.deepClone(subItem));
                }
                if (item instanceof Array) {
                    return ar;
                }
                else {
                    return new item.constructor(ar);
                }
            }
            else {
                const retr = {};
                for (const prop in item) {
                    if (item.hasOwnProperty(prop)) {
                        retr[prop] = this.deepClone(item[prop]);
                    }
                }
                return retr;
            }
        }
        /**
         * ignore functions because those will be initialized with the cloning
         * process
         */
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/errors/TCModelError.js
/**
 * class for decoding errors
 *
 * @extends {Error}
 */
class TCModelError extends Error {
    /**
     * constructor - constructs an TCModelError
     *
     * @param {string} fieldName - the errored field
     * @param {string} passedValue - what was passed
     * @return {undefined}
     */
    constructor(fieldName, passedValue, msg = '') {
        super(`invalid value ${passedValue} passed for ${fieldName} ${msg}`);
        this.name = 'TCModelError';
    }
}


;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/RestrictionType.js
/**
 * if a Vendor has declared flexible purposes (see: [[Vendor]] under
 * `flexiblePurposeIds`) on the Global Vendor List ([[Declarations]]) a CMP may
 * change their legal basis for processing in the encoding.
 */
var RestrictionType;
(function (RestrictionType) {
    /**
     * under no circumstances is this purpose allowed.
     */
    RestrictionType[RestrictionType["NOT_ALLOWED"] = 0] = "NOT_ALLOWED";
    /**
     * if the default declaration is legitimate interest then this flips the purpose to consent in the encoding.
     */
    RestrictionType[RestrictionType["REQUIRE_CONSENT"] = 1] = "REQUIRE_CONSENT";
    /**
     * if the default declaration is consent then this flips the purpose to Legitimate Interest in the encoding.
     */
    RestrictionType[RestrictionType["REQUIRE_LI"] = 2] = "REQUIRE_LI";
})(RestrictionType || (RestrictionType = {}));

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestriction.js



class PurposeRestriction extends Cloneable {
    static hashSeparator = '-';
    purposeId_;
    restrictionType;
    /**
     * constructor
     *
     * @param {number} purposeId? - may optionally pass the purposeId into the
     * constructor
     * @param {RestrictionType} restrictionType? - may
     * optionally pass the restrictionType into the constructor
     * @return {undefined}
     */
    constructor(purposeId, restrictionType) {
        super();
        if (purposeId !== undefined) {
            this.purposeId = purposeId;
        }
        if (restrictionType !== undefined) {
            this.restrictionType = restrictionType;
        }
    }
    static unHash(hash) {
        const splitUp = hash.split(this.hashSeparator);
        const purpRestriction = new PurposeRestriction();
        if (splitUp.length !== 2) {
            throw new TCModelError('hash', hash);
        }
        purpRestriction.purposeId = parseInt(splitUp[0], 10);
        purpRestriction.restrictionType = parseInt(splitUp[1], 10);
        return purpRestriction;
    }
    get hash() {
        if (!this.isValid()) {
            throw new Error('cannot hash invalid PurposeRestriction');
        }
        return `${this.purposeId}${PurposeRestriction.hashSeparator}${this.restrictionType}`;
    }
    /**
     * @return {number} The purpose Id associated with a publisher
     * purpose-by-vendor restriction that resulted in a different consent or LI
     * status than the consent or LI purposes allowed lists.
     */
    get purposeId() {
        return this.purposeId_;
    }
    /**
     * @param {number} idNum - The purpose Id associated with a publisher
     * purpose-by-vendor restriction that resulted in a different consent or LI
     * status than the consent or LI purposes allowed lists.
     */
    set purposeId(idNum) {
        this.purposeId_ = idNum;
    }
    isValid() {
        return (Number.isInteger(this.purposeId) &&
            this.purposeId > 0 &&
            (this.restrictionType === RestrictionType.NOT_ALLOWED ||
                this.restrictionType === RestrictionType.REQUIRE_CONSENT ||
                this.restrictionType === RestrictionType.REQUIRE_LI));
    }
    isSameAs(otherPR) {
        return (this.purposeId === otherPR.purposeId &&
            this.restrictionType === otherPR.restrictionType);
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/BinarySearchTree.js

class BinarySearchTree extends Cloneable {
    root = null;
    getRoot() {
        return this.root;
    }
    isEmpty() {
        // if root is undefined or null then by definition this is empty
        return !(this.root);
    }
    add(value) {
        // create new node object
        const node = {
            value: value,
            left: null,
            right: null,
        };
        let current;
        // first item?
        if (this.isEmpty()) {
            this.root = node;
        }
        else {
            // start at the root
            current = this.root;
            // infinite loop, figure out where to put it
            while (true) {
                // if the value is less than current value; go left
                if (value < current.value) {
                    // if it's empty, we can insert
                    if (current.left === null) {
                        // insert on the left
                        current.left = node;
                        // our work is done here
                        break;
                    }
                    else {
                        /**
                         * if there's something there already, we'll reset the pointer and
                         * wait for the next loop to do something ie. keep traversing
                         */
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    // if the value is greater than our current value; go right
                    if (current.right === null) {
                        // there's nothing to the right, so put it here
                        current.right = node;
                        break;
                    }
                    else {
                        /**
                         * if there's something there already, we'll reset the pointer and
                         * wait for the next loop to do something ie. keep traversing
                         */
                        current = current.right;
                    }
                }
                else {
                    /**
                     * If it's neither greater than the right or less than the right then
                     * it is equal to the current nodes value.  In that case we won't do
                     * anything with it because we will only insert unique values.
                     */
                    break;
                }
            }
        }
    }
    /**
     * performs Morris in-order traversal
     * @return {number[]} sorted array
     */
    get() {
        const retr = [];
        let current = this.root;
        while (current) {
            if (!current.left) {
                retr.push(current.value); // if there is no left child, visit current node
                current = current.right; // then we go the right branch
            }
            else {
                // find the right most leaf of root.left node.
                let pre = current.left;
                // when pre.right == null, it means we go to the right most leaf
                // when pre.right == current, it means the right most leaf has been visited in the last round
                while (pre.right && pre.right != current) {
                    pre = pre.right;
                }
                // this means the pre.right has been set, it's time to go to current node
                if (pre.right == current) {
                    pre.right = null;
                    // means the current node is pointed by left right most child
                    // the left branch has been visited, it's time to push the current node
                    retr.push(current.value);
                    current = current.right;
                }
                else {
                    // the fist time to visit the pre node, make its right child point to current node
                    pre.right = current;
                    current = current.left;
                }
            }
        }
        return retr;
    }
    contains(value) {
        let retr = false;
        let current = this.root;
        while (current) {
            if (current.value === value) {
                retr = true;
                break;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else if (value < current.value) {
                current = current.left;
            }
        }
        return retr;
    }
    min(current = this.root) {
        let retr;
        while (current) {
            if (current.left) {
                current = current.left;
            }
            else {
                retr = current.value;
                current = null;
            }
        }
        return retr;
    }
    max(current = this.root) {
        let retr;
        while (current) {
            if (current.right) {
                current = current.right;
            }
            else {
                retr = current.value;
                current = null;
            }
        }
        return retr;
    }
    remove(value, current = this.root) {
        // we start at the root, so the parent is null
        let parent = null;
        let parentSide = 'left';
        while (current) {
            if (value < current.value) {
                // set our parent to the current value
                parent = current;
                // value is less than current value, so go left
                current = current.left;
                parentSide = 'left';
            }
            else if (value > current.value) {
                // set our parent to the current value
                parent = current;
                // value is greater than current value, so go right
                current = current.right;
                parentSide = 'right';
            }
            else {
                /**
                   * if it's neither greater than or less than, then it's equal so BINGO!
                   * we've found it
                   *
                   * If we have children, we've got to figure out what to do with
                   * them once we are no longer around...  Woah, code is like real
                   * life...
                   *
                   * There are three cases we care about when it comes to this removal
                   * process:
                   *
                   * 1. No children -- If not children we just delete an do nothing
                   * else, no harm no foul.
                   *
                   * 2. One child -- Just link the parent's link to current to the
                   * child.
                   *
                   * 3. Two children --  Find the minimum value from the right subtree
                   * replace us with the minimum value and of course remove that
                   * minimum value from the right stubtree
                   */
                if (!current.left && !current.right) {
                    // case 1 there are no children easy peasy lemon squeezy
                    if (parent) {
                        parent[parentSide] = null;
                    }
                    else {
                        this.root = null;
                    }
                }
                else if (!current.left) {
                    // no left side only right, so link right
                    if (parent) {
                        parent[parentSide] = current.right;
                    }
                    else {
                        this.root = current.right;
                    }
                }
                else if (!current.right) {
                    // no right side only left, so link left
                    if (parent) {
                        parent[parentSide] = current.left;
                    }
                    else {
                        this.root = current.left;
                    }
                }
                else {
                    /**
                     * case 3 just like real life, if you delete a parent the more kids
                     * that parent has the more complicated things get... in this case we
                     * have two children.  We're gonna have to figure out who goes where.
                     */
                    const minVal = this.min(current.right);
                    // little bit of recursion...
                    this.remove(minVal, current.right);
                    current.value = minVal;
                }
                current = null;
            }
        }
    }
    /**
     * Build Binary Search Tree from the ordered number array.
     *  The depth of the tree will be the `log2` of the array length.
     * @param {number[]} values number array in ascending order
     * @return {BinarySearchTree} Binary Search Tree
     */
    static build(values) {
        if (!values || values.length === 0) {
            return null;
        }
        else if (values.length === 1) {
            const tree = new BinarySearchTree();
            tree.add(values[0]);
            return tree;
        }
        else {
            const rootIndex = values.length >> 1;
            const tree = new BinarySearchTree();
            tree.add(values[rootIndex]);
            const root = tree.getRoot();
            if (root) {
                if (rootIndex + 1 < values.length) {
                    const rightTree = BinarySearchTree.build(values.slice(rootIndex + 1));
                    root.right = rightTree ? rightTree.getRoot() : null;
                }
                if (rootIndex - 1 > 0) {
                    const leftTree = BinarySearchTree.build(values.slice(0, rootIndex - 1));
                    root.left = leftTree ? leftTree.getRoot() : null;
                }
            }
            return tree;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestrictionVector.js




class PurposeRestrictionVector extends Cloneable {
    /**
     * if this originatd from an encoded string we'll need a place to store the
     * bit length; it can be set and got from here
     */
    bitLength = 0;
    /**
     * a map indexed by a string which will be a 'hash' of the purpose and
     * restriction type.
     *
     * Using a BST to keep vendors in a sorted order for encoding later
     */
    map = new Map();
    gvl_;
    has(hash) {
        return this.map.has(hash);
    }
    isOkToHave(restrictionType, purposeId, vendorId) {
        let result = true;
        /**
         * without a gvl set, there's no way to know... in that case we'll return
         * true but once the GVL is set later we'll go through these and clean up
         * the mess.
         */
        if (this.gvl?.vendors) {
            const vendor = this.gvl.vendors[vendorId];
            if (vendor) {
                if (restrictionType === RestrictionType.NOT_ALLOWED) {
                    /**
                     * if it's "not allowed" then flexible declaration is ignored but if
                     * if it isn't even listed as one of the purposes the vendor uses,
                     * then there is no reason to encode the value so check both arrays
                     * to see if it exists.  If it does then we can restrict it.
                     */
                    result = (vendor.legIntPurposes.includes(purposeId) || vendor.purposes.includes(purposeId));
                }
                else if (vendor.flexiblePurposes.length) {
                    switch (restrictionType) {
                        /**
                         * If the vendor has the purposeId in flexiblePurposes and it is
                         * listed as a legitimate interest purpose we can set the
                         * override to require consent.
                         */
                        case RestrictionType.REQUIRE_CONSENT:
                            result = (vendor.flexiblePurposes.includes(purposeId) && vendor.legIntPurposes.includes(purposeId));
                            break;
                        /**
                         * If the vendor has the purposeId in flexiblePurposes and it is
                         * listed as a consent purpose we can set the
                         * override to require legitimate interest.
                         */
                        case RestrictionType.REQUIRE_LI:
                            result = (vendor.flexiblePurposes.includes(purposeId) && vendor.purposes.includes(purposeId));
                            break;
                    }
                }
                else {
                    result = false;
                }
            }
            else {
                // this vendor doesn't exist
                result = false;
            }
        }
        // if the gvl isn't defined, we can't do anything until later
        return result;
    }
    /**
     * add - adds a given Vendor ID under a given Purpose Restriction
     *
     * @param {number} vendorId
     * @param {PurposeRestriction} purposeRestriction
     * @return {void}
     */
    add(vendorId, purposeRestriction) {
        if (this.isOkToHave(purposeRestriction.restrictionType, purposeRestriction.purposeId, vendorId)) {
            const hash = purposeRestriction.hash;
            if (!this.has(hash)) {
                this.map.set(hash, new BinarySearchTree());
                this.bitLength = 0;
            }
            /**
             * Previously I had a check here to remove a duplicate value, but because
             * we're using a tree the value is guaranteed to be unique so there is no
             * need to add an additional de-duplication here.
             */
            this.map.get(hash).add(vendorId);
        }
    }
    /**
     * restrictPurposeToLegalBasis - adds all Vendors under a given Purpose Restriction
     *
     * @param {PurposeRestriction} purposeRestriction
     * @return {void}
     */
    restrictPurposeToLegalBasis(purposeRestriction) {
        const vendors = this.gvl.vendorIds;
        const hash = purposeRestriction.hash;
        const lastEntry = (function () {
            let value;
            for (value of vendors)
                ;
            return value;
        })();
        /**
         * Create an ordered array of vendor IDs from `1` (the minimum value for Vendor ID) to `lastEntry`
         */
        const values = [...Array(lastEntry).keys()].map((i) => i + 1);
        for (let i = 1; i <= lastEntry; i++) {
            if (!this.has(hash)) {
                this.map.set(hash, BinarySearchTree.build(values)); // use static method `build` to create a `BST` from the ordered array of IDs
                this.bitLength = 0;
            }
            /**
             * Previously I had a check here to remove a duplicate value, but because
             * we're using a tree the value is guaranteed to be unique so there is no
             * need to add an additional de-duplication here.
             */
            this.map.get(hash).add(i);
        }
    }
    /**
     * getVendors - returns array of vendor ids optionally narrowed by a given
     * Purpose Restriction.  If no purpose restriction is passed then all vendor
     * ids will be returned.  One can expect this result to be a unique set of
     * ids no duplicates.
     *
     * @param {PurposeRestriction} [purposeRestriction] - optionally passed to
     * get only Vendor IDs restricted under the given Purpose Restriction
     * @return {number[]} - Unique ID set of vendors
     */
    getVendors(purposeRestriction) {
        let vendorIds = [];
        if (purposeRestriction) {
            const hash = purposeRestriction.hash;
            if (this.has(hash)) {
                vendorIds = this.map.get(hash).get();
            }
        }
        else {
            const vendorSet = new Set();
            this.map.forEach((bst) => {
                bst.get().forEach((vendorId) => {
                    vendorSet.add(vendorId);
                });
            });
            vendorIds = Array.from(vendorSet);
        }
        return vendorIds;
    }
    getRestrictionType(vendorId, purposeId) {
        let rType;
        this.getRestrictions(vendorId).forEach((purposeRestriction) => {
            if (purposeRestriction.purposeId === purposeId) {
                if (rType === undefined || rType > purposeRestriction.restrictionType) {
                    rType = purposeRestriction.restrictionType;
                }
            }
        });
        return rType;
    }
    /**
     * vendorHasRestriction - determines whether a given Vendor ID is under a
     * given Purpose Restriction
     *
     * @param {number} vendorId
     * @param {PurposeRestriction} purposeRestriction
     * @return {boolean} - true if the give Vendor ID is under the given Purpose
     * Restriction
     */
    vendorHasRestriction(vendorId, purposeRestriction) {
        let has = false;
        const restrictions = this.getRestrictions(vendorId);
        for (let i = 0; i < restrictions.length && !has; i++) {
            has = purposeRestriction.isSameAs(restrictions[i]);
        }
        return has;
    }
    /**
     * getMaxVendorId - gets the Maximum Vendor ID regardless of Purpose
     * Restriction
     *
     * @return {number} - maximum Vendor ID
     */
    getMaxVendorId() {
        let retr = 0;
        this.map.forEach((bst) => {
            retr = Math.max(bst.max(), retr);
        });
        return retr;
    }
    getRestrictions(vendorId) {
        const retr = [];
        this.map.forEach((bst, hash) => {
            if (vendorId) {
                if (bst.contains(vendorId)) {
                    retr.push(PurposeRestriction.unHash(hash));
                }
            }
            else {
                retr.push(PurposeRestriction.unHash(hash));
            }
        });
        return retr;
    }
    getPurposes() {
        const purposeIds = new Set();
        this.map.forEach((bst, hash) => {
            purposeIds.add(PurposeRestriction.unHash(hash).purposeId);
        });
        return Array.from(purposeIds);
    }
    /**
     * remove - removes Vendor ID from a Purpose Restriction
     *
     * @param {number} vendorId
     * @param {PurposeRestriction} purposeRestriction
     * @return {void}
     */
    remove(vendorId, purposeRestriction) {
        const hash = purposeRestriction.hash;
        const bst = this.map.get(hash);
        if (bst) {
            bst.remove(vendorId);
            // if it's empty let's delete the key so it doesn't show up empty
            if (bst.isEmpty()) {
                this.map.delete(hash);
                this.bitLength = 0;
            }
        }
    }
    /**
     * Essential for being able to determine whether we can actually set a
     * purpose restriction since they have to have a flexible legal basis
     *
     * @param {GVL} value - the GVL instance
     */
    set gvl(value) {
        if (!this.gvl_) {
            this.gvl_ = value;
            /**
             * if we have restrictions set before the gvl is set then we'll have to
             * go through and remove some if they're not valid
             */
            this.map.forEach((bst, hash) => {
                const purposeRestriction = PurposeRestriction.unHash(hash);
                const vendors = bst.get();
                vendors.forEach((vendorId) => {
                    if (!this.isOkToHave(purposeRestriction.restrictionType, purposeRestriction.purposeId, vendorId)) {
                        bst.remove(vendorId);
                    }
                });
            });
        }
    }
    /**
     * gvl returns local copy of the GVL these restrictions apply to
     *
     * @return {GVL}
     */
    get gvl() {
        return this.gvl_;
    }
    /**
     * isEmpty - whether or not this vector has any restrictions in it
     *
     * @return {boolean}
     */
    isEmpty() {
        return this.map.size === 0;
    }
    ;
    /**
     * numRestrictions - returns the number of Purpose Restrictions.
     *
     * @return {number}
     */
    get numRestrictions() {
        return this.map.size;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/DeviceDisclosureStorageAccessType.js
var DeviceDisclosureStorageAccessType;
(function (DeviceDisclosureStorageAccessType) {
    DeviceDisclosureStorageAccessType["COOKIE"] = "cookie";
    DeviceDisclosureStorageAccessType["WEB"] = "web";
    DeviceDisclosureStorageAccessType["APP"] = "app";
})(DeviceDisclosureStorageAccessType || (DeviceDisclosureStorageAccessType = {}));

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/Segment.js
var Segment;
(function (Segment) {
    Segment["CORE"] = "core";
    Segment["VENDORS_DISCLOSED"] = "vendorsDisclosed";
    Segment["VENDORS_ALLOWED"] = "vendorsAllowed";
    Segment["PUBLISHER_TC"] = "publisherTC";
})(Segment || (Segment = {}));

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/SegmentIDs.js

class SegmentIDs {
    /**
     * 0 = default - reserved for core string (does not need to be present in the core string)
     * 1 = OOB vendors disclosed
     * 2 = OOB vendors allowed
     * 3 = PublisherTC
     */
    static ID_TO_KEY = [
        Segment.CORE,
        Segment.VENDORS_DISCLOSED,
        Segment.VENDORS_ALLOWED,
        Segment.PUBLISHER_TC,
    ];
    static KEY_TO_ID = {
        [Segment.CORE]: 0,
        [Segment.VENDORS_DISCLOSED]: 1,
        [Segment.VENDORS_ALLOWED]: 2,
        [Segment.PUBLISHER_TC]: 3,
    };
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/Vector.js


/**
 * Vector class is like a Set except it keeps track of a max id
 */
class Vector extends Cloneable {
    /**
     * if this originatd from an encoded string we'll need a place to store the
     * bit length; it can be set and got from here
     */
    bitLength = 0;
    maxId_ = 0;
    set_ = new Set();
    *[Symbol.iterator]() {
        for (let i = 1; i <= this.maxId; i++) {
            yield [i, this.has(i)];
        }
    }
    /**
     * values()
     *
     * @return {IterableIterator<number>} - returns an iterator of the positive
     * values in the set
     */
    values() {
        return this.set_.values();
    }
    /**
     * maxId
     *
     * @return {number} - the highest id in this Vector
     */
    get maxId() {
        return this.maxId_;
    }
    /**
     * get
     *
     * @param {number} id - key for value to check
     * @return {boolean} - value of that key, if never set it will be false
     */
    has(id) {
        /**
         * if it exists in the set we'll return true
         */
        return this.set_.has(id);
    }
    /**
     * unset
     *
     * @param {SingleIDOrCollection} id - id or ids to unset
     * @return {void}
     */
    unset(id) {
        if (Array.isArray(id)) {
            id.forEach((id) => this.unset(id));
        }
        else if (typeof id === 'object') {
            this.unset(Object.keys(id).map((strId) => Number(strId)));
        }
        else {
            this.set_.delete(Number(id));
            /**
             * if bitLength was set before, it must now be unset
             */
            this.bitLength = 0;
            if (id === this.maxId) {
                /**
                 * aww bummer we lost our maxId... now we've got to search through
                 * all the ids and find the biggest one.
                 */
                this.maxId_ = 0;
                this.set_.forEach((id) => {
                    this.maxId_ = Math.max(this.maxId, id);
                });
            }
        }
    }
    isIntMap(item) {
        let result = (typeof item === 'object');
        result = (result && Object.keys(item).every((key) => {
            let itemResult = Number.isInteger(parseInt(key, 10));
            itemResult = (itemResult && this.isValidNumber(item[key].id));
            itemResult = (itemResult && item[key].name !== undefined);
            return itemResult;
        }));
        return result;
    }
    isValidNumber(item) {
        return (parseInt(item, 10) > 0);
    }
    isSet(item) {
        let result = false;
        if (item instanceof Set) {
            result = Array.from(item).every(this.isValidNumber);
        }
        return result;
    }
    /**
     * set - sets an item assumed to be a truthy value by its presence
     *
     * @param {SingleIDOrCollection} item - May be a single id (positive integer)
     * or collection of ids in a set, GVL Int Map, or Array.
     *
     * @return {void}
     */
    set(item) {
        /**
         * strategy here is to just recursively call set if it's a collection until
         * we get to the final integer ID
         */
        if (Array.isArray(item)) {
            item.forEach((item) => this.set(item));
        }
        else if (this.isSet(item)) {
            this.set(Array.from(item));
        }
        else if (this.isIntMap(item)) {
            this.set(Object.keys(item).map((strId) => Number(strId)));
        }
        else if (this.isValidNumber(item)) {
            this.set_.add(item);
            this.maxId_ = Math.max(this.maxId, item);
            /**
             * if bitLength was set before, it must now be unset
             */
            this.bitLength = 0;
        }
        else {
            /**
             * Super not cool to try and set something that's not valid
             */
            throw new TCModelError('set()', item, 'must be positive integer array, positive integer, Set<number>, or IntMap');
        }
    }
    empty() {
        this.set_ = new Set();
    }
    /**
     * forEach - to traverse from id=1 to id=maxId in a sequential non-sparse manner
     *
     *
     * @param {forEachCallback} callback - callback to execute
     * @return {void}
     *
     * @callback forEachCallback
     * @param {boolean} value - whether or not this id exists in the vector
     * @param {number} id - the id number of the current iteration
     */
    forEach(callback) {
        for (let i = 1; i <= this.maxId; i++) {
            callback(this.has(i), i);
        }
    }
    get size() {
        return this.set_.size;
    }
    setAll(intMap) {
        this.set(intMap);
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/model/index.js















;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/BitLength.js

class BitLength {
    static [Fields.cmpId] = 12;
    static [Fields.cmpVersion] = 12;
    static [Fields.consentLanguage] = 12;
    static [Fields.consentScreen] = 6;
    static [Fields.created] = 36;
    static [Fields.isServiceSpecific] = 1;
    static [Fields.lastUpdated] = 36;
    static [Fields.policyVersion] = 6;
    static [Fields.publisherCountryCode] = 12;
    static [Fields.publisherLegitimateInterests] = 24;
    static [Fields.publisherConsents] = 24;
    static [Fields.purposeConsents] = 24;
    static [Fields.purposeLegitimateInterests] = 24;
    static [Fields.purposeOneTreatment] = 1;
    static [Fields.specialFeatureOptins] = 12;
    static [Fields.useNonStandardStacks] = 1;
    static [Fields.vendorListVersion] = 12;
    static [Fields.version] = 6;
    static anyBoolean = 1;
    static encodingType = 1;
    static maxId = 16;
    static numCustomPurposes = 6;
    static numEntries = 12;
    static numRestrictions = 12;
    static purposeId = 6;
    static restrictionType = 2;
    static segmentType = 3;
    static singleOrRange = 1;
    static vendorId = 16;
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js
class BooleanEncoder {
    static encode(value) {
        return String(Number(value));
    }
    static decode(value) {
        // less operations than !!parseInt(value, 2)
        return value === '1';
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js

class IntEncoder {
    static encode(value, numBits) {
        let bitString;
        if (typeof value === 'string') {
            value = parseInt(value, 10);
        }
        bitString = value.toString(2);
        if (bitString.length > numBits || value < 0) {
            throw new EncodingError(`${value} too large to encode into ${numBits}`);
        }
        // Pad the string if not filling all bits
        if (bitString.length < numBits) {
            // pad left
            bitString = '0'.repeat(numBits - bitString.length) + bitString;
        }
        return bitString;
    }
    static decode(value, numBits) {
        if (numBits !== value.length) {
            throw new DecodingError('invalid bit length');
        }
        return parseInt(value, 2);
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/DateEncoder.js


class DateEncoder {
    static encode(value, numBits) {
        return IntEncoder.encode(Math.round(value.getTime() / 100), numBits);
    }
    static decode(value, numBits) {
        if (numBits !== value.length) {
            throw new DecodingError('invalid bit length');
        }
        const date = new Date();
        date.setTime(IntEncoder.decode(value, numBits) * 100);
        return date;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/FixedVectorEncoder.js



class FixedVectorEncoder {
    static encode(value, numBits) {
        let bitString = '';
        for (let i = 1; i <= numBits; i++) {
            bitString += BooleanEncoder.encode(value.has(i));
        }
        return bitString;
    }
    static decode(value, numBits) {
        if (value.length !== numBits) {
            throw new DecodingError('bitfield encoding length mismatch');
        }
        const vector = new Vector();
        for (let i = 1; i <= numBits; i++) {
            if (BooleanEncoder.decode(value[i - 1])) {
                vector.set(i);
            }
        }
        vector.bitLength = value.length;
        return vector;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/LangEncoder.js


class LangEncoder {
    static encode(value, numBits) {
        value = value.toUpperCase();
        const ASCII_START = 65;
        const firstLetter = value.charCodeAt(0) - ASCII_START;
        const secondLetter = value.charCodeAt(1) - ASCII_START;
        // check some things to throw some good errors
        if (firstLetter < 0 || firstLetter > 25 || secondLetter < 0 || secondLetter > 25) {
            throw new EncodingError(`invalid language code: ${value}`);
        }
        if (numBits % 2 === 1) {
            throw new EncodingError(`numBits must be even, ${numBits} is not valid`);
        }
        numBits = numBits / 2;
        const firstLetterBString = IntEncoder.encode(firstLetter, numBits);
        const secondLetterBString = IntEncoder.encode(secondLetter, numBits);
        return firstLetterBString + secondLetterBString;
    }
    static decode(value, numBits) {
        let retr;
        // is it an even number of bits? we have to divide it
        if (numBits === value.length && !(value.length % 2)) {
            const ASCII_START = 65;
            const mid = value.length / 2;
            const firstLetter = IntEncoder.decode(value.slice(0, mid), mid) + ASCII_START;
            const secondLetter = IntEncoder.decode(value.slice(mid), mid) + ASCII_START;
            retr = String.fromCharCode(firstLetter) + String.fromCharCode(secondLetter);
        }
        else {
            throw new DecodingError('invalid bit length for language');
        }
        return retr;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/PurposeRestrictionVectorEncoder.js





class PurposeRestrictionVectorEncoder {
    static encode(prVector) {
        // start with the number of restrictions
        let bitString = IntEncoder.encode(prVector.numRestrictions, BitLength.numRestrictions);
        // if the vector is empty we'll just return a string with just the numRestricitons being 0
        if (!prVector.isEmpty()) {
            // create each restriction group
            prVector.getRestrictions().forEach((purpRestriction) => {
                // every restriction group has the purposeId and the restrictionType;
                bitString += IntEncoder.encode(purpRestriction.purposeId, BitLength.purposeId);
                bitString += IntEncoder.encode(purpRestriction.restrictionType, BitLength.restrictionType);
                // now get all the vendors under that restriction
                const vendors = prVector.getVendors(purpRestriction);
                const len = vendors.length;
                /**
                 * numEntries comes first so we will have to keep a counter and the do
                 * the encoding at the end
                 */
                let numEntries = 0;
                let startId = 0;
                let rangeField = '';
                for (let i = 0; i < len; i++) {
                    const vendorId = vendors[i];
                    if (startId === 0) {
                        numEntries++;
                        startId = vendorId;
                    }
                    // we know that `len` is greater than zero because we entered the loop
                    const lastVendorId = vendors[len - 1];
                    const gvlVendorIds = prVector.gvl.vendorIds;
                    const nextGvlVendor = (vendorId) => {
                        while (++vendorId <= lastVendorId && !gvlVendorIds.has(vendorId)) {
                        }
                        return vendorId;
                    };
                    /**
                     * either end of the loop or there are GVL vendor IDs before the next one
                     */
                    if (i === len - 1 || vendors[i + 1] > nextGvlVendor(vendorId)) {
                        /**
                         * it's a range entry if we've got something other than the start
                         * ID
                         */
                        const isRange = !(vendorId === startId);
                        // 0 means single 1 means range
                        rangeField += BooleanEncoder.encode(isRange);
                        rangeField += IntEncoder.encode(startId, BitLength.vendorId);
                        if (isRange) {
                            rangeField += IntEncoder.encode(vendorId, BitLength.vendorId);
                        }
                        // reset the startId so we grab the next id in the list
                        startId = 0;
                    }
                }
                /**
                 * now that  the range encoding is built, encode the number of ranges
                 * and then append the range field to the bitString.
                 */
                bitString += IntEncoder.encode(numEntries, BitLength.numEntries);
                bitString += rangeField;
            });
        }
        return bitString;
    }
    static decode(encodedString) {
        let index = 0;
        const vector = new PurposeRestrictionVector();
        const numRestrictions = IntEncoder.decode(encodedString.substr(index, BitLength.numRestrictions), BitLength.numRestrictions);
        index += BitLength.numRestrictions;
        for (let i = 0; i < numRestrictions; i++) {
            // First is purpose ID
            const purposeId = IntEncoder.decode(encodedString.substr(index, BitLength.purposeId), BitLength.purposeId);
            index += BitLength.purposeId;
            // Second Restriction Type
            const restrictionType = IntEncoder.decode(encodedString.substr(index, BitLength.restrictionType), BitLength.restrictionType);
            index += BitLength.restrictionType;
            const purposeRestriction = new PurposeRestriction(purposeId, restrictionType);
            // Num Entries (number of vendors)
            const numEntries = IntEncoder.decode(encodedString.substr(index, BitLength.numEntries), BitLength.numEntries);
            index += BitLength.numEntries;
            for (let j = 0; j < numEntries; j++) {
                const isARange = BooleanEncoder.decode(encodedString.substr(index, BitLength.anyBoolean));
                index += BitLength.anyBoolean;
                const startOrOnlyVendorId = IntEncoder.decode(encodedString.substr(index, BitLength.vendorId), BitLength.vendorId);
                index += BitLength.vendorId;
                if (isARange) {
                    const endVendorId = IntEncoder.decode(encodedString.substr(index, BitLength.vendorId), BitLength.vendorId);
                    index += BitLength.vendorId;
                    if (endVendorId < startOrOnlyVendorId) {
                        throw new DecodingError(`Invalid RangeEntry: endVendorId ${endVendorId} is less than ${startOrOnlyVendorId}`);
                    }
                    for (let k = startOrOnlyVendorId; k <= endVendorId; k++) {
                        vector.add(k, purposeRestriction);
                    }
                }
                else {
                    vector.add(startOrOnlyVendorId, purposeRestriction);
                }
            }
        }
        vector.bitLength = index;
        return vector;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/VectorEncodingType.js
var VectorEncodingType;
(function (VectorEncodingType) {
    VectorEncodingType[VectorEncodingType["FIELD"] = 0] = "FIELD";
    VectorEncodingType[VectorEncodingType["RANGE"] = 1] = "RANGE";
})(VectorEncodingType || (VectorEncodingType = {}));

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/VendorVectorEncoder.js







class VendorVectorEncoder {
    static encode(value) {
        // collectors for range encoding
        const ranges = [];
        let range = [];
        // since both encodings need the maxId, start with that
        let retrString = IntEncoder.encode(value.maxId, BitLength.maxId);
        // bit field will be just the vendors as we walk through the vector
        let bitField = '';
        let rangeIsSmaller;
        // some math
        const headerLength = BitLength.maxId + BitLength.encodingType;
        const bitFieldLength = headerLength + value.maxId;
        const minRangeLength = (BitLength.vendorId * 2 + BitLength.singleOrRange + BitLength.numEntries);
        // gets larger as we walk through the vector
        let rangeLength = headerLength + BitLength.numEntries;
        // walk through every value in the vector
        value.forEach((curValue, i) => {
            // build our bitfield no matter what
            bitField += BooleanEncoder.encode(curValue);
            /**
             * A range is a minimum of 45 bits, if the number of vendors in this
             * vector is less than 45 then we know that a bitfield encoding will be
             * shorter than any range encoding.
             *
             * The second check checks while we walk through the vector and abandons
             * building the ranges once it becomes larger
             */
            rangeIsSmaller = (value.maxId > minRangeLength && rangeLength < bitFieldLength);
            /**
             * if the curValue is true and our rangeLength is less than the bitField
             * length, we'll continue to push these ranges into the array.  Once the
             * ranges become a larger encoding there is no reason to continue
             * building the structure because we will be choosing the bitfield
             * encoding
             */
            if (rangeIsSmaller && curValue) {
                /**
                 * Look ahead to see if this is the last value in our range
                 */
                const nextValue = value.has(i + 1);
                // if there isn't a next value, then we'll wrap up this range
                if (!nextValue) {
                    /**
                     * this is the last value of the range, so we'll push it on to the
                     * end into position 1
                     */
                    range.push(i);
                    // add to the range length the additional vendorId
                    rangeLength += BitLength.vendorId;
                    // store the array in our bigger array
                    ranges.push(range);
                    // clear the array for the next range
                    range = [];
                }
                else if (range.length === 0) {
                    // this is the first  value for this range
                    range.push(i);
                    // update our count with new range overhead
                    rangeLength += BitLength.singleOrRange;
                    rangeLength += BitLength.vendorId;
                }
            }
        });
        if (rangeIsSmaller) {
            retrString += String(VectorEncodingType.RANGE);
            retrString += this.buildRangeEncoding(ranges);
        }
        else {
            retrString += String(VectorEncodingType.FIELD);
            retrString += bitField;
        }
        return retrString;
    }
    static decode(value, version) {
        let vector;
        let index = 0;
        const maxId = IntEncoder.decode(value.substr(index, BitLength.maxId), BitLength.maxId);
        index += BitLength.maxId;
        const encodingType = IntEncoder.decode(value.charAt(index), BitLength.encodingType);
        index += BitLength.encodingType;
        /**
         * Range is handled in batches so we'll need a different decoding scheme
         */
        if (encodingType === VectorEncodingType.RANGE) {
            vector = new Vector();
            if (version === 1) {
                if (value.substr(index, 1) === '1') {
                    throw new DecodingError('Unable to decode default consent=1');
                }
                // jump over the default encoding
                index++;
            }
            const numEntries = IntEncoder.decode(value.substr(index, BitLength.numEntries), BitLength.numEntries);
            index += BitLength.numEntries;
            // loop through each group of entries
            for (let i = 0; i < numEntries; i++) {
                // Ranges can represent a single id or a range of ids.
                const isIdRange = BooleanEncoder.decode(value.charAt(index));
                index += BitLength.singleOrRange;
                /**
                 * regardless of whether or not it's a single entry or range, the next
                 * set of bits is a vendor ID
                 */
                const firstId = IntEncoder.decode(value.substr(index, BitLength.vendorId), BitLength.vendorId);
                index += BitLength.vendorId;
                // if it's a range, the next set of bits is the second id
                if (isIdRange) {
                    const secondId = IntEncoder.decode(value.substr(index, BitLength.vendorId), BitLength.vendorId);
                    index += BitLength.vendorId;
                    // we'll need to set or unset all the vendor ids between the first and second
                    for (let j = firstId; j <= secondId; j++) {
                        vector.set(j);
                    }
                }
                else {
                    vector.set(firstId);
                }
            }
        }
        else {
            const bitField = value.substr(index, maxId);
            index += maxId;
            vector = FixedVectorEncoder.decode(bitField, maxId);
        }
        vector.bitLength = index;
        return vector;
    }
    static buildRangeEncoding(ranges) {
        // describe the number of entries to follow
        const numEntries = ranges.length;
        let rangeString = IntEncoder.encode(numEntries, BitLength.numEntries);
        // each range
        ranges.forEach((range) => {
            // is this range a single?
            const single = (range.length === 1);
            // first is the indicator of whether this is a single id or range (two)
            // 0 is single and range is 1
            rangeString += BooleanEncoder.encode(!single);
            // second is the first (or only) vendorId
            rangeString += IntEncoder.encode(range[0], BitLength.vendorId);
            if (!single) {
                // add the second id if it exists
                rangeString += IntEncoder.encode(range[1], BitLength.vendorId);
            }
        });
        return rangeString;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/FieldEncoderMap.js








function FieldEncoderMap() {
    return {
        [Fields.version]: IntEncoder,
        [Fields.created]: DateEncoder,
        [Fields.lastUpdated]: DateEncoder,
        [Fields.cmpId]: IntEncoder,
        [Fields.cmpVersion]: IntEncoder,
        [Fields.consentScreen]: IntEncoder,
        [Fields.consentLanguage]: LangEncoder,
        [Fields.vendorListVersion]: IntEncoder,
        [Fields.policyVersion]: IntEncoder,
        [Fields.isServiceSpecific]: BooleanEncoder,
        [Fields.useNonStandardStacks]: BooleanEncoder,
        [Fields.specialFeatureOptins]: FixedVectorEncoder,
        [Fields.purposeConsents]: FixedVectorEncoder,
        [Fields.purposeLegitimateInterests]: FixedVectorEncoder,
        [Fields.purposeOneTreatment]: BooleanEncoder,
        [Fields.publisherCountryCode]: LangEncoder,
        [Fields.vendorConsents]: VendorVectorEncoder,
        [Fields.vendorLegitimateInterests]: VendorVectorEncoder,
        [Fields.publisherRestrictions]: PurposeRestrictionVectorEncoder,
        segmentType: IntEncoder,
        [Fields.vendorsDisclosed]: VendorVectorEncoder,
        [Fields.vendorsAllowed]: VendorVectorEncoder,
        [Fields.publisherConsents]: FixedVectorEncoder,
        [Fields.publisherLegitimateInterests]: FixedVectorEncoder,
        [Fields.numCustomPurposes]: IntEncoder,
        [Fields.publisherCustomConsents]: FixedVectorEncoder,
        [Fields.publisherCustomLegitimateInterests]: FixedVectorEncoder,
    };
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/field/index.js










;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/FieldSequence.js

class FieldSequence {
    '1' = {
        [Segment.CORE]: [
            Fields.version,
            Fields.created,
            Fields.lastUpdated,
            Fields.cmpId,
            Fields.cmpVersion,
            Fields.consentScreen,
            Fields.consentLanguage,
            Fields.vendorListVersion,
            Fields.purposeConsents,
            Fields.vendorConsents,
        ],
    };
    '2' = {
        [Segment.CORE]: [
            Fields.version,
            Fields.created,
            Fields.lastUpdated,
            Fields.cmpId,
            Fields.cmpVersion,
            Fields.consentScreen,
            Fields.consentLanguage,
            Fields.vendorListVersion,
            Fields.policyVersion,
            Fields.isServiceSpecific,
            Fields.useNonStandardStacks,
            Fields.specialFeatureOptins,
            Fields.purposeConsents,
            Fields.purposeLegitimateInterests,
            Fields.purposeOneTreatment,
            Fields.publisherCountryCode,
            Fields.vendorConsents,
            Fields.vendorLegitimateInterests,
            Fields.publisherRestrictions,
        ],
        [Segment.PUBLISHER_TC]: [
            Fields.publisherConsents,
            Fields.publisherLegitimateInterests,
            Fields.numCustomPurposes,
            Fields.publisherCustomConsents,
            Fields.publisherCustomLegitimateInterests,
        ],
        [Segment.VENDORS_ALLOWED]: [
            Fields.vendorsAllowed,
        ],
        [Segment.VENDORS_DISCLOSED]: [
            Fields.vendorsDisclosed,
        ],
    };
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/SegmentSequence.js

class SegmentSequence {
    '1' = [
        Segment.CORE,
    ];
    '2' = [
        Segment.CORE,
    ];
    constructor(tcModel, options) {
        if (tcModel.version === 2) {
            if (tcModel.isServiceSpecific) {
                /**
                 * If it's service specific only, then the publisher TC String can be
                 * stored in the cookie and would be transmitted if it's not for
                 * storage.  So it's included regardless of whether or not it's for
                 * saving or the cmp api to surface.
                 */
                this['2'].push(Segment.PUBLISHER_TC);
            }
            else {
                const isForVendors = !!(options && options.isForVendors);
                /**
                 * including vendors disclosed only if it is for saving (to the global
                 * scope and not for vendors through the CMP API) or supportOOB is
                 * turned on (either or both).  The compliment of this being not for
                 * saving (surfaced to CMP) and no support of OOB.
                 */
                if (!isForVendors || tcModel[Fields.supportOOB] === true) {
                    this['2'].push(Segment.VENDORS_DISCLOSED);
                }
                if (isForVendors) {
                    /**
                     * If a publisher does support OOB and they have narrowed the allowed
                     * vendors to utilize it, then we should include the vendors allowed
                     * segment.  If it is empty then there are no restrictions, if that
                     * is intended to mean no support for OOB, then the flag should be
                     * set for that instead.
                     *
                     */
                    if (tcModel[Fields.supportOOB] && tcModel[Fields.vendorsAllowed].size > 0) {
                        this['2'].push(Segment.VENDORS_ALLOWED);
                    }
                    /**
                     * Always include the publisher TC segment as long as this TC string
                     * is not intended to be saved in the global scope.
                     */
                    this['2'].push(Segment.PUBLISHER_TC);
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/index.js
// created from 'create-ts-index'




;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/SegmentEncoder.js







class SegmentEncoder {
    static fieldSequence = new FieldSequence();
    static encode(tcModel, segment) {
        let sequence;
        try {
            sequence = this.fieldSequence[String(tcModel.version)][segment];
        }
        catch (err) {
            throw new EncodingError(`Unable to encode version: ${tcModel.version}, segment: ${segment}`);
        }
        let bitField = '';
        /**
         * If this is anything other than the core segment we have a "segment id"
         * to append to the front of the string
         */
        if (segment !== Segment.CORE) {
            bitField = IntEncoder.encode(SegmentIDs.KEY_TO_ID[segment], BitLength.segmentType);
        }
        const fieldEncoderMap = FieldEncoderMap();
        sequence.forEach((key) => {
            const value = tcModel[key];
            const encoder = fieldEncoderMap[key];
            let numBits = BitLength[key];
            if (numBits === undefined) {
                if (this.isPublisherCustom(key)) {
                    /**
                     * publisherCustom[Consents | LegitimateInterests] are an edge case
                     * because they are of variable length. The length is defined in a
                     * separate field named numCustomPurposes.
                     */
                    numBits = Number(tcModel[Fields.numCustomPurposes]);
                }
            }
            try {
                bitField += encoder.encode(value, numBits);
            }
            catch (err) {
                throw new EncodingError(`Error encoding ${segment}->${key}: ${err.message}`);
            }
        });
        // base64url encode the string and return
        return Base64Url.encode(bitField);
    }
    static decode(encodedString, tcModel, segment) {
        const bitField = Base64Url.decode(encodedString);
        let bStringIdx = 0;
        if (segment === Segment.CORE) {
            tcModel.version = IntEncoder.decode(bitField.substr(bStringIdx, BitLength[Fields.version]), BitLength[Fields.version]);
        }
        if (segment !== Segment.CORE) {
            bStringIdx += BitLength.segmentType;
        }
        const sequence = this.fieldSequence[String(tcModel.version)][segment];
        const fieldEncoderMap = FieldEncoderMap();
        sequence.forEach((key) => {
            const encoder = fieldEncoderMap[key];
            let numBits = BitLength[key];
            if (numBits === undefined) {
                if (this.isPublisherCustom(key)) {
                    /**
                     * publisherCustom[Consents | LegitimateInterests] are an edge case
                     * because they are of variable length. The length is defined in a
                     * separate field named numCustomPurposes.
                     */
                    numBits = Number(tcModel[Fields.numCustomPurposes]);
                }
            }
            if (numBits !== 0) {
                /**
                 * numBits could be 0 if this is a publisher custom purposes field and
                 * no custom purposes are defined. If that is the case, we don't need
                 * to gather no bits and we don't need to increment our bStringIdx
                 * pointer because those would all be 0 increments and would mess up
                 * the next logical if statement.
                 */
                const bits = bitField.substr(bStringIdx, numBits);
                if (encoder === VendorVectorEncoder) {
                    tcModel[key] = encoder.decode(bits, tcModel.version);
                }
                else {
                    tcModel[key] = encoder.decode(bits, numBits);
                }
                if (Number.isInteger(numBits)) {
                    bStringIdx += numBits;
                }
                else if (Number.isInteger(tcModel[key].bitLength)) {
                    bStringIdx += tcModel[key].bitLength;
                }
                else {
                    throw new DecodingError(key);
                }
            }
        });
        return tcModel;
    }
    static isPublisherCustom(key) {
        return key.indexOf('publisherCustom') === 0;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/SemanticPreEncoder.js


class SemanticPreEncoder {
    static processor = [
        (tcModel) => tcModel,
        (tcModel, gvl) => {
            /**
             * in case this wasn't set previously.  This should filter out invalid
             * purpose restrictions.
             */
            tcModel.publisherRestrictions.gvl = gvl;
            /**
             * Purpose 1 is never allowed to be true for legitimate interest
             */
            tcModel.purposeLegitimateInterests.unset(1);
            /**
             * If a Vendor does not declare a purpose for consent or legitimate
             * interest they should not have a positive signal for it. This code
             * removes positive signals created mistakingly.
             */
            const vectorToIntMap = new Map();
            vectorToIntMap.set('legIntPurposes', tcModel.vendorLegitimateInterests);
            vectorToIntMap.set('purposes', tcModel.vendorConsents);
            vectorToIntMap.forEach((vector, gvlVendorKey) => {
                vector.forEach((value, vendorId) => {
                    if (value) {
                        const vendor = gvl.vendors[vendorId];
                        if (!vendor || vendor.deletedDate) {
                            /**
                             * If the vendor doesn't exist, then they should not receive a
                             * positive signal
                             */
                            vector.unset(vendorId);
                        }
                        else if (vendor[gvlVendorKey].length === 0) {
                            if (gvlVendorKey === 'legIntPurposes' && vendor['purposes'].length === 0 && vendor['legIntPurposes'].length === 0 && vendor['specialPurposes'].length > 0) {
                                /**
                                 * Per June 2021 Policy change, Vendors declaring only Special Purposes must
                                 * have their legitimate interest Vendor bit set if they have been disclosed.
                                 * This empty block ensures their LI bit remains set
                                 */
                            }
                            else {
                                /**
                                 * If the vendor does exist, but they haven't declared any
                                 * purposes for this legal basis, then we need to see if they can
                                 * possibly have the legal basis from their flexible purposes.
                                 */
                                if (tcModel.isServiceSpecific) {
                                    if (vendor.flexiblePurposes.length === 0) {
                                        /**
                                         * No flexible basis for any purposes, so we can safely remove
                                         * this vendor from the legal basis.
                                         */
                                        vector.unset(vendorId);
                                    }
                                    else {
                                        /**
                                         * They have some flexible purposes, we should check for a
                                         * publisher restriction value that would enable this vendor to
                                         * have the override-preferred basis.
                                         */
                                        const restrictions = tcModel.publisherRestrictions.getRestrictions(vendorId);
                                        let isValid = false;
                                        for (let i = 0, len = restrictions.length; i < len && !isValid; i++) {
                                            /**
                                             * If this condition is true the loop will break.  If we are
                                             * dealing with the consent purposes ('purposes') and the
                                             * publisher restriction overrides to consent then it is
                                             * valid for the vendor to have a positive signal for
                                             * consent.  Likewise for legitimate interest purposes
                                             * ('legIntPurposes') and requiring legitimate interest.
                                             */
                                            isValid = ((restrictions[i].restrictionType === RestrictionType.REQUIRE_CONSENT &&
                                                gvlVendorKey === 'purposes') ||
                                                (restrictions[i].restrictionType === RestrictionType.REQUIRE_LI &&
                                                    gvlVendorKey === 'legIntPurposes'));
                                        }
                                        if (!isValid) {
                                            /**
                                             * if we came through the previous  loop without finding a
                                             * valid reasing: no overriding restrictions (changes in
                                             * legal basis) then it's not valid for this vendor to have
                                             * this legal basis.
                                             */
                                            vector.unset(vendorId);
                                        }
                                    }
                                }
                                else {
                                    /**
                                     * This is a globally-scoped string so flexible purposes will not
                                     * be able to change this value because purposeRestrictions only
                                     * apply to service-specific strings.
                                     */
                                    vector.unset(vendorId);
                                }
                            }
                        }
                    }
                });
            });
            tcModel.vendorsDisclosed.set(gvl.vendors);
            return tcModel;
        },
    ];
    static process(tcModel, options) {
        const gvl = tcModel.gvl;
        if (!gvl) {
            throw new EncodingError('Unable to encode TCModel without a GVL');
        }
        if (!gvl.isReady) {
            throw new EncodingError('Unable to encode TCModel tcModel.gvl.readyPromise is not resolved');
        }
        tcModel = tcModel.clone();
        tcModel.consentLanguage = gvl.language.toUpperCase();
        if (options?.version > 0 && options?.version <= this.processor.length) {
            tcModel.version = options.version;
        }
        else {
            /**
             * this is equal to the latest or most current version
             */
            tcModel.version = this.processor.length;
        }
        const processorFunctionIndex = tcModel.version - 1;
        if (!this.processor[processorFunctionIndex]) {
            throw new EncodingError(`Invalid version: ${tcModel.version}`);
        }
        return this.processor[processorFunctionIndex](tcModel, gvl);
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/encoder/index.js








;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/errors/GVLError.js
/**
 * class for General GVL Errors
 *
 * @extends {Error}
 */
class GVLError extends Error {
    /**
     * constructor - constructs a GVLError
     *
     * @param {string} msg - Error message to display
     * @return {undefined}
     */
    constructor(msg) {
        super(msg);
        this.name = 'GVLError';
    }
}


;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/Json.js
class Json {
    static absCall(url, body, sendCookies, timeout) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            const onLoad = () => {
                // is the response done
                if (req.readyState == XMLHttpRequest.DONE) {
                    /**
                     * For our purposes if it's not a 200 range response, then it's a
                     * failure.
                     */
                    if (req.status >= 200 && req.status < 300) {
                        let response = req.response;
                        if (typeof response === 'string') {
                            try {
                                response = JSON.parse(response);
                            }
                            catch (e) { }
                        }
                        resolve(response);
                    }
                    else {
                        reject(new Error(`HTTP Status: ${req.status} response type: ${req.responseType}`));
                    }
                }
            };
            const onError = () => {
                reject(new Error('error'));
            };
            const onAbort = () => {
                reject(new Error('aborted'));
            };
            const onTimeout = () => {
                reject(new Error('Timeout ' + timeout + 'ms ' + url));
            };
            req.withCredentials = sendCookies;
            req.addEventListener('load', onLoad);
            req.addEventListener('error', onError);
            req.addEventListener('abort', onAbort);
            if (body === null) {
                req.open('GET', url, true);
            }
            else {
                req.open('POST', url, true);
            }
            req.responseType = 'json';
            // IE has a problem if this is before the open
            req.timeout = timeout;
            req.ontimeout = onTimeout;
            req.send(body);
        });
    }
    /**
     * @static
     * @param {string} url - full path to POST to
     * @param {object} body - JSON object to post
     * @param {boolean} sendCookies - Whether or not to send the XMLHttpRequest with credentials or not
     * @param {number} [timeout] - optional timeout in milliseconds
     * @return {Promise<object>} - if the server responds the response will be returned here
     */
    static post(url, body, sendCookies = false, timeout = 0) {
        return this.absCall(url, JSON.stringify(body), sendCookies, timeout);
    }
    /**
     * @static
     * @param {string} url - full path to the json
     * @param {boolean} sendCookies - Whether or not to send the XMLHttpRequest with credentials or not
     * @param {number} [timeout] - optional timeout in milliseconds
     * @return {Promise<object>} - resolves with parsed JSON
     */
    static fetch(url, sendCookies = false, timeout = 0) {
        return this.absCall(url, null, sendCookies, timeout);
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/GVL.js




/**
 * class with utilities for managing the global vendor list.  Will use JSON to
 * fetch the vendor list from specified url and will serialize it into this
 * object and provide accessors.  Provides ways to group vendors on the list by
 * purpose and feature.
 */
class GVL extends Cloneable {
    static LANGUAGE_CACHE = new Map();
    static CACHE = new Map();
    static LATEST_CACHE_KEY = 0;
    static DEFAULT_LANGUAGE = 'EN';
    /**
     * Set of available consent languages published by the IAB
     */
    static consentLanguages = new ConsentLanguages();
    static baseUrl_;
    /**
     * baseUrl - Entities using the vendor-list.json are required by the iab to
     * host their own copy of it to reduce the load on the iab's infrastructure
     * so a 'base' url must be set to be put together with the versioning scheme
     * of the filenames.
     *
     * @static
     * @param {string} url - the base url to load the vendor-list.json from.  This is
     * broken out from the filename because it follows a different scheme for
     * latest file vs versioned files.
     *
     * @throws {GVLError} - If the url is http[s]://vendorlist.consensu.org/...
     * this will throw an error.  IAB Europe requires that that CMPs and Vendors
     * cache their own copies of the GVL to minimize load on their
     * infrastructure.  For more information regarding caching of the
     * vendor-list.json, please see [the TCF documentation on 'Caching the Global
     * Vendor List'
     * ](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md#caching-the-global-vendor-list)
     */
    static set baseUrl(url) {
        const notValid = /^https?:\/\/vendorlist\.consensu\.org\//;
        if (notValid.test(url)) {
            throw new GVLError('Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache');
        }
        // if a trailing slash was forgotten
        if (url.length > 0 && url[url.length - 1] !== '/') {
            url += '/';
        }
        this.baseUrl_ = url;
    }
    ;
    /**
     * baseUrl - Entities using the vendor-list.json are required by the iab to
     * host their own copy of it to reduce the load on the iab's infrastructure
     * so a 'base' url must be set to be put together with the versioning scheme
     * of the filenames.
     *
     * @static
     * @return {string} - returns the previously set baseUrl, the default is
     * `undefined`
     */
    static get baseUrl() {
        return this.baseUrl_;
    }
    /**
     * @static
     * @param {string} - the latest is assumed to be vendor-list.json because
     * that is what the iab uses, but it could be different... if you want
     */
    static latestFilename = 'vendor-list.json';
    /**
     * @static
     * @param {string} - the versioned name is assumed to be
     * vendor-list-v[VERSION].json where [VERSION] will be replaced with the
     * specified version.  But it could be different... if you want just make
     * sure to include the [VERSION] macro if you have a numbering scheme, it's a
     * simple string substitution.
     *
     * eg.
     * ```javascript
     * GVL.baseUrl = "http://www.mydomain.com/iabcmp/";
     * GVL.versionedFilename = "vendorlist?getVersion=[VERSION]";
     * ```
     */
    static versionedFilename = 'archives/vendor-list-v[VERSION].json';
    /**
     * @param {string} - Translations of the names and descriptions for Purposes,
     * Special Purposes, Features, and Special Features to non-English languages
     * are contained in a file where attributes containing English content
     * (except vendor declaration information) are translated.  The iab publishes
     * one following the scheme below where the LANG is the iso639-1 language
     * code.  For a list of available translations
     * [please go here](https://register.consensu.org/Translation).
     *
     * eg.
     * ```javascript
     * GVL.baseUrl = "http://www.mydomain.com/iabcmp/";
     * GVL.languageFilename = "purposes?getPurposes=[LANG]";
     * ```
     */
    static languageFilename = 'purposes-[LANG].json';
    /**
     * @param {Promise} resolved when this GVL object is populated with the data
     * or rejected if there is an error.
     */
    readyPromise;
    /**
     * @param {number} gvlSpecificationVersion - schema version for the GVL that is used
     */
    gvlSpecificationVersion;
    /**
     * @param {number} incremented with each published file change
     */
    vendorListVersion;
    /**
     * @param {number} tcfPolicyVersion - The TCF MO will increment this value
     * whenever a GVL change (such as adding a new Purpose or Feature or a change
     * in Purpose wording) legally invalidates existing TC Strings and requires
     * CMPs to re-establish transparency and consent from users. If the policy
     * version number in the latest GVL is different from the value in your TC
     * String, then you need to re-establish transparency and consent for that
     * user. A version 1 format TC String is considered to have a version value
     * of 1.
     */
    tcfPolicyVersion;
    /**
     * @param {string | Date} lastUpdated - the date in which the vendor list
     * json file  was last updated.
     */
    lastUpdated;
    /**
     * @param {IntMap<Purpose>} a collection of [[Purpose]]s
     */
    purposes;
    /**
     * @param {IntMap<Purpose>} a collection of [[Purpose]]s
     */
    specialPurposes;
    /**
     * @param {IntMap<Feature>} a collection of [[Feature]]s
     */
    features;
    /**
     * @param {IntMap<Feature>} a collection of [[Feature]]s
     */
    specialFeatures;
    /**
     * @param {boolean} internal reference of when the GVL is ready to be used
     */
    isReady_ = false;
    /**
     * @param {IntMap<Vendor>} a collection of [[Vendor]]s
     */
    vendors_;
    vendorIds;
    /**
     * @param {IntMap<Vendor>} a collection of [[Vendor]]. Used as a backup if a whitelist is sets
     */
    fullVendorList;
    /**
     * @param {ByPurposeVendorMap} vendors by purpose
     */
    byPurposeVendorMap;
    /**
     * @param {IDSetMap} vendors by special purpose
     */
    bySpecialPurposeVendorMap;
    /**
     * @param {IDSetMap} vendors by feature
     */
    byFeatureVendorMap;
    /**
     * @param {IDSetMap} vendors by special feature
     */
    bySpecialFeatureVendorMap;
    /**
     * @param {IntMap<Stack>} a collection of [[Stack]]s
     */
    stacks;
    lang_;
    isLatest = false;
    /**
     * @param {VersionOrVendorList} [versionOrVendorList] - can be either a
     * [[VendorList]] object or a version number represented as a string or
     * number to download.  If nothing is passed the latest version of the GVL
     * will be loaded
     */
    constructor(versionOrVendorList) {
        super();
        /**
         * should have been configured before and instance was created and will
         * persist through the app
         */
        let url = GVL.baseUrl;
        this.lang_ = GVL.DEFAULT_LANGUAGE;
        if (this.isVendorList(versionOrVendorList)) {
            this.populate(versionOrVendorList);
            this.readyPromise = Promise.resolve();
        }
        else {
            if (!url) {
                throw new GVLError('must specify GVL.baseUrl before loading GVL json');
            }
            if (versionOrVendorList > 0) {
                const version = versionOrVendorList;
                if (GVL.CACHE.has(version)) {
                    this.populate(GVL.CACHE.get(version));
                    this.readyPromise = Promise.resolve();
                }
                else {
                    // load version specified
                    url += GVL.versionedFilename.replace('[VERSION]', String(version));
                    this.readyPromise = this.fetchJson(url);
                }
            }
            else {
                /**
                 * whatever it is (or isn't)... it doesn't matter we'll just get the
                 * latest. In this case we may have cached the latest version at key 0.
                 * If we have then we'll just use that instead of making a request.
                 * Otherwise we'll have to load it (and then we'll cache it for next
                 * time)
                 */
                if (GVL.CACHE.has(GVL.LATEST_CACHE_KEY)) {
                    this.populate(GVL.CACHE.get(GVL.LATEST_CACHE_KEY));
                    this.readyPromise = Promise.resolve();
                }
                else {
                    this.isLatest = true;
                    this.readyPromise = this.fetchJson(url + GVL.latestFilename);
                }
            }
        }
    }
    /**
     * emptyLanguageCache
     *
     * @param {string} [lang] - Optional ISO 639-1 langauge code to remove from
     * the cache.  Should be one of the languages in GVL.consentLanguages set.
     * If not then the whole cache will be deleted.
     * @return {boolean} - true if anything was deleted from the cache
     */
    static emptyLanguageCache(lang) {
        let retr = false;
        if (lang === undefined && GVL.LANGUAGE_CACHE.size > 0) {
            GVL.LANGUAGE_CACHE = new Map();
            retr = true;
        }
        else if (typeof lang === 'string' && this.consentLanguages.has(lang.toUpperCase())) {
            GVL.LANGUAGE_CACHE.delete(lang.toUpperCase());
            retr = true;
        }
        return retr;
    }
    /**
     * emptyCache
     *
     * @param {number} [vendorListVersion] - version of the vendor list to delete
     * from the cache.  If none is specified then the whole cache is deleted.
     * @return {boolean} - true if anything was deleted from the cache
     */
    static emptyCache(vendorListVersion) {
        let retr = false;
        if (Number.isInteger(vendorListVersion) && vendorListVersion >= 0) {
            GVL.CACHE.delete(vendorListVersion);
            retr = true;
        }
        else if (vendorListVersion === undefined) {
            GVL.CACHE = new Map();
            retr = true;
        }
        return retr;
    }
    cacheLanguage() {
        if (!GVL.LANGUAGE_CACHE.has(this.lang_)) {
            GVL.LANGUAGE_CACHE.set(this.lang_, {
                purposes: this.purposes,
                specialPurposes: this.specialPurposes,
                features: this.features,
                specialFeatures: this.specialFeatures,
                stacks: this.stacks,
            });
        }
    }
    async fetchJson(url) {
        try {
            this.populate(await Json.fetch(url));
        }
        catch (err) {
            throw new GVLError(err.message);
        }
    }
    /**
     * getJson - Method for getting the JSON that was downloaded to created this
     * `GVL` object
     *
     * @return {VendorList} - The basic JSON structure without the extra
     * functionality and methods of this class.
     */
    getJson() {
        return JSON.parse(JSON.stringify({
            gvlSpecificationVersion: this.gvlSpecificationVersion,
            vendorListVersion: this.vendorListVersion,
            tcfPolicyVersion: this.tcfPolicyVersion,
            lastUpdated: this.lastUpdated,
            purposes: this.purposes,
            specialPurposes: this.specialPurposes,
            features: this.features,
            specialFeatures: this.specialFeatures,
            stacks: this.stacks,
            vendors: this.fullVendorList,
        }));
    }
    /**
     * changeLanguage - retrieves the purpose language translation and sets the
     * internal language variable
     *
     * @param {string} lang - ISO 639-1 langauge code to change language to
     * @return {Promise<void | GVLError>} - returns the `readyPromise` and
     * resolves when this GVL is populated with the data from the language file.
     */
    async changeLanguage(lang) {
        const langUpper = lang.toUpperCase();
        if (GVL.consentLanguages.has(langUpper)) {
            if (langUpper !== this.lang_) {
                this.lang_ = langUpper;
                if (GVL.LANGUAGE_CACHE.has(langUpper)) {
                    const cached = GVL.LANGUAGE_CACHE.get(langUpper);
                    for (const prop in cached) {
                        if (cached.hasOwnProperty(prop)) {
                            this[prop] = cached[prop];
                        }
                    }
                }
                else {
                    // load Language specified
                    const url = GVL.baseUrl + GVL.languageFilename.replace('[LANG]', lang);
                    try {
                        await this.fetchJson(url);
                        this.cacheLanguage();
                    }
                    catch (err) {
                        throw new GVLError('unable to load language: ' + err.message);
                    }
                }
            }
        }
        else {
            throw new GVLError(`unsupported language ${lang}`);
        }
    }
    get language() {
        return this.lang_;
    }
    isVendorList(gvlObject) {
        return gvlObject !== undefined && gvlObject.vendors !== undefined;
    }
    populate(gvlObject) {
        /**
         * these are populated regardless of whether it's a Declarations file or
         * a VendorList
         */
        this.purposes = gvlObject.purposes;
        this.specialPurposes = gvlObject.specialPurposes;
        this.features = gvlObject.features;
        this.specialFeatures = gvlObject.specialFeatures;
        this.stacks = gvlObject.stacks;
        if (this.isVendorList(gvlObject)) {
            this.gvlSpecificationVersion = gvlObject.gvlSpecificationVersion;
            this.tcfPolicyVersion = gvlObject.tcfPolicyVersion;
            this.vendorListVersion = gvlObject.vendorListVersion;
            this.lastUpdated = gvlObject.lastUpdated;
            if (typeof this.lastUpdated === 'string') {
                this.lastUpdated = new Date(this.lastUpdated);
            }
            this.vendors_ = gvlObject.vendors;
            this.fullVendorList = gvlObject.vendors;
            this.mapVendors();
            this.isReady_ = true;
            if (this.isLatest) {
                /**
                 * If the "LATEST" was requested then this flag will be set to true.
                 * In that case we'll cache the GVL at the special key
                 */
                GVL.CACHE.set(GVL.LATEST_CACHE_KEY, this.getJson());
            }
            /**
             * Whether or not it's the "LATEST" we'll cache the gvl at the version it
             * is declared to be (if it's not already). to avoid downloading it again
             * in the future.
             */
            if (!GVL.CACHE.has(this.vendorListVersion)) {
                GVL.CACHE.set(this.vendorListVersion, this.getJson());
            }
        }
        this.cacheLanguage();
    }
    mapVendors(vendorIds) {
        // create new instances of the maps
        this.byPurposeVendorMap = {};
        this.bySpecialPurposeVendorMap = {};
        this.byFeatureVendorMap = {};
        this.bySpecialFeatureVendorMap = {};
        // initializes data structure for purpose map
        Object.keys(this.purposes).forEach((purposeId) => {
            this.byPurposeVendorMap[purposeId] = {
                legInt: new Set(),
                consent: new Set(),
                flexible: new Set(),
            };
        });
        // initializes data structure for special purpose map
        Object.keys(this.specialPurposes).forEach((purposeId) => {
            this.bySpecialPurposeVendorMap[purposeId] = new Set();
        });
        // initializes data structure for feature map
        Object.keys(this.features).forEach((featureId) => {
            this.byFeatureVendorMap[featureId] = new Set();
        });
        // initializes data structure for feature map
        Object.keys(this.specialFeatures).forEach((featureId) => {
            this.bySpecialFeatureVendorMap[featureId] = new Set();
        });
        if (!Array.isArray(vendorIds)) {
            vendorIds = Object.keys(this.fullVendorList).map((vId) => +vId);
        }
        this.vendorIds = new Set(vendorIds);
        // assigns vendor ids to their respective maps
        this.vendors_ = vendorIds.reduce((vendors, vendorId) => {
            const vendor = this.vendors_[String(vendorId)];
            if (vendor && vendor.deletedDate === undefined) {
                vendor.purposes.forEach((purposeId) => {
                    const purpGroup = this.byPurposeVendorMap[String(purposeId)];
                    purpGroup.consent.add(vendorId);
                });
                vendor.specialPurposes.forEach((purposeId) => {
                    this.bySpecialPurposeVendorMap[String(purposeId)].add(vendorId);
                });
                vendor.legIntPurposes.forEach((purposeId) => {
                    this.byPurposeVendorMap[String(purposeId)].legInt.add(vendorId);
                });
                // could not be there
                if (vendor.flexiblePurposes) {
                    vendor.flexiblePurposes.forEach((purposeId) => {
                        this.byPurposeVendorMap[String(purposeId)].flexible.add(vendorId);
                    });
                }
                vendor.features.forEach((featureId) => {
                    this.byFeatureVendorMap[String(featureId)].add(vendorId);
                });
                vendor.specialFeatures.forEach((featureId) => {
                    this.bySpecialFeatureVendorMap[String(featureId)].add(vendorId);
                });
                vendors[vendorId] = vendor;
            }
            return vendors;
        }, {});
    }
    getFilteredVendors(purposeOrFeature, id, subType, special) {
        const properPurposeOrFeature = purposeOrFeature.charAt(0).toUpperCase() + purposeOrFeature.slice(1);
        let vendorSet;
        const retr = {};
        if (purposeOrFeature === 'purpose' && subType) {
            vendorSet = this['by' + properPurposeOrFeature + 'VendorMap'][String(id)][subType];
        }
        else {
            vendorSet = this['by' + (special ? 'Special' : '') + properPurposeOrFeature + 'VendorMap'][String(id)];
        }
        vendorSet.forEach((vendorId) => {
            retr[String(vendorId)] = this.vendors[String(vendorId)];
        });
        return retr;
    }
    /**
     * getVendorsWithConsentPurpose
     *
     * @param {number} purposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the consent purpose id
     */
    getVendorsWithConsentPurpose(purposeId) {
        return this.getFilteredVendors('purpose', purposeId, 'consent');
    }
    /**
     * getVendorsWithLegIntPurpose
     *
     * @param {number} purposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the legInt (Legitimate Interest) purpose id
     */
    getVendorsWithLegIntPurpose(purposeId) {
        return this.getFilteredVendors('purpose', purposeId, 'legInt');
    }
    /**
     * getVendorsWithFlexiblePurpose
     *
     * @param {number} purposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the flexible purpose id
     */
    getVendorsWithFlexiblePurpose(purposeId) {
        return this.getFilteredVendors('purpose', purposeId, 'flexible');
    }
    /**
     * getVendorsWithSpecialPurpose
     *
     * @param {number} specialPurposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the special purpose id
     */
    getVendorsWithSpecialPurpose(specialPurposeId) {
        return this.getFilteredVendors('purpose', specialPurposeId, undefined, true);
    }
    /**
     * getVendorsWithFeature
     *
     * @param {number} featureId
     * @return {IntMap<Vendor>} - list of vendors that have declared the feature id
     */
    getVendorsWithFeature(featureId) {
        return this.getFilteredVendors('feature', featureId);
    }
    /**
     * getVendorsWithSpecialFeature
     *
     * @param {number} specialFeatureId
     * @return {IntMap<Vendor>} - list of vendors that have declared the special feature id
     */
    getVendorsWithSpecialFeature(specialFeatureId) {
        return this.getFilteredVendors('feature', specialFeatureId, undefined, true);
    }
    /**
     * vendors
     *
     * @return {IntMap<Vendor>} - the list of vendors as it would on the JSON file
     * except if `narrowVendorsTo` was called, it would be that narrowed list
     */
    get vendors() {
        return this.vendors_;
    }
    /**
     * narrowVendorsTo - narrows vendors represented in this GVL to the list of ids passed in
     *
     * @param {number[]} vendorIds - list of ids to narrow this GVL to
     * @return {void}
     */
    narrowVendorsTo(vendorIds) {
        this.mapVendors(vendorIds);
    }
    /**
     * isReady - Whether or not this instance is ready to be used.  This will be
     * immediately and synchronously true if a vendorlist object is passed into
     * the constructor or once the JSON vendorllist is retrieved.
     *
     * @return {boolean} whether or not the instance is ready to be interacted
     * with and all the data is populated
     */
    get isReady() {
        return this.isReady_;
    }
    /**
     * clone - overrides base `clone()` method since GVL is a special class that
     * represents a JSON structure with some additional functionality.
     *
     * @return {GVL}
     */
    clone() {
        const result = new GVL(this.getJson());
        /*
         * If the current language of the GVL is not the default language, we set the language of
         * the clone to the current language since a new GVL is always created with the default
         * language. */
        if (this.lang_ !== GVL.DEFAULT_LANGUAGE) {
            /*
             * Since the GVL language was changed, this means that an asynchronous changeLanguage
             * call was made prior to cloning the GVL.  The new language specified has been cached
             * by the GVL and this changeLanguage call made as a part of cloning the GVL will be
             * synchronous. The code will look for the language definitions in the cache instead
             * of creating a http request. */
            result.changeLanguage(this.lang_);
        }
        return result;
    }
    static isInstanceOf(questionableInstance) {
        const isSo = typeof questionableInstance === 'object';
        return (isSo && typeof questionableInstance.narrowVendorsTo === 'function');
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/TCModel.js




class TCModel extends Cloneable {
    /**
     * Set of available consent languages published by the IAB
     */
    static consentLanguages = GVL.consentLanguages;
    isServiceSpecific_ = false;
    supportOOB_ = true;
    useNonStandardStacks_ = false;
    purposeOneTreatment_ = false;
    publisherCountryCode_ = 'AA';
    version_ = 2;
    consentScreen_ = 0;
    policyVersion_ = 2;
    consentLanguage_ = 'EN';
    cmpId_ = 0;
    cmpVersion_ = 0;
    vendorListVersion_ = 0;
    numCustomPurposes_ = 0;
    // Member Variable for GVL
    gvl_;
    created;
    lastUpdated;
    /**
     * The TCF designates certain Features as special, that is, a CMP must afford
     * the user a means to opt in to their use. These Special Features are
     * published and numbered in the GVL separately from normal Features.
     * Provides for up to 12 special features.
     */
    specialFeatureOptins = new Vector();
    /**
     * Renamed from `PurposesAllowed` in TCF v1.1
     * The user’s consent value for each Purpose established on the legal basis
     * of consent. Purposes are published in the Global Vendor List (see. [[GVL]]).
     */
    purposeConsents = new Vector();
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest. If the user has exercised right-to-object for a
     * purpose.
     */
    purposeLegitimateInterests = new Vector();
    /**
     * The user’s consent value for each Purpose established on the legal basis
     * of consent, for the publisher.  Purposes are published in the Global
     * Vendor List.
     */
    publisherConsents = new Vector();
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest.  If the user has exercised right-to-object for a
     * purpose.
     */
    publisherLegitimateInterests = new Vector();
    /**
     * The user’s consent value for each Purpose established on the legal basis
     * of consent, for the publisher.  Purposes are published in the Global
     * Vendor List.
     */
    publisherCustomConsents = new Vector();
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest.  If the user has exercised right-to-object for a
     * purpose that is established in the publisher's custom purposes.
     */
    publisherCustomLegitimateInterests = new Vector();
    /**
     * set by a publisher if they wish to collect consent and LI Transparency for
     * purposes outside of the TCF
     */
    customPurposes;
    /**
     * Each [[Vendor]] is keyed by id. Their consent value is true if it is in
     * the Vector
     */
    vendorConsents = new Vector();
    /**
     * Each [[Vendor]] is keyed by id. Whether their Legitimate Interests
     * Disclosures have been established is stored as boolean.
     * see: [[Vector]]
     */
    vendorLegitimateInterests = new Vector();
    /**
     * The value included for disclosed vendors signals which vendors have been
     * disclosed to the user in the interface surfaced by the CMP. This section
     * content is required when writing a TC string to the global (consensu)
     * scope. When a CMP has read from and is updating a TC string from the
     * global consensu.org storage, the CMP MUST retain the existing disclosure
     * information and only add information for vendors that it has disclosed
     * that had not been disclosed by other CMPs in prior interactions with this
     * device/user agent.
     */
    vendorsDisclosed = new Vector();
    /**
     * Signals which vendors the publisher permits to use OOB legal bases.
     */
    vendorsAllowed = new Vector();
    publisherRestrictions = new PurposeRestrictionVector();
    /**
     * Constructs the TCModel. Passing a [[GVL]] is optional when constructing
     * as this TCModel may be constructed from decoding an existing encoded
     * TCString.
     *
     * @param {GVL} [gvl]
     */
    constructor(gvl) {
        super();
        if (gvl) {
            this.gvl = gvl;
        }
        this.updated();
    }
    /**
     * sets the [[GVL]] with side effects of also setting the `vendorListVersion`, `policyVersion`, and `consentLanguage`
     * @param {GVL} gvl
     */
    set gvl(gvl) {
        /**
         * set the reference, but make sure it's our GVL wrapper class.
         */
        if (!(GVL.isInstanceOf(gvl))) {
            gvl = new GVL(gvl);
        }
        this.gvl_ = gvl;
        this.publisherRestrictions.gvl = gvl;
    }
    /**
     * @return {GVL} the gvl instance set on this TCModel instance
     */
    get gvl() {
        return this.gvl_;
    }
    /**
     * @param {number} integer - A unique ID will be assigned to each Consent
     * Manager Provider (CMP) from the iab.
     *
     * @throws {TCModelError} if the value is not an integer greater than 1 as those are not valid.
     */
    set cmpId(integer) {
        integer = Number(integer);
        if (Number.isInteger(integer) && integer > 1) {
            this.cmpId_ = integer;
        }
        else {
            throw new TCModelError('cmpId', integer);
        }
    }
    get cmpId() {
        return this.cmpId_;
    }
    /**
     * Each change to an operating CMP should receive a
     * new version number, for logging proof of consent. CmpVersion defined by
     * each CMP.
     *
     * @param {number} integer
     *
     * @throws {TCModelError} if the value is not an integer greater than 1 as those are not valid.
     */
    set cmpVersion(integer) {
        integer = Number(integer);
        if (Number.isInteger(integer) && integer > -1) {
            this.cmpVersion_ = integer;
        }
        else {
            throw new TCModelError('cmpVersion', integer);
        }
    }
    get cmpVersion() {
        return this.cmpVersion_;
    }
    /**
     * The screen number is CMP and CmpVersion
     * specific, and is for logging proof of consent.(For example, a CMP could
     * keep records so that a publisher can request information about the context
     * in which consent was gathered.)
     *
     * @param {number} integer
     *
     * @throws {TCModelError} if the value is not an integer greater than 0 as those are not valid.
     */
    set consentScreen(integer) {
        integer = Number(integer);
        if (Number.isInteger(integer) && integer > -1) {
            this.consentScreen_ = integer;
        }
        else {
            throw new TCModelError('consentScreen', integer);
        }
    }
    get consentScreen() {
        return this.consentScreen_;
    }
    /**
     * @param {string} lang - [two-letter ISO 639-1 language
     * code](http://www.loc.gov/standards/iso639-2/php/code_list.php) in which
     * the CMP UI was presented
     *
     * @throws {TCModelError} if the value is not a length-2 string of alpha characters
     */
    set consentLanguage(lang) {
        this.consentLanguage_ = lang;
    }
    get consentLanguage() {
        return this.consentLanguage_;
    }
    /**
     * @param {string} countryCode - [two-letter ISO 3166-1 alpha-2 country
     * code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the publisher,
     * determined by the CMP-settings of the publisher.
     *
     * @throws {TCModelError} if the value is not a length-2 string of alpha characters
     */
    set publisherCountryCode(countryCode) {
        if (/^([A-z]){2}$/.test(countryCode)) {
            this.publisherCountryCode_ = countryCode.toUpperCase();
        }
        else {
            throw new TCModelError('publisherCountryCode', countryCode);
        }
    }
    get publisherCountryCode() {
        return this.publisherCountryCode_;
    }
    /**
     * Version of the GVL used to create this TCModel. Global
     * Vendor List versions will be released periodically.
     *
     * @param {number} integer
     *
     * @throws {TCModelError} if the value is not an integer greater than 0 as those are not valid.
     */
    set vendorListVersion(integer) {
        /**
         * first coerce to a number via leading '+' then take the integer value by
         * bitshifting to the right.  This works on all types in JavaScript and if
         * it's not valid then value will be 0.
         */
        integer = Number(integer) >> 0;
        if (integer < 0) {
            throw new TCModelError('vendorListVersion', integer);
        }
        else {
            this.vendorListVersion_ = integer;
        }
    }
    get vendorListVersion() {
        if (this.gvl) {
            return this.gvl.vendorListVersion;
        }
        else {
            return this.vendorListVersion_;
        }
    }
    /**
     * From the corresponding field in the GVL that was
     * used for obtaining consent. A new policy version invalidates existing
     * strings and requires CMPs to re-establish transparency and consent from
     * users.
     *
     * If a TCF policy version number is different from the one from the latest
     * GVL, the CMP must re-establish transparency and consent.
     *
     * @param {number} num - You do not need to set this.  This comes
     * directly from the [[GVL]].
     *
     */
    set policyVersion(num) {
        this.policyVersion_ = parseInt(num, 10);
        if (this.policyVersion_ < 0) {
            throw new TCModelError('policyVersion', num);
        }
    }
    get policyVersion() {
        if (this.gvl) {
            return this.gvl.tcfPolicyVersion;
        }
        else {
            return this.policyVersion_;
        }
    }
    set version(num) {
        this.version_ = parseInt(num, 10);
    }
    get version() {
        return this.version_;
    }
    /**
     * Whether the signals encoded in this TC String were from site-specific
     * storage `true` versus ‘global’ consensu.org shared storage `false`. A
     * string intended to be stored in global/shared scope but the CMP is unable
     * to store due to a user agent not accepting third-party cookies would be
     * considered site-specific `true`.
     *
     * @param {boolean} bool - value to set. Some changes to other fields in this
     * model will automatically change this value like adding publisher
     * restrictions.
     */
    set isServiceSpecific(bool) {
        this.isServiceSpecific_ = bool;
    }
    get isServiceSpecific() {
        return this.isServiceSpecific_;
    }
    /**
     * Non-standard stacks means that a CMP is using publisher-customized stack
     * descriptions. Stacks (in terms of purposes in a stack) are pre-set by the
     * IAB. As are titles. Descriptions are pre-set, but publishers can customize
     * them. If they do, they need to set this bit to indicate that they've
     * customized descriptions.
     *
     * @param {boolean} bool - value to set
     */
    set useNonStandardStacks(bool) {
        this.useNonStandardStacks_ = bool;
    }
    get useNonStandardStacks() {
        return this.useNonStandardStacks_;
    }
    /**
     * Whether or not this publisher supports OOB signaling.  On Global TC String
     * OOB Vendors Disclosed will be included if the publish wishes to no allow
     * these vendors they should set this to false.
     * @param {boolean} bool - value to set
     */
    set supportOOB(bool) {
        this.supportOOB_ = bool;
    }
    get supportOOB() {
        return this.supportOOB_;
    }
    /**
     * `false` There is no special Purpose 1 status.
     * Purpose 1 was disclosed normally (consent) as expected by Policy.  `true`
     * Purpose 1 not disclosed at all. CMPs use PublisherCC to indicate the
     * publisher’s country of establishment to help Vendors determine whether the
     * vendor requires Purpose 1 consent. In global scope TC strings, this field
     * must always have a value of `false`. When a CMP encounters a global scope
     * string with `purposeOneTreatment=true` then that string should be
     * considered invalid and the CMP must re-establish transparency and consent.
     *
     * @param {boolean} bool
     */
    set purposeOneTreatment(bool) {
        this.purposeOneTreatment_ = bool;
    }
    get purposeOneTreatment() {
        return this.purposeOneTreatment_;
    }
    /**
     * setAllVendorConsents - sets all vendors on the GVL Consent (true)
     *
     * @return {void}
     */
    setAllVendorConsents() {
        this.vendorConsents.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorConsents - unsets all vendors on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllVendorConsents() {
        this.vendorConsents.empty();
    }
    /**
     * setAllVendorsDisclosed - sets all vendors on the GVL Vendors Disclosed (true)
     *
     * @return {void}
     */
    setAllVendorsDisclosed() {
        this.vendorsDisclosed.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorsDisclosed - unsets all vendors on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllVendorsDisclosed() {
        this.vendorsDisclosed.empty();
    }
    /**
     * setAllVendorsAllowed - sets all vendors on the GVL Consent (true)
     *
     * @return {void}
     */
    setAllVendorsAllowed() {
        this.vendorsAllowed.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorsAllowed - unsets all vendors on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllVendorsAllowed() {
        this.vendorsAllowed.empty();
    }
    /**
     * setAllVendorLegitimateInterests - sets all vendors on the GVL LegitimateInterests (true)
     *
     * @return {void}
     */
    setAllVendorLegitimateInterests() {
        this.vendorLegitimateInterests.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorLegitimateInterests - unsets all vendors on the GVL LegitimateInterests (false)
     *
     * @return {void}
     */
    unsetAllVendorLegitimateInterests() {
        this.vendorLegitimateInterests.empty();
    }
    /**
     * setAllPurposeConsents - sets all purposes on the GVL Consent (true)
     *
     * @return {void}
     */
    setAllPurposeConsents() {
        this.purposeConsents.set(this.gvl.purposes);
    }
    /**
     * unsetAllPurposeConsents - unsets all purposes on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllPurposeConsents() {
        this.purposeConsents.empty();
    }
    /**
     * setAllPurposeLegitimateInterests - sets all purposes on the GVL LI Transparency (true)
     *
     * @return {void}
     */
    setAllPurposeLegitimateInterests() {
        this.purposeLegitimateInterests.set(this.gvl.purposes);
    }
    /**
     * unsetAllPurposeLegitimateInterests - unsets all purposes on the GVL LI Transparency (false)
     *
     * @return {void}
     */
    unsetAllPurposeLegitimateInterests() {
        this.purposeLegitimateInterests.empty();
    }
    /**
     * setAllSpecialFeatureOptins - sets all special featuresOptins on the GVL (true)
     *
     * @return {void}
     */
    setAllSpecialFeatureOptins() {
        this.specialFeatureOptins.set(this.gvl.specialFeatures);
    }
    /**
     * unsetAllSpecialFeatureOptins - unsets all special featuresOptins on the GVL (true)
     *
     * @return {void}
     */
    unsetAllSpecialFeatureOptins() {
        this.specialFeatureOptins.empty();
    }
    setAll() {
        this.setAllVendorConsents();
        this.setAllPurposeLegitimateInterests();
        this.setAllSpecialFeatureOptins();
        this.setAllPurposeConsents();
        this.setAllVendorLegitimateInterests();
    }
    unsetAll() {
        this.unsetAllVendorConsents();
        this.unsetAllPurposeLegitimateInterests();
        this.unsetAllSpecialFeatureOptins();
        this.unsetAllPurposeConsents();
        this.unsetAllVendorLegitimateInterests();
    }
    get numCustomPurposes() {
        let len = this.numCustomPurposes_;
        if (typeof this.customPurposes === 'object') {
            /**
             * Keys are not guaranteed to be in order and likewise there is no
             * requirement that the customPurposes be non-sparse.  So we have to sort
             * and take the highest value.  Even if the set only contains 3 purposes
             * but goes to ID 6 we need to set the number to 6 for the encoding to
             * work properly since it's positional.
             */
            const purposeIds = Object.keys(this.customPurposes)
                .sort((a, b) => Number(a) - Number(b));
            len = parseInt(purposeIds.pop(), 10);
        }
        return len;
    }
    set numCustomPurposes(num) {
        this.numCustomPurposes_ = parseInt(num, 10);
        if (this.numCustomPurposes_ < 0) {
            throw new TCModelError('numCustomPurposes', num);
        }
    }
    /**
     * updated - updates the created and lastUpdated dates with a 'now' day-level UTC timestamp
     *
     * @return {void}
     */
    updated() {
        const date = new Date();
        const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        this.created = utcDate;
        this.lastUpdated = utcDate;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/TCString.js




/**
 * Main class for encoding and decoding a
 * TCF Transparency and Consent String
 */
class TCString {
    /**
     * encodes a model into a TCString
     *
     * @param {TCModel} tcModel - model to convert into encoded string
     * @param {EncodingOptions} options - for encoding options other than default
     * @return {string} - base64url encoded Transparency and Consent String
     */
    static encode(tcModel, options) {
        let out = '';
        let sequence;
        tcModel = SemanticPreEncoder.process(tcModel, options);
        /**
           * If they pass in a special segment sequence.
           */
        if (Array.isArray(options?.segments)) {
            sequence = options.segments;
        }
        else {
            sequence = new SegmentSequence(tcModel, options)['' + tcModel.version];
        }
        sequence.forEach((segment, idx) => {
            let dotMaybe = '';
            if (idx < sequence.length - 1) {
                dotMaybe = '.';
            }
            out += SegmentEncoder.encode(tcModel, segment) + dotMaybe;
        });
        return out;
    }
    /**
     * Decodes a string into a TCModel
     *
     * @param {string} encodedTCString - base64url encoded Transparency and
     * Consent String to decode - can also be a single or group of segments of
     * the string
     * @param {string} [tcModel] - model to enhance with the information.  If
     * none is passed a new instance of TCModel will be created.
     * @return {TCModel} - Returns populated TCModel
     */
    static decode(encodedTCString, tcModel) {
        const segments = encodedTCString.split('.');
        const len = segments.length;
        if (!tcModel) {
            tcModel = new TCModel();
        }
        for (let i = 0; i < len; i++) {
            const segString = segments[i];
            /**
             * first char will contain 6 bits, we only need the first 3. In version 1
             * and 2 of the TC string there is no segment type for the CORE string.
             * Instead the first 6 bits are reserved for the encoding version, but
             * because we're only on a maximum of encoding version 2 the first 3 bits
             * in the core segment will evaluate to 0.
             */
            const firstChar = Base64Url.decode(segString.charAt(0));
            const segTypeBits = firstChar.substr(0, BitLength.segmentType);
            const segment = SegmentIDs.ID_TO_KEY[IntEncoder.decode(segTypeBits, BitLength.segmentType).toString()];
            SegmentEncoder.decode(segString, tcModel, segment);
        }
        return tcModel;
    }
}

;// CONCATENATED MODULE: ./node_modules/@iabtcf/core/lib/mjs/index.js
// created from 'create-ts-index'









// EXTERNAL MODULE: ./node_modules/@iabtcf/stub/lib/stub.js
var stub = __webpack_require__(2131);
;// CONCATENATED MODULE: ./src/utils.js
function _cliRequest(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var body = null;
  var headers = {};
  if (method === "POST" && data) {
    body = JSON.stringify(data);
    headers["Content-Type"] = "application/json";
  }
  return fetch(url, {
    method: method,
    headers: headers,
    body: body
  });
}
;// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
window.cookielawinfo = window.cookielawinfo || {};
var ref = window.cookielawinfo;



var _iabConfig = window.iabConfig;
var _iabTranslations = window.iabTranslations;
var _require = __webpack_require__(346),
  CmpApi = _require.CmpApi;
function _cliSetToggleElementChecked(key) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var element = document.querySelector(key);
  if (element) element.checked = value;
}
_cliIABLoadStub();
function _cliDomReady(callback) {
  if (typeof document === 'undefined') {
    return;
  }
  if (document.readyState === 'complete' || /** DOMContentLoaded + Images/Styles/etc loaded, so we call directly. */
  document.readyState === 'interactive' /** DOMContentLoaded fires at this point, so we call directly. */) {
    return void callback();
  } /** DOMContentLoaded has not fired yet, delay callback until then. */
  document.addEventListener('DOMContentLoaded', callback);
}
_cliDomReady( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return _cliInit();
      case 3:
        _context.next = 8;
        break;
      case 5:
        _context.prev = 5;
        _context.t0 = _context["catch"](0);
        console.error(_context.t0);
      case 8:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 5]]);
})));
function _cliAddListeners() {
  document.addEventListener("cli_consent_update", function (eventData) {
    var data = eventData.detail;
    _cliSetIABConsentState(data.status);
  });
  var element = document.querySelector('#wt-cli-iab-preference-toggle');
  if (!element) return;
  element.addEventListener('click', _cliIABShowVendors.bind(null));
}
function _cliInit() {
  return _cliInit2.apply(this, arguments);
}
function _cliInit2() {
  _cliInit2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _cliInitializeIABAPI();
          _context3.next = 4;
          return _cliInitializeIAB();
        case 4:
          _cliAddListeners();
          _cliSetVendorCount();
          _cliSetVendorSeekCount();
          _cliMaybeAddShowMoreToVendors();
          _cliPopulateIABSetSelections();
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _cliInit2.apply(this, arguments);
}
function _cliInitializeIAB() {
  return _cliInitializeIAB2.apply(this, arguments);
}
function _cliInitializeIAB2() {
  _cliInitializeIAB2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var gvl;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!ref._tcModel) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return");
        case 2:
          _context4.next = 4;
          return _cliInitializeGVL();
        case 4:
          gvl = _context4.sent;
          _cliInitializeTCFModel(gvl);
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _cliInitializeIAB2.apply(this, arguments);
}
function _cliInitializeIABAPI() {
  ref._cmpAPI = new CmpApi(404, 1, true);
}
function _cliInitializeGVL() {
  return _cliInitializeGVL2.apply(this, arguments);
}
function _cliInitializeGVL2() {
  _cliInitializeGVL2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var gvl;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          GVL.baseUrl = _iabConfig.baseUrl;
          GVL.latestFilename = _iabConfig.latestFilename;
          GVL.languageFilename = _iabConfig.languageFilename;
          gvl = new GVL();
          _context5.next = 6;
          return gvl.readyPromise;
        case 6:
          if (_iabConfig !== null && _iabConfig !== void 0 && _iabConfig.allowedVendors) gvl.narrowVendorsTo(_iabConfig.allowedVendors);
          return _context5.abrupt("return", gvl);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _cliInitializeGVL2.apply(this, arguments);
}
function _cliCreateTCModel(gvl) {
  var tcModel = new TCModel(gvl);
  tcModel.purposeLegitimateInterests.set([2, 7, 8, 9, 10, 11]);
  tcModel.setAllVendorLegitimateInterests();
  return tcModel;
}
function _cliInitializeTCFModel(gvl) {
  var tcModel = null;
  var _prevTCString = cliIABGetCookie('euconsent');
  if (_prevTCString) {
    tcModel = TCString.decode(_prevTCString);
    if (tcModel.policyVersion_ < gvl.tcfPolicyVersion) {
      tcModel = _cliCreateTCModel(gvl);
      cliIABSetCookie("euconsent", _cliGetTCEncodedString(), CLI_ACCEPT_COOKIE_EXPIRE);
    } else {
      tcModel.gvl = gvl;
    }
  } else {
    tcModel = _cliCreateTCModel(gvl);
  }
  tcModel.cmpId = 404;
  tcModel.cmpVersion = 1;
  tcModel.isServiceSpecific = true;
  ref._tcModel = tcModel;
}
function _cliGetTCEncodedString() {
  return TCString.encode(ref._tcModel, {
    segments: [Segment.CORE, Segment.PUBLISHER_TC]
  });
}
ref._cliIABStatusUpdate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var uiStatus,
    skip,
    activeLaw,
    _args2 = arguments;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        uiStatus = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
        skip = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
        if (_iabConfig.status) {
          _context2.next = 4;
          break;
        }
        return _context2.abrupt("return");
      case 4:
        if (ref._tcModel) {
          _context2.next = 7;
          break;
        }
        _context2.next = 7;
        return _cliInitializeIAB();
      case 7:
        activeLaw = _iabConfig.appliedLaw;
        ref._cmpAPI.update(activeLaw !== "ccpa" ? uiStatus && skip ? "" : _cliGetTCEncodedString() : null, uiStatus);
      case 9:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
}));
function _cliChangeGVLLanguage(_x) {
  return _cliChangeGVLLanguage2.apply(this, arguments);
}
function _cliChangeGVLLanguage2() {
  _cliChangeGVLLanguage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(language) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return ref._tcModel.gvl.changeLanguage(language);
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _cliChangeGVLLanguage2.apply(this, arguments);
}
function _cliIABLoadStub() {
  if (!_iabConfig.status) return;
  stub();
}
function _cliSetIABConsentState() {
  var choice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (choice === "all") {
    ref._tcModel.purposeLegitimateInterests.set([2, 7, 8, 9, 10, 11]);
    ref._tcModel.setAllPurposeConsents();
    ref._tcModel.setAllSpecialFeatureOptins();
    ref._tcModel.setAllVendorLegitimateInterests();
    ref._tcModel.setAllVendorConsents();
  } else {
    ref._tcModel.unsetAll();
    if (choice === "custom") {
      var _cliGetIABUIChoices2 = _cliGetIABUIChoices(),
        _cliGetIABUIChoices3 = _slicedToArray(_cliGetIABUIChoices2, 5),
        vendorLegitimateInterests = _cliGetIABUIChoices3[0],
        vendorConsents = _cliGetIABUIChoices3[1],
        purposeConsents = _cliGetIABUIChoices3[2],
        purposeLegitimateInterests = _cliGetIABUIChoices3[3],
        specialFeatureOptins = _cliGetIABUIChoices3[4];
      ref._tcModel.vendorConsents.set(vendorConsents);
      ref._tcModel.vendorLegitimateInterests.set(vendorLegitimateInterests);
      ref._tcModel.purposeLegitimateInterests.set(purposeLegitimateInterests);
      ref._tcModel.purposeConsents.set(purposeConsents);
      ref._tcModel.specialFeatureOptins.set(specialFeatureOptins);
    }
  }
  cliIABSetCookie("euconsent", _cliGetTCEncodedString(), CLI_ACCEPT_COOKIE_EXPIRE);
  _cliPopulateIABSetSelections();
  ref._cliIABStatusUpdate(false);
}
function _cliGetIABUIChoices() {
  var _cliIABGetPurposeCons = _cliIABGetPurposeConsents(),
    _cliIABGetPurposeCons2 = _slicedToArray(_cliIABGetPurposeCons, 2),
    purposeConsents = _cliIABGetPurposeCons2[0],
    purposeLegitimateInterests = _cliIABGetPurposeCons2[1];
  var _cliIABGetSpecialFeat = _cliIABGetSpecialFeaturesConsents(),
    _cliIABGetSpecialFeat2 = _slicedToArray(_cliIABGetSpecialFeat, 1),
    specialFeatureOptins = _cliIABGetSpecialFeat2[0];
  var _cliIABGetVendorConse = _cliIABGetVendorConsents(),
    _cliIABGetVendorConse2 = _slicedToArray(_cliIABGetVendorConse, 2),
    vendorConsents = _cliIABGetVendorConse2[0],
    vendorLegitimateInterests = _cliIABGetVendorConse2[1];
  return [vendorLegitimateInterests, vendorConsents, purposeConsents, purposeLegitimateInterests, specialFeatureOptins];
}
function _cliIABGetVendorConsents() {
  var legitimateItems = [];
  var consentedItems = [];
  Object.values(ref._tcModel.gvl.vendors).forEach(function (vendor) {
    var element = document.querySelector("#wt-cli-iab-vendor-consents-checkbox-item-".concat(vendor.id));
    if (element && element.checked) consentedItems.push(vendor.id);
    var legitimateElement = document.querySelector("#wt-cli-iab-vendor-legitimate-interests-checkbox-item-".concat(vendor.id));
    if (legitimateElement && legitimateElement.checked) legitimateItems.push(vendor.id);
  });
  return [consentedItems, legitimateItems];
}
function _cliIABGetPurposeConsents() {
  var legitimateItems = [];
  var consentedItems = [];
  Object.values(ref._tcModel.gvl.purposes).forEach(function (purpose) {
    var element = document.querySelector("#wt-cli-iab-purpose-consents-checkbox-item-".concat(purpose.id));
    if (element && element.checked) consentedItems.push(purpose.id);
    var legitimateElement = document.querySelector("#wt-cli-iab-purpose-legitimate-interests-checkbox-item-".concat(purpose.id));
    if (legitimateElement && legitimateElement.checked) legitimateItems.push(purpose.id);
  });
  return [consentedItems, legitimateItems];
}
function _cliIABGetSpecialFeaturesConsents() {
  var legitimateItems = [];
  var consentedItems = [];
  Object.values(ref._tcModel.gvl.specialFeatures).forEach(function (feature) {
    var element = document.querySelector("#wt-cli-iab-specialfeature-consents-checkbox-item-".concat(feature.id));
    if (element && element.checked) consentedItems.push(feature.id);
    var legitimateElement = document.querySelector("#wt-cli-iab-specialfeature-consents-checkbox-item-".concat(feature.id));
    if (legitimateElement && legitimateElement.checked) legitimateItems.push(feature.id);
  });
  return [consentedItems, legitimateItems];
}
function _cliGetIABVendorsForUI() {
  var response = {
    thirdPartySectionChecked: false,
    consent: {
      allowed: [],
      rejected: []
    },
    legitimateInterest: {
      allowed: [],
      rejected: []
    }
  };
  ref._tcModel.vendorConsents.forEach(function (hasConsent, vendorId) {
    if (hasConsent) response.consent.allowed.push(vendorId);else response.consent.rejected.push(vendorId);
  });
  ref._tcModel.vendorLegitimateInterests.forEach(function (hasConsent, vendorId) {
    if (hasConsent) response.legitimateInterest.allowed.push(vendorId);else response.legitimateInterest.rejected.push(vendorId);
  });
  response.thirdPartySectionChecked = response.consent.allowed.length === _cliGetIntMapLength(ref._tcModel.gvl.vendors);
  return response;
}
function _cliGetIABPurposeAndFeaturesForUI() {
  var response = {
    purposeConsent: {
      allowed: [],
      rejected: []
    },
    purposeLegitimateInterest: {
      allowed: [],
      rejected: []
    },
    specialFeatures: {
      allowed: [],
      rejected: []
    },
    purposeSectionChecked: false,
    specialFeaturesSectionChecked: false
  };
  ref._tcModel.purposeConsents.forEach(function (hasConsent, vendorId) {
    if (hasConsent) response.purposeConsent.allowed.push(vendorId);else response.purposeConsent.rejected.push(vendorId);
  });
  ref._tcModel.purposeLegitimateInterests.forEach(function (hasConsent, vendorId) {
    if (hasConsent) response.purposeLegitimateInterest.allowed.push(vendorId);else response.purposeLegitimateInterest.rejected.push(vendorId);
  });
  ref._tcModel.specialFeatureOptins.forEach(function (hasConsent, vendorId) {
    if (hasConsent) response.specialFeatures.allowed.push(vendorId);else response.specialFeatures.rejected.push(vendorId);
  });
  response.purposeSectionChecked = response.purposeConsent.allowed.length === _cliGetIntMapLength(ref._tcModel.gvl.purposes);
  response.specialFeaturesSectionChecked = response.specialFeatures.allowed.length === _cliGetIntMapLength(ref._tcModel.gvl.specialFeatures);
  return response;
}
function _cliGetIntMapLength(item) {
  return Object.keys(item).length;
}
function _cliPopulateIABSetSelections() {
  var _cliGetIABVendorsForU = _cliGetIABVendorsForUI(),
    consent = _cliGetIABVendorsForU.consent,
    legitimateInterest = _cliGetIABVendorsForU.legitimateInterest,
    thirdPartySectionChecked = _cliGetIABVendorsForU.thirdPartySectionChecked;
  var _cliGetIABPurposeAndF = _cliGetIABPurposeAndFeaturesForUI(),
    purposeConsent = _cliGetIABPurposeAndF.purposeConsent,
    purposeLegitimateInterest = _cliGetIABPurposeAndF.purposeLegitimateInterest,
    specialFeatures = _cliGetIABPurposeAndF.specialFeatures,
    purposeSectionChecked = _cliGetIABPurposeAndF.purposeSectionChecked,
    specialFeaturesSectionChecked = _cliGetIABPurposeAndF.specialFeaturesSectionChecked;
  _cliSetToggleElementChecked("#wt-cli-iab-vendors-consents-checkbox", purposeSectionChecked);
  var _iterator = _createForOfIteratorHelper(consent.allowed),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      _cliSetToggleElementChecked("#wt-cli-iab-vendor-consents-checkbox-item-".concat(item));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(consent.rejected),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _item = _step2.value;
      _cliSetToggleElementChecked("#wt-cli-iab-vendor-consents-checkbox-item-".concat(_item), false);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(legitimateInterest.allowed),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _item2 = _step3.value;
      _cliSetToggleElementChecked("#wt-cli-iab-vendor-legitimate-interests-checkbox-item-".concat(_item2));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(legitimateInterest.rejected),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _item3 = _step4.value;
      _cliSetToggleElementChecked("#wt-cli-iab-vendor-legitimate-interests-checkbox-item-".concat(_item3), false);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  _cliSetToggleElementChecked("#wt-cli-iab-purpose-consents-checkbox", purposeSectionChecked);
  _cliSetToggleElementChecked("#wt-cli-iab-specialfeature-consents-checkbox", specialFeaturesSectionChecked);
  var _iterator5 = _createForOfIteratorHelper(purposeConsent.allowed),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _item4 = _step5.value;
      _cliSetToggleElementChecked("#wt-cli-iab-purpose-consents-checkbox-item-".concat(_item4));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var _iterator6 = _createForOfIteratorHelper(purposeConsent.rejected),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _item5 = _step6.value;
      _cliSetToggleElementChecked("#wt-cli-iab-purpose-consents-checkbox-item-".concat(_item5), false);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  var _iterator7 = _createForOfIteratorHelper(purposeLegitimateInterest.allowed),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _item6 = _step7.value;
      _cliSetToggleElementChecked("#wt-cli-iab-purpose-legitimate-interests-checkbox-item-".concat(_item6));
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = _createForOfIteratorHelper(purposeLegitimateInterest.rejected),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var _item7 = _step8.value;
      _cliSetToggleElementChecked("#wt-cli-iab-purpose-legitimate-interests-checkbox-item-".concat(_item7), false);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var _iterator9 = _createForOfIteratorHelper(specialFeatures.allowed),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var _item8 = _step9.value;
      _cliSetToggleElementChecked("#wt-cli-iab-specialfeature-consents-checkbox-item-".concat(_item8));
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  var _iterator10 = _createForOfIteratorHelper(specialFeatures.rejected),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var _item9 = _step10.value;
      _cliSetToggleElementChecked("#wt-cli-iab-specialfeature-consents-checkbox-item-".concat(_item9), false);
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
}
function _cliMaybeAddShowMoreToVendors() {
  var vendors = ref._tcModel.gvl.vendors;
  Object.values(vendors).forEach(function (vendor) {
    var deviceStorageDisclosureUrl = vendor.deviceStorageDisclosureUrl;
    if (!deviceStorageDisclosureUrl) return;
    var element = document.querySelector("#wt-cli-iab-vendor-consents-content-".concat(vendor.id, " .wt-cli-iab-vendor-storage-disclosure-section"));
    if (!element) return;
    _cliAttachReadMore(element, deviceStorageDisclosureUrl, vendor.id);
  });
}
function _cliAttachReadMore(element, url, vendorId) {
  var el = document.createElement('button');
  el.textContent = 'Show more';
  // el.id = `wt-cli-vendor-consents-show-more`;
  el.className = "wt-cli-link";
  element.appendChild(el);
  el.addEventListener('click', _cliAttachReadMoreListener.bind(null, element, url));
}
function _cliAttachReadMoreListener(_x2, _x3, _x4) {
  return _cliAttachReadMoreListener2.apply(this, arguments);
}
function _cliAttachReadMoreListener2() {
  _cliAttachReadMoreListener2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(element, url, event) {
    var response, parsedResponse, disclosedItems, contentToInsert, tableTitle, tableContent;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          event.preventDefault();
          _context7.prev = 1;
          _context7.next = 4;
          return _cliRequest(url);
        case 4:
          response = _context7.sent;
          _context7.next = 7;
          return response.json();
        case 7:
          parsedResponse = _context7.sent;
          if (!(!parsedResponse || !parsedResponse.disclosures || !parsedResponse.disclosures.length)) {
            _context7.next = 10;
            break;
          }
          throw new Error("Invalid disclosures");
        case 10:
          disclosedItems = parsedResponse.disclosures.map(function (disclosure) {
            return {
              name: disclosure.identifier,
              type: disclosure.type,
              duration: disclosure.maxAgeSeconds ? Math.round(disclosure.maxAgeSeconds / (60 * 60 * 24)) : 0,
              domain: disclosure.domains || [],
              purposes: (disclosure.purposes || []).map(function (id) {
                return ref._tcModel.gvl.purposes[id].name;
              })
            };
          });
          contentToInsert = disclosedItems.map(function (disclosure) {
            var tableItemContent = ["name", "type", "duration", "domain", "purposes"].map(function (header) {
              return "<li><div>".concat(_iabTranslations.storageDisclosures.headers[header], "</div><div>").concat(header === "purposes" ? "<ul class=\"wt-cli-iab-purposes-list\">".concat(disclosure.purposes.map(function (purpose) {
                return "<li>".concat(purpose, "</li>");
              }).join(""), "</ul>") : header === "domain" ? disclosure.domain.join(",") : disclosure[header], "</div></li>");
            }).join("");
            return "<ul class=\"wt-cli-iab-cookie-des-table\">".concat(tableItemContent, "</ul>");
          });
          tableTitle = "<label class=\"cli-vendor-sub-title\">".concat(_iabTranslations.storageDisclosures.title, "</label>");
          tableContent = "".concat(tableTitle, "<div class=\"wt-cli-iab-audit-table\">").concat(contentToInsert.join(""), "</div>");
          element.innerHTML = tableContent;
          _context7.next = 20;
          break;
        case 17:
          _context7.prev = 17;
          _context7.t0 = _context7["catch"](1);
          console.log(_context7.t0);
        case 20:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 17]]);
  }));
  return _cliAttachReadMoreListener2.apply(this, arguments);
}
function _cliGetIABVendorData(list, filter, dataRetention) {
  return Object.values(list).filter(function (purpose) {
    return filter.includes(purpose.id);
  }).map(function (purpose) {
    var response = {
      name: purpose.name
    };
    if (dataRetention) response[dataRetention] = dataRetention.purposes[purpose.id] || 0;
    return response;
  });
}
function _cliSetVendorCount() {
  var element = document.querySelector('#wt-cli-iab-notice-toggle');
  if (!element) return;
  var content = element.innerHTML;
  var count = _cliGetIntMapLength(ref._tcModel.gvl.vendors);
  content = content.replace("{{count}}", count);
  element.innerHTML = content;
  element.addEventListener('click', _cliToggleIABVendors.bind(null));
}
function _cliToggleIABVendors() {
  CLI.TogglePreference();
  _cliIABShowVendors();
}
function _cliIABShowVendors() {
  _cliIABShowTab('cli_cookie_vendors');
  var element = _cliFindElement("#wt-cli-iab-vendors-consents[aria-expanded='false']");
  if (!element) return;
  element.click();
}
function cliIABSetCookie(name, value, days) {
  var secure = "";
  if (true === Boolean(Cli_Data.secure_cookies)) secure = ";secure";
  var domain = Cli_Data.cookieDomain !== '' ? ";domain=".concat(Cli_Data.cookieDomain) : '';
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = ";expires=".concat(date.toGMTString());
  if (days < 1) {
    this.eraseCookie(name, expires);
  } else {
    document.cookie = "".concat(name, "=").concat(value).concat(secure).concat(expires).concat(domain, ";path=/");
  }
}
function cliIABGetCookie(name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}
function _cliSetVendorSeekCount() {
  Object.values(ref._tcModel.gvl.purposes).forEach(function (item) {
    var seekCount = _cliGetIntMapLength(ref._tcModel.gvl.getVendorsWithConsentPurpose(item.id)) + _cliGetIntMapLength(ref._tcModel.gvl.getVendorsWithFlexiblePurpose(item.id)) + _cliGetIntMapLength(ref._tcModel.gvl.getVendorsWithLegIntPurpose(item.id));
    var element = document.querySelector("#wt-cli-iab-purpose-consents-sub-content-tab-".concat(item.id, " .wt-cli-vendors-seek-count"));
    if (!element) return;
    element.innerHTML = seekCount;
  });
  Object.values(ref._tcModel.gvl.specialPurposes).forEach(function (item) {
    var seekCount = _cliGetIntMapLength(ref._tcModel.gvl.getVendorsWithSpecialPurpose(item.id));
    var element = document.querySelector("#wt-cli-iab-specialpurpose-consents-sub-content-tab-".concat(item.id, " .wt-cli-vendors-seek-count"));
    if (!element) return;
    element.innerHTML = seekCount;
  });
  Object.values(ref._tcModel.gvl.features).forEach(function (item) {
    var seekCount = _cliGetIntMapLength(ref._tcModel.gvl.getVendorsWithFeature(item.id));
    var element = document.querySelector("#wt-cli-iab-feature-consents-sub-content-tab-".concat(item.id, " .wt-cli-vendors-seek-count"));
    if (!element) return;
    element.innerHTML = seekCount;
  });
  Object.values(ref._tcModel.gvl.specialFeatures).forEach(function (item) {
    var seekCount = _cliGetIntMapLength(ref._tcModel.gvl.getVendorsWithSpecialFeature(item.id));
    var element = document.querySelector("#wt-cli-iab-specialfeature-consents-sub-content-tab-".concat(item.id, " .wt-cli-vendors-seek-count"));
    if (!element) return;
    element.innerHTML = seekCount;
  });
}
function _cliFindElement(selector) {
  var element = document.querySelector(selector);
  if (!element) return null;
  return element;
}
})();

/******/ })()
;