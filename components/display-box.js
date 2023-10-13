const displayBoxTemplate = document.createElement('template');
displayBoxTemplate.innerHTML = `
    <style>
        div {
            padding: 10px;
            border: 1px solid #ccc;
            margin-top: 10px;
        }
    </style>
    <div id="displayText"></div>
`;

class DisplayBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(displayBoxTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const userInputComponent = document.querySelector('user-input');
        
        userInputComponent.addEventListener('userInputSubmit', (event) => {
            this.displayText = event.detail;
        });
    }

    set displayText(value) {
        this.shadowRoot.getElementById('displayText').textContent = value;
    }
}

customElements.define('display-box', DisplayBox);
