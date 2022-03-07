export const dtrumEndSession = () => {
  const { dtrum = undefined } = window;

  if (!dtrum) return;

  dtrum.disable();
  dtrum.endSession();
};
