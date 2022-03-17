import { useEffect } from 'react';
import { sendDtrumAction } from "../tools";

let memoizedMountNameValue = '';
/** The hook fired when component in mounted
 *
 * @param { String } name - Name of the mounted component
 * */
export const useDtrumOnMount = (name: string): void => {
  useEffect(() => {
    if (memoizedMountNameValue === name) return;

    sendDtrumAction(name);
    memoizedMountNameValue = name;
  }, [name]);
};
