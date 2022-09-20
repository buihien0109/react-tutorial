const logger = (reducer) => {
    return (prevState, action) => {
        console.group(action.type);

        console.log("Prev State : ", prevState);
        console.log("Action : ", action);

        const nextState = reducer(prevState, action);

        console.log("Next State : ", nextState);

        console.groupEnd();

        return nextState;
    };
};

export default logger;
