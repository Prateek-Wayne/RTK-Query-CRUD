import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increament, decreament, increamentByValue } from '../reducers/reducer'
import { RootState } from '../store';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.counterReducer.count);
    // const [myValue, setMyValue] = useState<number>(value);
    const increamentByOne = () => {
        dispatch(increament());
    }
    const decreamentByOne = () => {
        dispatch(decreament());

    }
    const increamentByCustom = () => {
        dispatch(increamentByValue(25));
    }
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
                {value} <button onClick={increamentByOne}>Increament</button>
            </p>
            <p>
                {value} <button onClick={decreamentByOne}>Decreament</button>
            </p>
            <p>
                {value} <button onClick={increamentByCustom}>Custom</button>
            </p>
        </div>
    )
}

export default Counter
