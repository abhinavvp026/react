let fruits = ["apple", "orange", "pinapple", "mango", "grapes"];
const e1 = (
  <ul>
    {fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>;
    })}
  </ul>
);

ReactDOM.render(e1, document.getElementById("root"));
