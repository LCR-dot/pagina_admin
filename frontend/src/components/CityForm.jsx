import { useState, useEffect } from "react";

function CityForm({ city, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    countrycode: "",
    district: "",
    population: ""
  });

  useEffect(() => {
    if (city) {
      setFormData(city);
    } else {
      setFormData({
        name: "",
        countrycode: "",
        district: "",
        population: ""
      });
    }
  }, [city]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-primary text-white text-center">
        {city ? "Editar Ciudad" : "Agregar Ciudad"}
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Código País</label>
              <input
                type="text"
                name="countrycode"
                value={formData.countrycode}
                onChange={handleChange}
                className="form-control"
                required
                maxLength="3"
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Distrito</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Población</label>
              <input
                type="number"
                name="population"
                value={formData.population}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-secondary me-2"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CityForm;
