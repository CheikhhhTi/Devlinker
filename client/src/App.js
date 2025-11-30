import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [developers, setDevelopers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    linkedin: '',
    bio: ''
  });

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const fetchDevelopers = async () => {
    try {
      const response = await axios.get('/api/developers');
      setDevelopers(response.data);
    } catch (error) {
      console.error('Error fetching developers:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/developers', formData);
      setFormData({ name: '', github: '', linkedin: '', bio: '' });
      fetchDevelopers();
    } catch (error) {
      console.error('Error adding developer:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/developers/${id}`);
      fetchDevelopers();
    } catch (error) {
      console.error('Error deleting developer:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DevLinker</h1>
        <p>Connect with developers</p>
      </header>

      <div className="container">
        <div className="form-section">
          <h2>Add Your Profile</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="github"
              placeholder="GitHub Username"
              value={formData.github}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn Profile URL"
              value={formData.linkedin}
              onChange={handleChange}
              required
            />
            <textarea
              name="bio"
              placeholder="Short bio (optional)"
              value={formData.bio}
              onChange={handleChange}
              rows="3"
            />
            <button type="submit">Add Profile</button>
          </form>
        </div>

        <div className="developers-section">
          <h2>Developers ({developers.length})</h2>
          <div className="developers-grid">
            {developers.map((dev) => (
              <div key={dev._id} className="developer-card">
                <h3>{dev.name}</h3>
                {dev.bio && <p className="bio">{dev.bio}</p>}
                <div className="links">
                  <a href={'https://github.com/' + dev.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(dev._id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;