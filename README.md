# Event-Driven Web Components

This repository contains a simple example of an event-driven architecture (EDA) using Web Components. The project comprises two primary components:

- `user-input`: Allows users to enter text and emits a custom event once submitted.
- `display-box`: Displays text received from the `user-input` component.

## Table of Contents

- [Event-Driven Web Components](#event-driven-web-components)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Architecture](#architecture)
    - [Components](#components)
    - [Files](#files)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ASchmidt1024/eda-with-two-web-components.git
   ```

2. Navigate to the project directory:
   ```bash
   cd event-driven-web-components
   ```

3. Open `main.html` in your preferred browser.

## Usage

1. Input text into the `user-input` component's text box.
2. Click the "Submit" button.
3. Observe the text display in the `display-box` component below.

## Architecture

The project utilizes the EDA pattern with web components. When a user submits a message through the `user-input` component, a custom event named `userInputSubmit` is emitted. The `display-box` component listens for this event and updates its content accordingly.

### Components

- `user-input`: Captures and sends user text as an event.
- `display-box`: Listens for the event and displays the received text.

### Files

- `main.html`: Main application entry point.
- `user-input.js`: Contains the logic and structure for the `user-input` component.
- `display-box.js`: Contains the logic and structure for the `display-box` component.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or bug fix.
3. Submit a pull request.

Ensure your changes are well-documented and include appropriate test coverage.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
