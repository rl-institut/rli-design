import { 
  detailed_overview_option, 
  optionGradient, 
  overview_option,
  overview_generation_option,
  GHG_overview_option, 
  overview_comparison_option,
  strom_overview,
  strom_THG,
  verkehr_overview,
  verkehr_thg,
  anteil_ee,
  co2_emissionen,
} from "./options";

const overview = echarts.init(document.getElementById("overview"));
const detailed_overview = echarts.init(document.getElementById("detailed_overview"));
const overview_generation = echarts.init(document.getElementById("overview_generation"));
const GHG_overview = echarts.init(document.getElementById("GHG_overview"));
const overview_comparison = echarts.init(document.getElementById("overview_comparison"));
const strom_overview = echarts.init(document.getElementById("strom_overview"));
const strom_THG = echarts.init(document.getElementById("strom_THG"));
const verkehr_overview = echarts.init(document.getElementById("verkehr_overview"));
const verkehr_thg = echarts.init(document.getElementById("verkehr_thg"));
const anteil_ee = echarts.init(document.getElementById("anteil_ee"));
const co2_emissionen = echarts.init(document.getElementById("co2_emissionen"));

function resizeChart() {
  setTimeout(function () {
      overview.resize();
      detailed_overview.resize();
      overview_generation.resize();
      GHG_overview.resize();
      overview_comparison.resize(); 
      strom_overview.resize();
      strom_THG.resize();
      verkehr_overview.resize();
      verkehr_thg.resize();
      anteil_ee.resize();
      co2_emissionen.resize(),
  }, 200);
};

overview.setOption(overview_option);
detailed_overview.setOption(detailed_overview_option);
Overview_generation.setOption(overview_generation);
GHG_overview.setOption(GHG_overview);
overview_comparison.setOption(overview_comparison);
strom_overview.setOption(strom_overview);
strom_THG.setOption(strom_THG);
verkehr_overview.setOption(verkehr_overview);
verkehr_thg.setOption(verkehr_thg);
anteil_ee.setOption(anteil_ee);
co2_emissionen.setOption(co2_emissionen);

window.addEventListener("resize", resizeChart);
