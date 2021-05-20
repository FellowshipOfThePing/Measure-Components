import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, TutorialButton, Button } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <TutorialButton text="test" />
      <Button text="test" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));