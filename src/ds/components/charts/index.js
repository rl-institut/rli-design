const chartVariables = {
  colors: {
    primary: '#002C50',
    grey: '#C3D1DC'
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontSizeSmall: 12,
    fontWeight: 300,
    fontColor: '#002C50',
    lineHeight: 20
  },
  grid: {
    left: 46,
    right: 0,
    top: 30,
    bottom: 20
  },
  bars: {
    width: 30,
    singleWidth: 40
  }
};

var dpSingleBar = echarts.init(document.getElementById('dp-single-bar'));
var dpTwoBars = echarts.init(document.getElementById('dp-two-bars'));

const optionSingleBar = {
  tooltip: {
    textStyle: {
      color: chartVariables.typography.fontColor
    }
  },
  grid: {
    left: chartVariables.grid.left,
    right: chartVariables.grid.right,
    bottom: chartVariables.grid.bottom,
    top: chartVariables.grid.top
  },
  textStyle: {
    color: chartVariables.typography.fontColor,
  },
  xAxis: { 
    type: 'category',
    data: [
      '2021'
    ],
    axisLabel: {
      fontSize: chartVariables.typography.fontSizeSmall,
      fontWeight: chartVariables.typography.fontWeight
    },
    axisLine: {
      lineStyle: {
        color: chartVariables.colors.primary
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: chartVariables.typography.fontSizeSmall,
      fontWeight: chartVariables.typography.fontWeight
    },
    name: 'EinwohnerInnen (Tsd.)',
    nameTextStyle: {
      align: 'left',
      fontSize: chartVariables.typography.fontSize,
      fontWeight: chartVariables.typography.fontWeight
    }
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

const optionTwoBars = {
  tooltip: {
    textStyle: {
      color: chartVariables.typography.fontColor
    }
  },
  grid: {
    left: chartVariables.grid.left,
    right: chartVariables.grid.right,
    bottom: chartVariables.grid.bottom,
    top: chartVariables.grid.top
  },
  textStyle: {
    color: chartVariables.typography.fontColor,
  },
  xAxis: { 
    type: 'category',
    data: [
      '2021', 
      '2035'
    ],
    axisLabel: {
      fontSize: chartVariables.typography.fontSizeSmall,
      fontWeight: chartVariables.typography.fontWeight
    },
    axisLine: {
      lineStyle: {
        color: chartVariables.colors.primary
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: chartVariables.typography.fontSizeSmall,
      fontWeight: chartVariables.typography.fontWeight
    },
    name: 'Stromerzeugung (GWh)',
    nameTextStyle: {
      align: 'left',
      fontSize: chartVariables.typography.fontSize,
      fontWeight: chartVariables.typography.fontWeight
    }
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
      barWidth: chartVariables.bars.singleWidth
    }
  ]
};

dpSingleBar.setOption(optionSingleBar);
dpTwoBars.setOption(optionTwoBars);