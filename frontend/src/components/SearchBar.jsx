function SearchBar({ search, setSearch, onAdd }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
      <div className="input-group w-100 w-md-50 mb-2 mb-md-0">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="form-control"
        />
      </div>

      <button
        onClick={onAdd}
        className="btn btn-success ms-md-2 mt-2 mt-md-0"
      >
        <i className="bi bi-plus-circle me-1"></i> Añadir
      </button>
    </div>
  );
}

export default SearchBar;
