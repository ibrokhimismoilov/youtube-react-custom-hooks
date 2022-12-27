import { useInterval } from "../hooks"

export const Interval = () => {
    const {
        state,
        state: { value, isRunning },
        toggleHandler,
        resetHandler,
        clearHandler,
    } = useInterval();

    return (
        <div>
            <h3>Qiymat: {value}</h3>

            <pre>{JSON.stringify(state, null, 4)}</pre>

            <button disabled={isRunning} onClick={() => toggleHandler(true)}>Start</button>
            <button disabled={!isRunning} onClick={() => toggleHandler(false)}>Stop</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={clearHandler}>Clear</button>
        </div>
    )
}
