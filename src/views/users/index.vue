<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          :placeholder="$t('table.placeholder')"
          clearable
          v-model="queryForm.query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initUsersList">{{
        $t('table.search')
      }}</el-button>
      <el-button type="primary" @click="handleAddUser()">{{
        $t('table.adduser')
      }}</el-button>
    </el-row>

    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column
        :width="item.width"
        :prop="item.prop"
        :label="$t(`table.${item.label}`)"
        v-for="(item, index) in options"
        :key="index"
      >
        <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state" @change="handleStateChange(row)" />
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">
          {{ $filters.filterTimes(row.create_time) }}
        </template>
        <template #default="{ row }" v-else-if="item.prop === 'action'">
          <el-button
            type="primary"
            size="small"
            :icon="Edit"
            @click="handleAddUser(row)"
          ></el-button>
          <el-button type="warning" size="small" :icon="Setting"></el-button>
          <el-button
            type="danger"
            size="small"
            :icon="Delete"
            @click="handleDelete(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      v-model:currentPage="queryForm.pagenum"
      :page-size="queryForm.pagesize"
      :page-sizes="[5, 10, 20, 50]"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <Dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :dialogTitle="dialogTitle"
    @initUserList="initUsersList"
    :dialogTableValue="dialogTableValue"
  />
</template>

<script setup>
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { getUser, changeUserState, deleteUser } from '@/api/users'
import { options } from './options'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Dialog from './components/dialog.vue'
import { isNull } from '@/utils/filters'
const i18n = useI18n()

const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 5
})
const total = ref(0)

const tableData = ref([])

const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogTableValue = ref({})

const initUsersList = async () => {
  const res = await getUser(queryForm.value)
  total.value = res.total
  tableData.value = res.users
}
initUsersList()

const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pageSize
  initUsersList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  initUsersList()
}

const handleStateChange = async (row) => {
  await changeUserState(row.id, row.mg_state)
  ElMessage({
    message: i18n.t('message.updeteSuccess'),
    type: 'success'
  })
}

const handleAddUser = (row) => {
  if (isNull(row)) {
    dialogTitle.value = '添加用户'
    dialogTableValue.value = {}
  } else {
    dialogTitle.value = '编辑用户'
    dialogTableValue.value = JSON.parse(JSON.stringify(row))
  }
  dialogVisible.value = true
}

const handleDelete = (row) => {
  ElMessageBox.confirm(i18n.t('dialog.deleteTitle'), 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(async () => {
      await deleteUser(row.id)
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
      initUsersList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}

::v-deep .el-input__suffix {
  align-items: center;
}

.pagination {
  padding-top: 16px;
  box-sizing: border-box;
  text-align: right;
}
</style>
