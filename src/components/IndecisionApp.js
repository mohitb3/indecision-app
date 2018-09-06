import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		subTitle: 'Put your life in the hands of a computer',
		options: [],
		selectedOption: undefined
	};

	handleDeleteOptions = () => {
		this.setState(() => ({
			options: []
		}));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove)
		}));
	};

	handleDeleteSelectedOption = () => {
		this.setState(() => ({
			selectedOption: undefined
		}));
	}

	handlePick = () => {
		const randIndex = Math.floor(Math.random() * this.state.options.length);
		this.setState((prevState) => ({
			selectedOption: prevState.options[randIndex]
		}));
	};

	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add item';
		}
		else if (this.state.options.indexOf(option) > -1) {
			return `${option} already exists!`;
		}
		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	};

	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'));
			
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			// Do nothing
		}
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const options = JSON.stringify(this.state.options);
			localStorage.setItem('options', options);
		}
	};

	componentWillUnmount() {
		console.log('componentWillUnmount()');
	};

	render() {
		return (
			<div>
				<Header subTitle={this.state.subTitle} />
				<div className="container">
					<Action 
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick} />
					<div className="widget">
						<Options 
							options={this.state.options}
							handleDeleteOption={this.handleDeleteOption}
							handleDeleteOptions={this.handleDeleteOptions} />
						<AddOption 
							handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<OptionModal 
					selectedOption={this.state.selectedOption}
					handleDeleteSelectedOption={this.handleDeleteSelectedOption} />
			</div>
		);
	}
}

// IndecisionApp.defaultProps = {
// 	options: ['Eat']
// }