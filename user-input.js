const userInputTemplate = document.createElement('template');
userInputTemplate.innerHTML = `
    <style>
        input[type="text"] {
            padding: 5px;
            margin: 5px 0;
        }
        button {
            padding: 5px 10px;
        }
    </style>
    <input type="text" id="userInput">
    <button id="submitButton">Submit</button>
`;

class UserInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(userInputTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.getElementById('submitButton').addEventListener('click', () => {
            const inputValue = this.shadowRoot.getElementById('userInput').value;
            this.dispatchEvent(new CustomEvent('userInputSubmit', { detail: inputValue }));
        });
    }
}

customElements.define('user-input', UserInput);
