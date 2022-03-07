"use strict";
exports.__esModule = true;
exports.useDtrumEndSession = void 0;
var react_1 = require("react");
var dtrumEndSession_1 = require("../tools/dtrumEndSession");
/** Hooks will send endSession event when user closed current window */
var useDtrumEndSession = function () {
    var _a = window.dtrum, dtrum = _a === void 0 ? undefined : _a;
    (0, react_1.useEffect)(function () {
        if (!dtrum)
            return;
        window.addEventListener('beforeunload', dtrumEndSession_1.dtrumEndSession);
        return function () { return window.removeEventListener('beforeunload', dtrumEndSession_1.dtrumEndSession); };
    }, [dtrum]);
};
exports.useDtrumEndSession = useDtrumEndSession;
