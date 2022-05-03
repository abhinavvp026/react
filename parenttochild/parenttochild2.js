function App(props) {
  return (
    <div>
      <h1>
        this is the parent function
        <Home></Home>
      </h1>
    </div>
  );
}
function Home(props) {
  return (
    <div>
      <h1>this is the child function</h1>
    </div>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
