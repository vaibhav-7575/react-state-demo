import {useState} from 'react';

export function User(){
    const [formData, setFormData] = useState({
        name: '',
        address: '',
      });
    
      const [submittedData, setSubmittedData] = useState([]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData((prevData) => [...prevData, formData]);
        setFormData({ name: '', address: '' });
      };
    
      return (
        <div className="App">
          <h1>User Form</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
    
          {submittedData.length > 0 && (
            <div>
              <h2>Submitted Data:</h2>
              <ul>
                {submittedData.map((data, index) => (
                  <li key={index}>
                    <p>Name: {data.name}</p>
                    <p>Address: {data.address}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
};
