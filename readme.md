# Dynatrace react hooks and tools
The pack of useful dtrum js api events utilities;

### useDtrumEndSession
Send endSession event when user trying close browser tab, event fired by "beforeunload" event.

❗️ Beware! It may not work in the different cases and browsers. 

```typescript
import { useDtrumEndSession } from 'dtrum-react-kit/hooks';

const App = () => {
  useDtrumEndSession();
  
  return (<div />);
};
```

Mozilla recommend to use visibilitychange event, but it will also fire when user returns to the tab and left again. Anyway you can put the event name into the hook as property. it will be fired when the tab was hidden
```typescript
  ...
  useDtrumEndSession("visibilitychange");
  ...
```
### useDtrumListener
Listener send to global variable current data-test-id for using it in Dynatrace's dashboard

```typescript
import { useDtrumListener } from 'dtrum-react-kit/hooks';

const App = () => {
  useDtrumListener(); // Save the current data-test-id to the global variable _dtElementId, used in the Dynatrace dashboard

  return (<div />);
};
```
### useDtrumListener with different listeners
You can put another listener with the different logic

```typescript
import { useDtrumListener } from 'dtrum-react-kit/hooks';
import { enterActionListener } from 'dtrum-react-kit/listeners';

const App = () => {
  useDtrumListener(enterActionListener); // Create custom action with the current data-test-id as name

  return (<div />);
};
```

### useDtrumOnMount
Send custom action when the component is mounted

```typescript
import { useDtrumOnMount } from 'dtrum-react-kit/hooks';

const pageName = 'Home';

const App = () => {
  useDtrumOnMount(pageName); // Send on first mount component 

  return (<div />);
};
```

#### dtrumEndSession
Send dtrum disable and endSession events

```typescript
import { dtrumEndSession } from 'dtrum-react-kit/tools';

const App = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    dtrumEndSession(); // Fire action about session ending
  };
  
  return (<div />);
};
```


#### sendDtrumAction
Send dtrum custom action with the name

```typescript
import { sendDtrumAction } from 'dtrum-react-kit/tools';

const App = () => {
  const [user, setUser] = useState(null);

  const onClickHandler = () => sendDtrumAction('Click on button');
  
  return (<button onClick={onClickHandler} />);
};
```

