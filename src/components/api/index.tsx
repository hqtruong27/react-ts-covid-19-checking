import axios from 'axios'

const CovidApi = {
    countries: () => {
        return axios.get('https://api.covid19api.com/countries')
    },

    getReportByCountry: (country: string) => axios.get(`https://api.covid19api.com/dayone/country/${country}`)
}

export default CovidApi
