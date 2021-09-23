import React from 'react';
import Keypad from './components/Keypad/Keypad';
import Display from './components/Display/Display';

const App = () => {
    return(
        <div>
            <Display result="8657" expression="12 X 100 + 298 / 19 - 234"/>
            <Keypad />
        </div>
    )
}

export default App;