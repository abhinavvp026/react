let ages = [10, 20, 15, 23, 16, 30, 55];
const e1 = (
  <ul type="square">
    {ages.filter((age, index, ages) => {
      if (age > 18) {
        return <li>{age}</li>;
      }
    })}
  </ul>
);

ReactDOM.render(e1, document.getElementById("root"));
