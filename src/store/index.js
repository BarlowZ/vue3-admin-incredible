import { defineStore } from 'pinia'
import { login as loginApi } from '@/api/login'
import router from '@/router'
// 引入仓库定义函数
export const mainStore = defineStore('main', {
  state: () => {
    return {
      token: localStorage.getItem('token') || ''
    }
  },
  getters: {},
  actions: {
    loginApi(userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then(res => {
            this.token = res.token
            localStorage.setItem('token', res.token)
            router.replace('/')
            resolve()
          }).catch(err => {
            reject(err)
          })
      })
    }
  }
})

export default mainStore
