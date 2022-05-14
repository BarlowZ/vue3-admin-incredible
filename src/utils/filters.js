const dayjs = require('dayjs')

const filterTimes = (timestamp, format = 'YYYY-MM-DD') => {
  if (!isNull(timestamp)) {
    timestamp = parseInt(timestamp) * 1000
    return dayjs(timestamp).format(format)
  } else {
    return '--'
  }
}

export const isNull = (date) => {
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '[]') return true
}

export default app => {
  app.config.globalProperties.$filters = {
    filterTimes
  }
}
