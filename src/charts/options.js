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
 export const detailed_overview_option = {
    title: {
        text: 'Detallierte Übersicht'
      },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
      data: ['Ziel Szenario - Verbrauch', 
      'Ziel Szenario - Erzeugung', 
      'Mein Szenario - Verbrauch', 
      'Mein Szenario - Erzeugung', 
      'Status Quo - Verbrauch', 
      'Status Quo - Erzeugung']
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
        data: [0, 502, 0, 334, 0, 230]
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
        data: [0, 136, 0, 134, 0, 130]
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
        data: [0, 382, 0, 234, 0, 130 ]
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
        data: [0, 312, 0 , 254, 0 , 130]
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
        data: [0 , 132, 0 , 534,0 , 1130 ]
      },
      {
        name: 'Verbrauch',
        type: 'bar',
        stack: 'total',
        color: '#e9e0c8',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [1450, 0 , 1440, 0 , 1800 ]
      },
    ]
  };
  export const Overview_generation_option = {
    title: {
        text: 'Übersicht Erzeugung'
      },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
 export const GHG_overview_option = {
  backgroundColor: '#FFFFFF',
  fontStyle: 'Roboto',
  fontSize: '14',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    show: true,
    bottom: '12'
  },
  grid: {
    top: '10%',
    left: '3%',
    right: '15%',
    bottom: '10%',
    containLabel: true
  },
  xAxis:  {
    type: 'value',
    show: true,
    position: 'bottom',
    name: 'Mt CO₂-\Emissionen',
      nameLocation: 'end',
      nameTextStyle: 'Roboto',
        width: '76',
        heigth: '32',
      fontWeight: '300', 
      fontSize: '14',
    
  },
  yAxis: {
    show: true,
    type: 'category',
    data: ['Ziel', 'Szenario', 'Status Quo', '1990'],
    nameTextStyle: 'Roboto',
    fontWeight: '400', 
    fontSize: '14',
  },
  series: [
    {
      name: 'GHG',
      type: 'bar',
       barWidth: '25',
      stack: 'total',
      color: '#C8D8E4',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 20, 20, 20]
    },
    {
      name: 'Haushalte',
      type: 'bar',
        barWidth: '25',
      stack: 'total',
      color: '#74A9CF',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [12, 15, 30, 34]
    },
    {
      name: 'Industrie',
      type: 'bar',
        barWidth: '25',
      stack: 'total',
      color: '#FA9FB5',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 20, 31, 34]
    },
    {
      name: 'XXX',
      type: 'bar',
        barWidth: '25',
      stack: 'total',
      color: '#FEC44F',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [5, 12, 15, 24]
    },
    {
      name: 'XXX',
      type: 'bar',
        barWidth: '25',
      stack: 'total',
      color: '#8C96C6',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [15, 20, 30, 34]
    }
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