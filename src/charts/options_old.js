export const overview_option = {
    title: {
      text: 'Übersicht'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['Ziel', 'Mein Szenario', 'Status Quo']
    },
    series: [
      {
        name: 'Erzeugung',
        type: 'bar',
        data: [104970, 131744, 630230],
      },
      {
        name: 'Verbrauch',
        type: 'bar',
        data: [121594, 134141, 681807]
      }
    ]
  };
  export const Overview_generation_option = {
    title: {
        text: 'Übersicht Erzeugung'
      },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' 
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Ziel Szenario', 'Mein Szenario', 'Status Quo']
    },
    series: [
      {
        name: 'Wind',
        type: 'bar',
        stack: 'total',
        color: '#1F82C0',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [502, 334, 230]
      },
      {
        name: 'Bioenergie',
        type: 'bar',
        stack: 'total',
        color: '#98D47E',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [136, 134, 130]
      },
      {
        name: 'Freiflächen - PV',
        type: 'bar',
        stack: 'total',
        color: '#F6B93B',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [382, 234, 130 ]
      },
      {
        name: 'Aufdach - PV',
        type: 'bar',
        stack: 'total',
        color: '#FFD660',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [312, 254, 130]
      },
      {
        name: 'Konventionell',
        type: 'bar',
        stack: 'total',
        color: '#CFCFCF', 
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [132, 534, 1130 ]
      },
    ]
  };
  export const overview_comparison_option = {
    title: {
        text: 'Erzeugung - Verbrauch '
      },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: [ 'Erzeugung', 'Verbrauch']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['Ziel', 'Szenario', 'Status Quo']
      }
    ],
    series: [
      {
        name: 'Verbrauch',
        type: 'bar',
        stack: 'Total',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [200, 230, 341]
      },
      {
        name: 'Erzeugung',
        type: 'bar',
        stack: 'Total',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series'
        },
        data: [-220, -200, -100 ]
      }
    ]
  };