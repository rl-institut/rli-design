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
  xAxis: {
    type: 'value',
      show: true,
    position: 'bottom',
    name: 'Mt CO₂-\Emissionen',
      nameLocation: 'end',
      nameTextStyle: 'Roboto',
        width: '76',
        heigth: '32',
      fontWeight: '300', 
      fontSize: '14'
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
        barWidth: '35',
      stack: 'total',
      color: '#1F82C0',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 502, 0, 334, 0, 230]
    },
    {
      name: 'Freiflächen - PV',
      type: 'bar',
      stack: 'total',
      color: '#F6B93B',
      label: {
        show: false
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
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 312, 0 , 254, 0 , 130]
    },
        {
      name: 'Bioenergie',
      type: 'bar',
      stack: 'total',
      color: '#98D47E',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 136, 0, 134, 0, 130]
    },
    {
      name: 'Konventionell',
      type: 'bar',
      stack: 'total',
      color: '#CFCFCF', 
      label: {
        show: false
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
        show: false
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
  export const strom_overview = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      show: true,
      bottom: '15',
      itemWidth: 14,
      itemHeight: 14
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '25%',
      bottom: '18%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: true,
      position: 'bottom',
      name: 'TWh',
        nameLocation: 'end',
        nameTextStyle: 'Roboto',
          width: '76',
          heigth: '32',
        fontWeight: '300',
        fontSize: '14'
    },
    yAxis: {
      type: 'category',
      data: ['Bedarf',
      'Ziel',
      'Mein Szeanrio',
      'Status Quo' ],
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: 'Wind',
        type: 'bar',
        barWidth: '16',
        stack: 'total',
        color: '#1F82C0',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [0, 502, 400, 334]
      },
      {
        name: 'Freiflächen - PV',
        type: 'bar',
        stack: 'total',
        color: '#F6B93B',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [0, 382, 300, 234 ]
      },
      {
        name: 'Aufdach - PV',
        type: 'bar',
        stack: 'total',
        color: '#FFD660',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [0, 312, 280 , 254]
      },
          {
        name: 'Bioenergie',
        type: 'bar',
        stack: 'total',
        color: '#98D47E',
        label: {
          show: false
        },
        emphasis: {
        },
        data: [0, 136, 135, 134]
      },
      {
        name: 'Konventionell',
        type: 'bar',
        stack: 'total',
        color: '#1A1A1A',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [0 , 132, 200, 534 ]
      },
      {
        name: 'GHG',
        type: 'bar',
        stack: 'total',
        color: '#F5F5DC',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [400, 0 , 0, 0]
      },
      {
        name: 'Haushalte',
        type: 'bar',
        stack: 'total',
        color: '#A8DADC',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [360, 0 , 0, 0]
      },
       {
        name: 'Industrie',
        type: 'bar',
        stack: 'total',
        color: '#C27BA0',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [300, 0 , 0, 0]
      },
      {
        name: 'Sonstiges',
        type: 'bar',
        stack: 'total',
        color: '#B0BEC5',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [350, 0 , 0, 0]
      },
    ]
  };
  export const strom_THG = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      show: true,
      bottom: '15',
      itemWidth: 14,
      itemHeight: 14
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '25%',
      bottom: '18%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: true,
      position: 'bottom',
      name: 'Mt CO₂-\nEmissionen',
        nameLocation: 'end',
        nameTextStyle: 'Roboto',
          width: '76',
          heigth: '32',
        fontWeight: '300',
        fontSize: '14'
    },
    yAxis: {
      type: 'category',
      data: ['Ziel',
      'Mein Szenario',
      'Status Quo',
      '1990' ],
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: 'GHG',
        type: 'bar',
        barWidth: '16',
        stack: 'total',
        color: '#F5F5DC',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [10, 30, 34, 37]
      },
      {
        name: 'Haushalte',
        type: 'bar',
        stack: 'total',
        color: '#A8DADC',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [20, 25 , 27, 30]
      },
       {
        name: 'Industrie',
        type: 'bar',
        stack: 'total',
        color: '#C27BA0',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [30, 40, 50, 60]
      },
      {
        name: 'Sonstiges',
        type: 'bar',
        stack: 'total',
        color: '#B0BEC5',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [30, 40 , 45, 50]
      },
    ]
  };
  export const verkehr_overview = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      show: true,
      bottom: '15',
      itemWidth: 14,
      itemHeight: 14
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '25%',
      bottom: '18%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: true,
      position: 'bottom',
      name: 'Anzahl Autos',
        nameLocation: 'end',
        nameTextStyle: 'Roboto',
          width: '76',
          heigth: '32',
        fontWeight: '300',
        fontSize: '14'
    },
    yAxis: {
      type: 'category',
      data: ['Ziel\nSzenario',
      'Mein \nSzenario',
      'Status Quo'
      ],
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: 'Diesel',
        type: 'bar',
        barWidth: '16',
        stack: 'total',
        color: '#647078',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [50, 222, 400]
      },
      {
        name: 'Benzin',
        type: 'bar',
        stack: 'total',
        color: '#866E18',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [20, 182, 350]
      },
      {
        name: 'Hybrid',
        type: 'bar',
        stack: 'total',
        color: '#8FDCE1',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [100, 100, 140]
      },
          {
        name: 'E-Auto',
        type: 'bar',
        stack: 'total',
        color: '#98D47E',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [500, 300, 100]
      },
    ]
  }; 
  export const verkehr_thg = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      show: true,
      bottom: '15',
      itemWidth: 14,
      itemHeight: 14
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '25%',
      bottom: '18%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: true,
      position: 'bottom',
      name: 'Mt CO₂-\nEmissionen',
        nameLocation: 'end',
        nameTextStyle: 'Roboto',
          width: '76',
          heigth: '32',
        fontWeight: '300',
        fontSize: '14'
    },
    yAxis: {
      type: 'category',
      data: ['Ziel',
      'Mein Szenario',
      'Status Quo',
      '1990' ],
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: 'Sockel',
        type: 'bar',
        barWidth: '16',
        stack: 'total',
        color: '#C8D8E4',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [30, 30, 30, 30]
      },
      {
        name: 'Konventionell',
        type: 'bar',
        stack: 'total',
        color: '#647078',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [15, 25 , 65, 100]
      },
       {
        name: 'Erneuerbare Energien',
        type: 'bar',
        stack: 'total',
        color: '#A8E7BA',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        data: [65, 65, 38, 10]
      },
    ]
  };