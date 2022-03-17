"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDtrumOnMount = void 0;
var react_1 = require("react");
var tools_1 = require("../tools");
var memoizedMountNameValue = '';
/** The hook fired when component in mounted
 *
 * @param { String } name - Name of the mounted component
 * */
var useDtrumOnMount = function (name) {
    (0, react_1.useEffect)(function () {
        if (memoizedMountNameValue === name)
            return;
        (0, tools_1.sendDtrumAction)(name);
        memoizedMountNameValue = name;
    }, [name]);
};
exports.useDtrumOnMount = useDtrumOnMount;
