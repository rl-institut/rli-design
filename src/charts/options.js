export const detailed_overview_option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
    data: ['Ziel Szenario - Verbrauch',
      'Ziel Szenario - Erzeugung',
      'Mein Szenario - Verbrauch',
      'Mein Szenario - Erzeugung',
      'Status Quo - Verbrauch',
      'Status Quo - Erzeugung']
  },
  series: [
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
      data: [0, 132, 0, 334, 0, 700]
    },
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
      data: [0, 302, 0, 234, 0, 230]
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
      data: [0, 282, 0, 234, 0, 100]
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
      data: [0, 312, 0, 254, 0, 100]
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
      name: 'GHD',
      type: 'bar',
      stack: 'total',
      color: '#F5F5DC',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [300, 0, 344, 0, 380]
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
      data: [245, 0, 244, 0, 380]
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
      data: [280, 0, 300, 0, 350]
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
      data: [145, 0, 144, 0, 180]
    },
  ]
};
/* const xAxisData = ['Status Quo', 'Mein Szenario', 'Ziel Szenario'];
const emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
}; */
export const detailed_overview_grouped_option = {
  legend: {
    data: ['Konventionell', 'Wind', 'Freiflächen-PV', 'Aufdach-PV', 'Bioenergie', 'GHD', 'Haushalt', 'Industrie', 'Sonstiges'],
    bottom: '12'
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  toolbox: {
    feature: {
      magicType: {
        type: ['stack']
      },
      dataView: {}
    }
  },
  tooltip: {},
  grid: {
    top: '10%',
    left: '3%',
    right: '15%',
    bottom: '10%',
    containLabel: true
  },
  yAxis: {
    data: xAxisData,
    axisLine: { onZero: true },
    splitLine: { show: false },
    splitArea: { show: false }
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
  series: [
    {
      name: 'Konventionell',
      type: 'bar',
      barWidth: '16',
      stack: 'five',
      color: '#CFCFCF',
      emphasis: emphasisStyle,
      data: [132, 334, 700]
    },
    {
      name: 'Wind',
      type: 'bar',
      stack: 'five',
      color: '#1F82C0',
      emphasis: emphasisStyle,
      data: [302, 234, 230]
    },
    {
      name: 'Freiflächen-PV',
      type: 'bar',
      stack: 'five',
      color: '#F6B93B',
      emphasis: emphasisStyle,
      data: [282, 234, 100]
    },
    {
      name: 'Aufdach-PV',
      type: 'bar',
      stack: 'five',
      color: '#FFD660',
      emphasis: emphasisStyle,
      data: [312, 254, 100]
    },
    {
      name: 'Bioenergie',
      type: 'bar',
      stack: 'five',
      color: '#98D47E',
      emphasis: emphasisStyle,
      data: [136, 134, 130]
    },
    {
      name: 'GHD',
      type: 'bar',
      stack: 'four',
      color: '#F5F5DC',
      emphasis: emphasisStyle,
      data: [300, 344, 380]
    },
    {
      name: 'Haushalte',
      type: 'bar',
      stack: 'four',
      color: '#A8DADC',
      emphasis: emphasisStyle,
      data: [254, 244, 380]
    },
    {
      name: 'Industrie',
      type: 'bar',
      barWidth: '16',
      stack: 'four',
      color: '#C27BA0',
      emphasis: emphasisStyle,
      data: [280, 300, 350]
    },
    {
      name: 'Sonstiges',
      type: 'bar',
      stack: 'four',
      color: '#B0BEC5',
      emphasis: emphasisStyle,
      data: [145, 144, 180]
    }
  ]
};
export const strom_overview = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
      'Status Quo'],
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
      data: [0, 382, 300, 234]
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
      data: [0, 312, 280, 254]
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
      data: [0, 132, 200, 534]
    },
    {
      name: 'GHD',
      type: 'bar',
      stack: 'total',
      color: '#F5F5DC',
      label: {
        show: false
      },
      emphasis: {
        focus: 'series'
      },
      data: [400, 0, 0, 0]
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
      data: [360, 0, 0, 0]
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
      data: [300, 0, 0, 0]
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
      data: [350, 0, 0, 0]
    },
  ]
};
export const strom_THG = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
      '1990'],
    axisTick: {
      show: false
    }
  },
  series: [
    {
      name: 'GHD',
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
      data: [20, 25, 27, 30]
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
      data: [30, 40, 45, 50]
    },
  ]
};
export const verkehr_overview = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
      type: 'shadow'
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
      '1990'],
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
      data: [15, 25, 65, 100]
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
export const anteil_ee = {
  xAxis: {
    type: 'category',
    data: ['0', '2021', '2045', '0'],
    boundaryGap: false
  },
  yAxis: {
    show: true,
    type: 'value',
    maxValueSpan: '100',
    name: 'Anteil Erneuerbare\n Energien (%)',
    nameLocation: 'end',
    nameTextStyle: 'Roboto',
    width: '76',
    heigth: '32',
    fontWeight: '300',
    fontSize: '14',
  },
  series: [
    {
      type: 'line',
      boundaryGap: false,
      smooth: 0.6,
      lineStyle: {
        color: '#06DFA7',
        width: 5
      },
      data: [90, 90, 90, 90]
    },
    {
      type: 'bar',
      barWidth: '40',
      data: [
        {
          value: 0,
          itemStyle: {
            color: '#F4F6F7'
          }
        },
        {
          value: 30,
          itemStyle: {
            color: '#C3D1DC'
          }
        },
        {
          value: 90,
          itemStyle: {
            color: '#06DFA7'
          }
        },
      ],
    },
  ],
};
export const co2_emissionen = {
  xAxis: {
    type: 'category',
    data: ['0', '2021', '2045', '0'],
    boundaryGap: false
  },
  yAxis: {
    show: true,
    type: 'value',
    maxValueSpan: '100',
    name: 'CO2-Emissionen (Mt)',
    nameLocation: 'end',
    nameTextStyle: 'Roboto',
    width: '76',
    heigth: '32',
    fontWeight: '300',
    fontSize: '14',
  },
  series: [
    {
      type: 'line',
      boundaryGap: false,
      smooth: 0.6,
      lineStyle: {
        color: '#E6A100',
        width: 5
      },
      data: [30, 30, 30, 30]
    },
    {
      type: 'bar',
      barWidth: '40',
      data: [
        {
          value: 0,
          itemStyle: {
            color: '#F4F6F7'
          }
        },
        {
          value: 90,
          itemStyle: {
            color: '#C3D1DC'
          }
        },
        {
          value: 30,
          itemStyle: {
            color: '#E6A100'
          }
        },
      ],
    },
  ],
};
export const waerme_overview_option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' 
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
    data: ['Ziel',
      'Mein Szeanrio',
      'Status Quo' ],
    axisTick: {
      show: false
    }
  },
  series: [
    {
      name: 'GHD',
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
      data: [200, 300, 320]
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
      data: [260, 300, 310]
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
      data: [200, 250, 350]
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
      data: [150, 150, 150]
    },
  ]
};
/*const xAxisData = ['Status Quo', 'Mein Szenario', 'Ziel Szenario'];
const emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
};*/
export const waerme_dezentral_zentral = {
    legend: {
      data: ['Kohleofen', 'Holzofen', 'Gasheizkessel', 'Solarthermiekollektor', 'Wärmepumpe', 'Thermische Energiespeicher', 'Große Gasheizkessel', 'Große Wärmepumpen', 'Power to Heat', 'Große Solarthermiekollektoren'],
      bottom: '12'
    },
    brush: {
      toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      xAxisIndex: 0
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack']
        },
        dataView: {}
      }
    },
    tooltip: {},
    grid: {
      top: '10%',
      left: '3%',
      right: '15%',
      bottom: '10%',
      containLabel: true
    },
    yAxis: {
      data: xAxisData,
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false }
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
    series: [
      {
        name: 'Kohleofen',
        type: 'bar',
        barWidth: '16',
        stack: 'five',
        color: '#604F4F',
        emphasis: emphasisStyle,
        data: [132, 334, 700]
      },
      {
        name: 'Holzofen',
        type: 'bar',
        stack: 'five',
        color: '#610B0B',
        emphasis: emphasisStyle,
        data: [102, 234, 280]
      },
      {
        name: 'Gasheizkessel',
        type: 'bar',
        stack: 'five',
        color: '#B1BEC6',
        emphasis: emphasisStyle,
        data: [282, 234, 100]
      },
      {
        name: 'Wärmepumpe',
        type: 'bar',
        stack: 'five',
        color: '#E6772E',
        emphasis: emphasisStyle,
        data: [136, 134, 130]
      },
      {
        name: 'Thermische Energiespeicher',
        type: 'bar',
        stack: 'five',
        color: '#DF3A01',
        emphasis: emphasisStyle,
        data: [280, 150, 100]
      },
      {
        name: 'Solarthermiekollektor',
        type: 'bar',
        stack: 'five',
        color: '#FFD660',
        emphasis: emphasisStyle,
        data: [412, 254, 100]
      },
      {
        name: 'Große Gasheizkessel',
        type: 'bar',
        stack: 'four',
        color: '#B1BEC6',
        emphasis: emphasisStyle,
        data: [300, 344, 380]
      },
      {
        name: 'Große Wärmepumpen',
        type: 'bar',
        stack: 'four',
        color: '#E6772E',
        emphasis: emphasisStyle,
        data: [254, 244, 380]
      },
      {
        name: 'Power-to-Heat',
        type: 'bar',
        barWidth: '16',
        stack: 'four',
        color: '#D7DF01',
        emphasis: emphasisStyle,
        data: [280, 300, 350]
      },
      {
        name: 'Große Solarthermiekollektoren',
        type: 'bar',
        stack: 'four',
        color: '#FFD660',
        emphasis: emphasisStyle,
        data: [145, 144, 180]
      }
    ]
  }; 
export const thg_waterfall_option = {
  backgroundColor: '#FFFFFF',
  fontStyle: 'Roboto',
  fontSize: '14',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
    type: 'category',
    splitLine: { show: false },
    data: ['2019', 'Mein Szenario', 'Reduktion durch grüne Energie aus:']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0, 0, 410]
    },
    {
      name: 'Abfallwirtschaft und Sonstiges',
      type: 'bar',
      barWidth: '16',
      color: '#F5F5DC',
      stack: 'Total',
      label: {
        show: false,
        position: 'inside'
      },
      data: [100, 80, 0]
    },
    {
      name: 'Landwirtschaft',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#87D068',
      label: {
        show: false,
        position: 'inside'
      },
      data: [100, 80, 0]
    },
     {
      name: 'Industrie',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#FA9FB5',
      label: {
        show: false,
        position: 'inside'
      },
      data: [100, 80, 0]
    },
    {
      name: 'Verkehr',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#6C567B',
      label: {
        show: false,
        position: 'inside'
      },
      data: [100, 80, 0]
    },
    {
      name: 'Gebäude',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#A8DADC',
      label: {
        show: false,
        position: 'inside'
      },
      data: [100, 80, 0]
    },
    {
      name: 'Energiewirtschaft',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#E6772E',
      label: {
        show: false,
        position: 'inside'
      },
      data: [100, 100, 0]
    }, 
    {
      name: 'Exporte',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#F6B93B',
      label: {
        show: false,
        position: 'inside'
      },
      data: [0, 0, 20 ]
    },
    {
      name: 'Importe',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#D9B38C',
      label: {
        show: false,
        position: 'inside'
      },
      data: [0, 0, 20]
    },
    {
      name: 'Regionale Erzeugung',
      type: 'bar',
      barWidth: '16',
      stack: 'Total',
      color: '#48BF91',
      label: {
        show: false,
        position: 'inside'
      },
      data: [0, 0, 50]
    },
    {
      name: 'Referenzlinie',
      type: 'line',
      symbol: '',
      symbolSize: '10',
//        symbolOffset:'',
      symbolRotate: '-90',
        lineStyle: {
          type:'dashed'
      },
        color: '#808B96',
        label: {
        show: false,
       },
      data: [600, 500, 500]
    },
  ],
};
const yAxisData = ['1990', '2019'];
const emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
};
export const thg_statisch_option = {
  legend: {
    data: ['Abfallwirtschaft und Sonstiges', 
    'Landwirtschaft', 
    'Industrie', 
    'Verkehr', 
    'Gebäude', 
    ],
    bottom: '12'
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  toolbox: {
    feature: {
      magicType: {
        type: ['stack']
      },
      dataView: {}
    }
  },
  tooltip: {},
  grid: {
    top: '10%',
    left: '3%',
    right: '15%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    data: yAxisData,
    axisLine: { onZero: true },
    splitLine: { show: false },
    splitArea: { show: false }
  },
  yAxis: {
    type: 'log',
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
  series: [
    {
      name: 'Abfallwirtschaft und Sonstiges ABW',
      type: 'bar',
      barWidth: '16',
      stack: 'five',
      color: '#F5F5DC',
      emphasis: emphasisStyle,
      data: [13, 33]
    },
    {
      name: 'Landwirtschaft ABW',
      type: 'bar',
      stack: 'five',
      color: '#87D068',
      emphasis: emphasisStyle,
      data: [30, 23]
    },
    {
      name: 'Industrie ABW',
      type: 'bar',
      stack: 'five',
      color: '#FA9FB5',
      emphasis: emphasisStyle,
      data: [28, 23]
    },
    {
      name: 'Verkehr ABW',
      type: 'bar',
      stack: 'five',
      color: '#6C567B',
      emphasis: emphasisStyle,
      data: [31, 25]
    },
    {
      name: 'Gebäude ABW',
      type: 'bar',
      stack: 'five',
      color: '#A8DADC',
      emphasis: emphasisStyle,
      data: [13, 13]
    },
    {
      name: 'Abfallwirtschaft und Sonstiges SA',
      type: 'bar',
      barWidth: '16',
      stack: 'four',
      color: '#F5F5DC',
      emphasis: emphasisStyle,
      data: [132, 334]
    },
    {
      name: 'Landwirtschaft SA',
      type: 'bar',
      stack: 'four',
      color: '#87D068',
      emphasis: emphasisStyle,
      data: [302, 234]
    },
    {
      name: 'Industrie SA',
      type: 'bar',
      stack: 'four',
      color: '#FA9FB5',
      emphasis: emphasisStyle,
      data: [282, 234]
    },
    {
      name: 'Verkehr SA',
      type: 'bar',
      stack: 'four',
      color: '#6C567B',
      emphasis: emphasisStyle,
      data: [312, 254]
    },
    {
      name: 'Gebäude SA',
      type: 'bar',
      stack: 'four',
      color: '#A8DADC',
      emphasis: emphasisStyle,
      data: [136, 134]
    },
  ]
}