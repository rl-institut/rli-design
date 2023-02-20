import { detailed_overview_option, optionGradient, overview_option } from "./options";

const overview = echarts.init(document.getElementById("overview"));
const detailed_overview = echarts.init(document.getElementById("detailed_overview"));

function resizeChart() {
  setTimeout(function () {
      overview.resize();
      detailed_overview.resize();
  }, 200);
};

overview.setOption(overview_option);
overview.setOption(detailed_overview_option);

window.addEventListener("resize", resizeChart); 
