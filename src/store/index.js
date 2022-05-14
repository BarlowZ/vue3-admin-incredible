import { defineStore } from 'pinia'
import { login as loginApi } from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'
// 引入仓库定义函数
export const mainStore = defineStore('main', {
  state: () => {
    return {
      token: localStorage.getItem('token') || '',
      siderType: true,
      lang: localStorage.getItem('lang') || 'zh'
    }
  },
  getters: {},
  actions: {
    // 登录
    login(userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then(res => {
            this.token = res.token
            localStorage.setItem('token', res.token)
            setTokenTime()
            router.replace('/')
            resolve()
          }).catch(err => {
            reject(err)
          })
      })
    },
    // 登出
    logout() {
      this.token = ''
      localStorage.clear()
      router.replace('/login')
    },
    changeSiderType() {
      this.siderType = !this.siderType
    },
    changeLang(lang) {
      this.lang = lang
    }
  }
})

export default mainStore
