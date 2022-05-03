//Mounting phase

// class Parent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       txt: "mounting phase",
//     };
//     console.log("constructor executed");
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("get derived state from props executed");
//     console.log(state);
//   }
//   render() {
//     console.log("render method executed");
//     return <div>{this.state.txt}</div>;
//   }
//   componentDidMount() {
//     console.log("component did mount");
//   }
// }
//ReactDOM.render(<Parent />, document.getElementById("root"));

//update Phase

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "miller",
    };
    console.log("constructor executed");
  }
  ShouldComponentUpdate() {
    console.log("component should update()");
    return true;
  }
  updateState = () => {
    console.log("update phase");
    this.setState({
      name: "jhon",
    });
  };
  render() {
    console.log("render method");
    return (
      <div>
        Hello Mr.{this.state.name}
        <br></br>
        <button onClick={this.updateState}>Click</button>
      </div>
    );
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("Get snapshot before update " + preState.name);
    return preState.name;
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log("component did update " + preState.name);
  }
}
ReactDOM.render(<Parent />, document.getElementById("root"));
