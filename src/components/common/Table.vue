<script setup lang='ts'>
const props: any = defineProps({
  TableData: Array,
  columns: Array
})
</script>

<template>
    <div class="table">
      <!-- 按钮 -->
      <div class="table_button">
        <slot name="table_button"></slot>
      </div>

      <el-table :data="props.TableData" style="width: 100%">
        <template v-for="item in props.columns" :key="item.label">
          <el-table-column v-bind="item" show-overflow-tooltip align="center">
            <template v-if="item.__slotName" #default="scope">
              <slot :name="item.__slotName" :data="scope"></slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
</template>

<style scoped lang="less">
.table {
  width: 90%;
  margin: 20px auto;
  .table_button {
    margin-bottom: 20px;
  }
}
</style>
