import React, { useReducer} from "react";
import reducer from "../reducer/reducer";

const initialState = 0;

const Home = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    function increment(value) {
        dispatch({type:"ADD", payload: value});
    }
    function decrement(value){
        dispatch({type:"SUBTRACT", payload: value});
    }

    return(
        <div>
            <h1>This is the home page</h1>
            <button onClick={() => increment(5)}>increment</button>
            <button onClick={() => decrement(5)}>decrement</button>
            <h1>{state}</h1>
        </div>
    )
}

export default Home;