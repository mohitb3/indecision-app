// Lecture 16: Events and attributes
let counter = 0;
const increment = () => {
    counter++;
    renderCounterApp();
    console.log('increment(): count = ', counter);
};
const decrement = () => {
    counter--;
    renderCounterApp();
    console.log('decrement() count = ', counter);
};
const reset = () => {
    counter = 0;
    renderCounterApp();
    console.log('reset() count = ', counter);
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template3 = (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template3, appRoot);
}

renderCounterApp();