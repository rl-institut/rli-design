import { optionGradient, overview_option } from "./options";

const overview = echarts.init(document.getElementById("overview"));

function resizeChart() {
  setTimeout(function () {
      overview.resize();
  }, 200);
};

overview.setOption(overview_option);

window.addEventListener("resize", resizeChart); 
