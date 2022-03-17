import { useEffect } from 'react';
import { actionToGlobalListener } from '../listeners';

/**
 * Dtrum action listener hook with the Listener
 * */
export const useDtrumListener = (listener = actionToGlobalListener) => {
  const { dtrum = undefined } = window;

  useEffect(() => {
    if (!dtrum) return;

    dtrum.addEnterActionListener(listener);

    return () => dtrum.removeEnterActionListener(listener);
  }, [dtrum]);
};
