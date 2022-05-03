const e1 = React.createElement("h1", null, "hello there its me");
ReactDOM.render(e1, document.getElementById("root"));
const e2 = React.createElement("h1", null, "hello there its me second");
ReactDOM.render(e2, document.getElementById("root1"));
const list1 = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "item1"),
  React.createElement("li", null, "item2")
);
ReactDOM.render(list1, document.getElementById("root"));
