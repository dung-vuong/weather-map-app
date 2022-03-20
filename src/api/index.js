import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const getPlacesData = async(sw,ne) => {
    try {
        const {data: {data}} = await axios.get(URL, {
            //SET THE southwest and northeast LAT and LNG
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '1903c37bf5mshed9fca3d44d7538p19574bjsn7a0990036aab'
            }
          })
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getPlacesData