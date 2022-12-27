import { useState } from 'react';
import { useTimeout } from '../hooks';

export const Timeout = () => {
    const [count, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(5), 3000)

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
