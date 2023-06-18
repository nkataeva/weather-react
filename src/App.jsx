import './App.css';
import React from 'react';
import Search from "./components/Search"
import WeatherNow from './components/WeatherNow';
import Calendar from './components/Calendar';
import WeatherDay from './components/WeatherDay';

function App() {
  const [city, setCity] = React.useState('')
  const [dataNow, setDataNow] = React.useState({});
  const [Wnow, setWnow] = React.useState(false);
  React.useEffect(() => {
    if (dataNow !== undefined && dataNow !== null)
      setWnow(Object.keys(dataNow).length === 0);
    else setWnow(true);
  }, [dataNow]);

  return (
    <div className="App">
      <Search dataSet={setDataNow} city={city} setCity={setCity}>
        {!Wnow && <Calendar data={dataNow} />}
      </Search>
      
      {!Wnow && <WeatherNow data={dataNow} />}
      {!Wnow &&  <WeatherDay data={dataNow}/>}
    </div>
  );
}

export default App;