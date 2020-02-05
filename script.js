const form = document.querySelector('form');
const textInput = document.getElementById('city');
let city = textInput.value;
let reset = document.querySelector('#reset')

textInput.addEventListener('input', (e) => {
    city = e.target.value;
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.get('http://localhost:3000/weather/?city=' + city)
    .then(function(response) {
    let location = document.querySelector('.cityName');
    let celsius = document.querySelector('.celsius')
    let fahrenheit = document.querySelector('.fahrenheit')
    let error = document.querySelector('.error')
    location.style.color = 'black';
    celsius.style.color = 'black';
    fahrenheit.style.color ='black';
    error.style.color='black';

    if(response.data.city) {
        location.innerHTML = 'City: ' + response.data.city;
        celsius.innerHTML = 'Temperature (C): ' + response.data['temperature (C)']
        fahrenheit.innerHTML = 'Temperature (F): ' + response.data['temperature (F)'];
    } else {
        error.innerHTML = 'SORRY! This city is not currently in our database :{'
    }
    textInput.value = '';
        })
    })

    reset.addEventListener('click', () => {
        clickReset();
    })

    let clickReset = () => {
        let location = document.querySelector('.cityName');
        let celsius = document.querySelector('.celsius')
        let fahrenheit = document.querySelector('.fahrenheit')
        let error = document.querySelector('.error')
        location.style.color = '#E0AF36';
        celsius.style.color = '#E0AF36';
        fahrenheit.style.color ='#E0AF36';
        error.style.color='#E0AF36';

        location.textContent = ''
        celsius.textContent = ''
        fahrenheit.textContent = ''
        error.textContent = ''
    }