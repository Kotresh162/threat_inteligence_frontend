import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ThreatList = () => {
  const [threats, setThreats] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  

  const fetchThreats = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/threats', {
        params: {
          page,
          limit,
          ...(search && { search }),
          ...(category && { category }), // <- This is the FILTER method
        },
      });

      setThreats(response.data); // Use .results if response is paginated
    } catch (error) {
      console.error('Failed to fetch threats:', error);
    }
  };

  useEffect(() => {
    fetchThreats();
  }, [search, category, page]);

  // ✅ Handler for category filter
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1); // Reset to first page on filter
  };

  // ✅ Handler for search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page on search
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Threat Intelligence Dashboard</h2>

      {/* FILTER UI */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search description..."
          value={search}
          onChange={handleSearchChange}
          style={{ padding: '8px', width: '250px' }}
        />

        <select value={category} onChange={handleCategoryChange} style={{ padding: '8px' }}>
          <option value="">All Categories</option>
          <option value="DDoS">DDoS</option>
          <option value="Malware">Malware</option>
          <option value="Phishing">Phishing</option>
        </select>
      </div>

      {/* DATA TABLE */}
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f0f0f0' }}>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Actor</th>
            <th>Vector</th>
            <th>Location</th>
            <th>Severity</th>
            <th>Description</th>
            <th>Defense</th>
          </tr>
        </thead>
        <tbody>
          {threats.length > 0 ? (
            threats.map((threat) => (
              <tr key={threat.id}>
                <td>{threat.id}</td>
                <td>{threat.threat_category}</td>
                <td>{threat.threat_actor}</td>
                <td>{threat.attack_vector}</td>
                <td>{threat.geo_location}</td>
                <td>{threat.severity_score}</td>
                <td>{threat.cleaned_description}</td>
                <td>{threat.suggested_defense}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>No threats found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatList;
