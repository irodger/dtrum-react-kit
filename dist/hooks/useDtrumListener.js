"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDtrumListener = void 0;
var react_1 = require("react");
var listeners_1 = require("../listeners");
/**
 * Dtrum action listener hook with the Listener
 * */
var useDtrumListener = function (listener) {
    if (listener === void 0) { listener = listeners_1.actionToGlobalListener; }
    var _a = window.dtrum, dtrum = _a === void 0 ? undefined : _a;
    (0, react_1.useEffect)(function () {
        if (!dtrum)
            return;
        dtrum.addEnterActionListener(listener);
        return function () { return dtrum.removeEnterActionListener(listener); };
    }, [dtrum]);
};
exports.useDtrumListener = useDtrumListener;
