import axios from "axios"

const apiUrl = process.env.API_URL

export function httpPost() {
    return axios.get(`${apiUrl}/user/661f27dc8a08f311752203e4`)
}