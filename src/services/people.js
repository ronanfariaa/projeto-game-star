import swapi from './base'


export default {
    async getPeople(peopleId) {
        const response = await swapi.get(`/people/${peopleId}/`)
        return response
    }
}