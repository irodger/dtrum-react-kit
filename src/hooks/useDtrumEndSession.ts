import { useEffect } from 'react';
import { dtrumEndSession } from '../tools/dtrumEndSession';

/** Hooks will send endSession event when user closed current window */
export const useDtrumEndSession = (): void => {
  const { dtrum = undefined } = window;

  useEffect(() => {
    if (!dtrum) return;

    window.addEventListener('beforeunload', dtrumEndSession);

    return () => window.removeEventListener('beforeunload', dtrumEndSession);
  }, [dtrum]);
};
