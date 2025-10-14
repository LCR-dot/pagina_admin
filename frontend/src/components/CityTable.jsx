function CityTable({ cities, onEdit, onDelete }) {
  return (
    <div className="table-responsive shadow rounded">
      <table className="table table-bordered table-hover w-100">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Country Code</th>
            <th>Distrito</th>
            <th>Población</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.name}</td>
              <td>{city.countrycode}</td>
              <td>{city.district}</td>
              <td>{city.population.toLocaleString()}</td>
              <td className="text-center">
                <button
                  onClick={() => onEdit(city)}
                  className="btn btn-warning btn-sm me-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(city.id)}
                  className="btn btn-sm btn-outline-danger"
                  title="Eliminar ciudad"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
          {cities.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No hay registros disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CityTable;
