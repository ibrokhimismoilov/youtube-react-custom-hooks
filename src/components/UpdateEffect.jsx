import { useState } from 'react';
import { useUpdateEffect } from '../hooks';

export const UpdateEffect = () => {
    const [count, setCount] = useState(10);

    useUpdateEffect(() => alert(count), [count])

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(p => p + 1)}>Increment</button>
        </div>
    )
}