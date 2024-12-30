import { MutationsTypes } from './constant'

export default {
  [MutationsTypes.SET_USER]({ commit }, payload) {
    console.log('action执行成功')
    setTimeout(() => {
      // const payload = false
      commit(MutationsTypes.SET_USER, payload)
    }, 2000)
  }
}
