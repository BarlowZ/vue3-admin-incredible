<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { mainStore } from '@/store/index'
const squareUrl = ref(
  'https://img1.baidu.com/it/u=2973374934,3835682995&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
)

const store = mainStore()

const logout = () => {
  store.logout()
}
</script>

<style lang="scss" scoped>
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
