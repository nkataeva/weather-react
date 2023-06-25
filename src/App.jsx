import React from 'react';
import Search from "./components/Search"
import WeatherNow from './components/WeatherNow';
import Calendar from './components/Calendar';
import WeatherDay from './components/WeatherDay';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Forecast from './components/Forecast';

function App() {
  const [city, setCity] = React.useState('')
  const [dataNow, setDataNow] = React.useState({});
  const [Wnow, setWnow] = React.useState(false);

  const [dataForecast, setDataForecast] = React.useState({});
  
  React.useEffect(() => {
    if (dataNow !== undefined && dataNow !== null)
      setWnow(Object.keys(dataNow).length === 0);
    else setWnow(true);
  }, [dataNow]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Search dataSet={setDataNow} city={city} setCity={setCity}>
              {!Wnow && <Calendar data={dataNow} />}
            </Search>
            {!Wnow && <WeatherNow data={dataNow} />}
            {!Wnow && <WeatherDay data={dataNow} setDataForecast={setDataForecast} />}
          </>}
        />
        <Route path='forecast' element={
          <Forecast city={city} data={dataForecast} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;