// Shared Vega / Vega-Lite configuration so every chart uses the same
// typography, colours and quiet axes. Passed to vegaEmbed in main.js.
const FROG_THEME = {
  background: null,
  font: "'Source Sans 3', Helvetica, Arial, sans-serif",
  padding: 8,
  view: { stroke: null },
  title: {
    font: "Fraunces, Georgia, serif",
    fontSize: 17,
    fontWeight: 600,
    color: "#1e2b23",
    anchor: "start",
    subtitleFont: "'Source Sans 3', Helvetica, Arial, sans-serif",
    subtitleFontSize: 13,
    subtitleColor: "#5c6b61",
    subtitlePadding: 4,
    offset: 14
  },
  axis: {
    labelFont: "'Source Sans 3', Helvetica, Arial, sans-serif",
    labelFontSize: 12,
    labelColor: "#5c6b61",
    titleFont: "'Source Sans 3', Helvetica, Arial, sans-serif",
    titleFontSize: 12,
    titleFontWeight: 600,
    titleColor: "#3d4a41",
    domainColor: "#c9c5b5",
    tickColor: "#c9c5b5",
    gridColor: "#e7e3d6",
    gridDash: [2, 3]
  },
  legend: {
    labelFont: "'Source Sans 3', Helvetica, Arial, sans-serif",
    labelFontSize: 12,
    labelColor: "#3d4a41",
    titleFont: "'Source Sans 3', Helvetica, Arial, sans-serif",
    titleFontSize: 12,
    titleFontWeight: 600,
    titleColor: "#3d4a41",
    symbolType: "square"
  },
  text: { font: "'Source Sans 3', Helvetica, Arial, sans-serif", color: "#3d4a41" }
};
