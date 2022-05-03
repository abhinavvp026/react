class Parent extends React.Component {
  state = {
    txt: "hello",
  };
  render() {
    return (
      <div>
        <h1>parent class called</h1>
        <h1>{this.state.txt}</h1>
        <Child action={this.getData.bind(this)}></Child>
      </div>
    );
  }
  getData(childData) {
    this.setState({
      txt: childData,
    });
  }
}

function Child(props) {
  const msg = "child";
  return (
    <div>
      <h1>child method</h1>
      <button onClick={() => props.action(msg)}>click to change</button>
    </div>
  );
}
ReactDOM.render(<Parent></Parent>, document.getElementById("root"));
