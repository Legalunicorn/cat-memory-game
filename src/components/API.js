
export default async function getCats(noCats){
    const url = `https://api.thecatapi.com/v1/images/search?limit=${noCats}`
    const API_KEY = ' live_nM5kYgZSsZGa4ognc2dJ7QBDKgNGf2VSH75jzA5yHy3z7Dk4SYuYHMDPfduRsBDE '
    try{
        const response = await fetch(url,{headers:{
            'x-api-key': API_KEY
            }})
    
        const data = await response.json()
        const filteredData = data.map((cat)=>{
            return {id:cat.id,url:cat.url,picked:false}
        })
        return filteredData;

    }catch(error){
        console.log('Error fetching cats, ',error)
    }

}

// let bingo = await getCats(14)
// console.log(bingo)
// // console.log(await getCats(13))
