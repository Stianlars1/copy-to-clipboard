# @stianlarsen/copy-to-clipboard

A robust, easy-to-use utility for copying text to the clipboard with a simple function call. Perfect for developers looking to implement a copy-to-clipboard feature in their web applications with minimal effort.

## Features

- **Secure Clipboard Access**: Utilizes the modern asynchronous Clipboard API with a fallback for older browsers.
- **Optional Callback Function**: Allows the execution of a callback function upon successful copy.
- **Easy to Implement**: A simple function call enables text copying to the clipboard.
- **Fallback for Non-Secure Contexts**: Ensures functionality in non-secure contexts or older browsers by using a textarea based method.

## Installation

Using npm:

```bash
npm install @stianlarsen/copy-to-clipboard
```

Or using yarn:

```bash
yarn add @stianlarsen/copy-to-clipboard
```

## Usage

Import the `copy` function and use it to copy text to the clipboard. You can also provide an optional callback function to execute upon successful copy:

### JSX (React | Vue | Angular etc..)

```jsx
import { copy } from "@stianlarsen/copy-to-clipboard";

const yourCallbackFunction = () => {
  console.log("Text successfully copied to clipboard!");
};

function App() {
  return (
    <button onClick={() => copy("Text to copy", yourCallbackFunction)}>
      Copy to Clipboard
    </button>
  );
}
```

### Usage in Basic JavaScript

```javascript
import { copy } from "@stianlarsen/copy-to-clipboard";

// Example function to call the copy functionality
function copyText() {
  const textToCopy = "Hello, clipboard!";
  copy(textToCopy, () => {
    console.log("Text successfully copied to clipboard!");
  });
}

// Trigger the copy function
copyText();
```

## Browser Compatibility

Designed to work in modern browsers with full support for the asynchronous Clipboard API. Includes a fallback mechanism for older browsers.

## Customization

There's no direct customization required for this utility, but it seamlessly integrates into any web application, allowing for customized button or trigger implementation for the copy action.

## Contributing

Contributions to `@stianlarsen/copy-to-clipboard` are welcome!

## License

`@stianlarsen/copy-to-clipboard` is [MIT licensed](./LICENSE).

## Contact

- GitHub: [@stianlars1](https://github.com/stianlars1)
- Website: [https://stianlarsen.com](https://stianlarsen.com)
- Email: [stian.larsen@mac.com](mailto:stian.larsen@mac.com)
