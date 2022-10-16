import template from './template.mjs';

class SwMain extends HTMLElement {
    #hash = (() => {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).split("-");
            return hash.length === 2 ? ["SW-" + hash[1].toLocaleUpperCase(), hash[0].toLowerCase()] : ["SW-" + hash[0].toLocaleUpperCase()];
        } return ["SW-CURRICULUM", null];
    })();

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => window.location.reload());
    }

    connectedCallback() {
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash[0]).render(this.#hash[1]);
    }

    render(component, course) {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = "none");
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === "SW-" + component.toUpperCase()).render(course);
    }
}

customElements.define("sw-main", SwMain);