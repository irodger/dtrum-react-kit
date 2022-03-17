"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDtrumEndSession = void 0;
var react_1 = require("react");
var tools_1 = require("../tools");
/** Hooks will send endSession event when user closed current window */
var useDtrumEndSession = function (eventType) {
    if (eventType === void 0) { eventType = 'beforeunload'; }
    var _a = window.dtrum, dtrum = _a === void 0 ? undefined : _a;
    (0, react_1.useEffect)(function () {
        if (!dtrum || eventType === 'visibilitychange' && (document.visibilityState !== 'hidden' || !document.hidden))
            return;
        window.addEventListener(eventType, tools_1.dtrumEndSession);
        return function () { return window.removeEventListener(eventType, tools_1.dtrumEndSession); };
    }, [dtrum]);
};
exports.useDtrumEndSession = useDtrumEndSession;
