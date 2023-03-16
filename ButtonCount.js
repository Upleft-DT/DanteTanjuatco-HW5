class ButtonCount extends HTMLElement {
    constructor () {
        super();

        //shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' });

        //HTML Template 
        const template = document.createElement('template');
        template.innerHTML = `
            <button><p>Times Clicked </p><slot>0</slot></button>
        `;
        
        this.count = 0;

        //Attach Template to Shadow
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector("button").onclick = () => {
            this.count = ++this.count;
            this.shadowRoot.querySelector("slot").innerHTML = this.count;
        };
    }
}

customElements.define('button-count', ButtonCount);