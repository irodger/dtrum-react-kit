import { ActionEnterListener } from '@dynatrace/dtrum-api-types';
import { recursiveAttrSearch } from '../utils/recursiveAttrSearch';
import { sendDtrumAction } from "../tools/sendDtrumAction";

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
export const enterActionListener: ActionEnterListener = (
  _actionId,
  _startTimestamp,
  _isRootAction,
  element,
): void => {
  const { dtrum = undefined } = window;

  if (!dtrum || !(element instanceof HTMLElement)) {
    return;
  }

  const elId = element && recursiveAttrSearch(element, 'data-test-id') || '';
  elId && sendDtrumAction(elId);
};