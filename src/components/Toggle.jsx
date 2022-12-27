import React from 'react';
import { useToggle } from '../hooks';

export const Toggle = ({ toggleProp }) => {
    const [toggle, setToggle] = useToggle(toggleProp)

    return (
        <div>
            {`${toggle}`}

            <hr />

            <button onClick={setToggle}>Toggle</button>
            <button onClick={() => setToggle(12)}>True</button>
            <button onClick={() => setToggle(false)}>False</button>
        </div>
    )
}