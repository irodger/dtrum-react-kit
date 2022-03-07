"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveAttrSearch = void 0;
/** The recursive solution to find the closest HTML-attribute from deep
 *
 * @param { Object } obj - DOM Node Element called to find the closest attribute value
 * @param { String } attrName - Attribute name to called, data-test-id by default
 *
 * @return { String | null } result - Attribute value or null
 * */
var recursiveAttrSearch = function (obj, attrName) {
    if (attrName === void 0) { attrName = 'data-test-id'; }
    if (!(obj instanceof Element))
        return null;
    var result = obj.getAttribute(attrName);
    var parent = obj.parentNode;
    if (!result && parent) {
        return (0, exports.recursiveAttrSearch)(parent, attrName);
    }
    return result;
};
exports.recursiveAttrSearch = recursiveAttrSearch;
