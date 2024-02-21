//test
let results;

const url = "https://api.thecatapi.com/v1/images/search?limit=20"
const API_KEY = ' live_nM5kYgZSsZGa4ognc2dJ7QBDKgNGf2VSH75jzA5yHy3z7Dk4SYuYHMDPfduRsBDE '
async function getCats(){
    const response = await fetch(url,{headers:{
        'x-api-key': API_KEY
        }})

    const data = await response.json()
    console.log(data)
    console.log(data.length)
}


getCats();