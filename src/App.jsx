import { useState } from 'react'
import './styles.css'

/* Challenge

Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir. 
      
    1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri otomatik olarak görüntülemek üzere durumu kullanmalıdır:
        - arka plan resmi
        - emoji simgesi (☀️, 🌧️ veya ❄️)
        - hava durumu
        - düşük & yüksek sıcaklıklar
        - haftanın günü
    
    2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir: Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 
    
    3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 
       
    4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

export default function App() {
  const weatherData = [
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
    },
  ]


  const [weatherDay, setWeatherDay] = useState(
    weatherData[0]
  )
  const [icon,setIcon] =useState("☀️")

const handleChange = ()=> {
  if (weatherDay.id===0) {
    setWeatherDay(weatherData[1])
    setIcon("🌧️")
  } else if (weatherDay.id===1){
    setWeatherDay(weatherData[2])
    setIcon("❄️")
  } else {
    setWeatherDay(weatherData[0])
    setIcon("☀️")
  }
}


  return (
    <div className={`app-container ${weatherDay.condition.toLowerCase()}-background`}>
      <div className='weather-container'>
        <div className='icon'>{icon}</div>
        <div className='condition-text'>{weatherDay.condition}</div>
        <div className='temp-range-container'>
          <div className='low-temp-container'>
            <p className='low-temp-data'>{weatherDay.lowTemp}</p>
            <p>En Düşük</p>
          </div>
          <div className='high-temp-container'>
            <p className='high-temp-data'>{weatherDay.lowTemp}</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className='day'>{weatherDay.day}</div>
      </div>
      <button onClick={handleChange}>Test</button>
    </div>
  )
}
