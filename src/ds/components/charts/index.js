// VARIABLES

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
    singleWidth: 40
  }
};

const values = {
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

// Bar chart with single column
const optionSingleBar = {
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
    axisLabel: values.axisLabel,
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

// Bar chart with two columns
const optionTwoBars = {
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
    axisLabel: values.axisLabel,
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
      barWidth: chartVariables.bars.width
    }
  ]
};

dpSingleBar.setOption(optionSingleBar);
dpTwoBars.setOption(optionTwoBars);