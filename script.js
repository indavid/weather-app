const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_URL = "https://api.weatherapi.com/v1/current.json";

$(document).ready(function () {
  async function getTemp(city) {
    const response = await fetch(
      WEATHER_URL + `?key=${WEATHER_API_KEY}&q=${city}&aqi=no`
    );
    const processedResponse = await response.json();
    console.log(processedResponse);
    $("#temp").text(
      `The temperature in ${city} is ${processedResponse.current.temp_f}°F.`
    );
  }

  $("#inputCity").on("keydown", function (event) {
    if (event.which === 13) {
      event.preventDefault();
      let cityValue = $("#inputCity").val();
      // Capitalize the string
      cityValue = cityValue
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
      console.log(cityValue);
      getTemp(cityValue);
    }
  });

  $(".submit").on("click", function () {
    let cityValue = $("#inputCity").val();
    // Capitalize the string
    cityValue =
      cityValue.charAt(0).toUpperCase() + cityValue.slice(1).toLowerCase();
    console.log(cityValue);
    getTemp(cityValue);
  });
});
