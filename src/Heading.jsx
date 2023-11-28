function Heading(props) {
  return (
    <div>
      <h1 style={{ color: props.color, fontSize: props.size }}>
        Hello, {props.fristName}
      </h1>
      <h2 style={{ color: "red", fontSize: 90 }}>{props.Name}</h2>
    </div>
  );
}

export default Heading;
