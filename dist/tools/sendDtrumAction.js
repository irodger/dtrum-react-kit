"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDtrumAction = void 0;
var sendDtrumAction = function (actionName, callback) {
    var _a = window.dtrum, dtrum = _a === void 0 ? undefined : _a;
    if (!dtrum)
        return callback === null || callback === void 0 ? void 0 : callback();
    var action = dtrum.enterAction(actionName);
    callback === null || callback === void 0 ? void 0 : callback();
    dtrum.leaveAction(action);
    return;
};
exports.sendDtrumAction = sendDtrumAction;
