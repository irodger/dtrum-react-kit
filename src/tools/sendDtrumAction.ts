export const sendDtrumAction = (actionName: string, callback?: () => void) => {
  const { dtrum = undefined } = window;

  if (!dtrum) return callback?.();

  const action = dtrum.enterAction(actionName);

  callback?.();
  dtrum.leaveAction(action);

  return;
};
