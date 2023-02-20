import { detailed_overview_option, optionGradient, overview_option } from "./options";

const overview = echarts.init(document.getElementById("overview"));
const detailed_overview = echarts.init(document.getElementById("detailed_overview"));
const overview_generation = echarts.init(document.getElementById("overview_generation"));

function resizeChart() {
  setTimeout(function () {
      overview.resize();
      detailed_overview.resize();
      overview_generation.resize ();
  }, 200);
};

overview.setOption(overview_option);
detailed_overview.setOption(detailed_overview_option);
overview_generation.setOption(overview_generation);

window.addEventListener("resize", resizeChart); 
