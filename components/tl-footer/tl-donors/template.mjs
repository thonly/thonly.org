import { THONLY } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/tl-donors/shadow.css">
    <h5>Donors</h5>
    <ul class="donors">
        <li><a href="https://github.com/panhiathao"><img src="https://github.com/panhiathao.png?size=100"></a></li>
        <li><a href="https://github.com/chengsieuly"><img src="https://github.com/chengsieuly.png?size=100"></a></li>
        <li><a href="https://github.com/lykimche"><img src="https://github.com/lykimche.png?size=100"></a></li>
    </ul>
`;

export default template;