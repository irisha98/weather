const api = {
    endpoint:'https://api.openweathermap.org/data/2.5/',
    key:'6e83b44ac9f0f89dbdc7e9cb04baf72b'
}

const input = document.querySelector('#input');
input.addEventListener('keypress', enter);

function enter(e){
    if (e.keyCode === 13){
        getInfo(input.value);
    }
    
}

async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector('#city');
    city.textContent = `${result.name},${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = `<span>Feels like: </span>${Math.round(result.main.feels_like)}`;

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].description}`;

    let variation = document.querySelector('#variation');
    variation.innerHTML = 'Min: '+`${Math.round(result.main.temp_min)}<span>°</span>`+' Max: '+`${Math.round(result.main.temp_max)}<span>°</span>`;

}

function getOurDate(){
    const myDate = new Date;
    const days = ['Sanday', ' Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    const months = [' January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[myDate.getDay()];

    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector('#date');
    showDate.textContent = `${day} `+`${todayDate} `+ `${month} `+ `${year}`;
}

gsap.to('#header', {y:20, duration:2, opacity:1})
gsap.to('#when-where', {y:30, duration:2, opacity:1, delay:1})
gsap.to('#now', {y:30, duration:2, opacity:1, delay:2})

