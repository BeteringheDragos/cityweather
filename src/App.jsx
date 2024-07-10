import { useEffect, useState } from "react"
import Forecast from "./components/forecast"
import Inputs from "./components/inputs"
import TempAndDetails from "./components/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"
import getFormattedWeatherData from "./services/weatherService"
import Portofoliu from "./components/Portofoliu"

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [query, setQuery] = useState({q: "london"})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)


  

  const getWeather = async () => {

    // const message = query.q ? query.q : 'current location'
    // toast.info(`Fetching weather data for ${message}`);

    await getFormattedWeatherData({ ...query, units}).then((data) => {
      setWeather(data);
    })
    //console.log(data);
  }




  // const getWeather = async () => {
  //   const data = await getFormattedWeatherData({ ...query, units})
  //     //setWeather(data);
    
  //   console.log(data);
  // }

  useEffect(() => {
    getWeather();
  }, [query, units]);

const formatBackground = () => {
  if(!weather) return "from-cyan-600 to-blue-700"
  const threshold = units === 'metric' ? 20 : 60
  if(weather.temp <= threshold) return 'from-cyan-600 to-blue-700'
  return 'from-yellow-600 to-orange-700'
}

  return (
    <div className= {`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/> 
      <Inputs setQuery = {setQuery} setUnits = {setUnits} />

      {
        weather && (
      <>
      <TimeAndLocation weather={weather} />
      <TempAndDetails weather={weather} />
      <Forecast title="3 hour step forecast" data={weather.hourly}/>
      <Forecast title="daily forecast" data={weather.daily}/>
      </>
        )
      }
      <Portofoliu />

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
      


      
    </div>
  )
}

export default App 