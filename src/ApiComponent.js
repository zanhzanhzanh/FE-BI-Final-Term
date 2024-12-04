import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiComponent({data}) {
  // data = {
  //   "Address": "Unknown",
  //   "Area": 0,
  //   "Frontage": 0,
  //   "Access Road": 0,
  //   "House direction": "Unknown",
  //   "Balcony direction": "Unknown",
  //   "Floors": 0,
  //   "Bedrooms": 0,
  //   "Bathrooms": 0,
  //   "Legal status": "Unknown",
  //   "Furniture state": "Unknown",
  //   "Project": "Unknown",
  //   "City": "Unknown",
  //   "Ward": "Unknown",
  //   "District": "Unknown",
  //   "Location": "Unknown"
  // }

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.post('http://localhost:10001/api/v1/ai/home-prediction', data)
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      });
  }, [data]);
  
  if(message){
    return ( 
      <div className="card">
          <h1>Price Prediction</h1>
          <h2>{(message * 1000000000).toLocaleString("fi-FI") + ' vnđ' || 'Loading...'}</h2>
      </div>
    );
  } else return;
}

export default ApiComponent;