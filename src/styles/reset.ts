import { css } from '@emotion/react';

const reset = css`
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  body {
    line-height: 1.5;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

export default reset;
