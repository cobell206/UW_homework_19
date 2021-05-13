import axios from 'axios'

export default {
    getUsers: async function(seachQty) {
        var res = await axios.get(`https://randomuser.me/api/?results=${seachQty}`)
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
    
        return newArray
    }
}