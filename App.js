import React from "react";
import ReactDOM  from "react-dom/client";
<div id="parent">
<div id="child">
    <h1></h1>
</div>
</div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "heading" }, "I'm an h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "heading" }, "I'm an h1 in child2")
  ),
]);

const heading = React.createElement('h1',{id:"heading"},"Welcome to react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
