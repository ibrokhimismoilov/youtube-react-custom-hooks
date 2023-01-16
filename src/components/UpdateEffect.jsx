import { useState } from 'react';
import { useUpdateEffect } from '../hooks';

export const UpdateEffect = () => {
    const [count, setCount] = useState(10);

    const cb = () => alert(count)

    useUpdateEffect(cb, [count])

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(p => p + 1)}>Increment</button>
        </div>
    )
}