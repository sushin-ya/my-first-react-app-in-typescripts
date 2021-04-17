import React from 'react';
import CounterUseReducer from './CounterUseReducer';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterUseReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  // description: 'This is App component',
};

export default App;
