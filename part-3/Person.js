const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>
        Name: {props.name.length > 8 ? props.name.substring(0, 6) : props.name}
      </p>
      <p>Age: {props.age}</p>
      {props.age > 18 ? <h3>Please Go Vote</h3> : <h3>you must be 18!</h3>}
      <ul>
        {[props.hobbies.map(hobby => <li>{hobby}</li>)]}
      </ul>
    </div>
  );
};
