import {
  detailed_overview_option,
  detailed_overview_grouped_option,
  strom_overview,
  strom_THG,
  verkehr_overview,
  verkehr_thg,
  anteil_ee,
  co2_emissionen,
  waerme_overview_option,
  waerme_dezentral_zentral,
  thg_waterfall_option,
  thg_statisch_option,

} from "./options";

const detailedOverviewElement = echarts.init(document.getElementById("detailed_overview"));
const detailedOverviewGroupedElement = echarts.init(document.getElementById("detailed_overview_grouped"));
const stromOverviewElement = echarts.init(document.getElementById("stromOverview"));
const stromThgElement = echarts.init(document.getElementById("strom_THG"));
const verkehrOverviewElement = echarts.init(document.getElementById("verkehr_overview"));
const verkehrThgElement = echarts.init(document.getElementById("verkehr_thg"));
const anteilEeElement = echarts.init(document.getElementById("anteil_ee"));
const co2EmissionenElement = echarts.init(document.getElementById("co2_emissionen"));
const waermeOverviewElement = echarts.init(document.getElementById("waerme_overview_option"));
const waermeDezentralZentralElement = echarts.init(document.getElementById("waerme_dezentral_zentral"));
const thgWaterfallElement = echarts.init(document.getElementById("thg_waterfall_option"));
const thgStatischElement = echarts.init(document.getElementById("thg_statisch_option"));

function resizeChart() {
  setTimeout(function () {
    detailedOverviewElement.resize();
    detailedOverviewGroupedElement.resize();
    stromOverviewElement.resize();
    stromThgElement.resize();
    verkehrOverviewElement.resize();
    verkehrThgElement.resize();
    anteilEeElement.resize();
    co2EmissionenElement.resize();
    waermeOverviewElement.resize();
    waermeDezentralZentralElement.resize();
    thgWaterfallElement.resize();
    thgStatischElement.resizeChart();
  }, 200);
};

detailedOverviewElement.setOption(detailed_overview_option);
detailedOverviewGroupedElement.setOption(detailed_overview)
stromOverviewElement.setOption(strom_overview);
stromThgElement.setOption(strom_THG);
verkehrOverviewElement.setOption(verkehr_overview);
verkehrThgElement.setOption(verkehr_thg);
anteilEeElement.setOption(anteil_ee);
co2EmissionenElement.setOption(co2_emissionen);
waermeOverviewElement.setOption(waerme_overview_option);
waermeDezentralZentralElement.setOption(waerme_dezentral_zentral);
thgWaterfallElement.setOption(thg_waterfall_option);
thgStatischElement.setOption(thg_statisch_option);

window.addEventListener("resize", resizeChart);
