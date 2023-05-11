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
  export const 
  /*let xAxisData = [];
  for (let i = 0; i < 1; i++) 
    {xAxisData.push('Status Quo', 'Mein Szenario', 'Ziel Szenario')}
  var emphasisStyle = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)'
      }
   };*/
  waerme_dezentral_option = { legend: {
        data: ['Kohleofen', 'Holzofen', 'Gasheizkessel', 'Solarthermiekollektor', 'Wärmepumpe', 'Thermische Energiespeicher', 'GHD', 'Haushalt', 'Industrie', 'Sonstiges'],
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
            barWidth: '35',
          stack: 'five',
          color: '#604F4F',
          emphasis: emphasisStyle,
          data: [132, 334, 700 ]
        },
        {
          name: 'Holzofen',
          type: 'bar',
          stack: 'five',
          color: '#610B0B',
          emphasis: emphasisStyle,
          data: [102,234, 280]
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
           barWidth: '35',
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
export const 
/*wärme zentral plus sektoren
let xAxisData = [];
for (let i = 0; i < 1; i++) 
  {xAxisData.push('Status Quo', 'Mein Szenario', 'Ziel Szenario')}
var emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
 };*/
waerme_zentral_option = { legend: {
      data: ['Große Gasheizkessel', 'Große Wärmepumpen', 'Power to Heat','Große Solarthermiekollektor', 'GHD', 'Haushalt', 'Industrie', 'Sonstiges'],
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
        name: 'Große Gasheizkessel',
        type: 'bar',
          barWidth: 35,
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
        name: 'Power-to-Heat',
        type: 'bar',
        stack: 'five',
        color: '#D7DF01',
        emphasis: emphasisStyle,
        data: [136, 134, 130]
      }, 
      {
        name: 'Große Solarthermiekollektor',
        type: 'bar',
        stack: 'five',
        color: '#FFD660',
        emphasis: emphasisStyle,
        data: [312, 254, 100]
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
         barWidth: '35',
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