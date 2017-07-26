var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _BorderPropTypes=require('../../propTypes/BorderPropTypes');var _BorderPropTypes2=_interopRequireDefault(_BorderPropTypes);
var _ColorPropType=require('../../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _ImageResizeMode=require('./ImageResizeMode');var _ImageResizeMode2=_interopRequireDefault(_ImageResizeMode);
var _LayoutPropTypes=require('../../propTypes/LayoutPropTypes');var _LayoutPropTypes2=_interopRequireDefault(_LayoutPropTypes);
var _ShadowPropTypes=require('../../propTypes/ShadowPropTypes');var _ShadowPropTypes2=_interopRequireDefault(_ShadowPropTypes);
var _TransformPropTypes=require('../../propTypes/TransformPropTypes');var _TransformPropTypes2=_interopRequireDefault(_TransformPropTypes);
var _propTypes=require('prop-types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

module.exports=_extends({},_BorderPropTypes2.default,_LayoutPropTypes2.default,_ShadowPropTypes2.default,_TransformPropTypes2.default,{




backgroundColor:_ColorPropType2.default,
opacity:_propTypes.number,
resizeMode:(0,_propTypes.oneOf)(Object.keys(_ImageResizeMode2.default)),



overlayColor:_propTypes.string,
tintColor:_ColorPropType2.default,



boxShadow:_propTypes.string});