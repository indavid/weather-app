//require("dotenv").config();
const weatherApiKey = "1986480656ec490d950204923202611";
console.log(weatherApiKey);
$(document).ready(function() {
    $(".temp").load();
});
const temp = document.querySelector(".temp");
async function getTemp() {
    const promise = await fetch("http://api.weatherapi.com/v1", {
        method: "GET",
        headers: {
            key: weatherApiKey,
            q: "Irvine"
        }
    });
    const processedResponse = await promise.json();
    console.log(processedResponse);
}

//# sourceMappingURL=index.672d4772.js.map
