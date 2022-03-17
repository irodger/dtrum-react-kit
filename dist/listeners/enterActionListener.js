"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enterActionListener = void 0;
var recursiveAttrSearch_1 = require("../utils/recursiveAttrSearch");
var sendDtrumAction_1 = require("../tools/sendDtrumAction");
/**
 * Dtrum action listener -
 * Using deep search find the closest data-test-id and set to global variable `_dtrumElementId`
 * can be usefull in Dynatrace admin panel when dtrum agent ignored searched attribute
 *
 * _dtrumElementId setting on every action in real time,
 * if the latest action was without element or data-test-id in closest node, the value return null;
 *
 * @param { Number } _actionId - Current action id
 * @param { Number } _startTimestamp - Time when the action was started in timestamp
 * @param { Boolean } _isRootAction - True if the action with the provided ID is a root action
 * @param { HTMLElement } element - DOM Element what called the action
 * */
var enterActionListener = function (_actionId, _startTimestamp, _isRootAction, element) {
    var _a = window.dtrum, dtrum = _a === void 0 ? undefined : _a;
    if (!dtrum || !(element instanceof HTMLElement)) {
        return;
    }
    var elId = element && (0, recursiveAttrSearch_1.recursiveAttrSearch)(element, 'data-test-id') || '';
    elId && (0, sendDtrumAction_1.sendDtrumAction)(elId);
};
exports.enterActionListener = enterActionListener;
