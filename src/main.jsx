var React = require("react");
var ReactDOM = require("react-dom");
var ListManager = require("./components/ListManager.jsx");

ReactDOM.render(<ListManager title = "TODO" />, document.getElementById("TODO"));
ReactDOM.render(<ListManager title = "Homework" />, document.getElementById("Homework"));
ReactDOM.render(<ListManager title = "Chores" headingColor = "#3C8D0D" headingFont = "#F21313" />, document.getElementById("Chores"));
