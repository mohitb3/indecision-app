class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subTitle: 'Have your life decided for you!',
			options: []
		}

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
	}
	
	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'));
			
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			// Do nothing
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const options = JSON.stringify(this.state.options);
			localStorage.setItem('options', options);
		}
	}

	componentWillUnmount() {
		console.log('componentWillUnmount()');
	}

	handleDeleteOptions() {
		this.setState(() => ({
			options: []
		}));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove)
		}));
	}

	handleDeleteOptionsArrow = () => {
		this.setState(() => ({
			options: []
		}));
	}

	handlePick() {
		const randIndex = Math.floor(Math.random() * this.state.options.length);
		alert(this.state.options[randIndex]);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add item';
		}
		else if (this.state.options.indexOf(option) > -1) {
			return `${option} already exists!`;
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	}

	render() {
		return (
			<div>
				<Header subTitle={this.state.subTitle} />
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}/>
				<Options 
					options={this.state.options}
					handleDeleteOption={this.handleDeleteOption}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOptionsArrow={this.handleDeleteOptionsArrow}/>
				<AddOption 
					handleAddOption={this.handleAddOption}/>
			</div>
		);
	}
}

// IndecisionApp.defaultProps = {
// 	options: ['Eat']
// }

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subTitle && <h2>{props.subTitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.handlePick} 
				disabled={!props.hasOptions}>
				What should I do?
			</button>
		</div>
	);
}

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove Options</button>
			<button onClick={props.handleDeleteOptionsArrow}>Remove Options Arrow Function</button>
			{props.options.length === 0 && <p>Add some options!</p>}
			{props.options.map(option => (
				<Option 
					key={option} 
					option={option} 
					handleDeleteOption={props.handleDeleteOption} />
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.option}
			<button onClick={(e) => props.handleDeleteOption(props.option)}>Remove</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: undefined
		};
	}

	handleAddOption = (e) => {
		e.preventDefault();
		
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState(() => ({ error }));

		// clear the input if no error
		if (!error) {
			e.target.elements.option.value = '';
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));