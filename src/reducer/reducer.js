export default function reducer(state, action) {
    switch (action.type){
        case "ADD":
            let currentValue = state;
            return currentValue += action.payload;
           
        case "SUBTRACT":
            let value = state;
            return value -= action.payload;
        default:
            return state;
    }
}