import swapi from './base'


export default {
    async getStarships(starshipsId) {
        const response = await swapi.get(`/starships/${starshipsId}/`)
        return response
    }
}