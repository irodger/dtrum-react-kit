# Dynatrace react hooks and tools

### useDtrumEndSession
```typescript
import { useDtrumEndSession } from 'dtrum-react-kit/hooks';

const App = () => {
  useDtrumEndSession(); // Sends close session action when App was closed by closed tab or window
  
  return (<div />);
};
```

### useDtrumListener
```typescript
import { useDtrumListener } from 'dtrum-react-kit/hooks';

const App = () => {
  useDtrumListener(); // Save the current data-test-id to the global variable _dtElementId, used in the Dynatrace dashboard

  return (<div />);
};
```

### useDtrumOnMount
```typescript
import { useDtrumOnMount } from 'dtrum-react-kit/hooks';

const pageName = 'Home';

const App = () => {
  useDtrumOnMount(pageName); // Send on first mount component 

  return (<div />);
};
```

#### dtrumEndSession
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
```typescript
import { sendDtrumAction } from 'dtrum-react-kit/tools';

const App = () => {
  const [user, setUser] = useState(null);

  const onClickHandler = () => {
    sendDtrumAction('Click on button');
  };
  
  return (<button onClick={onClickHandler} />);
};
```

