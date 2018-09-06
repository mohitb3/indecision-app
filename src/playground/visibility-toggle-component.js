class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
      details: 'Hey! These are some details you can now see!'
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState(prevState => ({
      visibility: !prevState.visibility
    }));
  }

  render() {
    return(
      <div className="container">
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{ this.state.visibility ? 'Hide Details' : 'Show Details' }</button>
        { this.state.visibility && <p>{this.state.details}</p> }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));