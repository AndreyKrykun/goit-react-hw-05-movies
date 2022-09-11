import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
  list-style: none;
}
h1, h2, h3, h4, h5, h6, p, ul {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
button {
cursor: pointer;
}
a {
    text-decoration: none;
}
img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    display: block;
}
`;