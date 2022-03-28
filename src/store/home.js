// import storage from 'store'
import {
  SIDEBAR_TYPE,
  // i18n
  APP_LANGUAGE
} from '@/store/mutation-types'
// import { loadLanguageAsync } from '@/locales'

const home = {
  state: {
    sideCollapsed: false,

  },
  mutations: {
    [SIDEBAR_TYPE]: (state, type) => {
      state.sideCollapsed = type
      // storage.set(SIDEBAR_TYPE, type)
    },
  },
  actions: {
    // setLang ({ commit }, lang) {
    //   return new Promise((resolve, reject) => {
    //     commit(APP_LANGUAGE, lang)
    //     loadLanguageAsync(lang).then(() => {
    //       resolve()
    //     }).catch((e) => {
    //       reject(e)
    //     })
    //   })
    // }
  }
}

export default home