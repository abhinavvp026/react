function Logging() {
  //const [sname, setName] = React.useState("abhinav");
  let [sname, setName] = React.useState(["abhinav", "arun", "AMAL"]);

  //   let changeName = () => {
  //     setName((existingarray) => {
  //       return ["blllla", ...sname];
  //     });
  //   };

  //for beginning above
  let [randomArray, setRandomArray] = React.useState([
    "abhaaa",
    "bhlaabla",
    "ceebra",
    "manavalan",
  ]);
  let changeName = () => {
    setName((sname) => {
      let randValue = randomArray.pop();
      return [...sname, randValue];
    });
  };

  //for adding to end
  //   let changeName = () => {
  //     setName((sname) => {
  //       return [...sname.slice(0, 1), "blaaaa", ...sname.slic(1)];
  //     });
  //   };
  let removeElement = () => {
    const temp = [...sname];
    let tempValue = temp.pop();
    setRandomArray(() => {
      return [tempValue, ...randomArray];
    });
    console.log(temp);
    setName([...temp]);
  };

  return (
    <div>
      {sname.map((value, index, sname) => {
        return (
          <h1 key={index}>
            {index}
            {value}
          </h1>
        );
      })}
      <button onClick={changeName}>change value</button>
      <button onClick={removeElement}>Remove Element</button>
    </div>
  );
}

ReactDOM.render(<Logging></Logging>, document.getElementById("root"));
