Object.defineProperty(exports,"__esModule",{value:true});var _PooledClass=require('../../vendor/PooledClass');var _PooledClass2=_interopRequireDefault(_PooledClass);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var twoArgumentPooler=_PooledClass2.default.twoArgumentPooler;function Position(left,top){this.left=left;this.top=top;}Position.prototype.destructor=function(){this.left=null;this.top=null;};_PooledClass2.default.addPoolingTo(Position,twoArgumentPooler);exports.default=Position;