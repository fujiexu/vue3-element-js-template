import { setToken, setUser } from '@/utils/storage/user'
import { MutationsTypes } from './constant'

const mutations = {
  [MutationsTypes.SET_USER](state, payload) {
    console.log('mutations执行成功')
    state.user = payload
    setUser(payload)
    setToken(payload?.token || '')
  }
}
export default mutations
