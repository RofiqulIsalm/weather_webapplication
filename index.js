const api_key = 'b02c45d8145c1207583f0adae726df40';

const searchWeather = () => {
    const city = document.getElementById('input-field');
    const cityValue = city.value;
    city.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api_key}&units=metric`)
        .then(res => res.json())
        .then(data => tempShow(data))
}

const tempShow = (weather) => {
    const city = document.getElementById('city');
    const deg = document.getElementById('deg');
    const lead = document.getElementById('lead');

    city.innerText = `${weather.name}`
    deg.innerText = `${weather.main.temp}`
    lead.innerText = `${weather.weather[0].main}`

    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icon');
    icon.setAttribute('src', url);
}