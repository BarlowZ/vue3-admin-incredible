import { watch } from 'vue'
import { mainStore } from '@/store/index'

export const watchLang = (...cbs) => {
  const store = mainStore()
  watch(() => store.lang, () => {
    cbs.forEach(cb => cb(store.lang))
  }, { deep: true })
}
