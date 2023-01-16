import { useState } from 'react'
import { useDebounce } from '../hooks';

export const Debounce = () => {
    const [count, setCount] = useState(0);

    const showCountWithAlert = () => alert(count);

    useDebounce(showCountWithAlert, 1000, count);

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(p => p + 1)}>Increment</button>
        </>
    )
}



















// Search
// export const Debounce = () => {
//     const [value, setValue] = useState("");
//     const [query, setQuery] = useState("");
//     const cb = () => setQuery(value)

//     useDebounce(cb, 1000, value);

//     return (
//         <>
//             <kbd>Value: {value ? `https://ibrokhim.uz?search=${value}` : null}</kbd>
//             <br />
//             <kbd>Query: {query ? `https://ibrokhim.uz?search=${query}` : null}</kbd>
//             <br />
//             <hr />
//             <br />
//             <label>
//                 Search:
//                 <input type="text" value={value} onChange={e => setValue(e.target.value)} />
//             </label>
//         </>
//     )
// }