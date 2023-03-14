import { 
  detailed_overview_option, 
  optionGradient, 
  overview_option,
  overview_generation_option,
  GHG_overview_option, 
  overview_comparison_option,
  strom_overview,
} from "./options";

const overview = echarts.init(document.getElementById("overview"));
const detailed_overview = echarts.init(document.getElementById("detailed_overview"));
const overview_generation = echarts.init(document.getElementById("overview_generation"));
const GHG_overview = echarts.init(document.getElementById("GHG_overview"));
const overview_comparison = echarts.init(document.getElementById("overview_comparison"));
const strom_overview = echarts.init(document.getElementById("strom_overview"));

function resizeChart() {
  setTimeout(function () {
      overview.resize();
      detailed_overview.resize();
      overview_generation.resize ();
      GHG_overview.resize ();
      overview_comparison
  }, 200);
};

overview.setOption(overview_option);
detailed_overview.setOption(detailed_overview_option);
Overview_generation.setOption(overview_generation);
GHG_overview.setOption(GHG_overview);
overview_comparison.setOption(overview_comparison);
strom_overview.setOption(strom_overview);

window.addEventListener("resize", resizeChart);
