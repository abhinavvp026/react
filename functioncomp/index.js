function Header(blaa) {
  return (
    <div>
      <h1>hello there its me!{blaa.fname}</h1>
      <h2>abhinav {blaa.lname}</h2>
    </div>
  );
}

ReactDOM.render(
  <Header fname="abhi" lname="vp"></Header>,
  document.getElementById("root")
);
