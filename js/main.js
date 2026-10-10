// Embed every chart. Each entry: [container div id, Vega/Vega-Lite spec file].
// Specs live in js/ as human-readable JSON (one file per chart).
const charts = [
  ["#vis_treemap",    "js/1_treemap.vg.json"],
  ["#vis_trend",      "js/2_decline_trend.vl.json"],
  ["#vis_choropleth", "js/3_threatened_choropleth.vl.json"],
  ["#vis_waffle",     "js/4_status_waffle.vl.json"],
  ["#vis_diverging",  "js/5_decline_recovery_bars.vl.json"],
  ["#vis_sitemap",    "js/6_monitoring_map.vl.json"],
  ["#vis_timeline",   "js/7_monitoring_timeline.vl.json"],
  ["#vis_radial",     "js/8_breeding_radial.vl.json"],
  ["#vis_ridgeline",  "js/9_breeding_ridgeline.vl.json"],
  ["#vis_seasonmaps", "js/10_seasonal_maps.vl.json"],
  ["#vis_toadmap",    "js/11_cane_toad_map.vl.json"]
];

const embedOptions = {
  actions: false,          // hide the "..." menu
  renderer: "svg",
  config: FROG_THEME
};

charts.forEach(([el, spec]) => {
  vegaEmbed(el, spec, embedOptions)
    .then(() => document.querySelector(el).classList.remove("placeholder"))
    .catch(console.error);
});
