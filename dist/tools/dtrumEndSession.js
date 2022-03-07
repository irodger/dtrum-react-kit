"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtrumEndSession = void 0;
var dtrumEndSession = function () {
    var _a = window.dtrum, dtrum = _a === void 0 ? undefined : _a;
    if (!dtrum)
        return;
    dtrum.disable();
    dtrum.endSession();
};
exports.dtrumEndSession = dtrumEndSession;
