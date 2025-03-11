const Filter = (props) => {
  const { filterValue, setFilterValue } = props;
  const style = {
    display: 'inline-flex',
    gap: '1em'
  }
  return (
    <>
      <label style={style}>
        <span>Find countries</span>
        <input value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
      </label>
    </>
  )
}

export default Filter
