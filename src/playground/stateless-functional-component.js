// User is a stateless functional component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

User.defaultProps = {
  name: 'Anon',
  age: '69'
}

ReactDOM.render(<User name="Mohit" />, document.getElementById('app'));