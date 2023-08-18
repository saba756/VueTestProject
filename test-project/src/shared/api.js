import axios from 'axios'

const instance = axios.create({
  responseType: 'json',
  baseURL: `https://miusage.com/v1/`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
