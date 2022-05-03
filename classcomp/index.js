class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>this is an headerr</h1>
        <h1>hello there me! {this.props.nam}</h1>
        <h2></h2>
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
    return <h2>This page is made by {this.props.fname}</h2>;
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
