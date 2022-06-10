import React from 'react';
import { createRoot } from 'react-dom/client';
// (async () => {
    // const { default: React } = await import('libs/react');
    // const { default: createRoot } = await import('libs/react-dom/client');
    // const { default: { Button } } = await import('libs/antd');
  
    function App() {
      return (
        <div>
          <h1>Hi</h1>
          {/* <Button>Foo</Button> */}
        </div>
      );
    }
    const container = document.getElementById('root');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App />);
  // })();
  