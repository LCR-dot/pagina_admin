import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CityTable from "./components/CityTable";
import CityForm from "./components/CityForm";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

function App() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [editingCity, setEditingCity] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchCities = async () => {
    const res = await axios.get(`${API_URL}/cities/`);
    setCities(res.data);
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
    await axios.delete(`${API_URL}/cities/${id}/`); 
    fetchCities(); 
  };

  const handleSave = async (city) => {
    if (city.id) {
      await axios.put(`${API_URL}/cities/${city.id}/`, city);
    } else {
      await axios.post(`${API_URL}/cities/`, city);
    }
    setShowForm(false);
    fetchCities();
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
