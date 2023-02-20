import { 
  detailed_overview_option, 
  optionGradient, 
  overview_option,
  overview_generation_option,
  GHG_overview_option  
} from "./options";

const overview = echarts.init(document.getElementById("overview"));
const detailed_overview = echarts.init(document.getElementById("detailed_overview"));
const overview_generation = echarts.init(document.getElementById("overview_generation"));
const GHG_overview = echarts.init(document.getElementById("GHG_overview"));

function resizeChart() {
  setTimeout(function () {
      overview.resize();
      detailed_overview.resize();
      overview_generation.resize ();
      GHG_overview.resize ();
  }, 200);
};

overview.setOption(overview_option);
detailed_overview.setOption(detailed_overview_option);
overview_generation.setOption(overview_generation);
GHG_overview.setOption(GHG_overview);

window.addEventListener("resize", resizeChart); 
