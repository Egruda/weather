async function getWeather() {
  let location = document.querySelector("input").value;

  location = !location ? "Jakarta" : location;

  const span = document.querySelector('span');
  span.style.display = 'inline'

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=eca22df69c4745c4a6122643232206&q=${location}`
    );
    const json = await response.json();
    span.style.display = 'none';
    const weatherData = {
      condition: json.current.condition.text,
      icon: json.current.condition.icon,
      tempc: json.current.temp_c,
      tempf: json.current.temp_f,
      city: json.location.name,
    };

    const city = document.querySelector("h1");
    city.textContent = weatherData.city;
    const image = document.querySelector("img");
    image.src = `http://${weatherData.icon.slice(2)}`;
    const temperature = document.querySelector(".icon-temp p");
    temperature.textContent = `${weatherData.tempc}° C`;
  } catch (error) {
    alert("Sorry, we could not find your location");
  }
}
getWeather();

const button = document.querySelector("button");
button.addEventListener("click", getWeather);
