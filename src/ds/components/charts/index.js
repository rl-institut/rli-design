// VARIABLES

const chartVariables = {
  colors: {
    primary: '#002C50',
    grey: '#C3D1DC',
    greenLighter: '#97F0D9',
    green: '#06DFA7',
    greenDarker: '#00BC8C',
    orangeLighter: '#F0D187',
    orange: '#E6A100',
    orangeDarker: '#BE880B'
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontSizeSmall: 12,
    fontWeight: 300,
    fontColor: '#002C50',
    lineHeight: 16
  },
  grid: {
    left: 46,
    right: 0,
    top: 30,
    bottom: 20
  },
  gridsm: {
    left: 46,
    right: 30,
    top: 50,
    bottom: 20
  },
  tooltip: {
    textStyle: {
      color: '#002C50'
    }
  },
  ticks: {
    show: false
  },
  bars: {
    width: 30,
    singleWidth: 40,
    smallWidth: 20
  },
  markLine: {
    width: 1
  }
};

const values = {
  titleStyle: {
    color: chartVariables.colors.primary,
    fontSize: chartVariables.typography.fontSizeSmall,
    fontWeight: chartVariables.typography.fontWeight,
    lineHeight: chartVariables.typography.lineHeight
  },
  axisLabel: {
    fontSize: chartVariables.typography.fontSizeSmall,
    fontWeight: chartVariables.typography.fontWeight
  },
  axisLine: {
    lineStyle: {
      color: chartVariables.colors.primary
    }
  },
  textStyle: {
    color: chartVariables.colors.primary
  },
  tooltip: {
    textStyle: {
      color: chartVariables.colors.primary
    }
  }
}

// CHARTS

var dpSingleBar = echarts.init(document.getElementById('dp-single-bar'));
var dpTwoBars = echarts.init(document.getElementById('dp-two-bars'));
var dpComparisonBars1 = echarts.init(document.getElementById('dp-comparison-bars1'));
var dpComparisonBars2 = echarts.init(document.getElementById('dp-comparison-bars2'));
var dpComparisonBarsPattern1 = echarts.init(document.getElementById('dp-comparison-bars-pattern1'));
var dpComparisonBarsPattern2 = echarts.init(document.getElementById('dp-comparison-bars-pattern2'));

// Bar chart with single column
const optionSingleBar = {
  title: {
    text: 'EinwohnerInnen (Tsd.)',
    textStyle: values.titleStyle
  },
  tooltip: values.tooltip,
  grid: chartVariables.grid,
  textStyle: values.textStyle,
  xAxis: { 
    type: 'category',
    data: [
      '2021'
    ],
    axisLabel: values.axisLabel,
    axisLine: values.axisLine,
    axisTick: {
      show: chartVariables.ticks.show
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: values.axisLabel
  },
  series: [
    { 
      type: 'bar',
      data: [
        943.231
      ],
      color: [
        chartVariables.colors.grey
      ],
      barWidth: chartVariables.bars.singleWidth
    }
  ]
};

// Bar chart with two columns
const optionTwoBars = {
  title: {
    text: 'Stromerzeugung (GWh)',
    textStyle: values.titleStyle
  },
  tooltip: values.tooltip,
  grid: chartVariables.grid,
  textStyle: values.textStyle,
  xAxis: { 
    type: 'category',
    data: [
      '2021', 
      '2035'
    ],
    axisLabel: values.axisLabel,
    axisLine: values.axisLine,
    axisTick: {
      show: chartVariables.ticks.show
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: values.axisLabel
  },
  series: [
    {
      type: 'bar',
      data: [
        45,
        {
          value: 82,
          itemStyle: {
            color: chartVariables.colors.primary
          }
        }
      ],
      color: [
        chartVariables.colors.grey
      ],
      barWidth: chartVariables.bars.width
    }
  ]
};

// 2 bar charts with two columns for comparison
const optionTwoBarsComparison1 = {
  title: {
    text: 'Anteil Erneuerbare \nEnergien (%)',
    textStyle: values.titleStyle
  },
  tooltip: values.tooltip,
  grid: chartVariables.gridsm,
  textStyle: values.textStyle,
  xAxis: { 
    type: 'category',
    data: [
      '2021', 
      '2035'
    ],
    axisLabel: values.axisLabel,
    axisLine: values.axisLine,
    axisTick: {
      show: chartVariables.ticks.show
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: values.axisLabel
  },
  series: [
    {
      type: 'bar',
      data: [
        45,
        {
          value: 82,
          itemStyle: {
            color: chartVariables.colors.green
          }
        }
      ],
      color: [
        chartVariables.colors.grey
      ],
      barWidth: chartVariables.bars.smallWidth,
      markLine: {
        data: [
          { 
            yAxis: 93,
            lineStyle: {
              color: chartVariables.colors.greenDarker,
              width: chartVariables.markLine.width,
              type: 'solid'
            }
          }
        ],
        tooltip: {
          show: false
        },
        symbol:['none', 'none']
      }
    }
  ]
};

const optionTwoBarsComparison2 = {
  title: {
    text: 'CO2-Emissionen (Mt)',
    textStyle: values.titleStyle
  },
  tooltip: values.tooltip,
  grid: chartVariables.gridsm,
  textStyle: values.textStyle,
  xAxis: { 
    type: 'category',
    data: [
      '2021', 
      '2035'
    ],
    axisLabel: values.axisLabel,
    axisLine: values.axisLine,
    axisTick: {
      show: chartVariables.ticks.show
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: values.axisLabel
  },
  series: [
    {
      type: 'bar',
      data: [
        70,
        {
          value: 30,
          itemStyle: {
            color: chartVariables.colors.orange
          },
        }
      ],
      color: [
        chartVariables.colors.grey
      ],
      barWidth: chartVariables.bars.smallWidth,
      markLine: {
        data: [
          { 
            yAxis: 19,
            lineStyle: {
              color: chartVariables.colors.orangeDarker,
              width: chartVariables.markLine.width,
              type: 'solid'
            }
          }
        ],
        tooltip: {
          show: false
        },
        symbol:['none', 'none']
      }
    }
  ]
};

// 2 bar charts with two columns for comparison and patterns
const optionTwoBarsComparisonPattern1 = {
  title: {
    text: 'Anteil Erneuerbare \nEnergien (%)',
    textStyle: values.titleStyle
  },
  tooltip: values.tooltip,
  grid: chartVariables.gridsm,
  textStyle: values.textStyle,
  xAxis: { 
    type: 'category',
    data: [
      '2021', 
      '2035'
    ],
    axisLabel: values.axisLabel,
    axisLine: values.axisLine,
    axisTick: {
      show: chartVariables.ticks.show
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: values.axisLabel
  },
  series: [
    {
      type: 'bar',
      data: [
        45,
        {
          value: 93,
          itemStyle: {
            color: 'rgba(0, 0, 0, 0)',
            decal: {
              show: true,
              symbol: 'rect',
              color: chartVariables.colors.greenLighter,
              dashArrayX: [1, 0],
              dashArrayY: [2, 5],
              symbolSize: 1,
              rotation: Math.PI / 6
            }
          },
        }
      ],
      color: [
        chartVariables.colors.grey
      ],
      barWidth: chartVariables.bars.smallWidth,
      markLine: {
        data: [
          { 
            yAxis: 93,
            lineStyle: {
              color: chartVariables.colors.greenDarker,
              width: chartVariables.markLine.width,
              type: 'solid'
            }
          }
        ],
        tooltip: {
          show: false
        },
        symbol:['none', 'none']
      }
    }
  ]
};

const optionTwoBarsComparisonPattern2 = {
  title: {
    text: 'CO2-Emissionen (Mt)',
    textStyle: values.titleStyle
  },
  tooltip: values.tooltip,
  grid: chartVariables.gridsm,
  textStyle: values.textStyle,
  xAxis: { 
    type: 'category',
    data: [
      '2021', 
      '2035'
    ],
    axisLabel: values.axisLabel,
    axisLine: values.axisLine,
    axisTick: {
      show: chartVariables.ticks.show
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: values.axisLabel
  },
  series: [
    {
      type: 'bar',
      data: [
        70,
        {
          value: 19,
          itemStyle: {
            color: 'rgba(0, 0, 0, 0)',
            decal: {
              show: true,
              symbol: 'rect',
              color: chartVariables.colors.orangeLighter,
              dashArrayX: [1, 0],
              dashArrayY: [2, 5],
              symbolSize: 1,
              rotation: Math.PI / 6
            }
          },
        }
      ],
      color: [
        chartVariables.colors.grey
      ],
      barWidth: chartVariables.bars.smallWidth,
      markLine: {
        data: [
          { 
            yAxis: 19,
            lineStyle: {
              color: chartVariables.colors.orangeDarker,
              width: chartVariables.markLine.width,
              type: 'solid'
            }
          }
        ],
        tooltip: {
          show: false
        },
        symbol:['none', 'none']
      }
    }
  ]
};

dpSingleBar.setOption(optionSingleBar);
dpTwoBars.setOption(optionTwoBars);
dpComparisonBars1.setOption(optionTwoBarsComparison1);
dpComparisonBars2.setOption(optionTwoBarsComparison2);
dpComparisonBarsPattern1.setOption(optionTwoBarsComparisonPattern1);
dpComparisonBarsPattern2.setOption(optionTwoBarsComparisonPattern2);