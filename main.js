function getData() {
    document.querySelector('.loading').style.display = "flex";
    var city = document.getElementById('city').value;
    if (city == '') {
        document.querySelector('#err').style.display = 'block';
        document.querySelector('#err').innerHTML = 'Field is <p>Requeird</p>';
        document.querySelector('.loading').style.display = "none";
    } else {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=0a3441fcdcbaf016a3616819ac71e91c')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector('#err').style.display = 'none';
            document.querySelector('.data').style.display = 'flex';
            document.getElementById('temp').innerHTML = 'Temprature: ' + Math.floor(data.main.temp - 273) + ' C';
            document.getElementById('weather').innerHTML = data.weather[0].description;
            document.getElementById('humidity').innerHTML = 'Humidity: ' + data.main.humidity + ' %';
            document.querySelector('.loading').style.display = "none";
        })
        .catch( error => {
            console.log(error);
            if (error == "TypeError: Failed to fetch") {
                document.querySelector('#err').innerHTML = 'No Internet <p>Connection</p>';
            } else {
                document.querySelector('#err').innerHTML = 'City Not <p>Found</p>';
            }
            document.querySelector('#err').style.display = 'block';
            document.querySelector('.data').style.display = 'none';
            document.querySelector('.loading').style.display = "none";
        })

        fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=trpeyQ1yxEkJpq3fw9WVon0omIBp9JJGzu8Et6ZeMqs`)
        .then(response => response.json())
        .then((info) => {
            document.querySelector('.img').innerHTML = '<img src="' + info.results[0].urls.regular + '">';
            document.querySelector('.img').style.display = 'block';
        })
        .catch( err => {
            document.querySelector('.img').style.display = 'none';
        })
    }
}

function presed() {
    document.querySelector('#button').style.transform = 'scale(0.9)';
}
function notPresed() {
    document.querySelector('#button').style.transform = 'scale(1)';
}