import Rotuescom from './routes';
import React from 'react';
import { MyContext } from './context';

function App() {
  return (
    <React.Fragment>
        <MyContext>
          <Rotuescom/>
        </MyContext>
    </React.Fragment>
  );
}

export default React.memo(App);
