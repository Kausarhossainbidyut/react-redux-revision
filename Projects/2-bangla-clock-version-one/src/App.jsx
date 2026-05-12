import React from 'react';
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';

const App = () => {
  return (
    <center>
      <ClockHeading/>
      <ClockSlogan/>
      <CurrentTime/>
    </center>
  );
};

export default App;