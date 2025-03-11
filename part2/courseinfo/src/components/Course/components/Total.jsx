const Total = (props) => {
  const { course: { parts } } = props;
  return (<p>Number of exercises {parts.reduce((acc, cur) => acc += cur.exercises ,0)}</p>)
}

export default Total;