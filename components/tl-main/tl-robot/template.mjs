import { THONLY } from "/global.mjs";
const template = document.createElement("template");

// Reference: https://codepen.io/tuckermassad/pen/yLNOPrO?editors=0100

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-main/tl-robot/shadow.css">
    <div class="container">
    <div id="chatbot">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <!--<div id="chatbot-corner"></div>-->
    <div id="antenna">
      <div id="beam"></div>
      <div id="beam-pulsar"></div>
    </div>
  </div>
`;

export default template;