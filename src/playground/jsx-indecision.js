// JSX = Javascript XML

const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subTitle: 'This app will help you make decisions',
    options: [],
}

// add an element to the app.option array
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        render();
    }
};

// reset the app.options array to empty array
const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);  
    alert(app.options[randNum]);
}

const render = () => {
    const template = (
        <div className="container">
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <button onClick={onRemoveAll}>Reset Options</button>  
            <button onClick={onMakeDecision} disabled={app.options.length == 0}>What should I do?</button>  
            <p>{app.options && app.options.length > 0 ? `Options: ${app.options.length}` : 'No Options'}</p>
            <ul>
                {app.options.map((option) => <li>{option}</li>)}
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();