import axios from 'axios'
import { SearchType } from '../types'

export default function useWeather() {

    const fetchWeather = async (search : SearchType) => {
        const appId = '6b811ade077c4e48a7e6595061c67b17'
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios.get(geoUrl)

            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }   

    return {
        fetchWeather,
    }
}
