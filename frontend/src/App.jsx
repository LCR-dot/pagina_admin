// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CityTable from "./components/CityTable";
import CityForm from "./components/CityForm";
import api from "./api"; // importamos nuestra instancia de Axios

function App() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [editingCity, setEditingCity] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchCities = async () => {
    try {
      const res = await api.get("/cities/");
      setCities(res.data);
    } catch (error) {
      console.error("Error al obtener ciudades:", error);
    }
  };

  useEffect(() => { fetchCities(); }, []);

  const handleAdd = () => { 
    setEditingCity(null); 
    setShowForm(true); 
  };

  const handleEdit = (city) => { 
    setEditingCity(city); 
    setShowForm(true); 
  };

  const handleDelete = async (id) => { 
    try {
      await api.delete(`/cities/${id}/`);
      fetchCities();
    } catch (error) {
      console.error("Error al eliminar ciudad:", error);
    }
  };

  const handleSave = async (city) => {
    try {
      if (city.id) {
        await api.put(`/cities/${city.id}/`, city);
      } else {
        await api.post("/cities/", city);
      }
      setShowForm(false);
      fetchCities();
    } catch (error) {
      console.error("Error al guardar ciudad:", error);
    }
  };

  const handleCancel = () => setShowForm(false);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} onAdd={handleAdd} />
      {showForm && (
        <CityForm 
          city={editingCity} 
          onSave={handleSave} 
          onCancel={handleCancel} 
        />
      )}
      <CityTable 
        cities={filteredCities} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </div>
  );
}

export default App;
