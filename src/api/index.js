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
              'x-rapidapi-key': '0256601334mshc5060f2b0260bb1p18daa7jsn41e48353114b'
            }
          })
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getPlacesData