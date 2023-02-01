import template from './template.mjs';

class TlKiitos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const p = this.shadowRoot.querySelector('p');
        p.style.setProperty('--n', p.innerText.length);
    }
}

customElements.define("tl-kiitos", TlKiitos);