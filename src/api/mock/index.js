import axios from 'axios'

const mock = axios.create({
  timeout: 200_000
})

mock.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data
    }
    return Promise.reject(res)
  },
  err => {
    return Promise.reject(err)
  }
)

export default mock
