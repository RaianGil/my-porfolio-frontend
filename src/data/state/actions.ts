const actions = {
  setReady: (state:any) => {
    state.appReady = true
  },
  unsetReady: (state:any) => {
    state.appReady = false
  },
  unsetInitApp: (state:any) => {
    state.appInit = false
  },
  setUnsetDarkMode: (state:any) => {
    state.darkMode = !state.darkMode
  }
}

export default actions