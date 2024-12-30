const moduleGetters = {
  isLogin: state => {
    return Boolean(state.user)
  }
}
export default moduleGetters
