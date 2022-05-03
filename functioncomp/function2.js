function Header(blaa) {
  return (
    <div>
      <h1>hello there its me!{blaa.fname}</h1>
      <h2>abhinav {blaa.lname}</h2>
      <br></br>
    </div>
  );
}
function Content({ sub1, sub2, sub3 }) {
  return (
    <div>
      <h1>subject name={sub1}</h1>
      <h1>subject name={sub2}</h1>
      <h1>subject name={sub3}</h1>
      <br></br>
    </div>
  );
}

function Footer({ person }) {
  return (
    <div>
      <h1>{person.fname}</h1>
      <h1>{person.sname}</h1>
      <br></br>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Header fname="abhi" lname="vp"></Header>
    <Content sub1="maths" sub2="physics" sub3="malayalam"></Content>
    <Footer person={{ fname: "hello", sname: "it is footer" }}></Footer>
  </div>,
  document.getElementById("root")
);
