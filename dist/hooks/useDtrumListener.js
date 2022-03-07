"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDtrumListener = void 0;
var react_1 = require("react");
var dtrumEnterActionListener_1 = require("../tools/dtrumEnterActionListener");
/**
 * Dtrum action listener hook with the Listener
 * */
var useDtrumListener = function () {
    var _a = window.dtrum, dtrum = _a === void 0 ? undefined : _a;
    (0, react_1.useEffect)(function () {
        if (!dtrum)
            return;
        dtrum.addEnterActionListener(dtrumEnterActionListener_1.dtrumEnterActionListener);
        return function () { return dtrum.removeEnterActionListener(dtrumEnterActionListener_1.dtrumEnterActionListener); };
    }, [dtrum]);
};
exports.useDtrumListener = useDtrumListener;
