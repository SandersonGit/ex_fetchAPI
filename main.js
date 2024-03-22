async function getWeather() {
    console.log('Chamando a função getWeather()');
    const apiKey = "a312d625c6e095496dfe632c7bb6ea16";
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=metric
    `;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const weatherData = await response.json();
        console.log('Dados da previsão do tempo:', weatherData);

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>Previsão do tempo para ${weatherData.name}, ${state}</h2>
            <p>Temperatura: ${weatherData.main.temp}°C</p>
            <p>Condição: ${weatherData.weather[0].description}</p>
        `;

    } catch (error) {
        console.log('Erro na requisição:', error.message);
    }
}




