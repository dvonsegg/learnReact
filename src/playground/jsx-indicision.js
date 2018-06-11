console.log('App.js is running!');
// use these on the command line: 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public 

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
};
// JSX - JavaScript XML

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomdNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomdNum];
    alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p> {app.options.length > 0 ? 'Here are your options' : 'No Options'} </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
           
            <ol>{
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();