<script setup lang='ts'>
import { ElNotification } from 'element-plus'

const todoListData = ref<any[]>([
  {
    id: 1,
    text: '写代码',
    check: false
  },
  {
    id: 2,
    text: '玩游戏',
    check: true
  },
])
const addInput = ref<string>('')

const addtodo = () => {
  if (todoListData.value.length == 6) {
    ElNotification({
      title: '失败',
      message: '任务不能超过6个',
      type: 'warning',
    })
    return
  }
  if (addInput.value.trim() == '') {
    ElNotification({
      title: '失败',
      message: '添加任务不能为空',
      type: 'error',
    })
    return
  }
  const todo = {
    id: Math.floor(Math.random() * 101),
    text: addInput.value,
    check: false
  }
  const newTodo = [todo, ...todoListData.value]
  todoListData.value = newTodo
  addInput.value = ''
}
const deleteTodo = (id: number) => {
  const todo = todoListData.value.filter((item) => {
    return item.id !== id
  })
  todoListData.value = todo
}

</script>

<template>
  <el-card shadow="hover" class="right_todo">
    <div class="todo_top">
      <div class="todo_title">待办事项</div>
      <div class="add_button">
        <el-input v-model="addInput" placeholder="添加" @change="addtodo" />
      </div>
    </div>
    <el-divider />
    <div class="todo_list">
      <div class="list" v-for="item in todoListData" :key="item.id">
        <div class="list_checkbox">
          <el-checkbox v-model="item.check" size="large" />
        </div>
        <div class="list_name">{{ item.text }}</div>
        <div class="list_icon">
          <el-icon @click="deleteTodo(item.id)">
            <component is="delete"></component>
          </el-icon>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="less">
.todo_top {
  overflow: hidden;
  .todo_title {
    float: left;
    margin-top: 20px;
    margin-left: 20px;
  }
  .add_button {
    float: right;
    margin-top: 20px;
    margin-right: 20px;
  }
}
.todo_list {
  display: flex;
  flex-direction: column;
  align-items: center;
  .list {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    .list_checkbox {
      width: 10%;
    }
    .list_name {
      width: 80%;
    }
    &:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>
