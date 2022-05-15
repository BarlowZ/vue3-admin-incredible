<template>
  <el-card>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column type="index" width="50" align="center" />
      <el-table-column
        v-for="(item, index) in options"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template v-slot="{ row }" v-if="item.prop === 'level'">
          <el-tag :type="checkLevelTagType(row)">{{
            `${+row.level + 1}级`
          }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { queryRightsList } from '@/api/rights'
import { options } from './options'
const tableData = ref([])

const initRightsList = async (type) => {
  const res = await queryRightsList(type)
  tableData.value = res
}

initRightsList('list')

const checkLevelTagType = (row) => {
  return row.level === '0' ? '' : row.level === '1' ? 'success' : 'warning'
}
</script>

<style lang="scss" scoped></style>
