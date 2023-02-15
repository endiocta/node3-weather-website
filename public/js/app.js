console.log('Client site javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//         // console.log(data.location)
//         if (data.error) {
//             console.log('error ', data.error)
//         }
//         else {
//             console.log('Location: ' + data.location)
//             console.log('forecast: ' + data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = search.value
    
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            // console.log(data)
            if (data.error) {
                // console.log('error ', data.error)
                messageOne.textContent = data.error
            }
            else {
                // console.log('Location: ' + data.location)
                // console.log('forecast: ' + data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })

})