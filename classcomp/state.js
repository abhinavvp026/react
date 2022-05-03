class Header extends React.Component {
  state = {
    stateName: "it is a state name",
  };
  changeName() {
    if (this.state.stateName == "it is a state name") {
      this.setState({
        stateName: "the state name has been changed using the set state method",
      });
    } else {
      this.setState({
        stateName: "it is a state name",
      });
    }
  }
  render() {
    return (
      <div>
        <h1>this is an headerr</h1>
        <h1>hello there its a props value! {this.props.nam}</h1>
        <h2>{this.state.stateName}</h2>
        <button
          onClick={() => {
            this.changeName();
          }}
        >
          click to change
        </button>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the content</h1>
      </div>
    );
  }
}
class Footer extends React.Component {
  render() {
    return <h2>This is footer page is made by {this.props.fname}</h2>;
  }
}
ReactDOM.render(
  <div>
    <Header nam='"abhi"'></Header>
    <Content></Content>
    <Footer fname="Abhinav v.p "></Footer>
  </div>,
  document.getElementById("root")
);
