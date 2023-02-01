import kiitos from "./kiitos.mjs";
import template from './template.mjs';

class TlMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.#render());
    }

    connectedCallback() {
        this.#render();
        setTimeout(() => document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" }), 300);
    }

    #render() {
        const page = window.location.hash.substring(1);
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

customElements.define("tl-main", TlMain);