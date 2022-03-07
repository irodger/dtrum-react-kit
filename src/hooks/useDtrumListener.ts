import { useEffect } from 'react';
import { dtrumEnterActionListener } from '../tools/dtrumEnterActionListener';

/**
 * Dtrum action listener hook with the Listener
 * */
export const useDtrumListener = () => {
  const { dtrum = undefined } = window;

  useEffect(() => {
    if (!dtrum) return;

    dtrum.addEnterActionListener(dtrumEnterActionListener);

    return () => dtrum.removeEnterActionListener(dtrumEnterActionListener);
  }, [dtrum]);
};
