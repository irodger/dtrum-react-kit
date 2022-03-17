import { ActionEnterListener } from '@dynatrace/dtrum-api-types';
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
export declare const enterActionListener: ActionEnterListener;
