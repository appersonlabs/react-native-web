Object.defineProperty(exports,"__esModule",{value:true});

var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');
















var modality=function modality(){
if(!_ExecutionEnvironment.canUseDOM){
return;
}

var styleElement=void 0;
var hadKeyboardEvent=false;
var keyboardThrottleTimeoutID=0;

var proto=window.Element.prototype;
var matches=
proto.matches||
proto.mozMatchesSelector||
proto.msMatchesSelector||
proto.webkitMatchesSelector;



var keyboardModalityWhitelist=[
'input:not([type])',
'input[type=text]',
'input[type=search]',
'input[type=url]',
'input[type=tel]',
'input[type=email]',
'input[type=password]',
'input[type=number]',
'input[type=date]',
'input[type=month]',
'input[type=week]',
'input[type=time]',
'input[type=datetime]',
'input[type=datetime-local]',
'textarea',
'[role=textbox]'].
join(',');




var initialize=function initialize(){

var id='react-native-modality';
styleElement=document.getElementById(id);
if(!styleElement){

var style='<style id="'+id+'">:focus { outline: none; }</style>';
document.head.insertAdjacentHTML('afterbegin',style);
styleElement=document.getElementById(id);
}
};





var focusTriggersKeyboardModality=function focusTriggersKeyboardModality(el){
if(matches){
return matches.call(el,keyboardModalityWhitelist)&&matches.call(el,':not([readonly])');
}else{
return false;
}
};




var addFocusRing=function addFocusRing(){
if(styleElement){
styleElement.disabled=true;
}
};




var removeFocusRing=function removeFocusRing(){
if(styleElement){
styleElement.disabled=false;
}
};







var handleKeyDown=function handleKeyDown(e){
hadKeyboardEvent=true;
if(keyboardThrottleTimeoutID!==0){
clearTimeout(keyboardThrottleTimeoutID);
}
keyboardThrottleTimeoutID=setTimeout(function(){
hadKeyboardEvent=false;
keyboardThrottleTimeoutID=0;
},100);
};




var handleFocus=function handleFocus(e){
if(hadKeyboardEvent||focusTriggersKeyboardModality(e.target)){
addFocusRing();
}
};




var handleBlur=function handleBlur(){
if(!hadKeyboardEvent){
removeFocusRing();
}
};

if(document.body&&document.body.addEventListener){
initialize();
document.body.addEventListener('keydown',handleKeyDown,true);
document.body.addEventListener('focus',handleFocus,true);
document.body.addEventListener('blur',handleBlur,true);
}
};exports.default=

modality;