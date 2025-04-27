import React, { createContext, useContext, useState } from 'react';

//Create a context
const ToggleContext = createContext();

export const Toggle = ({ children }) => {
    const [on, setOn] = useState(false);
    
    const toggle = () => {
        setOn(!on);
    }

    return(
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    );
};

// Compound Subcomponents

Toggle.On = function ToggleOn  ({ children })  {
    const { on } = useContext(ToggleContext);
    return on ? children : null;
};

Toggle.Off = function ToggleOff ({ children })  {
    const { on } = useContext(ToggleContext);
    return on ? null : children;
}

Toggle.Button = function ToggleButton ({ ...props }) {
    const { on, toggle } = useContext(ToggleContext);
    return (
        <button onClick={toggle} {...props}>
            {on ? 'ON' : 'OFF'}
        </button>
    );
};