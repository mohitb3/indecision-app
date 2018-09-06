class Counter extends React.Component {
  constructor(props) {
    super(props);

    if (props.counter) {
      this.state = {
        counter: props.counter
      };
    }
    else {
      this.state = {
        counter: 0
      };
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.incrementNew = this.incrementNew.bind(this);
    this.decrementNew = this.decrementNew.bind(this);
    this.resetNew = this.resetNew.bind(this);
    this.incrementPlusPlus = this.incrementPlusPlus.bind(this);
    this.decrementMinuMinus = this.decrementMinuMinus.bind(this);
  }

  componentDidMount() {
		try {
			const counter = JSON.parse(localStorage.getItem('counter'));
      if (!isNaN(counter)) {
				this.setState(() => ({ counter }));
			}
		} catch (e) {
			// Do nothing
		}
	}

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(): prevState.counter = ', prevState.counter, ' this.state.counter = ', this.state.counter);
    if (prevState.counter !== this.state.counter) {
      localStorage.setItem('counter', this.state.counter);
    }
  }

  increment() {
    this.setState({
      counter: ++this.state.counter
    });
    // console.log('increment() this.state = ', this.state);
  }

  decrement() {
    this.setState({
      counter:  this.state.counter - 1
    });
    // console.log('decrement() this.state = ', this.state);
  }

  reset() {
    this.setState({
      counter: 0
    });
    // console.log('reset() this.state = ', this.state);
  }

  incrementNew() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  decrementNew() {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  }

  resetNew() {
    this.setState(() => ({ 
      counter: 0 
    }));
  }

  incrementPlusPlus() {
    this.setState(prevState => {
      return {
        counter: ++prevState.counter
      };
    });
  }

  decrementMinuMinus() {
    this.setState(prevState => ({
      counter: --prevState.counter
    }));
  }

  render() {
    // console.log('render() this.state = ', this.state);
    return(
      <div>
        <h1>Count: {this.state.counter}</h1>
        <div class="text-center">
          Old setState():&nbsp;
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <div class="text-center">
          New setState():&nbsp;
          <button onClick={this.incrementNew}>+1</button>
          <button onClick={this.decrementNew}>-1</button>
          <button onClick={this.resetNew}>Reset</button>
        </div>
        <div class="text-center">
          ++/--:&nbsp;
          <button onClick={this.incrementPlusPlus}>++1</button>
          <button onClick={this.decrementMinuMinus}>--1</button>
        </div>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   counter: 3
// };

ReactDOM.render(<Counter />,  document.getElementById('app'));