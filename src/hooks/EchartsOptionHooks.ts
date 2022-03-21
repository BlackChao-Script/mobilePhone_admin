import echarts from '@/utils/ecarts'
const echartsOption = (Option: string) => {
  const MyEchartsRef = ref<HTMLElement | any>(null)
  let ChartsInit: any
  const option = ref<object>({})
  const { xiaomi_data, huawei_data, meizu_data, oppo_data } = {
    xiaomi_data: [10, 20, 30, 5, 30],
    huawei_data: [40, 10, 32, 21, 30],
    meizu_data: [11, 5, 2, 3, 8],
    oppo_data: [13, 24, 37, 5, 30],
  }
  // 饼状图配置
  const pieOption: object = {
    legend: { show: false },
    series: [
      {
        name: '入住科室分布',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: '#fff', borderWidth: 2 },
        color: ['#52A8FF', '#00B389', '#E27272'],
        label: {
          formatter: function (e: any) {
            let {
              data: { name, percent },
            } = e
            return `{x|}{a|${name}}\n{c|${percent}}`
          },
          minMargin: 5,
          lineHeight: 15,
          rich: {
            x: {
              width: 10,
              height: 10,
              backgroundColor: 'inherit',
              borderRadius: 5,
            },
            a: { fontSize: 14, color: 'inherit', padding: [0, 20, 0, 8] },
            b: {
              fontSize: 12,
              align: 'left',
              color: '#666666',
              padding: [8, 0, 0, 18],
            },
            c: {
              fontSize: 12,
              align: 'left',
              color: '#666666',
              padding: [8, 0, 0, 8],
            },
          },
        },
        data: [
          { value: 18, name: 'vue', percent: '45.1%' },
          { value: 3, name: 'ts', percent: '30.21%' },
          { value: 6, name: 'vite', percent: '24.69%' },
        ],
      },
    ],
  }
  // 柱状图配置项
  const labelOption: object = {
    show: true,
    position: 'insideBottom',
    distance: 19,
    align: 'left',
    verticalAlign: 'middle',
    rotate: 90,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {},
    },
  }
  const barOption: object = {
    title: {
      text: '最近各品牌销售图',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['小米', '华为', '魅族', 'oppo'],
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['周一', '周二', '周三', '周四', '周五'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '小米',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: xiaomi_data,
      },
      {
        name: '华为',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: huawei_data,
      },
      {
        name: '魅族',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: meizu_data,
      },
      {
        name: 'oppo',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: oppo_data,
      },
    ],
  }
  // 线性图配置
  const stackedOption: object = {
    title: {
      text: '最近各品牌销售趋势图',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['小米', '华为', '魅族', 'oppo'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '小米',
        type: 'line',
        stack: 'Total',
        data: xiaomi_data,
      },
      {
        name: '华为',
        type: 'line',
        stack: 'Total',
        data: huawei_data,
      },
      {
        name: '魅族',
        type: 'line',
        stack: 'Total',
        data: meizu_data,
      },
      {
        name: 'oppo',
        type: 'line',
        stack: 'Total',
        data: oppo_data,
      },
    ],
  }

  if (Option == 'pieOption') {
    option.value = pieOption
  }
  if (Option == 'barOption') {
    option.value = barOption
  }
  if (Option == 'stackedOption') {
    option.value = stackedOption
  }
  onMounted(() => {
    ChartsInit = echarts.init(MyEchartsRef.value)
    ChartsInit.setOption(option.value, true)
  })
  return {
    MyEchartsRef,
  }
}

export default echartsOption
