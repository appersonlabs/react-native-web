var _propTypes=require('prop-types');

var BaseComponentPropTypes={
accessibilityLabel:_propTypes.string,
accessibilityLiveRegion:(0,_propTypes.oneOf)(['assertive','none','polite']),
accessibilityRole:_propTypes.string,
accessible:_propTypes.bool,
importantForAccessibility:(0,_propTypes.oneOf)(['auto','no','no-hide-descendants','yes']),
style:(0,_propTypes.oneOfType)([_propTypes.array,_propTypes.number,_propTypes.object]),
testID:_propTypes.string};


module.exports=BaseComponentPropTypes;