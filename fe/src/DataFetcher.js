// src/DataFetcher.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get("http://localhost:5000/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  

  return (
    <div>
      <h1>Data from MySQL</h1>
      <ul>
        {data.map((item) => (
          <li key={item.Id}>{item.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
