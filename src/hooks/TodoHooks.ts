import { ElNotification } from 'element-plus'
import { TodoService } from '@/api/api'

export default function () {
  // todo列表数据
  const todoListData = ref<any[]>([])
  // 添加todo数据
  const addInput = ref<string>('')

  // 获取todo列表
  const gettodo = async () => {
    const res = (await TodoService.get({})) as any
    todoListData.value = res.result
  }
  //添加todo
  const addtodo = async () => {
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
    const todoParams = {
      text: addInput.value,
    }
    await TodoService.add(todoParams)
    gettodo()
    addInput.value = ''
  }
  // 删除todo
  const deleteTodo = async (id: number) => {
    await TodoService.del(id, {})
    gettodo()
  }
  // 改变todo状态
  const changeCheck = async (id: number) => {
    let check: any = ''
    todoListData.value.forEach((value) => {
      if (value.id == id) {
        check = value.check
      }
    })
    if (check == true) {
      await TodoService.check(id, {})
    } else {
      await TodoService.uncheck(id, {})
    }
    gettodo()
  }
  return {
    todoListData,
    addInput,
    addtodo,
    gettodo,
    deleteTodo,
    changeCheck,
  }
}
