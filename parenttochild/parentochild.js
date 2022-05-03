function App(props) {
  return (
    <div>
      <h1>camed inside app</h1>
      <Home AppName="Amazon Prime" userName={props.userLoggedIn}></Home>
    </div>
  );
}
function Home(props) {
  return (
    <div>
      <h6>camed to home from app</h6>
      <h1>app name {props.AppName}</h1>
      <h2>User Name {props.userName}</h2>
    </div>
  );
}

ReactDOM.render(
  <App userLoggedIn="abhinav v.p"></App>,
  document.getElementById("root")
);
