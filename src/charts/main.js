import {
  detailed_overview_option,
  detailed_overview_grouped_option,
  //optionGradient,
  //overview_option,
  //overview_generation_option,
  GHG_overview_option,
  //overview_comparison_option,
  strom_overview,
  strom_THG,
  verkehr_overview,
  verkehr_thg,
  anteil_ee,
  co2_emissionen,
  waerme_overview_option,
  waerme_dezentral_zentral,
  thg_new_waterfall_option,
} from "./options";

//const overviewElement = echarts.init(document.getElementById("overview"));
const detailedOverviewElement = echarts.init(document.getElementById("detailed_overview"));
const detailedOverviewGroupedElement = echarts.init(document.getElementById("detailed_overview_grouped"));
//const overviewGenerationElement = echarts.init(document.getElementById("overview_generation"));
//const ghgOverviewElement = echarts.init(document.getElementById("GHGOverview"));
const overviewComparisonElement = echarts.init(document.getElementById("overview_comparison"));
//const stromOverviewElement = echarts.init(document.getElementById("stromOverview"));
const stromThgElement = echarts.init(document.getElementById("strom_THG"));
const verkehrOverviewElement = echarts.init(document.getElementById("verkehr_overview"));
const verkehrThgElement = echarts.init(document.getElementById("verkehr_thg"));
const anteilEeElement = echarts.init(document.getElementById("anteil_ee"));
const co2EmissionenElement = echarts.init(document.getElementById("co2_emissionen"));
const waermeOverviewElement = echarts.init(document.getElementById("waerme_overview_option"));
const waermeDezentralZentralElement = echarts.init(document.getElementById("waerme_dezentral_zentral"));
const thgNewWaterfallElement =  echarts.init(document.getElementById("thg_new_waterfall"))

function resizeChart() {
  setTimeout(function () {
    //overviewElement.resize();
    detailedOverviewElement.resize();
    detailedOverviewGroupedElement.resize();
    //overviewGenerationElement.resize();
    //ghgOverviewElement.resize();
    overviewComparisonElement.resize();
    //stromOverviewElement.resize();
    stromThgElement.resize();
    verkehrOverviewElement.resize();
    verkehrThgElement.resize();
    anteilEeElement.resize();
    co2EmissionenElement.resize();
    waermeOverviewElement.resize();
    waermeDezentralZentralElement.resize();
    thgNewWaterfallElement.resize();
  }, 200);
};

//overviewElement.setOption(overview_option);
detailedOverviewElement.setOption(detailed_overview_option);
detailedOverviewGroupedElement.setOption(detailed_overview)
//overviewGenerationElement.setOption(overview_generation);
//ghgOverviewElement.setOption(GHG_overview);
overviewComparisonElement.setOption(overview_comparison);
//stromOverviewElement.setOption(strom_overview);
stromThgElement.setOption(strom_THG);
verkehrOverviewElement.setOption(verkehr_overview);
verkehrThgElement.setOption(verkehr_thg);
anteilEeElement.setOption(anteil_ee);
co2EmissionenElement.setOption(co2_emissionen);
waermeOverviewElement.setOption(waerme_overview_option);
waermeDezentralZentralElement.setOption(waerme_dezentral_zentral);
thgNewWaterfallElement.setOption(thg_new_waterfall_option)

window.addEventListener("resize", resizeChart);
