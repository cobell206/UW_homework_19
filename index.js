const { default: axios } = require('axios')


async function getUsers (user_qty) {
    
    var res = await axios.get(`https://randomuser.me/api/?results=${user_qty}`)

    const newArray = res.data.results.map(function(person) {
        return {
            firstName: person.name.first,
            lastName: person.name.last,
            email: person.email,
            phone: person.phone,
            country: person.location.country,
            nat: person.nat
        }
    })
    console.log(res.data.results[0]);
    return newArray
}

getUsers(5)
