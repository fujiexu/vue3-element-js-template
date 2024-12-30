import { useStore } from 'vuex'

export const useMyStore = () => {
  const { state, getters, commit, dispatch } = useStore()
  return { state, getters, commit, dispatch }
}
