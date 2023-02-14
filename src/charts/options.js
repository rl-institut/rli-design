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
        name: 'Bedarf',
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