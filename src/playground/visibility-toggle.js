const details = "Hey! These are some details you can now see!";
let showDetails = false;

const onShowDetails = () => {
    showDetails = !showDetails;
    render();
}

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div className="container">
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails}>{ showDetails ? 'Hide Details' : 'Show Details' }</button>
            { showDetails && <p>{details}</p> }
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();