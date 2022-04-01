let div = document.getElementById('container')
const getAllStations = async () => {
    let req = await fetch('https://mtaapi.herokuapp.com/stations')
    let res = await req.json()
    res.result.forEach((element) => {
        //console.log(element)
        let h2 = document.createElement('h2')
    })
}
console.log(div)
getAllStations()