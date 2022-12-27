import { useState } from 'react';
import { useTimeout } from '../hooks';

export const Timeout = () => {
    const [count, setCount] = useState(100);
    const { clearTimeoutHandler, resetTimeoutHandler } = useTimeout(() => setCount(0), 5000)

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(prev => prev + 1)}>Increment +1</button>
            <button onClick={resetTimeoutHandler}>Reset</button>
            <button onClick={clearTimeoutHandler}>Clear</button>
        </div>
    )
}
