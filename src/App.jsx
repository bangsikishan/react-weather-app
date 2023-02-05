import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`;

  const searchLocation = () => {
    if (event.key === 'Enter') {
      axios.get(url)
        .then(response => {
          setData(response.data);
        });
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input type="text" value={location} onKeyPress={searchLocation} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main 
              ? <h1>{data.main.temp.toFixed()}&deg;F</h1> 
              : <h1>-</h1>
            }
            
          </div>
          <div className="description">
            {data.weather
              ? <p>{data.weather[0].main}</p>
              : <p>-</p>}
            
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main 
              ? <p className="bold">{data.main.feels_like}&deg;F</p>
              : <p>-</p>
            }
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main
              ? <p className='bold'>{data.main.humidity}%</p>
              : <p>-</p>
            }
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind 
              ? <p className='bold'>{data.wind.speed} MPH</p>
              : <p>-</p>
            }
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
