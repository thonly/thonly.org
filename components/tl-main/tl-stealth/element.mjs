import kiitos from "./kiitos.mjs";
import template from './template.mjs';

class TlStealth extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(page) {
        this.shadowRoot.querySelectorAll('header, main, footer').forEach(element => element.style.display = 'none');
        if (page) {
            this.shadowRoot.querySelector('tl-kiitos').render(kiitos[page]);
            this.shadowRoot.querySelector('main').style.display = 'block';
        } else {
            const a = this.shadowRoot.querySelector('a');
            a.href = "https://twitter.com/thonly";
            a.firstElementChild.innerHTML = "<b>Follow</b> for real-time updates!";
            this.shadowRoot.querySelector('header').style.display = 'block';
            this.shadowRoot.querySelector('footer').style.display = 'block';
        }
        this.style.display = 'block';
    }
}

customElements.define("tl-stealth", TlStealth);