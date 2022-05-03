let mobiles = ["iphone", "samsung", "oneplus", "redmi", "oppo"];
const e1 = React.createElement(
  "ul",
  { style: { color: "blue" } },
  mobiles.map((mobile, index) => {
    return React.createElement("li", { key: index }, mobile);
  })
);
ReactDOM.render(e1, document.getElementById("root"));
