// 用户数据类型
export type UserParamsType = {
  user_name: string
  password: string
}
// 分页数据类型
export type PagDataTyoe = {
  pageNum: number
  pageSize: number
  total: number
}
// 分类表格columns数据类型
export type ColumnsType = {
  label: string
  prop?: string
  __slotName?: string
}
// 表单Item数据数据类型
export type ItemType = {
  label: string
  field: string
  itemType: string
  placeholder?: string
  option?: object
}
