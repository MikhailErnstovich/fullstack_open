const Filter = (props) => {
  const { nameFilter, setNameFilter } = props;
  return (
    <div>
      filter by name: <input value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
    </div>
  )
}

export default Filter