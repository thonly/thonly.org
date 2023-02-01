import template from './template.mjs';

class TlKiitos extends HTMLElement {
    #kiitos;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.getElementById('reset').onclick = event => this.render(this.#kiitos);
        this.shadowRoot.getElementById('power').onclick = event => document.location.hash = "";
    }

    render(kiitos) {
        this.#kiitos = kiitos;

        const a = this.shadowRoot.getElementById('action');
        a.href = kiitos.href;
        a.firstElementChild.innerHTML = kiitos.button;
        a.style.display = kiitos.button ? "block" : "none";

        const p = document.createElement('p');
        p.innerHTML = kiitos.chat;
        p.style.setProperty('--n', p.innerText.length);
        this.shadowRoot.getElementById('text').replaceChildren(p);
    }
}

customElements.define("tl-kiitos", TlKiitos);