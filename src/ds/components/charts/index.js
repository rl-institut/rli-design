const chartStyles = {
  colors: {
    grey: '#C3D1DC'
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 20
  }
};

var dpSingleBar = echarts.init(document.getElementById('dp-single-bar'));

const option = {
  title: {},
  legend: {},
  tooltip: {},
  grid: {
    left: '30%',
    right: '30%',
    bottom: 20,
    top: 30
  },
  dataset: {
    source: [
      ['EinwohnerInnen (Tsd.)'],
      ['2021', 943.231]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {
    name: 'EinwohnerInnen (Tsd.)',
    nameTextStyle: {
      align: 'left'
    },
    type: 'value',
  },
  series: [
    { 
      type: 'bar',
      color: [
        chartStyles.colors.grey
      ],
      barWidth: 40
    }
  ]
};

dpSingleBar.setOption(option);