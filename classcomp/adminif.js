class Index extends React.Component {
  state = {
    admin: true,
    username: "i am the normal user",
    adminName: "i am the admin",
  };
  render() {
    if (this.state.admin == true) {
      return (
        <div>
          <Login
            username={this.state.adminName}
            action={this.switchUser.bind(this)}
          ></Login>
          <Home></Home>
        </div>
      );
    } else {
      return (
        <div>
          <Login
            username={this.state.username}
            action={this.switchUser.bind(this)}
          ></Login>
        </div>
      );
    }
  }
  switchUser() {
    if (this.state.admin == true) {
      this.setState({
        admin: false,
      });
    } else {
      this.setState({
        admin: true,
      });
    }
  }
}

function Login(props) {
  return (
    <div>
      <h1>welcome to Login Page</h1>
      <h1>{props.username}</h1>
      <button
        onClick={() => {
          props.action();
        }}
      >
        switch User
      </button>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>welcome Home</h1>
    </div>
  );
}

ReactDOM.render(<Index></Index>, document.getElementById("root"));
