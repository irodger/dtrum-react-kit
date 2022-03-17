"use strict";
exports.__esModule = true;
exports.dtrumEnterActionListener = void 0;
var recursiveAttrSearch_1 = require("../utils/recursiveAttrSearch.js");
/**
 * Dtrum action listener -
 * Using deep search find the closest data-test-id and set to global variable `_dtrumElementId`
 * can be usefull in Dynatrace admin panel when dtrum agent ignored searched attribute
 *
 * _dtrumElementId setting on every action in real time,
 * if the latest action was without element or data-test-id in closest node, the value return null;
 *
 * @param { Number } actionId - Current action id
 * @param { Number } startTimestamp - Time when the action was started in timestamp
 * @param { Boolean } isRootAction - True if the action with the provided ID is a root action
 * @param { HTMLElement } element - DOM Element what called the action
 * */
var enterActionListener = function (actionId, startTimestamp, isRootAction, element) {
    //@ts-expect-error Global variable used in Dynatrace admin panel
    window._dtrumElementId = element && (0, recursiveAttrSearch_1.recursiveAttrSearch)(element, 'data-test-id');
};
exports.dtrumEnterActionListener = enterActionListener;
