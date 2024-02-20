import './TodoFilter.css';
function TodoFilter({ searchValue, setSearchValue }) {
  return (
    <input
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      className="filter-input"
      placeholder="Buscar TODOs"
    />
  );
}

export { TodoFilter };
