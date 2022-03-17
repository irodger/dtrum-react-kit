import { useEffect } from 'react';
import { dtrumEndSession } from '../tools';

/** Hooks will send endSession event when user closed current window */
export const useDtrumEndSession = (eventType = 'beforeunload'): void => {
  const { dtrum = undefined } = window;

  useEffect(() => {
    if (!dtrum || eventType === 'visibilitychange' && (document.visibilityState !== 'hidden' || !document.hidden)) return;

    window.addEventListener(eventType, dtrumEndSession)

    return () => window.removeEventListener(eventType, dtrumEndSession);
  }, [dtrum]);
};
