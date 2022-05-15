import request from './request'

export const queryRightsList = (type) => {
  return request({
    url: `rights/${type}`
  })
}
