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
  }
};

var dpSingleBar = echarts.init(document.getElementById('dp-single-bar'));

const optionSingleBar = {
  title: {},
  legend: {},
  tooltip: {
    textStyle: {
      color: chartVariables.typography.fontColor
    }
  },
  grid: {
    left: '30%',
    right: '30%',
    bottom: 20,
    top: 30
  },
  textStyle: {
    color: chartVariables.typography.fontColor,
  },
  dataset: {
    source: [
      ['EinwohnerInnen (Tsd.)'],
      ['2021', 943.231]
    ]
  },
  xAxis: { 
    type: 'category',
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
      color: [
        chartVariables.colors.grey
      ],
      barWidth: 40
    }
  ]
};

dpSingleBar.setOption(optionSingleBar);