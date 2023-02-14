import { optionGradient, overview_option } from "./options";

const overview = echarts.init(document.getElementById("overview"));

const option = {
  title: {
    text: "Budget in Tsd. €",
    textStyle: {
      color: "#002C50",
      fontWeight: "normal",
      fontFamily: "Roboto",
      fontSize: 14
    }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  dataset: {
    source: [
      ["Kategorie", "IST", "Forecast", "Abbau Überschüsse, Puffer und Risikobudget in Tsd. €"],
      ["Personal", -12, -25, -65],
      ["Eigenmittel", 72, 95, -65],
    ]
  },
  xAxis: { type: "category" },
  yAxis: {},
  series: [{ type: "bar" }, { type: "bar" }, { "type": "line" }],
  color: [
    "#002C50",
    "#FFE8B3"
  ],
  label: {
    normal: {
      position: "top",
      distance: 10,
      show: true,
      formatter: ["Label Text"].join("\n")
    }
  }
};

function resizeChart() {
  setTimeout(function () {
      overview.resize();
  }, 200);
};

overview.setOption(overview_option);

window.addEventListener("resize", resizeChart); 
