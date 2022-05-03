class Index extends React.Component {
  render() {
    if (this.props.email == "abhinavvp026@gmail.com") {
      return (
        <div>
          <Login email={this.props.email}></Login>
          <Home></Home>
          
        </div>
      );
    } else {
      return (
        <div>
          <Login email={this.props.email}></Login>
        </div>
      );
    }
  }
}

function Login(props) {
  return (
    <div>
      <h1>welcome to Login Page</h1>
      <h1>username:{props.email}</h1>
      <form action="admin.html">
        <button type="submit">LOG OUT</button>
      </form>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>welcome Home Admin</h1>
    </div>
  );
}

function getData() {
  let email = document.getElementById("InputEmail1").value;
  let password = document.getElementById("InputPassword1").value;
  console.log(email);
  console.log(password);
  ReactDOM.render(
    <Index email={email} password={password}></Index>,
    document.getElementById("root")
  );
}
